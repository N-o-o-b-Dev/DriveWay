import { createContext, useContext, useState } from 'react'

const DrivewayContext = createContext()

export function DrivewayProvider({ children }) {
    const [cars, setCars] = useState([
        { id: 1, make: 'Tesla', model: 'Model 3', year: 2023, price: 150, tenDayPrice: 1200, monthlyPrice: 3500, image: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?q=80&w=2960&auto=format&fit=crop', status: 'Available' },
        { id: 2, make: 'BMW', model: 'M4', year: 2024, price: 250, tenDayPrice: 2000, monthlyPrice: 5500, image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2940&auto=format&fit=crop', status: 'Rented' },
    ])

    const [customers, setCustomers] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', phone: '555-0123' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '555-0124' },
    ])

    const [dealers, setDealers] = useState([
        { id: 1, name: 'Downtown Motors', email: 'contact@downtownmotors.com', phone: '555-0101' },
        { id: 2, name: 'Westside Auto', email: 'info@westsideauto.com', phone: '555-0102' }
    ])

    const [transactions, setTransactions] = useState([
        { id: 1, carId: 2, customerId: 1, startDate: '2024-03-10', endDate: '2024-03-15', total: 1250, status: 'Active' },
    ])

    const [maintenanceRecords, setMaintenanceRecords] = useState([
        { id: 1, carId: 1, workshopName: 'Speedy Fix Auto', workshopDetails: '123 Main St, 555-0123', amount: 150, date: '2024-02-15', description: 'Oil change and filter replacement' },
        { id: 2, carId: 2, workshopName: 'Speedy Fix Auto', workshopDetails: '123 Main St, 555-0123', amount: 300, date: '2024-03-01', description: 'Brake pad replacement' },
        { id: 3, carId: 1, workshopName: 'Luxury Car Care', workshopDetails: '456 Elite Ave, 555-0987', amount: 500, date: '2024-01-20', description: 'Annual detailing and inspection' },
    ])

    const addCar = (car) => {
        setCars([...cars, { ...car, id: Date.now() }])
    }

    const addCustomer = (customer) => {
        setCustomers([...customers, { ...customer, id: Date.now() }])
    }

    const addDealer = (dealer) => {
        setDealers([...dealers, { ...dealer, id: Date.now() }])
    }

    const addTransaction = (transaction) => {
        setTransactions([...transactions, { ...transaction, id: Date.now() }])
    }

    const updateCar = (id, updatedCar) => {
        setCars(cars.map(car => car.id === id ? { ...car, ...updatedCar } : car))
    }

    const updateCustomer = (id, updatedCustomer) => {
        setCustomers(customers.map(customer => customer.id === id ? { ...customer, ...updatedCustomer } : customer))
    }

    const updateDealer = (id, updatedDealer) => {
        setDealers(dealers.map(dealer => dealer.id === id ? { ...dealer, ...updatedDealer } : dealer))
    }

    const updateTransaction = (id, updatedTransaction) => {
        setTransactions(transactions.map(transaction => transaction.id === id ? { ...transaction, ...updatedTransaction } : transaction))
    }

    const addMaintenanceRecord = (record) => {
        setMaintenanceRecords([...maintenanceRecords, { ...record, id: Date.now() }])
        // Update car status to Maintenance
        setCars(cars.map(car => car.id === record.carId ? { ...car, status: 'Maintenance' } : car))
    }

    const updateMaintenanceRecord = (id, updatedRecord) => {
        setMaintenanceRecords(maintenanceRecords.map(record => record.id === id ? { ...record, ...updatedRecord } : record))

        // If return date is set, update car status to Available
        if (updatedRecord.returnDate) {
            setCars(cars.map(car => car.id === updatedRecord.carId ? { ...car, status: 'Available' } : car))
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
