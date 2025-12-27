import { createContext, useContext, useState, useEffect } from 'react'
import { database } from '../lib/firebase'
import { ref, onValue, push, update, remove } from 'firebase/database'
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
    const [isLoading, setIsLoading] = useState(true)

    // Helper to convert Firebase object to array
    const snapshotToArray = (snapshot) => {
        const data = snapshot.val()
        if (!data) return []
        return Object.entries(data).map(([id, value]) => ({ id, ...value }))
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

        const carsRef = ref(database, 'cars')
        const customersRef = ref(database, 'customers')
        const dealersRef = ref(database, 'dealers')
        const transactionsRef = ref(database, 'transactions')
        const maintenanceRef = ref(database, 'maintenanceRecords')
        const registersRef = ref(database, 'registers')

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

        return () => {
            unsubCars()
            unsubCustomers()
            unsubDealers()
            unsubTransactions()
            unsubMaintenance()
            unsubRegisters()
        }
    }, [currentUser])

    const addCar = (car) => {
        push(ref(database, 'cars'), car)
    }

    const addCustomer = (customer) => {
        if (customers.some(c => c.phone === customer.phone)) {
            throw new Error(`Customer with phone ${customer.phone} already exists!`)
        }
        const newCustomer = {
            ...customer,
            uniqueId: generateUniqueId('CUST')
        }
        push(ref(database, 'customers'), newCustomer)
    }

    const addDealer = (dealer) => {
        if (dealers.some(d => d.phone === dealer.phone)) {
            throw new Error(`Dealer with phone ${dealer.phone} already exists!`)
        }
        const newDealer = {
            ...dealer,
            uniqueId: generateUniqueId('DLR')
        }
        push(ref(database, 'dealers'), newDealer)
    }

    const addRegister = (entry) => {
        push(ref(database, 'registers'), {
            ...entry,
            createdAt: new Date().toISOString()
        })
    }

    const addTransaction = (transaction) => {
        push(ref(database, 'transactions'), transaction)

        // Auto-add Exit entry
        addRegister({
            carId: transaction.carId,
            customerId: transaction.customerId, // Using customerId field for generic 'Name' ref
            date: new Date().toISOString(),
            type: 'Exit',
            notes: 'Auto-generated from Rental'
        })
    }

    const updateCar = (id, updatedCar) => {
        update(ref(database, `cars/${id}`), updatedCar)
    }

    const deleteCar = (id) => {
        remove(ref(database, `cars/${id}`))
    }

    const updateCustomer = (id, updatedCustomer) => {
        update(ref(database, `customers/${id}`), updatedCustomer)
    }

    const deleteCustomer = (id) => {
        remove(ref(database, `customers/${id}`))
    }

    const updateDealer = (id, updatedDealer) => {
        update(ref(database, `dealers/${id}`), updatedDealer)
    }

    const deleteDealer = (id) => {
        remove(ref(database, `dealers/${id}`))
    }

    const updateTransaction = (id, updatedTransaction) => {
        update(ref(database, `transactions/${id}`), updatedTransaction)
    }

    const deleteTransaction = (id) => {
        remove(ref(database, `transactions/${id}`))
    }

    const addMaintenanceRecord = (record) => {
        push(ref(database, 'maintenanceRecords'), record)
        // Update car status to Maintenance
        update(ref(database, `cars/${record.carId}`), { status: 'Maintenance' })
    }

    const updateMaintenanceRecord = (id, updatedRecord) => {
        update(ref(database, `maintenanceRecords/${id}`), updatedRecord)

        // If return date is set, update car status to Available
        if (updatedRecord.returnDate) {
            update(ref(database, `cars/${updatedRecord.carId}`), { status: 'Available' })
        }
    }

    const deleteMaintenanceRecord = (id) => {
        remove(ref(database, `maintenanceRecords/${id}`))
    }

    const deleteWorkshop = (workshopName) => {
        // Find all records with this workshop name
        const recordsToDelete = maintenanceRecords.filter(r => r.workshopName === workshopName)
        recordsToDelete.forEach(r => {
            remove(ref(database, `maintenanceRecords/${r.id}`))
        })
    }

    const renameWorkshop = (oldName, newName, newDetails, newPhone) => {
        const recordsToUpdate = maintenanceRecords.filter(r => r.workshopName === oldName)
        recordsToUpdate.forEach(r => {
            update(ref(database, `maintenanceRecords/${r.id}`), {
                ...r,
                workshopName: newName,
                workshopDetails: newDetails || r.workshopDetails,
                phoneNumber: newPhone || r.phoneNumber
            })
        })
    }

    // Computed Cars with Dynamic Status
    const derivedCars = cars.map(car => {
        let status = car.status // key fallback

        // If DB says "On Rent" or "Maintenance", we consider it "Available" tentatively,
        // and let the active records below prove otherwise. This auto-expires old statuses.
        if (status === 'On Rent' || status === 'On Maintenance' || status === 'Maintenance') {
            status = 'Available'
        }

        const today = new Date()
        today.setHours(0, 0, 0, 0)

        // Check Maintenance
        const isOnMaintenance = maintenanceRecords.some(r => {
            if (r.carId !== car.id) return false
            const start = new Date(r.date)
            start.setHours(0, 0, 0, 0)
            if (r.returnDate) {
                const end = new Date(r.returnDate)
                end.setHours(23, 59, 59, 999)
                return today >= start && today <= end
            }
            return today >= start // Active if started and no return date confirmed
        })

        if (isOnMaintenance) {
            status = 'On Maintenance'
        }

        // Check Rental (Overrides Maintenance if concurrent, assuming active use)
        const isOnRent = transactions.some(t => {
            if (t.carId !== car.id || t.status === 'Cancelled' || t.status === 'Completed') return false
            const now = new Date()
            const start = new Date(t.startDate)
            const end = new Date(t.endDate)
            // Strict time comparison
            return now >= start && now <= end
        })

        if (isOnRent) {
            status = 'On Rent'
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
            deleteWorkshop,
            renameWorkshop,
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
