import { useState, useMemo } from 'react'
import { useDriveway } from '../context/DrivewayContext'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Badge } from '../components/ui/Badge'
import {
    Wrench,
    MapPin,
    Phone,
    ArrowRight,
    Plus,
    Edit,
    Trash2,
    Search,
    Filter,
    Calendar as CalendarIcon,
    Grid,
    List,
    Clock,
    CheckCircle2,
    AlertCircle,
    MoreVertical,
    Banknote,
    Car,
    User
} from 'lucide-react'
import { WorkshopDetailsDrawer } from '../components/WorkshopDetailsDrawer'
import { AddMaintenanceModal } from '../components/AddMaintenanceModal'
import { EditMaintenanceModal } from '../components/EditMaintenanceModal'
import { EditWorkshopDrawer } from '../components/EditWorkshopDrawer'
import { cn } from '../lib/utils'

export function Maintenance() {
    const { maintenanceRecords, cars, deleteWorkshop, deleteMaintenanceRecord } = useDriveway()
    const [activeTab, setActiveTab] = useState("dashboard") // 'dashboard' | 'workshops'
    const [searchTerm, setSearchTerm] = useState('')
    const [statusFilter, setStatusFilter] = useState('All')

    // Workshop Tab State
    const [workshopSearch, setWorkshopSearch] = useState('')
    const [workshopFilter, setWorkshopFilter] = useState('All') // 'All', 'Rated'

    // Drawers State
    const [selectedWorkshop, setSelectedWorkshop] = useState(null)
    const [isDetailsDrawerOpen, setIsDetailsDrawerOpen] = useState(false)
    const [isAddMaintenanceOpen, setIsAddMaintenanceOpen] = useState(false)
    const [editingRecord, setEditingRecord] = useState(null)
    const [isEditMaintenanceOpen, setIsEditMaintenanceOpen] = useState(false)
    const [isEditWorkshopOpen, setIsEditWorkshopOpen] = useState(false)

    // --- Data Derivation ---

    // 1. Group records by workshop
    const workshops = useMemo(() => {
        return maintenanceRecords.reduce((acc, record) => {
            if (!acc[record.workshopName]) {
                acc[record.workshopName] = {
                    name: record.workshopName,
                    details: record.workshopDetails,
                    totalSpent: 0,
                    completedJobs: 0,
                    rating: (4 + Math.random()).toFixed(1), // Mock rating for UI
                    records: []
                }
            }
            acc[record.workshopName].totalSpent += Number(record.amount || 0)
            acc[record.workshopName].completedJobs += 1
            acc[record.workshopName].records.push(record)
            return acc
        }, {})
    }, [maintenanceRecords])

    // Filtered Workshops Logic
    const filteredWorkshops = useMemo(() => {
        let result = Object.values(workshops)

        if (workshopSearch) {
            const lower = workshopSearch.toLowerCase()
            result = result.filter(w =>
                w.name.toLowerCase().includes(lower) ||
                (w.details && w.details.toLowerCase().includes(lower))
            )
        }

        if (workshopFilter === 'Rated') {
            result = [...result].sort((a, b) => Number(b.rating) - Number(a.rating))
        }

        return result
    }, [workshops, workshopSearch, workshopFilter])

    // 2. Dashboard KPIs
    const kpis = useMemo(() => {
        const now = new Date() // specific Time
        const active = maintenanceRecords.filter(r => {
            if (!r.returnDate) return true
            return new Date(r.returnDate) > now
        }).length
        const pending = maintenanceRecords.filter(r => r.paymentStatus === 'Pending').length

        // Calculate average downtime
        let totalDowntime = 0
        let completedCount = 0
        maintenanceRecords.forEach(r => {
            if (r.returnDate) {
                const start = new Date(r.date)
                const end = new Date(r.returnDate)
                const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24))
                totalDowntime += days
                completedCount++
            }
        })
        const avgDowntime = completedCount > 0 ? Math.round(totalDowntime / completedCount) : 0

        // Calculate Monthly Cost
        // const now = new Date() // Reuse above
        const currentMonthCost = maintenanceRecords
            .filter(r => {
                const d = new Date(r.date)
                return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
            })
            .reduce((sum, r) => sum + Number(r.amount || 0), 0)

        return { active, pending, avgDowntime, currentMonthCost }
    }, [maintenanceRecords])

    // Helper: Determine detailed status
    const getMaintenanceStatus = (record) => {
        const now = new Date()
        const returnDate = record.returnDate ? new Date(record.returnDate) : null
        const isPaid = !record.paymentStatus || record.paymentStatus === 'Paid' // Adjust based on your payment logic if needed, usually 'Pending' is explicit

        // 1. If return date is in future (or null/unlimited), it's In Progress
        if (!returnDate || returnDate > now) {
            return { label: 'Active Repair', color: 'bg-blue-500/10 text-blue-500', value: 'Active' }
        }

        // 2. If date passed (returnDate <= now) AND not fully paid
        if (returnDate <= now && !isPaid) {
            return { label: 'Pending Payment', color: 'bg-orange-500/10 text-orange-500', value: 'Pending' }
        }

        // 3. Otherwise (Date passed + Paid) -> Complete
        return { label: 'Complete', color: 'bg-green-500/10 text-green-500', value: 'Completed' }
    }

    // 3. Filtered Records for Table
    const filteredRecords = maintenanceRecords.filter(record => {
        const car = cars.find(c => c.id === record.carId)
        const status = getMaintenanceStatus(record)

        const matchesSearch =
            (car ? car.model.toLowerCase() : '').includes(searchTerm.toLowerCase()) ||
            (car ? car.plateNumber.toLowerCase() : '').includes(searchTerm.toLowerCase()) ||
            record.workshopName.toLowerCase().includes(searchTerm.toLowerCase())

        const matchesStatus = statusFilter === 'All' ? true :
            statusFilter === 'Active' ? status.value === 'Active' :
                statusFilter === 'Pending' ? status.value === 'Pending' : true

        return matchesSearch && matchesStatus
    }).sort((a, b) => new Date(b.date) - new Date(a.date))


    // --- Actions ---

    const handleViewDetails = (workshop) => {
        setSelectedWorkshop(workshop)
        setIsDetailsDrawerOpen(true)
    }

    const handleEditMaintenance = (record) => {
        setEditingRecord(record)
        setIsEditMaintenanceOpen(true)
    }

    const handleEditWorkshop = (workshop) => {
        setSelectedWorkshop(workshop)
        setIsEditWorkshopOpen(true)
    }

    const handleDeleteWorkshop = (workshopName) => {
        if (window.confirm(`Are you sure you want to delete "${workshopName}"?\nThis will permanently delete ALL maintenance history associated with this workshop.`)) {
            deleteWorkshop(workshopName)
        }
    }

    const handleDeleteRecord = (id) => {
        if (window.confirm('Are you sure you want to delete this maintenance record?')) {
            deleteMaintenanceRecord(id)
        }
    }

    // --- Render ---

    return (
        <div className="space-y-6">

            {/* Conditional Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-white mb-1">
                        {activeTab === 'dashboard' ? 'Maintenance Dashboard' : 'Workshop Management'}
                    </h1>
                    <p className="text-slate-400">
                        {activeTab === 'dashboard'
                            ? 'Overview of fleet health and active repairs.'
                            : 'Manage your repair and maintenance partners'
                        }
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    {/* Tabs Switcher - Mimic Navigation */}
                    <div className="bg-[#1c1917] border border-white/5 p-1 rounded-lg flex items-center">
                        <button
                            onClick={() => setActiveTab('dashboard')}
                            className={cn(
                                "px-4 py-2 text-sm font-medium rounded-md transition-all",
                                activeTab === 'dashboard'
                                    ? "bg-[#292524] text-white shadow-sm"
                                    : "text-slate-400 hover:text-white"
                            )}
                        >
                            Overview
                        </button>
                        <button
                            onClick={() => setActiveTab('workshops')}
                            className={cn(
                                "px-4 py-2 text-sm font-medium rounded-md transition-all",
                                activeTab === 'workshops'
                                    ? "bg-[#292524] text-white shadow-sm"
                                    : "text-slate-400 hover:text-white"
                            )}
                        >
                            Workshops
                        </button>
                    </div>

                    <Button
                        onClick={() => setIsAddMaintenanceOpen(true)}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold"
                    >
                        <Plus className="mr-2 h-4 w-4" />
                        {activeTab === 'dashboard' ? 'Add Maintenance Request' : 'Add New Workshop'}
                    </Button>
                </div>
            </div>

            {/* --- DASHBOARD VIEW --- */}
            {activeTab === 'dashboard' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

                    {/* KPI Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="bg-[#1c1917] border border-white/5 rounded-xl p-6 relative group overflow-hidden">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-sm font-medium text-slate-400">Active Repairs</span>
                                <Wrench className="h-4 w-4 text-red-500" />
                            </div>
                            <div className="text-3xl font-bold text-white">{kpis.active}</div>
                            <div className="absolute right-0 bottom-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                                <Wrench className="h-24 w-24 translate-x-4 translate-y-4" />
                            </div>
                        </div>

                        <div className="bg-[#1c1917] border border-white/5 rounded-xl p-6 relative group overflow-hidden">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-sm font-medium text-slate-400">Pending Approval</span>
                                <AlertCircle className="h-4 w-4 text-orange-500" />
                            </div>
                            <div className="text-3xl font-bold text-white">{kpis.pending}</div>
                            <div className="absolute right-0 bottom-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                                <AlertCircle className="h-24 w-24 translate-x-4 translate-y-4" />
                            </div>
                        </div>

                        <div className="bg-[#1c1917] border border-white/5 rounded-xl p-6 relative group overflow-hidden">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-sm font-medium text-slate-400">Avg. Downtime</span>
                                <Clock className="h-4 w-4 text-blue-500" />
                            </div>
                            <div className="text-3xl font-bold text-white">{kpis.avgDowntime} <span className="text-sm font-normal text-slate-500">Days</span></div>
                            <div className="absolute right-0 bottom-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                                <Clock className="h-24 w-24 translate-x-4 translate-y-4" />
                            </div>
                        </div>

                        <div className="bg-[#1c1917] border border-white/5 rounded-xl p-6 relative group overflow-hidden">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-sm font-medium text-slate-400">Total Cost (Mo)</span>
                                <Banknote className="h-4 w-4 text-green-500" />
                            </div>
                            <div className="text-3xl font-bold text-white">₹{kpis.currentMonthCost.toLocaleString()}</div>
                            <div className="absolute right-0 bottom-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                                <Banknote className="h-24 w-24 translate-x-4 translate-y-4" />
                            </div>
                        </div>
                    </div>

                    {/* Filters & Table */}
                    <div className="bg-[#1c1917] border border-white/5 rounded-xl overflow-hidden">
                        {/* Filter Bar */}
                        <div className="p-4 border-b border-white/5 flex flex-col md:flex-row gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                                <Input
                                    placeholder="Search by Vehicle or Plate"
                                    className="pl-9 bg-black/20 border-white/10 text-white placeholder:text-slate-600"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <div className="w-full md:w-48">
                                <select
                                    className="w-full h-10 px-3 bg-black/20 border border-white/10 rounded-md text-white text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                >
                                    <option value="All">All Statuses</option>
                                    <option value="Active">In Progress</option>
                                    <option value="Pending">Pending Payment</option>
                                </select>
                            </div>
                            <div className="w-full md:w-48 relative">
                                <CalendarIcon className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                                <div className="w-full h-10 px-3 pl-9 bg-black/20 border border-white/10 rounded-md text-slate-500 text-sm flex items-center">
                                    Date Range
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-white/10"><List className="h-4 w-4" /></Button>
                                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-white/10"><Grid className="h-4 w-4" /></Button>
                            </div>
                        </div>

                        {/* List Header */}
                        <div className="grid grid-cols-12 px-6 py-3 bg-black/20 border-b border-white/5 text-xs font-bold text-slate-500 uppercase tracking-wider">
                            <div className="col-span-3">Vehicle</div>
                            <div className="col-span-3">Description</div>
                            <div className="col-span-2">Workshop</div>
                            <div className="col-span-2">Est. Completion</div>
                            <div className="col-span-1">Status</div>
                            <div className="col-span-1 text-right">Actions</div>
                        </div>

                        {/* List Body */}
                        <div className="divide-y divide-white/5">
                            {filteredRecords.map((record) => {
                                const car = cars.find(c => c.id === record.carId)
                                const status = getMaintenanceStatus(record)
                                return (
                                    <div key={record.id} className="grid grid-cols-12 px-6 py-4 items-center hover:bg-white/[0.02] transition-colors group">
                                        {/* Vehicle */}
                                        <div className="col-span-3 flex items-center gap-3">
                                            <div className="h-10 w-16 bg-white/5 rounded-md overflow-hidden flex items-center justify-center shrink-0">
                                                {car?.image ? <img src={car.image} alt="car" className="h-full w-full object-cover" /> : <Car className="h-5 w-5 text-slate-600" />}
                                            </div>
                                            <div>
                                                <div className="font-bold text-white text-sm">{car ? `${car.make} ${car.model}` : 'Unknown'}</div>
                                                <div className="text-xs text-slate-500">{car?.plateNumber || '---'}</div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <div className="col-span-3">
                                            <div className="font-medium text-white text-sm truncate">{record.description || 'Maintenance'}</div>
                                            <div className="text-xs text-red-400 font-medium">Urgent</div>
                                        </div>

                                        {/* Workshop */}
                                        <div className="col-span-2 text-sm text-slate-400 truncate">
                                            {record.workshopName}
                                        </div>

                                        {/* Date */}
                                        <div className="col-span-2 text-sm text-white font-medium">
                                            {record.returnDate ? new Date(record.returnDate).toLocaleDateString() : '--'}
                                        </div>

                                        {/* Status */}
                                        <div className="col-span-1">
                                            <Badge className={cn(
                                                "border-0 whitespace-nowrap",
                                                status.color
                                            )}>
                                                {status.label}
                                            </Badge>
                                        </div>

                                        {/* Actions */}
                                        <div className="col-span-1 flex justify-end">
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-white" onClick={() => handleEditMaintenance(record)}>
                                                <MoreVertical className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                )
                            })}
                            {filteredRecords.length === 0 && (
                                <div className="p-8 text-center text-slate-500">No maintenance records found.</div>
                            )}
                        </div>
                        {/* Footer / Pagination */}
                        <div className="p-4 border-t border-white/5 flex justify-between items-center text-xs text-slate-500">
                            <div>Showing 1-{filteredRecords.length} of {maintenanceRecords.length} vehicles</div>
                            <div className="flex gap-1">
                                <Button variant="outline" size="icon" className="h-8 w-8 bg-black/20 border-white/10" disabled>{'<'}</Button>
                                <Button variant="outline" size="icon" className="h-8 w-8 bg-black/20 border-white/10" disabled>{'>'}</Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* --- WORKSHOPS VIEW --- */}
            {activeTab === 'workshops' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {/* Filter Bar */}
                    <div className="bg-[#1c1917] border border-white/5 rounded-xl p-2 flex flex-col md:flex-row gap-2">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                            <Input
                                placeholder="Search workshops..."
                                className="pl-9 bg-transparent border-0 focus-visible:ring-0 text-white placeholder:text-slate-600"
                                value={workshopSearch}
                                onChange={(e) => setWorkshopSearch(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center gap-2 border-l border-white/10 pl-2">
                            <Button
                                variant="ghost"
                                className={cn("text-white", workshopFilter === 'All' ? "bg-white/10" : "text-slate-400 hover:text-white")}
                                onClick={() => setWorkshopFilter('All')}
                            >
                                All Workshops
                            </Button>
                            {/* Nearby Mock - defaulting to All for now as no geo data */}
                            <Button variant="ghost" className="text-slate-400 hover:text-white">Nearby</Button>
                            <Button
                                variant="ghost"
                                className={cn("text-white", workshopFilter === 'Rated' ? "bg-white/10" : "text-slate-400 hover:text-white")}
                                onClick={() => setWorkshopFilter('Rated')}
                            >
                                Highest Rated
                            </Button>
                            <Button variant="outline" className="ml-2 bg-black/20 border-white/10 text-slate-300"><Filter className="h-4 w-4 mr-2" />Filter</Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredWorkshops.map((workshop) => (
                            <Card key={workshop.name} className="bg-[#1c1917] border-white/5 text-white overflow-hidden hover:border-red-500/50 transition-colors group">
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="h-12 w-12 rounded-full bg-slate-800 flex items-center justify-center text-lg font-bold text-slate-300 group-hover:bg-red-500 group-hover:text-white transition-colors">
                                            {workshop.name.slice(0, 2).toUpperCase()}
                                        </div>
                                        <Button variant="ghost" size="icon" className="h-8 w-8 -mr-2 -mt-2 text-slate-500"><MoreVertical className="h-4 w-4" /></Button>
                                    </div>

                                    <h3 className="text-lg font-bold mb-1 truncate">{workshop.name}</h3>
                                    <div className="flex items-center gap-1 text-yellow-500 text-sm mb-4">
                                        <span>★</span> <span className="font-bold text-white">{workshop.rating}</span> <span className="text-slate-500">({workshop.completedJobs} jobs)</span>
                                    </div>

                                    <div className="space-y-3 text-sm text-slate-400">
                                        <div className="flex items-center gap-3">
                                            <MapPin className="h-4 w-4 text-slate-600" />
                                            <span className="truncate">{workshop.details}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <User className="h-4 w-4 text-slate-600" />
                                            <span className="truncate">Manager</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Phone className="h-4 w-4 text-slate-600" />
                                            <span className="truncate">{workshop.records[0]?.phoneNumber || '---'}</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 mt-6">
                                        <Button
                                            variant="outline"
                                            className="bg-transparent border-white/10 hover:bg-white/5 hover:text-white uppercase text-xs font-bold tracking-wider"
                                            onClick={() => handleEditWorkshop(workshop)}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="bg-transparent border-red-500/20 text-red-500 hover:bg-red-500/10 hover:text-red-400 uppercase text-xs font-bold tracking-wider"
                                            onClick={() => window.open(`tel:${workshop.records[0]?.phoneNumber}`)}
                                        >
                                            Call
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        ))}

                        {/* Add New Card (Visual Placeholder for UX) */}
                        <button
                            onClick={() => setIsAddMaintenanceOpen(true)}
                            className="bg-transparent border border-dashed border-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-4 text-slate-500 hover:border-red-500/50 hover:text-red-500 transition-all group h-full min-h-[300px]"
                        >
                            <div className="h-16 w-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-red-500/10 transition-colors">
                                <Plus className="h-8 w-8" />
                            </div>
                            <span className="font-bold">Add Workshop</span>
                            <span className="text-xs text-center max-w-[200px] text-slate-600">Register a new partner to your fleet network</span>
                        </button>
                    </div>
                </div>
            )}

            {/* Drawers */}
            <WorkshopDetailsDrawer
                isOpen={isDetailsDrawerOpen}
                onClose={() => setIsDetailsDrawerOpen(false)}
                workshop={selectedWorkshop}
            />

            <AddMaintenanceModal
                isOpen={isAddMaintenanceOpen}
                onClose={() => setIsAddMaintenanceOpen(false)}
            />

            <EditMaintenanceModal
                isOpen={isEditMaintenanceOpen}
                onClose={() => setIsEditMaintenanceOpen(false)}
                record={editingRecord}
            />

            <EditWorkshopDrawer
                isOpen={isEditWorkshopOpen}
                onClose={() => setIsEditWorkshopOpen(false)}
                workshop={selectedWorkshop}
            />
        </div>
    )
}
