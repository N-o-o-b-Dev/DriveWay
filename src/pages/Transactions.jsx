import { useState, useMemo } from 'react'
import { useDriveway } from '../context/DrivewayContext'
import { Card, CardContent } from '../components/ui/Card'
import { Edit, Search, User, Briefcase, Calendar, CheckCircle, AlertCircle, Plus, Filter, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Badge } from '../components/ui/Badge'
import { EditTransactionModal } from '../components/EditTransactionModal'
import { cn } from '../lib/utils'

export function Transactions() {
    const { transactions, cars, customers, dealers } = useDriveway()
    const [editingTransaction, setEditingTransaction] = useState(null)
    const [searchTerm, setSearchTerm] = useState('')
    const [activeTab, setActiveTab] = useState('All') // 'All', 'Pending', 'Completed'
    const [currentPage, setCurrentPage] = useState(1)
    const ITEMS_PER_PAGE = 9

    // Filtering Logic
    const filteredTransactions = useMemo(() => {
        return transactions.filter(t => {
            const car = cars.find(c => c.id === t.carId)
            const customer = customers.find(c => c.id === t.customerId)
            const dealer = t.dealerId ? dealers.find(d => d.id === t.dealerId) : null

            // Search Match
            const searchString = `${car?.plateNumber} ${customer?.name} ${dealer?.name}`.toLowerCase()
            const matchesSearch = searchString.includes(searchTerm.toLowerCase())

            // Financials for Status
            const total = Number(t.total) || 0
            const paid = (t.payments || []).reduce((sum, p) => p.type === 'Credit' ? sum + Number(p.amount) : sum - Number(p.amount), 0)
            const isFullyPaid = (total - paid) <= 0

            // Tab Filter Match
            let matchesTab = true
            if (activeTab === 'Pending') matchesTab = !isFullyPaid
            if (activeTab === 'Completed') matchesTab = isFullyPaid

            return matchesSearch && matchesTab
        }).sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
    }, [transactions, cars, customers, dealers, searchTerm, activeTab])

    const getPendingCount = () => {
        return transactions.filter(t => {
            const total = Number(t.total) || 0
            const paid = (t.payments || []).reduce((sum, p) => p.type === 'Credit' ? sum + Number(p.amount) : sum - Number(p.amount), 0)
            return (total - paid) > 0
        }).length
    }

    // Pagination Logic
    const totalPages = Math.ceil(filteredTransactions.length / ITEMS_PER_PAGE)
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const currentTransactions = filteredTransactions.slice(startIndex, startIndex + ITEMS_PER_PAGE)

    const handlePageChange = (page) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">Active Rentals</h1>
                    <p className="text-gray-400">Manage ongoing rentals, track payments, and view detailed status reports.</p>
                </div>
                {/* <Button className="bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-900/20">
                    <Plus className="mr-2 h-4 w-4" /> Add New Rental
                </Button> */}
            </div>

            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 items-center bg-[#1c1917] p-2 rounded-xl border border-white/5">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <Input
                        placeholder="Search by plate, customer, or broker name..."
                        className="bg-transparent border-none pl-10 text-white placeholder:text-gray-600 focus-visible:ring-0 focus-visible:ring-offset-0"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                    {[
                        { id: 'All', label: 'All Rentals' },
                        { id: 'Pending', label: 'Pending', count: getPendingCount() },
                        { id: 'Completed', label: 'Completed' }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap flex items-center gap-2",
                                activeTab === tab.id
                                    ? "bg-white text-black"
                                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                            )}
                        >
                            {tab.label}
                            {tab.id === 'Pending' && tab.count > 0 && (
                                <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                                    {tab.count}
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentTransactions.map(t => {
                    const car = cars.find(c => c.id === t.carId)
                    const customer = customers.find(c => c.id === t.customerId)
                    const dealer = t.dealerId ? dealers.find(d => d.id === t.dealerId) : null

                    // Financials
                    const total = Number(t.total) || 0
                    const paid = (t.payments || []).reduce((sum, p) => p.type === 'Credit' ? sum + Number(p.amount) : sum - Number(p.amount), 0)
                    const pending = Math.max(0, total - paid)
                    const progress = total > 0 ? (paid / total) * 100 : 0
                    const isFullyPaid = pending <= 0

                    // Status Logic
                    const statusColor = isFullyPaid ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                        'bg-red-500/10 text-red-500 border-red-500/20'
                    const statusLabel = isFullyPaid ? 'Completed' : 'Pending'

                    return (
                        <Card key={t.id} className="bg-[#1c1917] border-white/5 hover:border-white/10 transition-colors group relative overflow-hidden flex flex-col">
                            {/* Accent Line */}
                            {!isFullyPaid && <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500" />}

                            <CardContent className="p-6 flex-1 flex flex-col">
                                {/* Header: Plate & Status */}
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">PLATE NUMBER</p>
                                        <h3 className="text-2xl font-black text-white font-mono">{car?.plateNumber || 'UNKNOWN'}</h3>
                                    </div>
                                    <Badge className={cn("border", statusColor)}>
                                        {statusLabel}
                                    </Badge>
                                </div>

                                {/* Participants Grid */}
                                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-[#292524]/50 rounded-xl border border-white/5">
                                    <div>
                                        <div className="flex items-center gap-1.5 mb-1 text-gray-400">
                                            <User className="h-3 w-3" />
                                            <span className="text-[10px] font-medium uppercase">Customer</span>
                                        </div>
                                        <p className="text-sm font-bold text-white truncate">{customer?.name}</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-1.5 mb-1 text-gray-400">
                                            <Briefcase className="h-3 w-3" />
                                            <span className="text-[10px] font-medium uppercase">Broker</span>
                                        </div>
                                        <p className="text-sm font-bold text-white truncate">{dealer?.name || 'Direct'}</p>
                                    </div>
                                    <div className="col-span-2 pt-3 border-t border-white/5 flex justify-between">
                                        <div>
                                            <div className="flex items-center gap-1.5 mb-1 text-gray-400">
                                                <Calendar className="h-3 w-3" />
                                                <span className="text-[10px] font-medium uppercase">Start</span>
                                            </div>
                                            <p className="text-xs font-medium text-white">{new Date(t.startDate).toLocaleDateString()}</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex items-center justify-end gap-1.5 mb-1 text-gray-400">
                                                <Calendar className="h-3 w-3" />
                                                <span className="text-[10px] font-medium uppercase">End</span>
                                            </div>
                                            <p className="text-xs font-medium text-white">
                                                {new Date(t.endDate).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Financials */}
                                <div className="mt-auto">
                                    <div className="flex justify-between items-end mb-2">
                                        <div>
                                            <p className="text-[10px] text-gray-500 mb-0.5">Total Amount</p>
                                            <p className="text-xl font-black text-white">₹{total.toLocaleString()}</p>
                                        </div>
                                        <div className="text-right">
                                            {isFullyPaid ? (
                                                <div className="flex items-center gap-1 text-green-500 mb-1">
                                                    <CheckCircle className="h-3 w-3" />
                                                    <span className="text-xs font-bold">Fully Paid</span>
                                                </div>
                                            ) : (
                                                <div className="mb-1">
                                                    <span className="text-[10px] text-green-500 mr-2">Paid: ₹{paid.toLocaleString()}</span>
                                                    <span className="text-xs font-bold text-red-500 bg-red-500/10 px-2 py-0.5 rounded">
                                                        Pending: ₹{pending.toLocaleString()}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {/* Progress Bar */}
                                    <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                                        <div
                                            className={cn("h-full rounded-full transition-all duration-500", isFullyPaid ? "bg-green-500" : "bg-red-500")}
                                            style={{ width: `${Math.max(5, progress)}%` }}
                                        />
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="grid grid-cols-2 gap-3 mt-6">
                                        <Button
                                            variant="outline"
                                            className="w-full border-white/10 hover:bg-white/5 hover:text-white"
                                            onClick={() => setEditingTransaction(t)}
                                        >
                                            Edit Details
                                        </Button>
                                        <Button
                                            className={cn(
                                                "w-full font-bold shadow-lg",
                                                isFullyPaid ? "bg-green-600 hover:bg-green-700 shadow-green-900/20" : "bg-red-600 hover:bg-red-700 shadow-red-900/20"
                                            )}
                                            onClick={() => setEditingTransaction(t)}
                                        >
                                            {isFullyPaid ? 'View Invoice' : 'Make Payment'}
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>

            {filteredTransactions.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                    <p>No transactions found matching your criteria.</p>
                </div>
            )}

            {/* Pagination Controls */}
            {filteredTransactions.length > ITEMS_PER_PAGE && (
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

            <EditTransactionModal
                isOpen={!!editingTransaction}
                onClose={() => setEditingTransaction(null)}
                transaction={editingTransaction}
            />
        </div>
    )
}
