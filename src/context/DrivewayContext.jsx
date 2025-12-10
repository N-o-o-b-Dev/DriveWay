import { createContext, useContext, useState, useEffect } from 'react'
import { database } from '../lib/firebase'
import { ref, onValue, push, update, remove } from 'firebase/database'

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
        push(ref(database, 'customers'), customer)
    }

    const addDealer = (dealer) => {
        push(ref(database, 'dealers'), dealer)
    }

    const addTransaction = (transaction) => {
        push(ref(database, 'transactions'), transaction)
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

    const updateDealer = (id, updatedDealer) => {
        update(ref(database, `dealers/${id}`), updatedDealer)
    }

    const updateTransaction = (id, updatedTransaction) => {
        update(ref(database, `transactions/${id}`), updatedTransaction)
    }

    const addMaintenanceRecord = (record) => {
        push(ref(database, 'maintenanceRecords'), record)
        // Update car status to Maintenance
        // We need to find the car first to be sure, but simplified:
        // Note: record.carId is now a Firebase key (string), passing it directly works if consistent
        update(ref(database, `cars/${record.carId}`), { status: 'Maintenance' })
    }

    const updateMaintenanceRecord = (id, updatedRecord) => {
        update(ref(database, `maintenanceRecords/${id}`), updatedRecord)

        // If return date is set, update car status to Available
        if (updatedRecord.returnDate) {
            update(ref(database, `cars/${updatedRecord.carId}`), { status: 'Available' })
        }
    }

    return (
        <DrivewayContext.Provider value={{
            cars,
            customers,
            transactions,
            dealers,
            addCar,
            updateCar,
            deleteCar,
            addCustomer,
            updateCustomer,
            addDealer,
            updateDealer,
            addTransaction,
            updateTransaction,
            maintenanceRecords,
            addMaintenanceRecord,
            updateMaintenanceRecord
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
