import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDriveway } from '../context/DrivewayContext'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Card, CardContent } from '../components/ui/Card'
import {
    Plus, Search, Filter, MapPin, ArrowUpDown,
    Fuel, Calendar, Gauge, CreditCard, MoreHorizontal
} from 'lucide-react'
import { EditCarDrawer } from '../components/EditCarDrawer'
import { GlobalRentalDrawer } from '../components/GlobalRentalDrawer'
import { cn } from '../lib/utils'

export function Cars() {
    const { cars, addCar } = useDriveway()
    const navigate = useNavigate()
    const [isAdding, setIsAdding] = useState(false)

    // Filters & Sorting state
    const [searchTerm, setSearchTerm] = useState('')
    const [statusFilter, setStatusFilter] = useState('All')
    const [typeFilter, setTypeFilter] = useState('All') // Valid types: Sedan, SUV, etc.
    const [sortOrder, setSortOrder] = useState('Date Added')

    // Drawer states
    const [editingCar, setEditingCar] = useState(null)
    const [bookingCar, setBookingCar] = useState(null) // For direct "Book Now"

    // Add Car Form State (Simplified for brevity, usually should be in a Drawer/Modal)
    // For this redesign, we'll keep the logic but maybe hide it behind a proper drawer in future.
    // Re-using the existing state structure for compatibility if we want to toggle the form.
    const [newCar, setNewCar] = useState({
        make: '', model: '', year: '', price: '', tenDayPrice: '', monthlyPrice: '', plateNumber: '', image: '',
        color: '', mileage: '', fuelType: 'Petrol', fitnessValidTo: '', taxValidTo: '', insuranceValidTo: '', description: '',
        rcImage: '', insuranceImage: '', pocImage: ''
    })

    const handleImageChange = async (field, e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setNewCar(prev => ({ ...prev, [field]: reader.result }))
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (cars.some(car => car.plateNumber === newCar.plateNumber)) {
            alert('A car with this Plate Number already exists!')
            return
        }
        addCar({ ...newCar, status: 'Available', createdAt: new Date().toISOString() })
        setIsAdding(false)
        setNewCar({
            make: '', model: '', year: '', price: '', tenDayPrice: '', monthlyPrice: '', plateNumber: '', image: '',
            color: '', mileage: '', fuelType: 'Petrol', fitnessValidTo: '', taxValidTo: '', insuranceValidTo: '', description: '',
            rcImage: '', insuranceImage: '', pocImage: ''
        })
    }

    // Derive unique types for filter
    const vehicleTypes = useMemo(() => {
        const types = new Set(cars.map(c => c.fuelType || 'Unknown').filter(Boolean))
        // Note: The UI screenshot implies Body Type (Sedan/SUV), but our current data model 
        // mainly has `fuelType`. I'll use `fuelType` for now or maybe checks `make`?
        // Let's stick to `fuelType` or add a TODO for Body Type. 
        // Actually, let's just show Fuel Type in the dropdown as a proxy for "Type" for now.
        return ['All', ...Array.from(types)]
    }, [cars])

    // Filter Logic
    const filteredCars = useMemo(() => {
        return cars.filter(car => {
            const matchesSearch = (car.make + ' ' + car.model + ' ' + car.plateNumber).toLowerCase().includes(searchTerm.toLowerCase())
            const matchesStatus = statusFilter === 'All' || car.status === statusFilter
            const matchesType = typeFilter === 'All' || car.fuelType === typeFilter
            return matchesSearch && matchesStatus && matchesType
        }).sort((a, b) => {
            if (sortOrder === 'Price: Low to High') return Number(a.price) - Number(b.price)
            if (sortOrder === 'Price: High to Low') return Number(b.price) - Number(a.price)
            // Default: Date Added (Newest First) - assuming ID or implicit order works, or createdAt
            return 0
        })
    }, [cars, searchTerm, statusFilter, typeFilter, sortOrder])

    // Pagination Logic (Client-side)
    const ITEMS_PER_PAGE = 6
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE)
    const paginatedCars = filteredCars.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)


    return (
        <div className="space-y-6">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <span>Dashboard</span>
                        <span>/</span>
                        <span>Fleet</span>
                        <span>/</span>
                        <span className="text-white">Inventory</span>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-white">Vehicle Inventory</h1>
                    <p className="text-muted-foreground">Manage your entire fleet of vehicles across all locations.</p>
                </div>
                <Button
                    className="bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => setIsAdding(!isAdding)}
                >
                    <Plus className="mr-2 h-4 w-4" /> Add New Vehicle
                </Button>
            </div>

            {/* Filters Bar */}
            <div className="flex flex-wrap gap-4 items-center bg-[#1c1917] p-4 rounded-xl border border-white/5">
                {/* Search */}
                <div className="relative flex-1 min-w-[200px]">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search by make, model..."
                        className="w-full bg-[#292524] border-none rounded-lg py-2 pl-10 pr-4 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Status Filter */}
                <div className="relative">
                    <select
                        className="bg-[#292524] text-white text-sm rounded-lg px-4 py-2 pr-8 appearance-none border-none focus:ring-1 focus:ring-red-500 cursor-pointer"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                    >
                        <option value="All">Status: All</option>
                        <option value="Available">Available</option>
                        <option value="On Rent">Rented</option>
                        <option value="On Maintenance">Maintenance</option>
                    </select>
                    {/* Tiny Chevron Helper */}
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Filter className="h-3 w-3 text-gray-400" />
                    </div>
                </div>

                {/* Type Filter */}
                <div className="relative">
                    <select
                        className="bg-[#292524] text-white text-sm rounded-lg px-4 py-2 pr-8 appearance-none border-none focus:ring-1 focus:ring-red-500 cursor-pointer"
                        value={typeFilter}
                        onChange={(e) => setTypeFilter(e.target.value)}
                    >
                        {vehicleTypes.map(t => <option key={t} value={t}>{t === 'All' ? 'Type: All' : t}</option>)}
                    </select>
                </div>

                {/* Location Filter (Mock) */}
                <div className="relative">
                    <button className="flex items-center gap-2 bg-[#292524] text-white text-sm rounded-lg px-4 py-2 border-none">
                        <span>Location: New York</span>
                        <MapPin className="h-3 w-3 text-gray-400" />
                    </button>
                </div>

                {/* Sort */}
                <div className="relative">
                    <select
                        className="bg-[#292524] text-white text-sm rounded-lg px-4 py-2 pr-8 appearance-none border-none focus:ring-1 focus:ring-red-500 cursor-pointer"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="Date Added">Sort by: Date Added</option>
                        <option value="Price: Low to High">Price: Low to High</option>
                        <option value="Price: High to Low">Price: High to Low</option>
                    </select>
                </div>
            </div>

            {/* Add Car Form Panel (Conditional inline for now, can be modalized) */}
            {isAdding && (
                <div className="bg-[#1c1917] p-6 rounded-xl border border-white/10 mb-6">
                    <h3 className="text-lg font-bold text-white mb-4">Add New Vehicle</h3>
                    {/* Simplified Form Wrapper - Reusing logic, styling slightly updated */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            <Input placeholder="Make" value={newCar.make} onChange={e => setNewCar({ ...newCar, make: e.target.value })} className="bg-[#292524] border-0" required />
                            <Input placeholder="Model" value={newCar.model} onChange={e => setNewCar({ ...newCar, model: e.target.value })} className="bg-[#292524] border-0" required />
                            <Input placeholder="Year" type="number" value={newCar.year} onChange={e => setNewCar({ ...newCar, year: e.target.value })} className="bg-[#292524] border-0" required />
                            <Input placeholder="Plate #" value={newCar.plateNumber} onChange={e => setNewCar({ ...newCar, plateNumber: e.target.value })} className="bg-[#292524] border-0" required />
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            <Input placeholder="Color" value={newCar.color} onChange={e => setNewCar({ ...newCar, color: e.target.value })} className="bg-[#292524] border-0" />
                            <Input placeholder="Mileage" value={newCar.mileage} onChange={e => setNewCar({ ...newCar, mileage: e.target.value })} className="bg-[#292524] border-0" />
                            <Input placeholder="Price/Day" type="number" value={newCar.price} onChange={e => setNewCar({ ...newCar, price: e.target.value })} className="bg-[#292524] border-0" required />
                            {/* Fuel Type Select */}
                            <select className="bg-[#292524] text-white rounded-md px-3 border-0 text-sm" value={newCar.fuelType} onChange={e => setNewCar({ ...newCar, fuelType: e.target.value })}>
                                <option value="Petrol">Petrol</option>
                                <option value="Diesel">Diesel</option>
                                <option value="Electric">Electric</option>
                                <option value="Hybrid">Hybrid</option>
                            </select>
                        </div>
                        <Input type="file" accept="image/*" onChange={(e) => handleImageChange('image', e)} className="bg-[#292524] border-0 text-white" />
                        <div className="flex justify-end gap-3">
                            <Button type="button" variant="ghost" onClick={() => setIsAdding(false)}>Cancel</Button>
                            <Button type="submit" className="bg-red-600 hover:bg-red-700">Save Vehicle</Button>
                        </div>
                    </form>
                </div>
            )}

            {/* Cars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedCars.map(car => (
                    <Card key={car.id} className="bg-[#1c1917] border-0 overflow-hidden group hover:ring-1 hover:ring-white/20 transition-all">
                        {/* Image Section */}
                        <div className="relative h-48 w-full overflow-hidden">
                            <img
                                src={car.image || 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop'}
                                alt={`${car.make} ${car.model}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Status Badge */}
                            <div className="absolute top-3 right-3">
                                <span className={cn(
                                    "px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-sm border",
                                    car.status === 'Available' ? "bg-green-500/20 text-green-400 border-green-500/30" :
                                        car.status === 'On Rent' ? "bg-orange-500/20 text-orange-400 border-orange-500/30" :
                                            "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                                )}>
                                    {car.status === 'On Rent' ? 'RENTED' : car.status.toUpperCase()}
                                </span>
                            </div>
                        </div>

                        {/* Content Section */}
                        <CardContent className="p-5 space-y-4">
                            {/* Header: Title & Price */}
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-white">{car.make} {car.model}</h3>
                                    <p className="text-sm text-gray-400 mt-1">{car.description || 'Standard Trim'} • {car.fuelType}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xl font-bold text-red-500">₹{car.price}</p>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-wide">/ day</p>
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-white/5">
                                <div className="flex flex-col items-center justify-center p-2 rounded bg-white/5">
                                    <CreditCard className="h-4 w-4 text-gray-400 mb-1" />
                                    <span className="text-xs text-gray-300 font-mono">{car.plateNumber}</span>
                                </div>
                                <div className="flex flex-col items-center justify-center p-2 rounded bg-white/5">
                                    <Calendar className="h-4 w-4 text-gray-400 mb-1" />
                                    <span className="text-xs text-gray-300">{car.year}</span>
                                </div>
                                <div className="flex flex-col items-center justify-center p-2 rounded bg-white/5">
                                    <Gauge className="h-4 w-4 text-gray-400 mb-1" />
                                    <span className="text-xs text-gray-300">{car.mileage || '0'}k mi</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3 pt-2">
                                <Button
                                    variant="outline"
                                    className="flex-1 bg-transparent border-white/10 text-gray-300 hover:text-white hover:bg-white/5"
                                    onClick={() => setEditingCar(car)}
                                >
                                    Edit
                                </Button>
                                <Button
                                    className={cn(
                                        "flex-1",
                                        car.status === 'Available' ? "bg-red-600 hover:bg-red-700 text-white" : "bg-white/10 text-gray-400 cursor-not-allowed"
                                    )}
                                    disabled={car.status !== 'Available'}
                                    onClick={() => setBookingCar(car)}
                                >
                                    {car.status === 'Available' ? 'Book Now' : 'Unavailable'}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-8">
                    <Button
                        variant="outline"
                        size="sm"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(p => p - 1)}
                        className="border-white/10 text-gray-400"
                    >
                        Previous
                    </Button>
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={cn(
                                "h-8 w-8 rounded-md text-sm font-medium transition-colors",
                                currentPage === i + 1
                                    ? "bg-red-600 text-white"
                                    : "bg-[#292524] text-gray-400 hover:bg-[#3f3a38]"
                            )}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <Button
                        variant="outline"
                        size="sm"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(p => p + 1)}
                        className="border-white/10 text-gray-400"
                    >
                        Next
                    </Button>
                </div>
            )}

            {/* Drawers */}
            <EditCarDrawer
                isOpen={!!editingCar}
                onClose={() => setEditingCar(null)}
                car={editingCar}
            />

            {/* Direct Booking Drawer - We can re-use GlobalRentalDrawer but auto-select the car */}
            {/* Note: GlobalRentalDrawer might need a prop to pre-select car. If not supported, we'll just open it. */}
            <GlobalRentalDrawer
                isOpen={!!bookingCar}
                onClose={() => setBookingCar(null)}
                preSelectedCarId={bookingCar?.id}
            />
        </div>
    )
}
