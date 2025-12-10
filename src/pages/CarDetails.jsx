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


export function CarDetails() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { cars, transactions, customers, addTransaction, maintenanceRecords, deleteCar } = useDriveway()
    const [activeTab, setActiveTab] = useState("overview")
    const [isRentalOpen, setIsRentalOpen] = useState(false)
    const [isEditOpen, setIsEditOpen] = useState(false)
    const [isMaintenanceDrawerOpen, setIsMaintenanceDrawerOpen] = useState(false)
    const [editingRecord, setEditingRecord] = useState(null)
    const [isEditMaintenanceOpen, setIsEditMaintenanceOpen] = useState(false)


    const handleEditMaintenance = (record) => {
        setEditingRecord(record)
        setIsEditMaintenanceOpen(true)
    }

    const [rentalData, setRentalData] = useState({
        customerId: '',
        startDate: '',
        endDate: '',
        notes: '',
        paymentStatus: 'Pending',
        dailyRate: ''
    })
    const [priceDetails, setPriceDetails] = useState({
        total: 0,
        breakdown: []
    })

    const car = cars.find(c => c.id === id)
    const carTransactions = transactions.filter(t => t.carId === id)

    useEffect(() => {
        if (car && !rentalData.dailyRate) {
            setRentalData(prev => ({ ...prev, dailyRate: car.price }))
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

                if (days >= 30 && car.monthlyPrice) {
                    const effectiveDailyRate = car.monthlyPrice / 30
                    price = Math.round(effectiveDailyRate * days)
                    breakdown.push({
                        label: `Monthly Rate Applied (${days} days @ ₹${Math.round(effectiveDailyRate)}/day)`,
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
            setPriceDetails({ total: price, breakdown })
        }
    }, [rentalData.startDate, rentalData.endDate, car, rentalData.dailyRate])

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
            dailyRate: rentalData.dailyRate
        })
        setIsRentalOpen(false)
        setRentalData({ customerId: '', startDate: '', endDate: '', notes: '', paymentStatus: 'Pending', dailyRate: '' })
        setActiveTab("rentals")
    }

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this car? This action cannot be undone.')) {
            deleteCar(car.id)
            navigate('/cars')
        }
    }

    return (
        <div className="space-y-8 relative">
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-4xl font-bold mb-2">{car.make} {car.model}</h2>
                    <p className="text-xl text-muted-foreground">{car.year}</p>
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
                        <div className="aspect-video w-full overflow-hidden rounded-lg">
                            <img
                                src={car.image}
                                alt={`${car.make} ${car.model}`}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${car.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                    {car.status}
                                </span>
                            </div>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Pricing</CardTitle>
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
                        <h3 className="text-2xl font-bold mb-4">Rental History</h3>
                        <div className="grid gap-4">
                            {carTransactions.map((t) => {
                                const customer = customers.find(c => c.id === t.customerId)
                                const duration = calculateDuration(t.startDate, t.endDate)
                                return (
                                    <Card key={t.id} className="overflow-hidden">
                                        <div className={`h-2 w-full ${t.status === 'Active' ? 'bg-green-500' : 'bg-gray-200'}`} />
                                        <CardContent className="p-6">
                                            <div className="grid md:grid-cols-3 gap-6">
                                                {/* Customer Info */}
                                                <div className="space-y-2">
                                                    <div className="flex items-center gap-2 font-semibold text-lg">
                                                        <User className="h-4 w-4 text-primary" />
                                                        {customer?.name}
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                        <Mail className="h-4 w-4" />
                                                        {customer?.email}
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                        <Phone className="h-4 w-4" />
                                                        {customer?.phone}
                                                    </div>
                                                </div>

                                                {/* Rental Details */}
                                                <div className="space-y-2">
                                                    <div className="flex items-center gap-2">
                                                        <Calendar className="h-4 w-4 text-primary" />
                                                        <span className="font-medium">{t.startDate} - {t.endDate}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                        <Clock className="h-4 w-4" />
                                                        {duration} Days Duration
                                                    </div>
                                                    {t.notes && (
                                                        <div className="text-sm text-muted-foreground mt-2 italic">
                                                            "{t.notes}"
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Status & Cost */}
                                                <div className="flex flex-col items-end justify-center">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-medium mb-2 ${t.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                                        }`}>
                                                        {t.status}
                                                    </span>
                                                    <p className="text-2xl font-bold text-primary">₹{t.total}</p>
                                                    {t.paymentStatus && (
                                                        <span className={`text-xs mt-1 ${t.paymentStatus === 'Paid' ? 'text-green-600' : 'text-orange-600'
                                                            }`}>
                                                            {t.paymentStatus}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                            {carTransactions.length === 0 && (
                                <div className="text-center py-12 text-muted-foreground bg-surface rounded-lg">
                                    No rental history found for this car.
                                </div>
                            )}
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

            <EditCarDrawer
                isOpen={isEditOpen}
                onClose={() => setIsEditOpen(false)}
                car={car}
            />
        </div>
    )
}
