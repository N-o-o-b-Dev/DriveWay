import { createContext, useContext, useState, useEffect } from 'react'
import { database } from '../lib/firebase'
import { ref, onValue, push, update, remove } from 'firebase/database'
import { generateUniqueId } from '../lib/utils'

const DrivewayContext = createContext()

export function DrivewayProvider({ children }) {
    const [cars, setCars] = useState([])
    const [customers, setCustomers] = useState([])
    const [dealers, setDealers] = useState([])
    const [transactions, setTransactions] = useState([])
    const [maintenanceRecords, setMaintenanceRecords] = useState([])

    // Helper to convert Firebase object to array
    const snapshotToArray = (snapshot) => {
        const data = snapshot.val()
        if (!data) return []
        return Object.entries(data).map(([id, value]) => ({ id, ...value }))
    }

    // Subscribe to Data
    useEffect(() => {
        const carsRef = ref(database, 'cars')
        const customersRef = ref(database, 'customers')
        const dealersRef = ref(database, 'dealers')
        const transactionsRef = ref(database, 'transactions')
        const maintenanceRef = ref(database, 'maintenanceRecords')

        const unsubCars = onValue(carsRef, (snapshot) => setCars(snapshotToArray(snapshot)))
        const unsubCustomers = onValue(customersRef, (snapshot) => setCustomers(snapshotToArray(snapshot)))
        const unsubDealers = onValue(dealersRef, (snapshot) => setDealers(snapshotToArray(snapshot)))
        const unsubTransactions = onValue(transactionsRef, (snapshot) => setTransactions(snapshotToArray(snapshot)))
        const unsubMaintenance = onValue(maintenanceRef, (snapshot) => setMaintenanceRecords(snapshotToArray(snapshot)))

        return () => {
            unsubCars()
            unsubCustomers()
            unsubDealers()
            unsubTransactions()
            unsubMaintenance()
        }
    }, [])

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

    const addTransaction = (transaction) => {
        push(ref(database, 'transactions'), transaction)
    }

    const updateCar = (id, updatedCar) => {
        console.log('updateCar called:', id, updatedCar)
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
            if (t.carId !== car.id || t.status === 'Cancelled') return false
            const start = new Date(t.startDate)
            const end = new Date(t.endDate)
            start.setHours(0, 0, 0, 0)
            end.setHours(23, 59, 59, 999)
            return today >= start && today <= end
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
            deleteWorkshop,
            renameWorkshop
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
