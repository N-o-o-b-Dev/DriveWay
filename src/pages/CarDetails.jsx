import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDriveway } from '../context/DrivewayContext'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Sheet, SheetHeader, SheetTitle } from '../components/ui/Sheet'
import { Calendar, User, Phone, Mail, Clock, Plus, Edit, Wrench, Trash } from 'lucide-react'
import { EditCarDrawer } from '../components/EditCarDrawer'
import { AddMaintenanceDrawer } from '../components/AddMaintenanceDrawer'
import { EditMaintenanceDrawer } from '../components/EditMaintenanceDrawer'
import { EditTransactionDrawer } from '../components/EditTransactionDrawer'
import { DeleteConfirmDialog } from '../components/DeleteConfirmDialog'
import { generateId } from '../lib/utils'


export function CarDetails() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { cars, transactions, customers, addTransaction, updateCar, maintenanceRecords, deleteCar, deleteTransaction } = useDriveway()
    const [activeTab, setActiveTab] = useState("overview")
    const [isRentalOpen, setIsRentalOpen] = useState(false)
    const [isEditOpen, setIsEditOpen] = useState(false)
    const [isMaintenanceDrawerOpen, setIsMaintenanceDrawerOpen] = useState(false)
    const [editingRecord, setEditingRecord] = useState(null)
    const [isEditMaintenanceOpen, setIsEditMaintenanceOpen] = useState(false)
    const [editingTransaction, setEditingTransaction] = useState(null)
    const [isEditTransactionOpen, setIsEditTransactionOpen] = useState(false)
    const [deleteDialogProps, setDeleteDialogProps] = useState({ isOpen: false, transactionId: null })


    const handleEditMaintenance = (record) => {
        setEditingRecord(record)
        setIsEditMaintenanceOpen(true)
    }

    const handleDeleteTransaction = (transactionId) => {
        setDeleteDialogProps({ isOpen: true, transactionId })
    }

    const confirmDeleteTransaction = () => {
        if (deleteDialogProps.transactionId) {
            deleteTransaction(deleteDialogProps.transactionId)
        }
    }

    const [rentalData, setRentalData] = useState({
        customerId: '',
        startDate: '',
        endDate: '',
        notes: '',
        paymentStatus: 'Pending',
        dailyRate: '',
        mileage: '',
        discount: ''
    })
    const [priceDetails, setPriceDetails] = useState({
        total: 0,
        breakdown: []
    })

    const car = cars.find(c => c.id === id)
    const carTransactions = transactions
        .filter(t => t.carId === id && t.status !== 'Cancelled')
        .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))

    useEffect(() => {
        if (car) {
            setRentalData(prev => {
                if (!prev.dailyRate && !prev.mileage && prev.mileage !== 0) {
                    return {
                        ...prev,
                        dailyRate: car.price,
                        mileage: car.mileage || ''
                    }
                }
                return prev
            })
        }
    }, [car])

    useEffect(() => {
        if (rentalData.startDate && rentalData.endDate && car) {
            const start = new Date(rentalData.startDate)
            const end = new Date(rentalData.endDate)
            const diffTime = Math.abs(end - start)
            const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

            let price = 0
            let breakdown = []
            const currentDailyRate = rentalData.dailyRate ? parseFloat(rentalData.dailyRate) : car.price

            if (days > 0) {
                let remainingDays = days

                if (days >= 20 && car.monthlyPrice) {
                    const effectiveDailyRate = car.monthlyPrice / 30
                    price = Math.round((effectiveDailyRate * days) + 300)
                    breakdown.push({
                        label: `Long Term Rate (>=20 days) (${days} days @ ₹${Math.round(effectiveDailyRate)}/day + ₹300)`,
                        amount: price
                    })
                } else if (days >= 10 && car.tenDayPrice) {
                    const effectiveDailyRate = car.tenDayPrice / 10
                    price = Math.round(effectiveDailyRate * days)
                    breakdown.push({
                        label: `10-Day Rate Applied (${days} days @ ₹${Math.round(effectiveDailyRate)}/day)`,
                        amount: price
                    })
                } else {
                    price = Math.round(currentDailyRate * days)
                    breakdown.push({
                        label: `Standard Daily Rate (${days} days @ ₹${currentDailyRate}/day)`,
                        amount: price
                    })
                }
            }
            // Apply Discount
            const discountAmount = rentalData.discount ? parseFloat(rentalData.discount) : 0
            if (discountAmount > 0) {
                breakdown.push({
                    label: `Discount`,
                    amount: -discountAmount
                })
                price = Math.max(0, price - discountAmount)
            }

            setPriceDetails({ total: price, breakdown })
        } else {
            setPriceDetails({ total: 0, breakdown: [] })
        }
    }, [rentalData.startDate, rentalData.endDate, car, rentalData.dailyRate, rentalData.discount])

    if (!car) return <div>Car not found</div>

    const calculateDuration = (start, end) => {
        const startDate = new Date(start)
        const endDate = new Date(end)
        const diffTime = Math.abs(endDate - startDate)
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        return diffDays
    }

    const handleRentSubmit = (e) => {
        e.preventDefault()

        // Date Overlap Validation
        const newStart = new Date(rentalData.startDate)
        const newEnd = new Date(rentalData.endDate)

        const hasOverlap = carTransactions.some(t => {
            if (t.status === 'Cancelled') return false
            const existingStart = new Date(t.startDate)
            const existingEnd = new Date(t.endDate)

            return (
                (newStart >= existingStart && newStart <= existingEnd) ||
                (newEnd >= existingStart && newEnd <= existingEnd) ||
                (newStart <= existingStart && newEnd >= existingEnd)
            )
        })

        if (hasOverlap) {
            alert('This car is already rented for the selected dates!')
            return
        }

        // Update Car Mileage if provided
        console.log('Mileage check:', rentalData.mileage)
        if (rentalData.mileage !== '' && rentalData.mileage !== null && rentalData.mileage !== undefined) {
            console.log('Updating mileage to:', rentalData.mileage)
            updateCar(car.id, { mileage: parseInt(rentalData.mileage) })
        }


        const payments = []
        if (rentalData.paymentStatus === 'Paid') {
            payments.push({
                id: generateId(),
                date: new Date().toISOString().split('T')[0],
                amount: priceDetails.total,
                type: 'Credit',
                medium: 'Cash', // Default
                notes: 'Initial Payment'
            })
        }

        addTransaction({
            carId: car.id,
            customerId: rentalData.customerId,
            startDate: rentalData.startDate,
            endDate: rentalData.endDate,
            total: priceDetails.total,
            status: 'Active',
            paymentStatus: rentalData.paymentStatus,
            notes: rentalData.notes,
            breakdown: priceDetails.breakdown,
            dailyRate: rentalData.dailyRate,
            payments: payments,
            amountPaid: rentalData.paymentStatus === 'Paid' ? priceDetails.total : 0,
            startMileage: rentalData.mileage
        })
        setIsRentalOpen(false)
        setRentalData({ customerId: '', startDate: '', endDate: '', notes: '', paymentStatus: 'Pending', dailyRate: '', mileage: '' })
        setActiveTab("rentals")
    }

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this car? This action cannot be undone.')) {
            deleteCar(car.id)
            navigate('/cars')
        }
    }

    const insuranceAlert = () => {
        if (!car.insuranceValidTo) return null
        const today = new Date()
        const validTo = new Date(car.insuranceValidTo)
        const diffTime = validTo - today
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

        if (diffDays <= 3 && diffDays >= 0) {
            return (
                <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg mb-6 flex items-center gap-3 text-destructive">
                    <Clock className="h-5 w-5" />
                    <div>
                        <p className="font-bold">Insurance Expiring Soon!</p>
                        <p className="text-sm">Insurance is valid only for {diffDays} more day{diffDays !== 1 ? 's' : ''}. Please renew immediately.</p>
                    </div>
                </div>
            )
        } else if (diffDays < 0) {
            return (
                <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg mb-6 flex items-center gap-3 text-destructive">
                    <Clock className="h-5 w-5" />
                    <div>
                        <p className="font-bold">Insurance Expired!</p>
                        <p className="text-sm">Insurance expired on {car.insuranceValidTo}. Do not rent this car until renewed.</p>
                    </div>
                </div>
            )
        }
        return null
    }

    return (
        <div className="space-y-8 relative">
            {insuranceAlert()}
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-4xl font-bold mb-2">{car.make} {car.model}</h2>
                    <p className="text-xl text-muted-foreground">{car.year} • {car.plateNumber}</p>
                    <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                        {car.color && <span>Color: {car.color}</span>}
                        {car.fuelType && <span>Fuel: {car.fuelType}</span>}
                        <span>Mileage: {car.mileage} km</span>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" onClick={() => setIsEditOpen(true)}>
                        <Edit className="mr-2 h-4 w-4" /> Edit
                    </Button>
                    <Button variant="destructive" onClick={handleDelete}>
                        <Trash className="mr-2 h-4 w-4" /> Delete
                    </Button>
                    <Button onClick={() => setIsRentalOpen(true)}>
                        <Plus className="mr-2 h-4 w-4" /> Rent Car
                    </Button>
                </div>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
                <div className="border-b border-gray-200 dark:border-gray-800 mb-6">
                    <TabsList className="bg-transparent p-0">
                        <TabsTrigger
                            value="overview"
                            className={`rounded-none border-b-2 px-6 py-3 ${activeTab === "overview" ? "border-primary text-primary" : "border-transparent"}`}
                        >
                            Overview
                        </TabsTrigger>
                        <TabsTrigger
                            value="rentals"
                            className={`rounded-none border-b-2 px-6 py-3 ${activeTab === "rentals" ? "border-primary text-primary" : "border-transparent"}`}
                        >
                            Rentals
                        </TabsTrigger>
                        <TabsTrigger
                            value="maintenance"
                            className={`rounded-none border-b-2 px-6 py-3 ${activeTab === "maintenance" ? "border-primary text-primary" : "border-transparent"}`}
                        >
                            Maintenance
                        </TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="overview">
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-6">
                            <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
                                {car.image ? (
                                    <img
                                        src={car.image}
                                        alt={`${car.make} ${car.model}`}
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-muted-foreground">No Image</div>
                                )}
                            </div>

                            <div className="grid grid-cols-3 gap-2">
                                {car.rcImage && (
                                    <div className="aspect-video rounded bg-muted overflow-hidden relative group cursor-pointer" onClick={() => window.open(car.rcImage)}>
                                        <img src={car.rcImage} alt="RC" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-bold">View RC</div>
                                    </div>
                                )}
                                {car.insuranceImage && (
                                    <div className="aspect-video rounded bg-muted overflow-hidden relative group cursor-pointer" onClick={() => window.open(car.insuranceImage)}>
                                        <img src={car.insuranceImage} alt="Insurance" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-bold">View Insurance</div>
                                    </div>
                                )}
                                {car.pocImage && (
                                    <div className="aspect-video rounded bg-muted overflow-hidden relative group cursor-pointer" onClick={() => window.open(car.pocImage)}>
                                        <img src={car.pocImage} alt="POC" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-bold">View POC</div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${car.status === 'Available' ? 'bg-green-100 text-green-800' :
                                    car.status === 'On Rent' ? 'bg-blue-100 text-blue-800' :
                                        car.status === 'On Maintenance' ? 'bg-orange-100 text-orange-800' :
                                            'bg-yellow-100 text-yellow-800'
                                    }`}>
                                    {car.status}
                                </span>
                            </div>

                            <Card>
                                <CardHeader className="pb-3">
                                    <CardTitle className="text-base">Vehicle Specifications</CardTitle>
                                </CardHeader>
                                <CardContent className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <span className="text-muted-foreground block">Mileage</span>
                                        <span className="font-medium text-lg">{car.mileage} km</span>
                                    </div>
                                    <div>
                                        <span className="text-muted-foreground block">Fuel Type</span>
                                        <span className="font-medium">{car.fuelType || 'N/A'}</span>
                                    </div>
                                    <div>
                                        <span className="text-muted-foreground block">Color</span>
                                        <span className="font-medium">{car.color || 'N/A'}</span>
                                    </div>
                                    <div>
                                        <span className="text-muted-foreground block">Year</span>
                                        <span className="font-medium">{car.year}</span>
                                    </div>
                                </CardContent>
                            </Card>

                            {car.description && (
                                <div>
                                    <h4 className="font-semibold mb-2">Description</h4>
                                    <p className="text-sm text-muted-foreground">{car.description}</p>
                                </div>
                            )}

                            {(car.fitnessValidTo || car.taxValidTo || car.insuranceValidTo) && (
                                <Card>
                                    <CardHeader className="pb-3">
                                        <CardTitle className="text-base">Validity</CardTitle>
                                    </CardHeader>
                                    <CardContent className="grid grid-cols-2 gap-4 text-sm">
                                        {car.fitnessValidTo && (
                                            <div>
                                                <span className="text-muted-foreground block">Fitness</span>
                                                <span className="font-medium">{car.fitnessValidTo}</span>
                                            </div>
                                        )}
                                        {car.taxValidTo && (
                                            <div>
                                                <span className="text-muted-foreground block">Tax</span>
                                                <span className="font-medium">{car.taxValidTo}</span>
                                            </div>
                                        )}
                                        {car.insuranceValidTo && (
                                            <div>
                                                <span className="text-muted-foreground block">Insurance</span>
                                                <span className="font-medium">{car.insuranceValidTo}</span>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            )}

                            <Card>
                                <CardHeader className="pb-3">
                                    <CardTitle className="text-base">Pricing</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex justify-between items-center border-b pb-2">
                                        <span className="text-muted-foreground">Daily Rate</span>
                                        <span className="font-bold text-xl">₹{car.price}</span>
                                    </div>
                                    {car.tenDayPrice && (
                                        <div className="flex justify-between items-center border-b pb-2">
                                            <span className="text-muted-foreground">10 Days Rate</span>
                                            <span className="font-bold text-xl">₹{car.tenDayPrice}</span>
                                        </div>
                                    )}
                                    {car.monthlyPrice && (
                                        <div className="flex justify-between items-center">
                                            <span className="text-muted-foreground">Monthly Rate</span>
                                            <span className="font-bold text-xl">₹{car.monthlyPrice}</span>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="rentals">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-2xl font-bold">Rental History</h3>
                        </div>

                        <div className="border rounded-lg overflow-hidden">
                            <div className="grid grid-cols-6 gap-4 p-4 bg-muted/50 font-medium text-sm">
                                <div className="col-span-2">Customer</div>
                                <div>Dates</div>
                                <div>Amount</div>
                                <div>Balance</div>
                                <div className="text-right">Actions</div>
                            </div>
                            <div className="divide-y">
                                {carTransactions.map((t) => {
                                    const customer = customers.find(c => c.id === t.customerId)
                                    const total = Number(t.total) || 0
                                    const paid = Number(t.amountPaid) || 0
                                    const balance = total - paid

                                    return (
                                        <div key={t.id} className="grid grid-cols-6 gap-4 p-4 items-center text-sm hover:bg-muted/20 transition-colors">
                                            <div className="col-span-2">
                                                <div className="font-medium">{customer?.name}</div>
                                                <div className="text-xs text-muted-foreground">{customer?.phone}</div>
                                            </div>
                                            <div>
                                                <div className="font-medium">{t.startDate}</div>
                                                <div className="text-xs text-muted-foreground">to {t.endDate}</div>
                                            </div>
                                            <div>
                                                <div className="font-medium">₹{total}</div>
                                                <div className={`text-xs ${t.paymentStatus === 'Paid' ? 'text-green-600' : 'text-orange-600'}`}>
                                                    {t.paymentStatus}
                                                </div>
                                            </div>
                                            <div>
                                                <div className={`font-medium ${balance > 0 ? 'text-destructive' : 'text-green-600'}`}>
                                                    ₹{balance}
                                                </div>
                                            </div>
                                            <div className="flex justify-end gap-2">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => {
                                                        setEditingTransaction(t)
                                                        setIsEditTransactionOpen(true)
                                                    }}
                                                >
                                                    <Edit className="h-4 w-4" />
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="text-destructive hover:text-destructive"
                                                    onClick={() => handleDeleteTransaction(t.id)}
                                                >
                                                    <Trash className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    )
                                })}
                                {carTransactions.length === 0 && (
                                    <div className="p-8 text-center text-muted-foreground">
                                        No rental history found.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="maintenance">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-2xl font-bold">Maintenance History</h3>
                            <Button onClick={() => setIsMaintenanceDrawerOpen(true)}>
                                <Wrench className="mr-2 h-4 w-4" /> Add Record
                            </Button>
                        </div>
                        <div className="grid gap-4">
                            {maintenanceRecords.filter(r => r.carId === id).length > 0 ? (
                                maintenanceRecords.filter(r => r.carId === id).map((record) => (
                                    <Card key={record.id}>
                                        <CardContent className="p-6">
                                            <div className="flex items-start justify-between">
                                                <div className="space-y-1">
                                                    <h4 className="font-bold text-lg">{record.workshopName}</h4>
                                                    <p className="text-sm text-muted-foreground">{record.description}</p>
                                                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                                                        <span>{record.date}</span>
                                                        {record.returnDate && (
                                                            <>
                                                                <span> - </span>
                                                                <span>{record.returnDate}</span>
                                                            </>
                                                        )}
                                                        <span>•</span>
                                                        <span>{record.workshopDetails}</span>
                                                    </div>
                                                </div>
                                                <div className="text-right flex flex-col items-end gap-2">
                                                    <p className="font-bold text-xl">₹{record.amount}</p>
                                                    <div className="flex gap-2">
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            className="h-8 w-8 p-0"
                                                            onClick={() => handleEditMaintenance(record)}
                                                        >
                                                            <Edit className="h-4 w-4" />
                                                        </Button>
                                                        {record.image && (
                                                            <Button
                                                                variant="link"
                                                                size="sm"
                                                                className="h-auto p-0 text-xs"
                                                                onClick={() => {
                                                                    const win = window.open();
                                                                    win.document.write('<img src="' + record.image + '" style="max-width:100%;"/>');
                                                                }}
                                                            >
                                                                Receipt
                                                            </Button>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))
                            ) : (
                                <div className="text-center py-12 text-muted-foreground bg-surface rounded-lg">
                                    No maintenance records found for this car.
                                </div>
                            )}
                        </div>
                    </div>
                </TabsContent>
            </Tabs>

            <AddMaintenanceDrawer
                isOpen={isMaintenanceDrawerOpen}
                onClose={() => setIsMaintenanceDrawerOpen(false)}
                carId={car.id}
            />

            <EditMaintenanceDrawer
                isOpen={isEditMaintenanceOpen}
                onClose={() => setIsEditMaintenanceOpen(false)}
                record={editingRecord}
            />

            <Sheet isOpen={isRentalOpen} onClose={() => setIsRentalOpen(false)}>
                <SheetHeader>
                    <SheetTitle>Rent {car.make} {car.model}</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                    <form onSubmit={handleRentSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Customer</label>
                            <select
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface"
                                value={rentalData.customerId}
                                onChange={e => setRentalData({ ...rentalData, customerId: e.target.value })}
                                required
                            >
                                <option value="">Select Customer</option>
                                {customers.map(customer => (
                                    <option key={customer.id} value={customer.id}>{customer.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Start Date</label>
                                <Input
                                    type="date"
                                    value={rentalData.startDate}
                                    onChange={e => setRentalData({ ...rentalData, startDate: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">End Date</label>
                                <Input
                                    type="date"
                                    value={rentalData.endDate}
                                    onChange={e => setRentalData({ ...rentalData, endDate: e.target.value })}
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Per Day Amount</label>
                                <Input
                                    type="number"
                                    value={rentalData.dailyRate}
                                    onChange={e => setRentalData({ ...rentalData, dailyRate: e.target.value })}
                                    placeholder="Enter daily rate"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Current Mileage</label>
                                <Input
                                    type="number"
                                    value={rentalData.mileage}
                                    onChange={e => setRentalData({ ...rentalData, mileage: e.target.value })}
                                    placeholder="Starting mileage"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Payment Status</label>
                            <select
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface"
                                value={rentalData.paymentStatus}
                                onChange={e => setRentalData({ ...rentalData, paymentStatus: e.target.value })}
                            >
                                <option value="Pending">Pending</option>
                                <option value="Paid">Paid</option>
                                <option value="Pay on Arrival">Pay on Arrival</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Notes</label>
                            <Input
                                placeholder="Additional notes..."
                                value={rentalData.notes}
                                onChange={e => setRentalData({ ...rentalData, notes: e.target.value })}
                            />
                        </div>

                        <div className="bg-surface dark:bg-surface-dark p-4 rounded-lg space-y-2">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium">Price Breakdown</span>
                            </div>
                            {priceDetails.breakdown.length > 0 ? (
                                <div className="space-y-1">
                                    {priceDetails.breakdown.map((item, index) => (
                                        <div key={index} className="flex justify-between text-sm text-muted-foreground">
                                            <span>{item.label}</span>
                                            <span>₹{item.amount}</span>
                                        </div>
                                    ))}
                                    <div className="border-t pt-2 mt-2 flex justify-between text-sm font-bold">
                                        <span>Total</span>
                                        <span>₹{priceDetails.total}</span>
                                    </div>
                                </div>
                            ) : (
                                <p className="text-xs text-muted-foreground">Select dates to see price breakdown.</p>
                            )}
                        </div>

                        <Button type="submit" className="w-full">
                            Confirm Rental
                        </Button>
                    </form>
                </div>
            </Sheet>

            <EditTransactionDrawer
                isOpen={isEditTransactionOpen}
                onClose={() => setIsEditTransactionOpen(false)}
                transaction={editingTransaction}
            />

            <EditCarDrawer
                isOpen={isEditOpen}
                onClose={() => setIsEditOpen(false)}
                car={car}
            />

            <DeleteConfirmDialog
                isOpen={deleteDialogProps.isOpen}
                onClose={() => setDeleteDialogProps({ isOpen: false, transactionId: null })}
                onConfirm={confirmDeleteTransaction}
                title="Delete Rental Record"
                description="Are you sure you want to delete this rental record? This action cannot be undone."
            />
        </div>
    )
}
