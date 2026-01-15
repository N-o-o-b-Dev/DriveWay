import { createContext, useContext, useState, useEffect } from 'react'
import { database } from '../lib/firebase'
import { ref, onValue, push, update, remove, query, limitToLast } from 'firebase/database'
import { generateUniqueId } from '../lib/utils'
import { useAuth } from './AuthContext'

const DrivewayContext = createContext()

export function DrivewayProvider({ children }) {
    const { currentUser } = useAuth()
    const [cars, setCars] = useState([])
    const [customers, setCustomers] = useState([])
    const [dealers, setDealers] = useState([])
    const [transactions, setTransactions] = useState([])
    const [maintenanceRecords, setMaintenanceRecords] = useState([])
    const [registers, setRegisters] = useState([])
    const [dealerTransactions, setDealerTransactions] = useState([])
    const [manualCustomerTransactions, setManualCustomerTransactions] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    // Helper to convert Firebase object to array
    const snapshotToArray = (snapshot) => {
        const data = snapshot.val()
        if (!data) return []
        return Object.entries(data).map(([id, value]) => ({ ...value, id }))
    }

    // Subscribe to Data
    useEffect(() => {
        if (!currentUser) {
            setCars([])
            setCustomers([])
            setDealers([])
            setTransactions([])
            setMaintenanceRecords([])
            setRegisters([])
            setIsLoading(false)
            return
        }

        setIsLoading(true)

        // Basic Refs (Entities - keep full list for lookups)
        const carsRef = ref(database, 'cars')
        const customersRef = ref(database, 'customers')
        const dealersRef = ref(database, 'dealers')

        // Heavy Data - Limit to last 100 to save bandwidth
        const transactionsRef = query(ref(database, 'transactions'), limitToLast(100))
        const maintenanceRef = query(ref(database, 'maintenanceRecords'), limitToLast(100))
        const registersRef = query(ref(database, 'registers'), limitToLast(100))
        const dealerTransactionsRef = query(ref(database, 'dealerTransactions'), limitToLast(100))
        const manualCustomerTransactionsRef = query(ref(database, 'manualCustomerTransactions'), limitToLast(100))

        // We use a counter to track initial loads to turn off the global loading spinner
        let loadedCount = 0
        const checkLoaded = () => {
            loadedCount++
            if (loadedCount >= 6) {
                setIsLoading(false)
            }
        }

        const unsubCars = onValue(carsRef, (snapshot) => {
            setCars(snapshotToArray(snapshot))
            checkLoaded()
        })
        const unsubCustomers = onValue(customersRef, (snapshot) => {
            setCustomers(snapshotToArray(snapshot))
            checkLoaded()
        })
        const unsubDealers = onValue(dealersRef, (snapshot) => {
            setDealers(snapshotToArray(snapshot))
            checkLoaded()
        })
        const unsubTransactions = onValue(transactionsRef, (snapshot) => {
            setTransactions(snapshotToArray(snapshot))
            checkLoaded()
        })
        const unsubMaintenance = onValue(maintenanceRef, (snapshot) => {
            setMaintenanceRecords(snapshotToArray(snapshot))
            checkLoaded()
        })
        const unsubRegisters = onValue(registersRef, (snapshot) => {
            setRegisters(snapshotToArray(snapshot))
            checkLoaded()
        })
        const unsubDealerTransactions = onValue(dealerTransactionsRef, (snapshot) => {
            setDealerTransactions(snapshotToArray(snapshot))
        })
        const unsubManualCustomerTransactions = onValue(manualCustomerTransactionsRef, (snapshot) => {
            setManualCustomerTransactions(snapshotToArray(snapshot))
        })

        return () => {
            unsubCars()
            unsubCustomers()
            unsubDealers()
            unsubTransactions()
            unsubMaintenance()
            unsubRegisters()
            unsubDealerTransactions()
            unsubManualCustomerTransactions()
        }
    }, [currentUser])

    const addCar = (car) => {
        return push(ref(database, 'cars'), car)
    }

    const addCustomer = (customer) => {
        if (customers.some(c => c.phone === customer.phone)) {
            throw new Error(`Customer with phone ${customer.phone} already exists!`)
        }
        const newCustomer = {
            ...customer,
            uniqueId: generateUniqueId('CUST'),
            createdAt: new Date().toISOString(),
            status: 'Active' // Default status
        }
        return push(ref(database, 'customers'), newCustomer)
    }

    const addDealer = (dealer) => {
        if (dealers.some(d => d.phone === dealer.phone)) {
            throw new Error(`Dealer with phone ${dealer.phone} already exists!`)
        }
        const newDealer = {
            ...dealer,
            uniqueId: generateUniqueId('DLR')
        }
        return push(ref(database, 'dealers'), newDealer)
    }

    const addRegister = (entry) => {
        return push(ref(database, 'registers'), {
            ...entry,
            createdAt: new Date().toISOString()
        })
    }

    const addTransaction = (transaction) => {
        const promise = push(ref(database, 'transactions'), transaction)

        // Auto-add Exit entry only if the rental has already started or starts now
        const startDate = new Date(transaction.startDate)
        const now = new Date()

        if (now >= startDate) {
            addRegister({
                carId: transaction.carId,
                customerId: transaction.customerId, // Using customerId field for generic 'Name' ref
                date: transaction.startDate,
                type: 'Exit',
                notes: 'Auto-generated from Rental'
            })
        }
        return promise
    }

    const updateCar = (id, updatedCar) => {
        return update(ref(database, `cars/${id}`), updatedCar)
    }

    const deleteCar = (id) => {
        return remove(ref(database, `cars/${id}`))
    }

    const updateCustomer = (id, updatedCustomer) => {
        return update(ref(database, `customers/${id}`), updatedCustomer)
    }

    const deleteCustomer = (id) => {
        return remove(ref(database, `customers/${id}`))
    }

    const updateDealer = (id, updatedDealer) => {
        return update(ref(database, `dealers/${id}`), updatedDealer)
    }

    const deleteDealer = (id) => {
        return remove(ref(database, `dealers/${id}`))
    }

    const updateTransaction = (id, updatedTransaction) => {
        const promise = update(ref(database, `transactions/${id}`), updatedTransaction)

        // If Status is Cancelled or Reserved, remove the 'Exit' entry to free up the car
        if (updatedTransaction.status === 'Cancelled' || updatedTransaction.status === 'Reserved') {
            // Find the latest 'Exit' entry for this car in the register
            const carExits = registers
                .filter(r => r.carId === updatedTransaction.carId && r.type === 'Exit')
                .sort((a, b) => new Date(b.date) - new Date(a.date)) // Newest first

            // Remove the most recent exit if found
            // Note: Ideally we should link register ID to transaction ID, but for now we assume the latest Exit is the one.
            if (carExits.length > 0) {
                const lastExit = carExits[0]
                remove(ref(database, `registers/${lastExit.id}`))
            }
        }
        return promise
    }

    const deleteTransaction = async (id) => {
        // Find the transaction to get the carId
        const transactionToDelete = transactions.find(t => t.id === id)

        if (transactionToDelete) {
            // Find the latest 'Exit' entry for this car in the register
            const carExits = registers
                .filter(r => r.carId === transactionToDelete.carId && r.type === 'Exit')
                .sort((a, b) => new Date(b.date) - new Date(a.date)) // Newest first

            // Remove the most recent exit if found
            if (carExits.length > 0) {
                const lastExit = carExits[0]
                await remove(ref(database, `registers/${lastExit.id}`))
            }
        }

        return remove(ref(database, `transactions/${id}`))
    }

    const addMaintenanceRecord = (record) => {
        const promise = push(ref(database, 'maintenanceRecords'), record)
        // Update car status to Maintenance
        update(ref(database, `cars/${record.carId}`), { status: 'Maintenance' })
        return promise
    }

    const updateMaintenanceRecord = (id, updatedRecord) => {
        const promise = update(ref(database, `maintenanceRecords/${id}`), updatedRecord)

        // If return date is set, update car status to Available
        if (updatedRecord.returnDate) {
            update(ref(database, `cars/${updatedRecord.carId}`), { status: 'Available' })
        }
        return promise
    }

    const deleteMaintenanceRecord = (id) => {
        return remove(ref(database, `maintenanceRecords/${id}`))
    }

    const deleteWorkshop = (workshopName) => {
        // Find all records with this workshop name
        const recordsToDelete = maintenanceRecords.filter(r => r.workshopName === workshopName)
        const promises = recordsToDelete.map(r => {
            return remove(ref(database, `maintenanceRecords/${r.id}`))
        })
        return Promise.all(promises)
    }

    const renameWorkshop = (oldName, newName, newDetails, newPhone) => {
        const recordsToUpdate = maintenanceRecords.filter(r => r.workshopName === oldName)
        const promises = recordsToUpdate.map(r => {
            return update(ref(database, `maintenanceRecords/${r.id}`), {
                ...r,
                workshopName: newName,
                workshopDetails: newDetails || r.workshopDetails,
                phoneNumber: newPhone || r.phoneNumber
            })
        })
        return Promise.all(promises)
    }

    const addDealerTransaction = (transaction) => {
        return push(ref(database, 'dealerTransactions'), {
            ...transaction,
            createdAt: new Date().toISOString()
        })
    }

    const addCustomerTransaction = (transaction) => {
        return push(ref(database, 'manualCustomerTransactions'), {
            ...transaction,
            createdAt: new Date().toISOString()
        })
    }

    const deleteCustomerTransaction = (id) => {
        return remove(ref(database, `manualCustomerTransactions/${id}`))
    }

    // Computed Cars with Dynamic Status
    const derivedCars = cars.map(car => {
        let status = car.status // key fallback

        // If DB says "On Rent" or "Maintenance", we consider it "Available" tentatively,
        // and let the active records below prove otherwise. This auto-expires old statuses.
        if (status === 'On Rent' || status === 'On Maintenance' || status === 'Maintenance') {
            status = 'Available'
        }

        const now = new Date()

        // Check Maintenance
        const isOnMaintenance = maintenanceRecords.some(r => {
            if (r.carId !== car.id) return false
            const start = new Date(r.date)
            // Strict timestamp comparison

            if (r.returnDate) {
                const end = new Date(r.returnDate)
                return now >= start && now <= end
            }
            return now >= start // Active if started and no return date confirmed
        })

        if (isOnMaintenance) {
            status = 'On Maintenance'
        }

        // Check Rental (Overrides Maintenance if concurrent, assuming active use)
        const isOnRent = transactions.some(t => {
            if (t.carId !== car.id || t.status === 'Cancelled' || t.status === 'Completed') return false
            const now = new Date()
            const start = new Date(t.startDate)

            // If no endDate, it's an open rental -> active if started
            if (!t.endDate) {
                return now >= start
            }

            const end = new Date(t.endDate)
            // Strict time comparison
            return now >= start && now <= end
        })

        if (isOnRent) {
            status = 'On Rent'
        }

        // Check Register (Manual or Auto Exit)
        // If not already Rented or Maintenance, check if last register entry was 'Exit'
        if (status !== 'On Rent' && status !== 'On Maintenance' && status !== 'Maintenance') {
            const carRegisters = registers
                .filter(r => r.carId === car.id)
                .sort((a, b) => new Date(b.date) - new Date(a.date))

            if (carRegisters.length > 0) {
                if (carRegisters[0].type === 'Exit') {
                    status = 'Not Available'
                } else if (carRegisters[0].type === 'Entry') {
                    status = 'Available'
                }
            }
        }

        return { ...car, status }
    })

    return (
        <DrivewayContext.Provider value={{
            cars: derivedCars,
            customers,
            transactions,
            dealers,
            addCar,
            updateCar,
            deleteCar,
            addCustomer,
            updateCustomer,
            deleteCustomer,
            addDealer,
            updateDealer,
            deleteDealer,
            addTransaction,
            updateTransaction,
            deleteTransaction,
            maintenanceRecords,
            addMaintenanceRecord,
            updateMaintenanceRecord,
            deleteMaintenanceRecord,
            registers,
            addRegister,
            deleteRegister: (id) => remove(ref(database, `registers/${id}`)),
            deleteWorkshop,
            renameWorkshop,
            dealerTransactions,
            addDealerTransaction,
            manualCustomerTransactions,
            addCustomerTransaction,
            deleteCustomerTransaction,
            isLoading,
        }}>
            {children}
        </DrivewayContext.Provider>
    )
}

export function useDriveway() {
    const context = useContext(DrivewayContext)
    if (!context) {
        throw new Error('useDriveway must be used within a DrivewayProvider')
    }
    return context
}
