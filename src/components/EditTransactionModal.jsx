import { useState, useEffect } from 'react'
import { useDriveway } from '../context/DrivewayContext'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { Dialog, DialogHeader, DialogTitle } from './ui/Dialog'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/Tabs'
import { Badge } from './ui/Badge'
import { Car, User, Calendar, CreditCard, CheckCircle, Clock, Trash, Plus, MapPin } from 'lucide-react'
import { generateId, cn } from '../lib/utils'
import { DeleteRentalModal } from './DeleteRentalModal'

export function EditTransactionModal({ isOpen, onClose, transaction }) {
    const { updateTransaction, cars, customers, deleteTransaction, dealers, addCustomerTransaction, manualCustomerTransactions, deleteCustomerTransaction } = useDriveway()
    const [activeTab, setActiveTab] = useState('Cash')
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [now, setNow] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 60000) // Update every minute
        return () => clearInterval(timer)
    }, [])

    const [formData, setFormData] = useState({
        startDate: '',
        endDate: '',
        status: '',
        paymentStatus: '',
        notes: '',
        startMileage: '',
        payments: [],
        total: 0,
        customDuration: '',
        additionalCharges: 0,
        discount: 0,
        discountNote: '',
        dealerLocation: '',
        dailyRate: 0
    })

    const [newPayment, setNewPayment] = useState({
        amount: '',
        date: new Date().toISOString().slice(0, 16), // datetime-local format
        type: 'Credit',
        medium: 'Cash',
        notes: ''
    })

    const car = transaction ? cars.find(c => c.id === transaction.carId) : null
    const customer = transaction ? customers.find(c => c.id === transaction.customerId) : null
    const dealer = transaction?.dealerId ? dealers.find(d => d.id === transaction.dealerId) : null

    useEffect(() => {
        if (transaction) {
            let initialPayments = transaction.payments || []
            if (initialPayments.length === 0 && transaction.amountPaid > 0) {
                initialPayments = [{
                    id: generateId(),
                    date: transaction.startDate,
                    amount: transaction.amountPaid,
                    type: 'Credit',
                    medium: 'Cash',
                    notes: 'Initial Payment (Migrated)'
                }]
            }

            // Determine Daily Rate
            // We want to calculate this dynamically based on the duration to ensure it's correct
            let initialDailyRate = transaction.dailyRate
            // We'll recalculate this further down after getting days, or we can do it here.
            // But getDynamicRate depends on car and days. Let's wait.

            // Recalculate total if open-ended (no end date) so it's fresh
            let currentTotal = transaction.total || 0

            // Helper logic for calc (duplicated roughly here for init)
            const getInitialDays = () => {
                if (transaction.customDuration) return Number(transaction.customDuration)
                const start = new Date(transaction.startDate)
                const end = transaction.endDate ? new Date(transaction.endDate) : now
                let diff = end - start
                if (diff < 0) diff = 0
                return Math.ceil(diff / (1000 * 60 * 60 * 24)) || 1
            }
            const initialDays = getInitialDays()

            // Apply Dynamic Rate Logic Immediately on Load
            if (car) {
                if (initialDays >= 17 && car.monthlyPrice) {
                    initialDailyRate = Math.round(car.monthlyPrice / 30)
                } else if (initialDays >= 10 && car.tenDayPrice) {
                    initialDailyRate = Math.round(car.tenDayPrice / 10)
                } else {
                    initialDailyRate = car.price || 0
                }
            }

            if (!transaction.endDate && transaction.status === 'Active') {
                const baseTotal = Math.round(Number(initialDailyRate) * initialDays)
                currentTotal = Math.max(0, baseTotal - Number(transaction.discount || 0) + Number(transaction.additionalCharges || 0))
            }

            setFormData({
                startDate: transaction.startDate,
                endDate: transaction.endDate,
                status: transaction.status,
                paymentStatus: transaction.paymentStatus || 'Pending',
                notes: transaction.notes || '',
                startMileage: transaction.startMileage || '',
                payments: initialPayments,
                total: currentTotal,
                customDuration: transaction.customDuration || '',
                additionalCharges: transaction.additionalCharges || 0,
                discount: transaction.discount || 0,
                discountNote: transaction.discountNote || '',
                dealerLocation: transaction.dealerLocation || (dealer ? dealer.address : ''),
                dailyRate: initialDailyRate || 0
            })
        }

    }, [transaction, dealer, car])

    // --- Helpers ---

    const calculateDaysDuration = (start, end, durationOverride) => {
        if (durationOverride) return parseInt(durationOverride)
        if (!start) return 0
        const startDate = new Date(start)
        const endDate = end ? new Date(end) : now
        let diffTime = endDate - startDate
        if (diffTime < 0) diffTime = 0
        let days = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1
        return days
    }

    const getDynamicRate = (days) => {
        if (!car) return 0
        if (days >= 17 && car.monthlyPrice) {
            return Math.round(car.monthlyPrice / 30)
        } else if (days >= 10 && car.tenDayPrice) {
            return Math.round(car.tenDayPrice / 10)
        } else {
            return car.price || 0
        }
    }

    // Effect to correct daily rate on load if meaningful
    useEffect(() => {
        if (transaction && car && formData.startDate) {
            const days = calculateDaysDuration(formData.startDate, formData.endDate, formData.customDuration)
            const dynamicRate = getDynamicRate(days)
            // Only update if it seems unset or we want to enforce it. The user said "daily price is wrong", so let's enforce dynamic.
            // But we don't want to loop infinitely.
            // Check if current rate differs from dynamic rate? 
            // Or just trust the handlers. The user might have manually edited it? 
            // Better to let the ONCHANGE handlers drive it, but we also want to fix it on open.
            // Let's rely on the user interacting or just set it once? 
            // Actually, if I just invoke it in the first useEffect, it's cleaner.
        }
    }, []) // Keeping it simple, I'll update the first useEffect instead.

    const totalPaid = formData.payments.reduce((sum, p) => p.type === 'Credit' ? sum + Number(p.amount) : sum - Number(p.amount), 0)
    const pendingBalance = Math.max(0, (Number(formData.total) || 0) - totalPaid)

    // Calculation Logic
    // Calculation Logic
    const calculateTotal = (days, additional = 0, discount = 0, rate = 0) => {
        const baseTotal = Math.round(Number(rate) * days)
        return Math.max(0, baseTotal - Number(discount) + Number(additional))
    }

    const handleAddPayment = () => {
        if (!newPayment.amount) return
        const payment = { id: generateId(), ...newPayment, amount: Number(newPayment.amount), medium: activeTab }
        const updatedPayments = [...formData.payments, payment]

        const newTotalPaid = updatedPayments.reduce((sum, p) => p.type === 'Credit' ? sum + Number(p.amount) : sum - Number(p.amount), 0)
        const newStatus = newTotalPaid >= (Number(formData.total) || 0) ? 'Paid' : 'Pending'

        setFormData({ ...formData, payments: updatedPayments, paymentStatus: newStatus })
        setNewPayment({ ...newPayment, amount: '', notes: '' })
    }

    const handleDeletePayment = (id) => {
        const updatedPayments = formData.payments.filter(p => p.id !== id)
        setFormData({ ...formData, payments: updatedPayments })
    }

    const handleSubmit = () => {
        // 1. Identify New Payments and Add to Global Ledger
        const originalPaymentIds = new Set((transaction.payments || []).map(p => p.id))
        const newPayments = formData.payments.filter(p => !originalPaymentIds.has(p.id))

        // 1.1 Sync Deletions: Find payments that were in original but NOT in current formData
        const currentPaymentIds = new Set(formData.payments.map(p => p.id))
        const deletedPayments = (transaction.payments || []).filter(p => !currentPaymentIds.has(p.id))

        deletedPayments.forEach(p => {
            if (p.type === 'Credit') {
                // Find matching ledger entry
                // Primary match: paymentId
                // Fallback: Fuzzy match by amount + date (within 1 min) + carId
                const ledgerEntry = manualCustomerTransactions.find(t =>
                    t.paymentId === p.id ||
                    (!t.paymentId && t.isManual && t.amount === p.amount && t.carId === transaction.carId && Math.abs(new Date(t.date) - new Date(p.date)) < 60000)
                )

                if (ledgerEntry) {
                    deleteCustomerTransaction(ledgerEntry.id)
                }
            }
        })

        newPayments.forEach(p => {
            if (p.type === 'Credit') {
                addCustomerTransaction({
                    id: (typeof crypto !== 'undefined' && crypto.randomUUID) ? crypto.randomUUID() : Date.now().toString() + Math.random().toString(),
                    customerId: transaction.customerId,
                    amount: p.amount,
                    type: 'Credit',
                    date: p.date,
                    notes: `Payment for Rental #${transaction.id.slice(0, 6)}: ${p.notes || ''}`,
                    isManual: true,
                    carId: transaction.carId,
                    paymentId: p.id
                })
            }
        })

        // 2. Update Rental Transaction
        updateTransaction(transaction.id, { ...formData, amountPaid: totalPaid })
        onClose()
    }

    const handleDelete = () => {
        setIsDeleteModalOpen(true)
    }

    const confirmDelete = async () => {
        await deleteTransaction(transaction.id)
        onClose()
    }

    if (!transaction) return null

    // Helper for days display
    const getDays = () => {
        if (formData.customDuration) return formData.customDuration
        if (formData.startDate) {
            const start = new Date(formData.startDate)
            const end = formData.endDate ? new Date(formData.endDate) : now
            let diff = end - start
            if (diff < 0) diff = 0
            const days = Math.ceil(diff / (1000 * 60 * 60 * 24)) || 1
            return days
        }
        return 0
    }

    return (
        <>
            <Dialog isOpen={isOpen} onClose={onClose} className="max-w-5xl bg-[#0c0a09] border-white/10 text-white p-0 overflow-hidden gap-0">
                <DialogHeader className="px-6 py-4 border-b border-white/10 flex flex-row items-center justify-between">
                    <div>
                        <DialogTitle className="text-lg font-bold">Edit Rental #{transaction.id.slice(0, 8).toUpperCase()}</DialogTitle>
                        <p className="text-xs text-slate-500">Created on {new Date(transaction.startDate).toLocaleDateString()}</p>
                    </div>
                </DialogHeader>

                <div className="grid grid-cols-1 md:grid-cols-12 h-[calc(90vh-160px)]">
                    {/* LEFT COLUMN: Entities & Timeline */}
                    <div className="md:col-span-7 border-r border-white/10 p-6 space-y-6 overflow-y-auto">

                        {/* Section: Entities */}
                        <div>
                            <h3 className="text-sm font-bold text-red-500 mb-3 flex items-center gap-2">
                                <Car className="h-4 w-4" /> Rental Entities
                            </h3>
                            <div className="space-y-3">
                                {/* Car Card */}
                                <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-16 bg-white/10 rounded flex items-center justify-center overflow-hidden">
                                            {car?.images?.[0] ? <img src={car.images[0]} className="w-full h-full object-cover" /> : <Car className="h-5 w-5 text-gray-500" />}
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">{car?.make} {car?.model} {car?.year}</p>
                                            <p className="text-xs text-slate-400">Plate: {car?.plateNumber} • {car?.color} • {car?.type}</p>
                                        </div>
                                    </div>
                                    {/* <Button variant="ghost" size="icon" className="text-slate-500"><Edit className="h-4 w-4" /></Button> */}
                                </div>
                                {/* Customer Card */}
                                <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center overflow-hidden">
                                            <User className="h-5 w-5 text-gray-500" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">{customer?.name}</p>
                                            <p className="text-xs text-slate-400">{customer?.phone} • {customer?.dlNumber}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section: Dealer / Location */}
                        <div className="space-y-2">
                            <label className="text-xs text-slate-400">Dealer Location</label>
                            <div className="relative">
                                <input
                                    className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                                    value={formData.dealerLocation}
                                    placeholder={dealer?.address || "Enter location..."}
                                    onChange={e => setFormData({ ...formData, dealerLocation: e.target.value })}
                                />
                                <MapPin className="absolute right-3 top-2.5 h-4 w-4 text-slate-500" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs text-slate-400">Status</label>
                            <select
                                className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                                value={formData.status}
                                onChange={e => setFormData({ ...formData, status: e.target.value })}
                            >
                                <option value="Active" className="bg-[#0c0a09]">Active</option>
                                <option value="Completed" className="bg-[#0c0a09]">Completed</option>
                                <option value="Reserved" className="bg-[#0c0a09]">Reserved</option>
                                <option value="Cancelled" className="bg-[#0c0a09]">Cancelled</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs text-slate-400">Notes</label>
                            <textarea
                                className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500 min-h-[60px]"
                                value={formData.notes}
                                placeholder="Add notes about this rental..."
                                onChange={e => setFormData({ ...formData, notes: e.target.value })}
                            />
                        </div>


                        {/* Section: Timeline */}
                        <div>
                            <h3 className="text-sm font-bold text-red-500 mb-3 flex items-center gap-2">
                                <Calendar className="h-4 w-4" /> Timeline & Duration
                            </h3>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="space-y-1">
                                    <label className="text-xs text-slate-400">Start Date</label>
                                    <Input
                                        type="datetime-local"
                                        className="bg-white/5 border-white/10 text-white"
                                        value={formData.startDate}
                                        onChange={e => {
                                            const newStart = e.target.value
                                            const days = calculateDaysDuration(newStart, formData.endDate, formData.customDuration)
                                            const newRate = getDynamicRate(days)
                                            const newTotal = calculateTotal(days, formData.additionalCharges, formData.discount, newRate)
                                            setFormData({ ...formData, startDate: newStart, total: newTotal, dailyRate: newRate })
                                        }}
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs text-slate-400">End Date</label>
                                    <Input
                                        type="datetime-local"
                                        className="bg-white/5 border-white/10 text-white"
                                        value={formData.endDate}
                                        onChange={e => {
                                            const newEnd = e.target.value
                                            const days = calculateDaysDuration(formData.startDate, newEnd, formData.customDuration)
                                            const newRate = getDynamicRate(days)
                                            const newTotal = calculateTotal(days, formData.additionalCharges, formData.discount, newRate)
                                            setFormData({ ...formData, endDate: newEnd, total: newTotal, dailyRate: newRate })
                                        }}
                                    />
                                </div>
                            </div>
                            {/* Duration Bar */}
                            <div className="bg-red-950/20 border border-red-900/20 rounded-lg p-3 flex justify-between items-center">
                                <div>
                                    <p className="text-xs text-red-200 font-bold">Total Days</p>
                                    <p className="text-[10px] text-red-400">
                                        {formData.customDuration ? 'Manual Override' : 'Calculated automatically'}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Input
                                        className="w-20 bg-black/20 border-red-500/30 text-right text-lg font-black text-white h-10 p-2"
                                        value={getDays()}
                                        onChange={(e) => {
                                            const val = e.target.value;
                                            const days = parseInt(val) || 0
                                            const newRate = getDynamicRate(days)
                                            const newTotal = calculateTotal(days, formData.additionalCharges, formData.discount, newRate);
                                            setFormData({ ...formData, customDuration: val, total: newTotal, dailyRate: newRate });
                                        }}
                                    />
                                    <span className="text-sm text-slate-400">Days</span>
                                </div>
                            </div>
                        </div>

                        {/* Section: Payment History */}
                        <div className="flex-1">
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3 text-[10px]">Payment History</h3>
                            <div className="space-y-2 max-h-[150px] overflow-y-auto pr-2">
                                {formData.payments.map((p, i) => (
                                    <div key={p.id} className="flex items-center justify-between p-3 bg-white/5 rounded border border-white/5 group">
                                        <div className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-green-500/10 flex items-center justify-center">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold">Payment ({p.medium})</p>
                                                <p className="text-[10px] text-slate-400">{new Date(p.date).toLocaleDateString()} • {p.notes}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="font-mono font-bold">₹{p.amount}</span>
                                            <button onClick={() => handleDeletePayment(p.id)} className="text-slate-600 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Trash className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                {formData.payments.length === 0 && <p className="text-sm text-slate-500 text-center py-4">No payments recorded yet.</p>}
                            </div>
                        </div>
                    </div>


                    {/* RIGHT COLUMN: Financials & Payment Action */}
                    <div className="md:col-span-5 p-6 flex flex-col bg-[#0c0a09] overflow-y-auto">

                        {/* Financials Box */}
                        <div className="bg-[#1c1917] border border-white/10 rounded-xl p-5 mb-6">
                            <h3 className="text-sm font-bold text-red-500 mb-4 flex items-center gap-2">
                                <CreditCard className="h-4 w-4" /> Financials
                            </h3>

                            <div className="space-y-3 mb-4">
                                {/* Daily Rate Editable */}
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-slate-400">Daily Rate</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-slate-500">₹</span>
                                        <input
                                            className="w-20 bg-black/20 border border-white/10 rounded px-2 py-1 text-right text-white text-sm"
                                            type="number"
                                            value={formData.dailyRate}
                                            onChange={e => {
                                                const newRate = e.target.value
                                                const days = calculateDaysDuration(formData.startDate, formData.endDate, formData.customDuration)
                                                const newTotal = calculateTotal(days, formData.additionalCharges, formData.discount, newRate)
                                                setFormData({ ...formData, dailyRate: newRate, total: newTotal })
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-400">Base Cost ({getDays()} days)</span>
                                    <span className="font-bold">₹{(Number(formData.dailyRate) * getDays()).toLocaleString()}</span>
                                </div>

                                <div className="space-y-1">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-400">Discount</span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-slate-500">₹</span>
                                            <input
                                                className="w-20 bg-black/20 border border-white/10 rounded px-2 py-1 text-right text-white text-sm"
                                                type="number"
                                                value={formData.discount}
                                                onChange={e => {
                                                    const newDiscount = e.target.value
                                                    const days = calculateDaysDuration(formData.startDate, formData.endDate, formData.customDuration)
                                                    const newTotal = calculateTotal(days, formData.additionalCharges, newDiscount, formData.dailyRate)
                                                    setFormData({ ...formData, discount: newDiscount, total: newTotal })
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <input
                                        className="w-full bg-transparent border-b border-white/10 text-[10px] text-white focus:outline-none focus:border-red-500 placeholder:text-slate-600 pb-1"
                                        placeholder="Reason for discount (optional)"
                                        value={formData.discountNote}
                                        onChange={e => setFormData({ ...formData, discountNote: e.target.value })}
                                    />
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-slate-400">Additional Charges</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-slate-500">₹</span>
                                        <input
                                            className="w-20 bg-black/20 border border-white/10 rounded px-2 py-1 text-right text-white text-sm"
                                            type="number"
                                            value={formData.additionalCharges}
                                            onChange={e => {
                                                const newAdditional = e.target.value
                                                const days = calculateDaysDuration(formData.startDate, formData.endDate, formData.customDuration)
                                                const newTotal = calculateTotal(days, newAdditional, formData.discount, formData.dailyRate)
                                                setFormData({ ...formData, additionalCharges: newAdditional, total: newTotal })
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-white/10 pt-4 flex justify-between items-end">
                                <span className="text-sm font-bold text-white">Net Total</span>
                                <span className="text-2xl font-black text-red-500">₹{Number(formData.total).toLocaleString()}</span>
                            </div>
                        </div>

                        {/* Add Payment Box */}
                        <div className="bg-[#1c1917] border border-white/10 rounded-xl p-5 flex-1 flex flex-col">
                            <h3 className="text-sm font-bold text-red-500 mb-4 flex items-center gap-2">
                                <Plus className="h-4 w-4" /> Add Payment
                            </h3>

                            <Tabs value={activeTab} className="w-full mb-4" onValueChange={setActiveTab}>
                                <TabsList className="grid w-full grid-cols-3 bg-black/40">
                                    <TabsTrigger
                                        value="Cash"
                                        className="data-[state=active]:bg-white data-[state=active]:text-black text-slate-400"
                                    >
                                        Cash
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="UPI"
                                        className="data-[state=active]:bg-white data-[state=active]:text-black text-slate-400"
                                    >
                                        UPI
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="Bank"
                                        className="data-[state=active]:bg-white data-[state=active]:text-black text-slate-400"
                                    >
                                        Bank
                                    </TabsTrigger>
                                </TabsList>
                            </Tabs>

                            <div className="grid grid-cols-2 gap-4 mb-3">
                                <div className="space-y-1">
                                    <label className="text-[10px] text-slate-400 uppercase font-bold">Amount</label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-2 text-slate-500">₹</span>
                                        <Input
                                            className="pl-7 bg-black/20 border-white/10 text-white"
                                            type="number"
                                            value={newPayment.amount}
                                            onChange={e => setNewPayment({ ...newPayment, amount: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] text-slate-400 uppercase font-bold">Receiver</label>
                                    <Input
                                        className="bg-black/20 border-white/10 text-white"
                                        placeholder="Admin Name"
                                    />
                                </div>
                            </div>
                            <div className="space-y-1 mb-4">
                                <label className="text-[10px] text-slate-400 uppercase font-bold">Note</label>
                                <textarea
                                    className="w-full bg-black/20 border border-white/10 rounded p-2 text-sm text-white min-h-[60px]"
                                    placeholder="Add a note for this payment..."
                                    value={newPayment.notes}
                                    onChange={e => setNewPayment({ ...newPayment, notes: e.target.value })}
                                />
                            </div>

                            <Button
                                className="w-full bg-red-900/30 hover:bg-red-900/50 text-red-500 border border-red-500/20 font-bold mt-auto"
                                onClick={handleAddPayment}
                                disabled={!newPayment.amount}
                            >
                                <Plus className="h-4 w-4 mr-2" /> Record Payment
                            </Button>
                        </div>
                    </div>
                </div>

                {/* FOOTER */}
                <div className="h-[80px] bg-[#0c0a09] border-t border-white/10 flex items-center justify-between px-6">
                    <button onClick={handleDelete} className="text-red-500 hover:text-red-400 text-sm flex items-center gap-2">
                        <Trash className="h-4 w-4" /> Delete Rental
                    </button>
                    <div className="flex gap-3">
                        <Button className="bg-white text-black hover:bg-gray-200 font-bold" onClick={onClose}>Cancel</Button>
                        <Button className="bg-red-600 hover:bg-red-700 text-white font-bold" onClick={handleSubmit}>Save Changes</Button>
                    </div>
                </div>
            </Dialog>

            <DeleteRentalModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={confirmDelete}
                rental={{ ...transaction, car, customer }}
            />
        </>
    )
}
