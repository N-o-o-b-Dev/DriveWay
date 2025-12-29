import { useState, useMemo } from 'react'
import { useDriveway } from '../context/DrivewayContext'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Sheet, SheetHeader, SheetTitle } from '../components/ui/Sheet'
import { DeleteRegisterModal } from '../components/DeleteRegisterModal'
import {
    Plus,
    Search,
    Calendar as CalendarIcon,
    Filter,
    ChevronLeft,
    ChevronRight,
    MoreVertical,
    ArrowRight,
    ArrowLeft,
    Car,
    User,
    Trash2
} from 'lucide-react'
import { cn } from '../lib/utils'

export function Register() {
    const { registers, cars, customers, addRegister, deleteRegister, isLoading } = useDriveway()
    const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false)

    // Delete Modal State
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [entryToDelete, setEntryToDelete] = useState(null)

    // Filters
    const [searchTerm, setSearchTerm] = useState('')
    const [statusFilter, setStatusFilter] = useState('All') // 'All', 'Entry', 'Exit'
    const [dateStart, setDateStart] = useState('')
    const [dateEnd, setDateEnd] = useState('')

    // Pagination
    const [currentPage, setCurrentPage] = useState(1)
    const ITEMS_PER_PAGE = 10

    // Form Data
    const [formData, setFormData] = useState({
        date: new Date().toISOString().slice(0, 16),
        type: 'Entry',
        carId: '',
        name: '',
        notes: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        addRegister({
            ...formData,
            date: new Date(formData.date).toISOString()
        })
        setIsAddDrawerOpen(false)
        setFormData({
            date: new Date().toISOString().slice(0, 16),
            type: 'Entry',
            carId: '',
            name: '',
            notes: ''
        })
    }

    const handleDeleteClick = (entry, car) => {
        setEntryToDelete({
            ...entry,
            carMake: car?.make || 'Unknown',
            carModel: car?.model || 'Vehicle'
        })
        setIsDeleteModalOpen(true)
    }

    const confirmDelete = async () => {
        if (entryToDelete) {
            await deleteRegister(entryToDelete.id)
            setIsDeleteModalOpen(false)
            setEntryToDelete(null)
        }
    }

    // Filter Logic
    const filteredRegisters = useMemo(() => {
        return registers.filter(entry => {
            const car = cars.find(c => c.id === entry.carId)
            let displayName = entry.name
            if (entry.customerId) {
                const customer = customers.find(c => c.id === entry.customerId)
                if (customer) displayName = customer.name
            }

            const searchString = `${displayName || ''} ${car?.make || ''} ${car?.model || ''} ${car?.plateNumber || ''} ${entry.notes || ''}`.toLowerCase()
            const matchesSearch = searchString.includes(searchTerm.toLowerCase())
            const matchesStatus = statusFilter === 'All' || entry.type === statusFilter

            const entryDate = new Date(entry.date)
            const matchesDateStart = !dateStart || entryDate >= new Date(dateStart)
            const matchesDateEnd = !dateEnd || entryDate <= new Date(dateEnd + 'T23:59:59')

            return matchesSearch && matchesStatus && matchesDateStart && matchesDateEnd
        }).sort((a, b) => new Date(b.date) - new Date(a.date))
    }, [registers, cars, customers, searchTerm, statusFilter, dateStart, dateEnd])

    // Pagination Logic
    const totalPages = Math.ceil(filteredRegisters.length / ITEMS_PER_PAGE)
    const paginatedRegisters = filteredRegisters.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    )

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage)
        }
    }

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Car Movement Register</h1>
                    <p className="text-slate-400">View and manage vehicle entry and exit logs.</p>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="bg-[#1c1917] border border-white/5 rounded-xl p-3 flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                    <Input
                        placeholder="Search by Plate No. or Driver..."
                        className="pl-10 bg-black/20 border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-0 focus-visible:ring-offset-0"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="flex items-center gap-2 w-full md:w-auto">
                    {/* Status Select */}
                    <div className="relative">
                        <select
                            className="h-10 pl-3 pr-8 bg-black/20 border border-white/10 rounded-md text-sm text-slate-300 focus:outline-none appearance-none cursor-pointer hover:bg-white/5 min-w-[120px]"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="All">Status: All</option>
                            <option value="Entry">Entry</option>
                            <option value="Exit">Exit</option>
                        </select>
                        <Filter className="absolute right-3 top-1/2 -translate-y-1/2 h-3 w-3 text-slate-500 pointer-events-none" />
                    </div>

                    {/* Date Pickers */}
                    <div className="flex items-center gap-2 bg-black/20 border border-white/10 rounded-md px-3 h-10">
                        <CalendarIcon className="h-4 w-4 text-slate-500" />
                        <input
                            type="date"
                            className="bg-transparent text-slate-300 text-sm focus:outline-none [&::-webkit-calendar-picker-indicator]:invert-[0.5]"
                            value={dateStart}
                            onChange={(e) => setDateStart(e.target.value)}
                        />
                        <span className="text-slate-600">-</span>
                        <input
                            type="date"
                            className="bg-transparent text-slate-300 text-sm focus:outline-none [&::-webkit-calendar-picker-indicator]:invert-[0.5]"
                            value={dateEnd}
                            onChange={(e) => setDateEnd(e.target.value)}
                        />
                    </div>

                    <Button
                        onClick={() => setIsAddDrawerOpen(true)}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold whitespace-nowrap"
                    >
                        <Plus className="mr-2 h-4 w-4" /> New Entry/Exit
                    </Button>
                </div>
            </div>

            {/* Data Table */}
            <div className="bg-[#1c1917] border border-white/5 rounded-xl overflow-hidden">
                <div className="grid grid-cols-12 px-6 py-4 border-b border-white/5 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    <div className="col-span-3">Vehicle</div>
                    <div className="col-span-3">Driver</div>
                    <div className="col-span-3">Description</div>
                    <div className="col-span-1 text-center">Status</div>
                    <div className="col-span-2 text-right">Date & Time</div>
                </div>

                <div className="divide-y divide-white/5">
                    {isLoading ? (
                        <div className="p-8 text-center text-slate-500">Loading register...</div>
                    ) : paginatedRegisters.length === 0 ? (
                        <div className="p-8 text-center text-slate-500">No entries found matching your criteria.</div>
                    ) : (
                        paginatedRegisters.map((entry) => {
                            const car = cars.find(c => c.id === entry.carId)
                            let displayName = entry.name
                            if (entry.customerId) {
                                const customer = customers.find(c => c.id === entry.customerId)
                                if (customer) displayName = customer.name
                            }

                            const isEntry = entry.type === 'Entry'

                            return (
                                <div key={entry.id} className="grid grid-cols-12 px-6 py-4 items-center hover:bg-white/[0.02] transition-colors group">
                                    {/* Vehicle */}
                                    <div className="col-span-3 flex items-center gap-3">
                                        <div className="h-10 w-10 bg-white/5 rounded-lg flex items-center justify-center overflow-hidden shrink-0">
                                            {car?.image ? (
                                                <img src={car.image} alt={car.model} className="h-full w-full object-cover" />
                                            ) : (
                                                <Car className="h-5 w-5 text-slate-600" />
                                            )}
                                        </div>
                                        <div>
                                            <div className="font-bold text-white text-sm">{car ? `${car.make} ${car.model}` : 'Unknown'}</div>
                                            <div className="text-xs text-slate-500">{car?.plateNumber || '---'}</div>
                                        </div>
                                    </div>

                                    {/* Driver */}
                                    <div className="col-span-3 flex items-center gap-3">
                                        <div className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 shrink-0">
                                            <User className="h-4 w-4" />
                                        </div>
                                        <span className="text-sm text-slate-300 truncate">{displayName || 'Unknown'}</span>
                                    </div>

                                    {/* Description */}
                                    <div className="col-span-3 text-sm text-slate-400 truncate pr-4">
                                        {entry.notes || '-'}
                                    </div>

                                    {/* Status */}
                                    <div className="col-span-1 flex justify-center">
                                        <Badge className={cn(
                                            "border-0 px-2.5 py-0.5 text-xs font-bold uppercase",
                                            isEntry ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                                        )}>
                                            <span className={cn("inline-block w-1.5 h-1.5 rounded-full mr-1.5 mb-[1px]", isEntry ? "bg-green-500" : "bg-red-500")}></span>
                                            {entry.type}
                                        </Badge>
                                    </div>

                                    {/* Date */}
                                    <div className="col-span-2 text-right flex items-center justify-end gap-3">
                                        <div>
                                            <div className="text-sm font-medium text-white">
                                                {new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </div>
                                            <div className="text-xs text-slate-500">
                                                {new Date(entry.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </div>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-500 hover:text-red-500 hover:bg-white/5"
                                            onClick={() => handleDeleteClick(entry, car)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            )
                        })
                    )}
                </div>

                {/* Pagination Footer */}
                <div className="p-4 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 bg-[#1c1917]">
                    <div>
                        Showing <span className="text-white font-bold">{Math.min(filteredRegisters.length, (currentPage - 1) * ITEMS_PER_PAGE + 1)}</span> to <span className="text-white font-bold">{Math.min(filteredRegisters.length, currentPage * ITEMS_PER_PAGE)}</span> of <span className="text-white font-bold">{filteredRegisters.length}</span> results
                    </div>
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="h-8 bg-black/20 border-white/10 text-slate-300 hover:text-white hover:bg-white/5"
                        >
                            Previous
                        </Button>
                        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                            // Simple logic to show first 5 or logic could be more complex
                            let pageNum = i + 1
                            if (totalPages > 5 && currentPage > 3) {
                                pageNum = currentPage - 2 + i
                                if (pageNum > totalPages) pageNum = totalPages - (4 - i)
                            }
                            // Keep it simple for now as requested
                            return i + 1
                        }).slice(0, totalPages).map((p) => (
                            <Button
                                key={p}
                                variant={currentPage === p ? "default" : "outline"}
                                size="sm"
                                onClick={() => handlePageChange(p)}
                                className={cn("h-8 w-8 p-0", currentPage === p ? "bg-red-600 hover:bg-red-700 text-white border-0" : "bg-black/20 border-white/10 text-slate-300 hover:text-white hover:bg-white/5")}
                            >
                                {p}
                            </Button>
                        ))}
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages || totalPages === 0}
                            className="h-8 bg-black/20 border-white/10 text-slate-300 hover:text-white hover:bg-white/5"
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>

            {/* Add Drawer (Sheet) - Keeping functionality similar but can style update if needed */}
            <Sheet isOpen={isAddDrawerOpen} onClose={() => setIsAddDrawerOpen(false)} className="w-[400px] sm:w-[540px] bg-[#0c0a09] border-l border-white/10 text-white">
                <div className="h-full flex flex-col">
                    <SheetHeader className="pb-6 border-b border-white/10">
                        <SheetTitle className="text-white">Add Register Entry</SheetTitle>
                    </SheetHeader>

                    <form id="add-register-form" onSubmit={handleSubmit} className="mt-6 space-y-6 flex-1 overflow-y-auto px-1">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Type</label>
                                <div className="grid grid-cols-2 gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, type: 'Entry' })}
                                        className={cn(
                                            "flex items-center justify-center gap-2 p-3 rounded-md border text-sm font-bold transition-all",
                                            formData.type === 'Entry'
                                                ? "bg-green-500/20 border-green-500 text-green-500"
                                                : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10"
                                        )}
                                    >
                                        <ArrowRight className="h-4 w-4" />
                                        Entry (In)
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, type: 'Exit' })}
                                        className={cn(
                                            "flex items-center justify-center gap-2 p-3 rounded-md border text-sm font-bold transition-all",
                                            formData.type === 'Exit'
                                                ? "bg-red-500/20 border-red-500 text-red-500"
                                                : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10"
                                        )}
                                    >
                                        <ArrowLeft className="h-4 w-4" />
                                        Exit (Out)
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Date & Time</label>
                                <Input
                                    type="datetime-local"
                                    className="bg-white/5 border-white/10 text-white [&::-webkit-calendar-picker-indicator]:invert"
                                    value={formData.date}
                                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Vehicle</label>
                                <select
                                    className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-500"
                                    value={formData.carId}
                                    onChange={e => setFormData({ ...formData, carId: e.target.value })}
                                    required
                                >
                                    <option value="" className="bg-black">Select a vehicle...</option>
                                    {cars.map(car => (
                                        <option key={car.id} value={car.id} className="bg-black">
                                            {car.make} {car.model} ({car.plateNumber})
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Name (Driver/Customer)</label>
                                <Input
                                    placeholder="Enter name"
                                    className="bg-white/5 border-white/10 text-white placeholder:text-slate-600"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Notes</label>
                                <Input
                                    placeholder="Optional notes"
                                    className="bg-white/5 border-white/10 text-white placeholder:text-slate-600"
                                    value={formData.notes}
                                    onChange={e => setFormData({ ...formData, notes: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="pt-4 mt-auto">
                            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold">
                                Add Entry
                            </Button>
                        </div>
                    </form>
                </div>
            </Sheet>

            <DeleteRegisterModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={confirmDelete}
                entry={entryToDelete}
            />
        </div>
    )
}
