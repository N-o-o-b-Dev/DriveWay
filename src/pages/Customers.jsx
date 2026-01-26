import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDriveway } from '../context/DrivewayContext'
import { Card, CardContent } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import {
    Plus, Search, Filter, User, Users, UserCheck,
    UserX, Phone, ShieldCheck, Download, MoreHorizontal, LayoutGrid, List, ChevronLeft, ChevronRight, AlertCircle
} from 'lucide-react'
import { EditCustomerModal } from '../components/EditCustomerModal'
import { AddCustomerModal } from '../components/AddCustomerModal'
import { cn } from '../lib/utils'

function QuickStatCard({ title, value, subtext, icon: Icon, trend }) {
    return (
        <Card className="bg-[#1c1917] border-white/5">
            <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <p className="text-sm text-gray-400 font-medium">{title}</p>
                        <h3 className="text-3xl font-bold text-white mt-1">{value}</h3>
                    </div>
                    <div className="p-2 bg-white/5 rounded-lg">
                        <Icon className="h-5 w-5 text-gray-400" />
                    </div>
                </div>
                {subtext && (
                    <div className="flex items-center gap-2">
                        {trend && (
                            <span className={cn(
                                "text-xs font-bold px-1.5 py-0.5 rounded",
                                trend > 0 ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                            )}>
                                {trend > 0 ? '+' : ''}{trend}%
                            </span>
                        )}
                        <span className="text-xs text-gray-500">{subtext}</span>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}

function CustomerGridCard({ customer, onClick, transactions = [], manualCustomerTransactions = [] }) {
    const statusColor =
        customer.status === 'Blacklisted' ? 'bg-red-500' :
            customer.status === 'VIP' ? 'bg-yellow-500' :
                'bg-green-500'

    // Calculate Pending Amount (Logic from CustomerDetailsPage)
    const pendingAmount = useMemo(() => {
        let totalSpent = 0
        let totalPaid = 0

        // 1. Rentals - ONLY DEBITS (Start of transaction)
        transactions
            .filter(t => t.customerId === customer.id)
            .forEach(t => {
                totalSpent += Number(t.total) || 0
                // totalPaid is tracked via manual transactions now (credits)
            })

        // 2. Manual Transactions
        manualCustomerTransactions
            .filter(t => t.customerId === customer.id)
            .forEach(t => {
                if (t.type === 'Debit') {
                    totalSpent += Number(t.amount) || 0
                } else if (t.type === 'Credit') {
                    totalPaid += Number(t.amount) || 0
                }
            })

        return Math.max(0, totalSpent - totalPaid)
    }, [customer.id, transactions, manualCustomerTransactions])

    return (
        <Card className="bg-[#1c1917] border-white/5 overflow-hidden group hover:border-white/20 transition-all">
            <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                    {/* Avatar */}
                    <div className="relative mb-4">
                        <div className="h-20 w-20 rounded-full bg-[#292524] flex items-center justify-center overflow-hidden border-2 border-white/10 group-hover:border-white/30 transition-colors">
                            {customer.image ? (
                                <img src={customer.image} alt={customer.name} className="h-full w-full object-cover" />
                            ) : (
                                <User className="h-8 w-8 text-gray-500" />
                            )}
                        </div>
                        <div className={cn("absolute bottom-0 right-0 h-5 w-5 rounded-full border-4 border-[#1c1917]", statusColor)} />
                    </div>

                    {/* Info */}
                    <h3 className="text-lg font-bold text-white mb-1">{customer.name}</h3>
                    <p className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-4">
                        ID: {customer.uniqueId || '#CUST-XXXX'}
                    </p>

                    {/* Contact Stats */}
                    <div className="w-full space-y-3 mb-6">
                        <div className="flex items-center justify-between text-sm py-2 border-b border-white/5">
                            <span className="flex items-center gap-2 text-gray-400">
                                <Phone className="h-3 w-3" /> Phone
                            </span>
                            <span className="text-gray-200">{customer.phone}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm py-2 border-b border-white/5">
                            <span className="flex items-center gap-2 text-gray-400">
                                <ShieldCheck className="h-3 w-3" /> Status
                            </span>
                            <span className={cn(
                                "text-xs px-2 py-0.5 rounded font-medium",
                                customer.status === 'Blacklisted' ? "bg-red-500/10 text-red-500" : "bg-green-500/10 text-green-500"
                            )}>
                                {customer.status || 'Active'}
                            </span>
                        </div>
                        {/* Pending Amount */}
                        <div className="flex items-center justify-between text-sm py-2 border-b border-white/5">
                            <span className="flex items-center gap-2 text-gray-400">
                                <AlertCircle className="h-3 w-3" /> Due
                            </span>
                            <span className={cn(
                                "font-bold",
                                pendingAmount > 0 ? "text-red-500" : "text-green-500"
                            )}>
                                ₹{pendingAmount.toLocaleString()}
                            </span>
                        </div>
                    </div>


                    {/* Action */}
                    <Button
                        className="w-full bg-[#292524] hover:bg-[#3f3a38] text-white border-none"
                        onClick={onClick}
                    >
                        View Profile
                    </Button>
                </div>
            </CardContent>
        </Card >
    )
}

export function Customers() {
    const { customers, addCustomer, transactions, manualCustomerTransactions } = useDriveway()
    const navigate = useNavigate()

    // State
    const [searchTerm, setSearchTerm] = useState('')
    const [statusFilter, setStatusFilter] = useState('All Customers') // 'All Customers', 'Active Rentals', 'Blacklisted', 'VIP'
    const [viewMode, setViewMode] = useState('grid') // 'grid' | 'list'
    const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false)
    const [editingCustomer, setEditingCustomer] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const ITEMS_PER_PAGE = 8

    // Derived Data
    const stats = useMemo(() => {
        const total = customers.length

        // Active Rentals
        const activeRentalsCount = new Set(
            transactions
                .filter(t => {
                    const now = new Date()
                    return new Date(t.startDate) <= now && new Date(t.endDate) >= now && t.status !== 'Cancelled'
                })
                .map(t => t.customerId)
        ).size

        // New This Month
        const now = new Date()
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
        const newThisMonth = customers.filter(c => c.createdAt && new Date(c.createdAt) >= startOfMonth).length

        // Blacklisted
        const blacklisted = customers.filter(c => c.status === 'Blacklisted').length

        return {
            total,
            activeRentals: activeRentalsCount,
            newThisMonth,
            blacklisted
        }
    }, [customers, transactions])

    const filteredCustomers = useMemo(() => {
        return customers.filter(c => {
            const matchesSearch = (c.name + ' ' + c.phone + ' ' + c.email).toLowerCase().includes(searchTerm.toLowerCase())

            let matchesFilter = true
            if (statusFilter === 'Active Rentals') {
                // Check if customer has active transaction
                const hasActive = transactions.some(t =>
                    t.customerId === c.id &&
                    new Date(t.startDate) <= new Date() &&
                    (!t.endDate || new Date(t.endDate) >= new Date()) &&
                    t.status !== 'Cancelled' && t.status !== 'Completed'
                )
                matchesFilter = hasActive
            } else if (statusFilter === 'Blacklisted') {
                matchesFilter = c.status === 'Blacklisted'
            } else if (statusFilter === 'VIP') {
                matchesFilter = c.status === 'VIP' // Or logic for high spenders
            }

            return matchesSearch && matchesFilter
        })
    }, [customers, searchTerm, statusFilter, transactions])

    // Pagination Logic
    const totalPages = Math.ceil(filteredCustomers.length / ITEMS_PER_PAGE)
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const currentCustomers = filteredCustomers.slice(startIndex, startIndex + ITEMS_PER_PAGE)

    const handlePageChange = (page) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }


    // Handlers
    const handleAddCustomer = (newCustomerData) => {
        // Just wrap the add logic from context or drawer usage
        // This component might usually just open the drawer, logic inside drawer
    }


    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Customer Management</h1>
                    <p className="text-gray-400">View and manage your customer database, history, and status.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="border-white/10 text-gray-300 hover:bg-white/5">
                        <Download className="mr-2 h-4 w-4" /> Export
                    </Button>
                    <Button
                        className="bg-red-600 hover:bg-red-700 text-white border-0"
                        onClick={() => setIsAddDrawerOpen(true)}
                    >
                        <Plus className="mr-2 h-4 w-4" /> Add Customer
                    </Button>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <QuickStatCard
                    title="Total Customers"
                    value={stats.total.toLocaleString()}
                    icon={Users}
                    trend={5}
                    subtext="vs last month"
                />
                <QuickStatCard
                    title="Active Rentals"
                    value={stats.activeRentals}
                    icon={UserCheck}
                    trend={12}
                    subtext="currently renting"
                />
                <QuickStatCard
                    title="New This Month"
                    value={stats.newThisMonth}
                    icon={User}
                    trend={-2}
                    subtext="new registrations"
                />
                <QuickStatCard
                    title="Blacklisted"
                    value={stats.blacklisted}
                    icon={UserX}
                    subtext="0% of total" // Mock calc
                />
            </div>

            {/* Filters & Toolbar */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex gap-2 bg-[#1c1917] p-1 rounded-lg border border-white/5">
                    {['All Customers', 'Active Rentals', 'Blacklisted', 'VIP'].map(filter => (
                        <button
                            key={filter}
                            onClick={() => setStatusFilter(filter)}
                            className={cn(
                                "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                                statusFilter === filter
                                    ? "bg-[#292524] text-white shadow-sm"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="flex gap-3 items-center w-full md:w-auto">
                    <div className="relative flex-1 md:min-w-[240px]">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                        <Input
                            placeholder="Search customers..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-[#1c1917] border-white/10 pl-9 text-white placeholder:text-gray-600 focus:ring-red-500"
                        />
                    </div>
                    <div className="flex gap-1 bg-[#1c1917] p-1 rounded-lg border border-white/5">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={cn(
                                "p-2 rounded-md transition-colors",
                                viewMode === 'grid' ? "bg-[#292524] text-white" : "text-gray-500 hover:text-white"
                            )}
                        >
                            <LayoutGrid className="h-4 w-4" />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={cn(
                                "p-2 rounded-md transition-colors",
                                viewMode === 'list' ? "bg-[#292524] text-white" : "text-gray-500 hover:text-white"
                            )}
                        >
                            <List className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Grid Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentCustomers.map(customer => (
                    <CustomerGridCard
                        key={customer.id}
                        customer={customer}
                        onClick={() => navigate(`/customers/${customer.id}`)}
                        transactions={transactions}
                        manualCustomerTransactions={manualCustomerTransactions}
                    />
                ))}
            </div>

            {/* Pagination Controls */}
            {filteredCustomers.length > ITEMS_PER_PAGE && (
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

            {/* Drawers & Modals */}
            <AddCustomerModal
                isOpen={isAddDrawerOpen}
                onClose={() => setIsAddDrawerOpen(false)}
            />

            <EditCustomerModal
                isOpen={!!editingCustomer}
                onClose={() => setEditingCustomer(null)}
                customer={editingCustomer}
            />
        </div>
    )
}

