import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDriveway } from '../context/DrivewayContext'
import { Card, CardContent } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Plus, Search, Phone, MapPin, User, MoreHorizontal, LayoutGrid, List, ChevronLeft, ChevronRight } from 'lucide-react'
import { AddBrokerModal } from '../components/AddBrokerModal'
import { cn } from '../lib/utils'

function BrokerCard({ dealer, transactions, onQuickView }) {
    // Calculate Pending Amount
    const pendingAmount = useMemo(() => {
        const dealerTrans = transactions.filter(t => t.dealerId === dealer.id && t.status !== 'Cancelled')
        return dealerTrans.reduce((sum, t) => {
            const total = Number(t.total) || 0
            const paid = Number(t.amountPaid) || 0
            return sum + Math.max(0, total - paid)
        }, 0)
    }, [dealer.id, transactions])

    // Mock Status Logic (Can be real later)
    // For now, if pending > 5000 -> 'Pending', else 'Available'
    const status = pendingAmount > 5000 ? 'Pending' : 'Available'
    const statusColor = status === 'Available' ? 'bg-green-500' : 'bg-red-500'
    const statusText = status === 'Available' ? 'Available' : 'Pending'

    return (
        <Card className="bg-[#1c1917] border-white/5 overflow-hidden flex flex-col h-full group hover:border-white/10 transition-colors">
            <CardContent className="p-6 flex flex-col h-full relative">

                {/* Status Dot */}
                <div className="absolute top-6 right-6 flex flex-col items-end">
                    <div className="flex items-center gap-1.5 mb-1">
                        <div className={cn("h-2 w-2 rounded-full", statusColor)}></div>
                        <span className={cn("text-[10px] font-bold uppercase tracking-wider", status === 'Available' ? "text-green-500" : "text-red-500")}>
                            {statusText}
                        </span>
                    </div>
                    {pendingAmount > 0 && (
                        <div className="text-right">
                            <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Pending</div>
                            <div className="text-sm font-bold text-red-500">₹{pendingAmount.toLocaleString()}</div>
                        </div>
                    )}
                </div>

                {/* Avatar */}
                <div className="mb-4">
                    <div className="h-20 w-20 rounded-full bg-[#292524] flex items-center justify-center overflow-hidden border-2 border-white/5 group-hover:border-white/20 transition-colors">
                        {dealer.image ? (
                            <img src={dealer.image} alt={dealer.name} className="h-full w-full object-cover" />
                        ) : (
                            <User className="h-8 w-8 text-gray-600" />
                        )}
                    </div>
                </div>

                {/* Info */}
                <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-1">{dealer.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin className="h-3 w-3" />
                        <span className="truncate">{dealer.address || 'Location Unknown'}</span>
                    </div>
                </div>

                {/* Contact */}
                <div className="mt-auto space-y-4">
                    <div className="bg-[#292524] rounded-lg p-3 flex items-center gap-3 border border-white/5">
                        <div className="h-8 w-8 rounded-full bg-red-600/10 flex items-center justify-center shrink-0">
                            <Phone className="h-4 w-4 text-red-500" />
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-xs text-gray-500 font-medium">Contact Number</p>
                            <p className="text-sm text-gray-200 font-mono">{dealer.phone}</p>
                        </div>
                    </div>

                    <Button
                        onClick={onQuickView}
                        className="w-full bg-white text-black hover:bg-gray-200 font-bold"
                    >
                        View Profile
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

function AddBrokerCard({ onClick }) {
    return (
        <div
            onClick={onClick}
            className="h-full min-h-[380px] border-2 border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center p-6 text-center cursor-pointer hover:border-white/20 hover:bg-white/5 transition-all group"
        >
            <div className="h-16 w-16 rounded-full bg-red-600/10 flex items-center justify-center mb-4 group-hover:bg-red-600/20 transition-colors">
                <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center">
                    <Plus className="h-5 w-5 text-white" />
                </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Add New Broker</h3>
            <p className="text-sm text-gray-400 max-w-[200px]">
                Onboard a new individual broker to your network and assign them a region.
            </p>
        </div>
    )
}

export function Dealers() {
    const { dealers, addDealer, transactions } = useDriveway()
    const navigate = useNavigate()

    // State
    const [searchTerm, setSearchTerm] = useState('')
    const [activeFilter, setActiveFilter] = useState('All Brokers')
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const ITEMS_PER_PAGE = 8


    // Helper to get status
    const getDealerStatus = (dealer) => {
        const dealerTrans = transactions.filter(t => t.dealerId === dealer.id && t.status !== 'Cancelled')
        const pending = dealerTrans.reduce((sum, t) => {
            const total = Number(t.total) || 0
            const paid = Number(t.amountPaid) || 0
            return sum + Math.max(0, total - paid)
        }, 0)
        return pending > 5000 ? 'Inactive' : 'Active' // Mapping Pending -> Inactive for filter purposes based on user request context, or actually 'Active' vs 'Pending'?
        // The user asked to remove "On Leave". The previous UI had "Active", "On Leave", "Inactive".
        // Let's map: 
        // Available (Low Pending) -> 'Active'
        // Pending (High Pending) -> 'Inactive' (or we could keep it as 'Active' but filter differently? 
        // Actually, usually 'Inactive' means no recent activity. Let's stick to the prompt: Remove On Leave.
        // Let's define: 
        // Active = All visible dealers? Or dealers with recent activity?
        // Let's simplify: 
        // All Brokers
        // Active (Pending <= 5000)
        // Inactive (Pending > 5000) - acting as the "Attention Needed" bucket
    }

    // Counts
    const counts = useMemo(() => {
        let activeCount = 0
        let inactiveCount = 0

        dealers.forEach(d => {
            const status = getDealerStatus(d)
            if (status === 'Active') activeCount++
            if (status === 'Inactive') inactiveCount++
        })

        return {
            all: dealers.length,
            active: activeCount,
            inactive: inactiveCount
        }
    }, [dealers, transactions])

    // Filter Logic
    const filteredDealers = useMemo(() => {
        return dealers.filter(d => {
            const matchesSearch = (d.name + ' ' + d.phone).toLowerCase().includes(searchTerm.toLowerCase())
            const status = getDealerStatus(d)

            let matchesFilter = true
            if (activeFilter === 'Active') matchesFilter = status === 'Active'
            if (activeFilter === 'Inactive') matchesFilter = status === 'Inactive'

            return matchesSearch && matchesFilter
        })
    }, [dealers, searchTerm, activeFilter, transactions])

    // Pagination Logic
    const totalPages = Math.ceil(filteredDealers.length / ITEMS_PER_PAGE)
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const currentDealers = filteredDealers.slice(startIndex, startIndex + ITEMS_PER_PAGE)

    const handlePageChange = (page) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }







    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/5 pb-8">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-3 tracking-tight">Broker Network</h1>
                    <p className="text-gray-400 max-w-2xl text-lg">
                        Manage your individual car rental brokers, track their performance, and handle contact details.
                    </p>
                </div>
                <Button
                    onClick={() => setIsAddModalOpen(true)}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold h-12 px-6 shadow-lg shadow-red-900/20"
                >
                    <Plus className="mr-2 h-5 w-5" /> Add New Broker
                </Button>
            </div>

            {/* Toolbar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Search */}
                <div className="relative w-full md:w-[400px]">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <Input
                        placeholder="Search brokers by name, phone or ID..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="bg-[#1c1917] border-white/5 pl-11 h-12 text-white placeholder:text-gray-600 focus:ring-red-500 rounded-xl"
                    />
                </div>

                {/* Filters */}
                <div className="flex gap-1 bg-[#1c1917] p-1.5 rounded-xl border border-white/5">
                    {[
                        { label: 'All Brokers', count: null },
                        { label: 'Active', count: counts.active },
                        { label: 'Inactive', count: counts.inactive }
                    ].map(filter => (
                        <button
                            key={filter.label}
                            onClick={() => setActiveFilter(filter.label)}
                            className={cn(
                                "px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
                                activeFilter === filter.label
                                    ? "bg-white text-black shadow-sm"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            {filter.label}
                            {filter.count !== null && (
                                <span className={cn(
                                    "text-[10px] px-1.5 py-0.5 rounded-full font-bold",
                                    activeFilter === filter.label ? "bg-black/10 text-black" : "bg-white/10 text-gray-400"
                                )}>
                                    {filter.count}
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentDealers.map(dealer => (
                    <BrokerCard
                        key={dealer.id}
                        dealer={dealer}
                        transactions={transactions}
                        onQuickView={() => navigate(`/dealers/${dealer.id}`)}
                    />
                ))}

                <AddBrokerCard onClick={() => setIsAddModalOpen(true)} />
            </div>

            {/* Pagination Controls */}
            {filteredDealers.length > ITEMS_PER_PAGE && (
                <div className="flex justify-center items-center gap-2 mt-8">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className="border-white/10 hover:bg-white/5"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <div className="text-sm text-gray-400">
                        Page <span className="text-white font-bold">{currentPage}</span> of {totalPages}
                    </div>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className="border-white/10 hover:bg-white/5"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            )}

            {/* Add Dealer Modal */}
            <AddBrokerModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onAdd={(data) => {
                    try {
                        addDealer(data)
                        setIsAddModalOpen(false)
                    } catch (error) {
                        alert(error.message)
                    }
                }}
            />
        </div>
    )
}
