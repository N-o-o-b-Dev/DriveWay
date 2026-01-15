import { useState, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDriveway } from '../context/DrivewayContext'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Dialog, DialogHeader, DialogTitle } from '../components/ui/Dialog'
import {
    Mail, Phone, Calendar, Car, Edit, ArrowLeft, User, ExternalLink, Store,
    CreditCard, CheckCircle, AlertCircle, Clock, FileText, Download, ChevronRight,
    TrendingUp, MapPin, Gauge, MoreHorizontal, Plus, ShieldCheck, Banknote, PlusCircle, ChevronDown, Trash2
} from 'lucide-react'
import { EditCustomerModal } from '../components/EditCustomerModal'
import { EditTransactionModal } from '../components/EditTransactionModal'
import { AddCustomerTransactionModal } from '../components/AddCustomerTransactionModal'
import { cn } from '../lib/utils'

function StatWidget({ title, value, icon: Icon, trend, colorClass }) {
    return (
        <Card className="bg-[#1c1917] border-white/5 relative overflow-hidden">
            <CardContent className="p-6">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-sm text-gray-400 font-medium mb-1">{title}</p>
                        <h3 className={cn("text-3xl font-bold", colorClass)}>{value}</h3>
                    </div>
                    {Icon && <Icon className="h-8 w-8 text-gray-600/50 absolute right-4 top-4" />}
                </div>
                {trend && (
                    <div className="flex items-center gap-1 mt-2 text-xs">
                        <TrendingUp className="h-3 w-3 text-green-500" />
                        <span className="text-green-500 font-medium">{trend}</span>
                    </div>
                )}
                {/* Progress Bar Mock */}
                <div className="h-1 w-full bg-white/5 mt-4 rounded-full overflow-hidden">
                    <div className={cn("h-full w-1/2 rounded-full", colorClass.replace('text-', 'bg-'))} />
                </div>
            </CardContent>
        </Card>
    )
}

function RentalCard({ rental, car, onExtend, onReturn }) {
    if (!rental || !car) return (
        <Card className="bg-[#1c1917] border-white/5 dashed border-2 flex items-center justify-center h-[200px]">
            <p className="text-gray-500 text-sm">No Active Rental</p>
        </Card>
    )

    return (
        <Card className="bg-[#1c1917] border-white/5 overflow-hidden group">
            <div className="h-full flex flex-col md:flex-row">
                {/* Image Side */}
                <div className="w-full md:w-2/5 relative h-48 md:h-auto">
                    <img
                        src={car.image}
                        alt={`${car.make} ${car.model}`}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-green-500 text-black text-[10px] font-bold px-2 py-1 rounded uppercase">
                        On Road
                    </div>
                </div>
                {/* Info Side */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h3 className="text-xl font-bold text-white">{car.make} {car.model}</h3>
                                <p className="text-sm text-gray-400">{car.year} • {car.fuelType}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-y-4 gap-x-8 mt-4">
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase tracking-wider">License Plate</p>
                                <p className="text-sm font-medium text-white">{car.plateNumber}</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase tracking-wider">Daily Rate</p>
                                <p className="text-sm font-medium text-white">₹{rental.dailyRate || car.price}</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase tracking-wider">Pick-Up</p>
                                <p className="text-sm font-medium text-white">{new Date(rental.startDate).toLocaleDateString()}</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase tracking-wider">Return Due</p>
                                <p className="text-sm font-medium text-red-400">{rental.endDate ? new Date(rental.endDate).toLocaleDateString() : 'Open Ended'}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3 mt-6">
                        <Button
                            onClick={onExtend}
                            className="flex-1 bg-white/5 hover:bg-white/10 text-white border-0"
                        >
                            Extend
                        </Button>
                        <Button
                            onClick={onReturn}
                            className="flex-1 bg-red-600 hover:bg-red-700 text-white border-0"
                        >
                            Return Car
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    )
}

function DealerCard({ dealer }) {
    if (!dealer) return (
        <Card className="bg-[#1c1917] border-white/5 h-full flex flex-col justify-center items-center p-6 text-center">
            <Store className="h-10 w-10 text-gray-600 mb-2" />
            <h3 className="text-white font-medium">No Assigned Dealer</h3>
            <p className="text-sm text-gray-500">This customer is not linked to a dealer.</p>
        </Card>
    )

    return (
        <Card className="bg-[#1c1917] border-white/5 h-full">
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-red-500 flex items-center gap-2">
                    <Store className="h-4 w-4" /> Assigned Dealer
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-[#292524] flex items-center justify-center border border-white/10">
                        {/* Dealer Avatar Placeholder */}
                        <span className="text-lg font-bold text-gray-400">{dealer.name.charAt(0)}</span>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white">{dealer.name}</h3>
                        <p className="text-xs text-gray-400">Senior Sales Manager</p>
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="flex justify-between text-sm py-2 border-b border-white/5">
                        <span className="text-gray-500">Contact</span>
                        <span className="text-gray-300">{dealer.phone}</span>
                    </div>
                    <div className="flex justify-between text-sm py-2 border-b border-white/5">
                        <span className="text-gray-500">Email</span>
                        <span className="text-gray-300">{dealer.email}</span>
                    </div>
                    <div className="flex justify-between text-sm py-2 border-b border-white/5">
                        <span className="text-gray-500">Deals Closed</span>
                        <span className="text-white font-bold">142</span>
                    </div>
                </div>

                <Button className="w-full bg-[#292524] hover:bg-[#3f3a38] text-white border border-white/5">
                    <Mail className="mr-2 h-4 w-4" /> Contact Dealer
                </Button>
            </CardContent>
        </Card>
    )
}

function DocumentRow({ title, date, size, type }) {
    return (
        <div className="flex items-center justify-between p-3 bg-[#292524]/50 rounded-lg border border-white/5 hover:bg-[#292524] transition-colors group">
            <div className="flex items-center gap-3">
                <div className={cn("p-2 rounded bg-white/5 text-gray-400", type === 'pdf' ? 'text-red-400' : 'text-blue-400')}>
                    <FileText className="h-5 w-5" />
                </div>
                <div>
                    <p className="text-sm font-medium text-white group-hover:text-red-400 transition-colors">{title}</p>
                    <p className="text-[10px] text-gray-500">{size} • {date}</p>
                </div>
            </div>
            <Button size="icon" variant="ghost" className="text-gray-500 hover:text-white">
                <Download className="h-4 w-4" />
            </Button>
        </div>
    )
}

function TransactionRow({ transaction, car, onDelete }) {
    const [isExpanded, setIsExpanded] = useState(false)
    const isCredit = transaction.type === 'Credit'

    return (
        <div className={cn(
            "border-b border-white/5 transition-colors",
            isExpanded ? "bg-white/5" : "hover:bg-white/5"
        )}>
            {/* Main Row */}
            <div
                className={cn(
                    "grid grid-cols-5 p-4 items-center cursor-pointer border-l-2",
                    isCredit ? "border-l-green-500" : "border-l-red-500"
                )}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {/* Description */}
                <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-1">
                        {transaction.isRentalDebit ? (
                            <Car className="h-3 w-3 text-red-500" />
                        ) : transaction.type === 'Credit' ? (
                            <Banknote className="h-3 w-3 text-green-500" />
                        ) : (
                            <FileText className="h-3 w-3 text-gray-500" />
                        )}
                        <span className="font-bold text-white text-sm truncate">
                            {transaction.description}
                        </span>
                    </div>
                    {transaction.subtext && (
                        <span className="text-[10px] text-gray-500 font-mono ml-5">
                            {transaction.subtext}
                        </span>
                    )}
                </div>

                {/* Date */}
                <div className="text-sm text-gray-400">
                    {new Date(transaction.date).toLocaleDateString()}
                </div>

                {/* Amount */}
                <div className={cn("text-sm font-bold", isCredit ? "text-green-500" : "text-red-500")}>
                    {isCredit ? '+' : '-'} ₹{Number(transaction.amount).toLocaleString()}
                </div>

                {/* Status/Type */}
                <div className="text-center">
                    <span className={cn(
                        "text-[10px] font-bold px-2 py-0.5 rounded-full uppercase border",
                        isCredit
                            ? "bg-green-500/10 text-green-500 border-green-500/20"
                            : "bg-red-500/10 text-red-500 border-red-500/20"
                    )}>
                        {transaction.type}
                    </span>
                </div>

                {/* Actions */}
                <div className="text-right flex items-center justify-end gap-2">
                    {/* Only show delete for manual transactions or if you want to allow full rental deletion */}
                    {!transaction.isRentalDebit && !transaction.isRentalCredit && (
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 text-gray-500 hover:text-red-500"
                            onClick={(e) => {
                                e.stopPropagation()
                                onDelete(transaction)
                            }}
                        >
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    )}

                    {/* Allow deleting rental payment (Credit) specifically? Maybe risky. Let's stick to manual first as per user request context often implies manual corrections.
                         If user explicitly wants to delete rentals, they usually do it from the Rental list.
                         However, if they want to delete a PAYMENT for a rental, that's editing the rental. 
                         For now, I'll enable it for Manual Transactions solely to be safe, or ask user.
                         Actually, let's enable for ALL but with a clear confirmation. 
                         Wait, deleting a 'Rental Debit' means deleting the Rental itself.
                      */}
                    <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-500 hover:text-white">
                        {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                    </Button>
                </div>
            </div>

            {/* Expanded Details */}
            {isExpanded && (
                <div className="p-4 bg-black/20 pl-12 grid grid-cols-2 gap-4 text-sm animate-in fade-in duration-200">
                    {transaction.isRentalDebit && car && (
                        <>
                            <div>
                                <p className="text-gray-500 text-xs uppercase mb-1">Vehicle Details</p>
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-16 bg-gray-800 rounded overflow-hidden">
                                        <img src={car.image} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">{car.make} {car.model}</p>
                                        <p className="text-gray-500 text-xs">{car.plateNumber}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs uppercase mb-1">Rental Period</p>
                                <p className="text-white">
                                    {new Date(transaction.startDate).toLocaleDateString()} - {new Date(transaction.endDate).toLocaleDateString()}
                                </p>
                                <p className="text-gray-500 text-xs mt-1">Daily Rate: ₹{car.price || transaction.dailyRate}</p>
                            </div>
                        </>
                    )}
                    {(transaction.isRentalCredit || !transaction.isRentalDebit) && (
                        <div className="col-span-2">
                            <p className="text-gray-500 text-xs uppercase mb-1">Notes</p>
                            <p className="text-white">{transaction.notes || 'No notes available.'}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export function CustomerDetailsPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { customers, transactions, dealers, cars, updateTransaction, updateCar, manualCustomerTransactions, addRegister, deleteCustomerTransaction, addCustomerTransaction, deleteTransaction } = useDriveway()

    // State
    const [activeTab, setActiveTab] = useState('transactions')
    const [smartPaymentOpen, setSmartPaymentOpen] = useState(false)
    const [paymentAmount, setPaymentAmount] = useState('')
    const [paymentDescription, setPaymentDescription] = useState('')
    const [paymentDate, setPaymentDate] = useState(new Date().toISOString().split('T')[0])
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)

    const [editingTransaction, setEditingTransaction] = useState(null)
    const [rentalPage, setRentalPage] = useState(1)
    const [transactionPage, setTransactionPage] = useState(1)
    const [editingCustomer, setEditingCustomer] = useState(null)

    // Extend Modal State
    const [extendModalOpen, setExtendModalOpen] = useState(false)
    const [extensionDate, setExtensionDate] = useState('')

    // Data Resolution
    const customer = customers.find(c => c.id === id)

    // Derived Data
    const customerTransactions = useMemo(() => {
        const flow = []

        // 1. Process Rentals - ONLY DEBITS
        transactions
            .filter(t => t.customerId === id)
            .forEach(t => {
                const car = cars.find(c => c.id === t.carId)
                const carName = car ? `${car.make} ${car.model}` : 'Unknown Car'

                // A. DEBIT ENTRY (The Rental Charge)
                flow.push({
                    id: `${t.id}_DEBIT`,
                    originalId: t.id,
                    date: t.startDate,
                    type: 'Debit',
                    amount: t.total,
                    description: `Rental: ${carName}`,
                    subtext: `Ref: #${t.id.slice(0, 6)}`,
                    isRentalDebit: true,
                    startDate: t.startDate,
                    endDate: t.endDate,
                    carId: t.carId,
                    notes: t.notes,
                    dailyRate: t.dailyRate,
                    status: t.status,
                    total: t.total,
                    amountPaid: t.amountPaid || 0
                })
            })

        // 2. Manual Transactions (Credits & Debits)
        manualCustomerTransactions
            .filter(t => t.customerId === id)
            .forEach(t => {
                flow.push({
                    id: t.id,
                    date: t.date,
                    type: t.type, // 'Credit' or 'Debit'
                    amount: t.amount,
                    description: t.type === 'Credit' ? 'Payment / Credit' : 'Manual Debit',
                    subtext: t.notes || (t.type === 'Credit' ? 'Payment Received' : 'Manual Charge'),
                    notes: t.notes,
                    isManual: true
                })
            })

        // 3. Sort Newest First
        return flow.sort((a, b) => new Date(b.date) - new Date(a.date))
    }, [transactions, manualCustomerTransactions, id, cars])

    const activeRentalTrans = customerTransactions.find(t => {
        const now = new Date()
        const isStarted = new Date(t.startDate) <= now
        const isEnded = t.endDate ? new Date(t.endDate) >= now : true // If no end date, assume active (not ended)
        return t.isRentalDebit && isStarted && isEnded && t.status !== 'Cancelled' && t.status !== 'Completed'
    })
    const activeRentalCar = activeRentalTrans ? cars.find(c => c.id === activeRentalTrans.carId) : null
    const dealer = dealers.find(d => d.id === customer?.dealerId)

    // Rental History Pagination - ONLY show actual Rental Debits (The startup of a rental)
    const rentalHistoryItems = useMemo(() => customerTransactions.filter(t => t.isRentalDebit), [customerTransactions])
    const RENTALS_PER_PAGE = 5
    const rentalHistoryTotalPages = Math.ceil(rentalHistoryItems.length / RENTALS_PER_PAGE)
    const paginatedRentalHistory = useMemo(() =>
        rentalHistoryItems.slice((rentalPage - 1) * RENTALS_PER_PAGE, rentalPage * RENTALS_PER_PAGE),
        [rentalHistoryItems, rentalPage]
    )

    // Financials
    const totalSpent = customerTransactions.reduce((sum, t) => {
        return t.type === 'Debit' ? sum + (Number(t.amount) || 0) : sum
    }, 0)

    const totalPaid = customerTransactions.reduce((sum, t) => {
        return t.type === 'Credit' ? sum + (Number(t.amount) || 0) : sum
    }, 0)

    const pendingAmount = Math.max(0, totalSpent - totalPaid)

    // Actions
    const handleReturnCar = () => {
        if (!activeRentalTrans || !activeRentalCar) return
        if (!confirm('Are you sure you want to mark this car as returned?')) return

        const now = new Date().toISOString()

        // 1. Update Transaction
        updateTransaction(activeRentalTrans.originalId, {
            ...activeRentalTrans,
            endDate: now,
            status: 'Completed'
        })

        // 2. Update Car Status
        updateCar(activeRentalCar.id, {
            ...activeRentalCar,
            status: 'Available'
        })

        // 3. Add Register Entry (Auto)
        addRegister({
            carId: activeRentalCar.id,
            customerId: customer.id,
            date: now,
            type: 'Entry',
            notes: 'Auto-generated from Rental Return'
        })
    }

    const handleExtendRental = () => {
        if (!activeRentalTrans) return
        // Pre-fill with current end date
        setExtensionDate(activeRentalTrans.endDate.split('T')[0])
        setExtendModalOpen(true)
    }

    const saveExtension = () => {
        if (!extensionDate) return

        // Logic to update price could go here (e.g. dailyRate * days)
        // For now, just extending the date as requested
        updateTransaction(activeRentalTrans.originalId, {
            ...activeRentalTrans,
            endDate: new Date(extensionDate).toISOString()
        })

        setExtendModalOpen(false)
    }

    // Smart Payment Logic
    const handleSmartPayment = () => {
        const amountToPay = Number(paymentAmount)
        if (!amountToPay || amountToPay <= 0) {
            alert("Please enter a valid amount")
            return
        }

        if (amountToPay > pendingAmount) {
            alert(`Amount exceeds total pending balance of ₹${pendingAmount}`)
            return
        }

        let remainingPayment = amountToPay
        // Use selected date (at current time effectively, or just date)
        // Adding current time to selected date to keep time valid if needed, or just default to noon/start of day
        // Constructing ISO string from date input
        const paymentDateObj = new Date(paymentDate)
        // Ensure it's valid
        if (isNaN(paymentDateObj.getTime())) {
            alert("Invalid Date")
            return
        }
        const now = paymentDateObj.toISOString()

        // 1. Update Internal Rental 'Paid' status (Accounting)
        // We still distribute the payment internally to mark rentals as paid/partial
        // But we DO NOT generate credit accounting entries from these anymore.
        const unpaidTransactions = transactions
            .filter(t => t.customerId === id && (Number(t.total) || 0) > (Number(t.amountPaid) || 0))
            .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))

        unpaidTransactions.forEach(t => {
            if (remainingPayment <= 0) return

            const tTotal = Number(t.total) || 0
            const tPaid = Number(t.amountPaid) || 0
            const tPending = tTotal - tPaid

            const paymentForThis = Math.min(tPending, remainingPayment)

            // Create a record for internal rental history
            const paymentRecord = {
                id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString() + Math.random().toString(),
                date: now,
                amount: paymentForThis,
                type: 'Credit',
                medium: 'Smart Payment',
                amount: paymentForThis,
                type: 'Credit',
                medium: 'Smart Payment',
                notes: paymentDescription || 'Bulk Balance Clearance'
            }

            // Update Context
            updateTransaction(t.id, {
                ...t,
                amountPaid: tPaid + paymentForThis,
                paymentStatus: (tPaid + paymentForThis) >= tTotal ? 'Paid' : 'Partial',
                payments: [...(t.payments || []), paymentRecord]
            })

            remainingPayment -= paymentForThis
        })

        // 2. Add the Manual Credit Entry for the Ledger
        // This is what now shows up in the transaction list
        addCustomerTransaction({
            id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
            customerId: id,
            amount: amountToPay,
            type: 'Credit',
            date: now,
            date: now,
            notes: paymentDescription || 'Smart Payment / Bulk Pay-off',
            isManual: true,
            carId: null // Global payment, not tied to specific car in the ledger view usually, or we could link to the first one? Better to keep it general.
        })

        setSmartPaymentOpen(false)
        setPaymentAmount('')
        setPaymentDescription('')
        setPaymentDate(new Date().toISOString().split('T')[0]) // Reset to today
        alert(`Successfully paid ₹${amountToPay} across oldest dues!`)
    }


    const handleDeleteTransaction = async (transaction) => {
        if (!confirm('Are you sure you want to delete this transaction? This action cannot be undone.')) return

        try {
            if (transaction.isManual) {
                await deleteCustomerTransaction(transaction.id)
            } else {
                // Rental Transaction
                // We use originalId because the transaction.id here has '_DEBIT' appended
                await deleteTransaction(transaction.originalId)

                // Also try to free up the car if it was active?
                // Usually deleting the rental record should be enough, provided the context handles it.
                // If this was an "Unknown" car (carId invalid), then no car update needed.
            }
        } catch (error) {
            console.error(error)
            alert('Failed to delete transaction')
        }
    }

    if (!customer) return <div className="p-8 text-white">Loading...</div>

    return (
        <div className="space-y-8 animate-in fade-in duration-300">
            {/* ... (rest of render) ... */}
            {/* Header */}
            <div className="flex items-center gap-4">
                <Button variant="ghost" className="text-gray-400 hover:text-white" onClick={() => navigate('/customers')}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Customer Profile</h1>
                    <p className="text-gray-400">Manage customer details, active rentals, and history.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="border-white/10 text-gray-300 hover:bg-white/5">
                        <Clock className="mr-2 h-4 w-4" /> Log Activity
                    </Button>
                    <Button
                        onClick={() => setEditingCustomer(customer)}
                        className="bg-red-600 hover:bg-red-700 text-white border-0"
                    >
                        <Edit className="mr-2 h-4 w-4" /> Edit Profile
                    </Button>
                </div>
            </div>

            {/* Top Row: Profile & Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Profile Card */}
                <Card className="lg:col-span-2 bg-[#1c1917] border-white/5 relative overflow-hidden">
                    <CardContent className="p-0 flex flex-col md:flex-row">
                        <div className="p-6 md:p-8 flex-1">
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="h-24 w-24 rounded-xl overflow-hidden border-2 border-white/10 shrink-0 bg-[#292524]">
                                    {customer.image ?
                                        <img src={customer.image} className="w-full h-full object-cover" /> :
                                        <User className="w-full h-full p-6 text-gray-500" />
                                    }
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-3">
                                        <h2 className="text-2xl font-bold text-white">{customer.name}</h2>
                                        <span className="bg-yellow-500/20 text-yellow-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase border border-yellow-500/20">
                                            {customer.status || 'Gold Member'}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500 font-mono">ID: #{customer.uniqueId || '8821'}</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mt-4 text-sm text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <Phone className="h-3 w-3" /> {customer.phone}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="h-3 w-3" /> Joined: {new Date(customer.createdAt || '2023-01-01').toLocaleDateString()}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Mail className="h-3 w-3" /> {customer.email}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="h-3 w-3" /> {customer.address?.slice(0, 25) || 'No Address'}...
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative BG Icon */}
                        <div className="hidden md:flex items-center justify-center p-8 bg-white/5 w-48">
                            <User className="h-24 w-24 text-white/5" />
                        </div>
                    </CardContent>
                </Card>

                {/* Financial Stats */}
                <div className="space-y-4">
                    <div
                        className="group cursor-pointer"
                        onClick={() => setSmartPaymentOpen(true)}
                    >
                        <StatWidget
                            title="Amount Pending"
                            value={`₹${pendingAmount.toLocaleString()}`}
                            icon={AlertCircle}
                            colorClass="text-red-500"
                            trend={pendingAmount > 0 ? "+15%" : null}
                        />
                        {/* Hover Hint */}
                        <div className="text-center text-xs text-red-500 opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                            Click to Pay Off
                        </div>
                    </div>

                    <StatWidget
                        title="Total Paid"
                        value={`₹${totalPaid.toLocaleString()}`}
                        icon={CheckCircle}
                        colorClass="text-green-500"
                        trend="+2%"
                    />
                </div>
            </div>

            {/* Middle Row: Active Rental & Dealer */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                        <Car className="h-4 w-4" /> Active Rental
                    </h3>
                    <RentalCard
                        rental={activeRentalTrans}
                        car={activeRentalCar}
                        onExtend={handleExtendRental}
                        onReturn={handleReturnCar}
                    />
                </div>
                <div className="space-y-4">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                        <Store className="h-4 w-4" /> Assigned Dealer
                    </h3>
                    <DealerCard dealer={dealer} />
                </div>
            </div>

            {/* Bottom Row: Tabs */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <div className="flex items-center gap-6 border-b border-white/5 mb-6">
                        {['Transactions', 'Rental History', 'Documents', 'Notes'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab.toLowerCase())}
                                className={cn(
                                    "pb-3 text-sm font-medium transition-colors border-b-2",
                                    activeTab === tab.toLowerCase()
                                        ? "text-red-500 border-red-500"
                                        : "text-gray-500 border-transparent hover:text-white"
                                )}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="bg-[#1c1917] border border-white/5 rounded-xl overflow-hidden min-h-[300px]">
                        {activeTab.includes('transaction') && (
                            <div className="divide-y divide-white/5">
                                {/* Header with Add Button */}
                                <div className="flex items-center justify-between bg-[#292524]/50 p-4 border-b border-white/5">
                                    <div className="flex items-center gap-2">
                                        <FileText className="h-5 w-5 text-red-500" />
                                        <h3 className="font-bold text-white text-sm">Transaction History</h3>
                                    </div>
                                    <Button size="sm" variant="outline" onClick={() => setIsAddModalOpen(true)} className="h-7 gap-2 border-black/10 dark:border-white/10 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10">
                                        <PlusCircle className="h-3 w-3" />
                                        Add Entry
                                    </Button>
                                </div>

                                {/* Table Header */}
                                <div className="grid grid-cols-5 bg-[#292524]/50 p-4 text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                                    <div>Description</div>
                                    <div>Date</div>
                                    <div>Amount</div>
                                    <div className="text-center">Status / Type</div>
                                    <div className="text-right">Actions</div>
                                </div>
                                {/* Rows */}
                                {customerTransactions
                                    .slice((transactionPage - 1) * 5, transactionPage * 5)
                                    .map(t => {
                                        const car = t.carId ? cars.find(c => c.id === t.carId) : null
                                        return <TransactionRow key={t.id} transaction={t} car={car} onDelete={handleDeleteTransaction} />
                                    })}

                                {/* Pagination Controls */}
                                <div className="p-4 border-t border-white/5 flex justify-end gap-2 bg-[#292524]/30">
                                    <Button
                                        size="sm" variant="outline"
                                        disabled={transactionPage === 1}
                                        onClick={() => setTransactionPage(p => Math.max(1, p - 1))}
                                        className="h-8 w-8 p-0 border-white/10 hover:bg-white/5 hover:text-white"
                                    >
                                        <ChevronRight className="h-4 w-4 rotate-180" />
                                    </Button>
                                    <Button
                                        size="sm" variant="outline"
                                        disabled={transactionPage * 5 >= customerTransactions.length}
                                        onClick={() => setTransactionPage(p => p + 1)}
                                        className="h-8 w-8 p-0 border-white/10 hover:bg-white/5 hover:text-white"
                                    >
                                        <ChevronRight className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        )}
                        {/* Other tabs placeholders */}
                        {activeTab === 'rental history' && (
                            <div>
                                <div className="divide-y divide-white/5">
                                    <div className="grid grid-cols-6 bg-[#292524]/50 p-4 text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                                        <div className="col-span-2">Vehicle</div>
                                        <div>Dates</div>
                                        <div>Status</div>
                                        <div className="text-right">Pending</div>
                                        <div className="text-right">Total</div>
                                    </div>
                                    {paginatedRentalHistory.map(t => {
                                        const car = cars.find(c => c.id === t.carId)
                                        const pending = Math.max(0, (Number(t.total) || 0) - (Number(t.amountPaid) || 0))
                                        return (
                                            <div
                                                key={t.id}
                                                onClick={() => {
                                                    const original = transactions.find(tr => tr.id === t.originalId)
                                                    setEditingTransaction(original)
                                                }}
                                                className="grid grid-cols-6 p-4 items-center hover:bg-white/5 transition-colors cursor-pointer"
                                            >
                                                <div className="col-span-2 flex items-center gap-3">
                                                    <div className="h-10 w-16 bg-[#292524] rounded overflow-hidden border border-white/5">
                                                        {car?.image ? <img src={car.image} className="w-full h-full object-cover" /> : <Car className="h-full w-full p-2 text-gray-600" />}
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-bold text-white">{car ? `${car.make} ${car.model}` : 'Unknown Car'}</div>
                                                        <div className="text-xs text-gray-500 font-mono">{car?.plateNumber}</div>
                                                    </div>
                                                </div>
                                                <div className="text-sm text-gray-400">
                                                    <div className="text-white">{new Date(t.startDate).toLocaleDateString()}</div>
                                                    <div className="text-xs">{new Date(t.endDate).toLocaleDateString()}</div>
                                                </div>
                                                <div>
                                                    <span className={cn(
                                                        "text-[10px] font-bold px-2 py-0.5 rounded-full uppercase border",
                                                        t.status === 'Completed' ? "bg-green-500/10 text-green-500 border-green-500/20" :
                                                            t.status === 'Active' ? "bg-blue-500/10 text-blue-500 border-blue-500/20" :
                                                                "bg-gray-500/10 text-gray-500 border-gray-500/20"
                                                    )}>
                                                        {t.status}
                                                    </span>
                                                </div>
                                                <div className="text-sm font-medium text-red-500 text-right">₹{pending.toLocaleString()}</div>
                                                <div className="text-sm font-bold text-white text-right">₹{Number(t.total).toLocaleString()}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                                {/* Pagination */}
                                {rentalHistoryTotalPages > 1 && (
                                    <div className="flex justify-between items-center p-4 border-t border-white/5 bg-[#292524]/30">
                                        <div className="text-xs text-gray-500">
                                            Page {rentalPage} of {rentalHistoryTotalPages}
                                        </div>
                                        <div className="flex gap-2">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => setRentalPage(p => Math.max(1, p - 1))}
                                                disabled={rentalPage === 1}
                                                className="h-8 w-8 p-0 border-white/10 hover:bg-white/5 hover:text-white"
                                            >
                                                <ChevronRight className="h-4 w-4 rotate-180" />
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => setRentalPage(p => Math.min(rentalHistoryTotalPages, p + 1))}
                                                disabled={rentalPage === rentalHistoryTotalPages}
                                                className="h-8 w-8 p-0 border-white/10 hover:bg-white/5 hover:text-white"
                                            >
                                                <ChevronRight className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                        {!activeTab.includes('transaction') && activeTab !== 'rental history' && (
                            <div className="p-8 text-center text-gray-500 italic">
                                Content for {activeTab} coming soon...
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Sidebar: Documents Widget */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Documents</h3>
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-red-500">
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>
                    <Card className="bg-[#1c1917] border-white/5">
                        <CardContent className="p-4 space-y-3">
                            {/* Aadhaar Front */}
                            <DocumentRow
                                title="Aadhaar Front"
                                date={customer.createdAt ? new Date(customer.createdAt).toLocaleDateString() : 'N/A'}
                                size="1.2 MB"
                                type="img"
                            />
                            {/* Aadhaar Back */}
                            <DocumentRow
                                title="Aadhaar Back"
                                date={customer.createdAt ? new Date(customer.createdAt).toLocaleDateString() : 'N/A'}
                                size="1.2 MB"
                                type="img"
                            />
                            {/* DL / Other */}
                            <DocumentRow
                                title="DL/ Other Document"
                                date={customer.createdAt ? new Date(customer.createdAt).toLocaleDateString() : 'N/A'}
                                size="2.4 MB"
                                type="pdf"
                            />

                            <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                                <h4 className="text-sm font-bold text-red-500 flex items-center gap-2 mb-1">
                                    <ShieldCheck className="h-4 w-4" /> Verification Pending
                                </h4>
                                <p className="text-xs text-red-400/80 mb-2">
                                    Passport scan is required for international travel authorization.
                                </p>
                                <button className="text-xs font-bold text-red-500 hover:text-red-400 uppercase tracking-wider">
                                    Request Document
                                </button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Smart Payment Modal */}
            <Dialog isOpen={smartPaymentOpen} onClose={() => setSmartPaymentOpen(false)}>
                <div className="space-y-4">
                    <DialogHeader>
                        <DialogTitle>Smart Payment</DialogTitle>
                    </DialogHeader>
                    <p className="text-sm text-gray-400">
                        Enter total amount to pay. This will systematically clear your oldest pending rentals first.
                    </p>

                    <div className="py-4">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Total Pending Dues</p>
                        <div className="text-3xl font-bold text-red-500 mb-6">₹{pendingAmount.toLocaleString()}</div>

                        <label className="text-xs font-medium text-white mb-1.5 block">Payment Amount</label>
                        <Input
                            type="number"
                            placeholder="Enter amount..."
                            value={paymentAmount}
                            onChange={e => setPaymentAmount(e.target.value)}
                            className="bg-[#292524] border-white/10 text-xl font-bold text-white placeholder:text-gray-600 focus:ring-green-500 mb-4"
                        />

                        <label className="text-xs font-medium text-white mb-1.5 block">Description (Optional)</label>
                        <Input
                            placeholder="e.g. Bank Transfer Ref#123"
                            value={paymentDescription}
                            onChange={e => setPaymentDescription(e.target.value)}
                            className="bg-[#292524] border-white/10 text-white placeholder:text-gray-600 focus:ring-green-500 mb-4"
                        />

                        <label className="text-xs font-medium text-white mb-1.5 block">Payment Date</label>
                        <Input
                            type="date"
                            value={paymentDate}
                            onChange={e => setPaymentDate(e.target.value)}
                            className="bg-[#292524] border-white/10 text-white placeholder:text-gray-600 focus:ring-green-500"
                        />
                    </div>

                    <Button
                        onClick={handleSmartPayment}
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold h-12"
                    >
                        Process Payment
                    </Button>
                </div>
            </Dialog>

            <Dialog isOpen={extendModalOpen} onClose={() => setExtendModalOpen(false)}>
                <div className="space-y-4">
                    <DialogHeader>
                        <DialogTitle>Extend Rental</DialogTitle>
                    </DialogHeader>
                    <p className="text-sm text-gray-400">
                        Select a new return date for this rental.
                    </p>

                    <div className="py-4">
                        <label className="text-xs font-medium text-white mb-1.5 block">New Return Date</label>
                        <Input
                            type="date"
                            value={extensionDate}
                            onChange={e => setExtensionDate(e.target.value)}
                            className="bg-[#292524] border-white/10 text-white"
                        />
                    </div>

                    <Button
                        onClick={saveExtension}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-10"
                    >
                        Confirm Extension
                    </Button>
                </div>
            </Dialog>

            <EditCustomerModal
                isOpen={!!editingCustomer}
                onClose={() => setEditingCustomer(null)}
                customer={editingCustomer}
            />

            <EditTransactionModal
                isOpen={!!editingTransaction}
                onClose={() => setEditingTransaction(null)}
                transaction={editingTransaction}
            />

            <AddCustomerTransactionModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                customer={customer}
            />

        </div>
    )
}
