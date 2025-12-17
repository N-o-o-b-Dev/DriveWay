import { useState, useEffect } from 'react'
import { useDriveway } from '../context/DrivewayContext'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { Sheet, SheetHeader, SheetTitle } from './ui/Sheet'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/Table'
import { Plus, Trash } from 'lucide-react'
import { generateId } from '../lib/utils'

export function EditTransactionDrawer({ isOpen, onClose, transaction }) {
    const { updateTransaction, cars, customers } = useDriveway()
    const [formData, setFormData] = useState({
        startDate: '',
        endDate: '',
        status: '',
        paymentStatus: '',
        notes: '',
        payments: []
    })

    const [newPayment, setNewPayment] = useState({
        amount: '',
        date: new Date().toISOString().split('T')[0],
        type: 'Credit',
        medium: 'Cash',
        notes: ''
    })

    useEffect(() => {
        if (transaction) {
            // Migration: If no payments array but has amountPaid, create initial credit
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

            setFormData({
                startDate: transaction.startDate,
                endDate: transaction.endDate,
                status: transaction.status,
                paymentStatus: transaction.paymentStatus || 'Pending',
                notes: transaction.notes || '',
                payments: initialPayments
            })
        }
    }, [transaction])

    const totalPaid = formData.payments.reduce((sum, p) => {
        return p.type === 'Credit' ? sum + Number(p.amount) : sum - Number(p.amount)
    }, 0)

    const pendingBalance = Math.max(0, (Number(transaction?.total) || 0) - totalPaid)

    const handleAddPayment = () => {
        if (!newPayment.amount || !newPayment.date) return

        const payment = {
            id: generateId(),
            ...newPayment,
            amount: Number(newPayment.amount)
        }

        const updatedPayments = [...formData.payments, payment]

        // Auto-update payment status
        const newTotalPaid = updatedPayments.reduce((sum, p) => {
            return p.type === 'Credit' ? sum + Number(p.amount) : sum - Number(p.amount)
        }, 0)

        const newStatus = newTotalPaid >= (Number(transaction.total) || 0) ? 'Paid' : 'Pending'

        setFormData({
            ...formData,
            payments: updatedPayments,
            paymentStatus: newStatus
        })

        setNewPayment({
            amount: '',
            date: new Date().toISOString().split('T')[0],
            type: 'Credit',
            medium: 'Cash',
            notes: ''
        })
    }

    const handleDeletePayment = (id) => {
        if (window.confirm('Delete this transaction record?')) {
            const updatedPayments = formData.payments.filter(p => p.id !== id)
            setFormData({ ...formData, payments: updatedPayments })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateTransaction(transaction.id, {
            ...formData,
            amountPaid: totalPaid // Keep for backward compatibility/easy access
        })
        onClose()
    }

    if (!transaction) return null

    const car = cars.find(c => c.id === transaction.carId)
    const customer = customers.find(c => c.id === transaction.customerId)

    return (
        <Sheet isOpen={isOpen} onClose={onClose}>
            <SheetHeader>
                <SheetTitle>Edit Transaction</SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex flex-col h-[calc(100vh-100px)] overflow-y-auto">
                <div className="mb-6 space-y-2">
                    <p className="text-sm text-muted-foreground">Transaction ID: {transaction.id}</p>
                    <p className="font-medium">{car?.make} {car?.model}</p>
                    <p className="text-sm">{customer?.name}</p>
                </div>

                <form id="edit-transaction-form" onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Start Date</label>
                            <Input
                                type="date"
                                value={formData.startDate}
                                onChange={e => setFormData({ ...formData, startDate: e.target.value })}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">End Date</label>
                            <Input
                                type="date"
                                value={formData.endDate}
                                onChange={e => setFormData({ ...formData, endDate: e.target.value })}
                                required
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Status</label>
                            <select
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface"
                                value={formData.status}
                                onChange={e => setFormData({ ...formData, status: e.target.value })}
                            >
                                <option value="Active">Active</option>
                                <option value="Completed">Completed</option>
                                <option value="Cancelled">Cancelled</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Payment Status</label>
                            <select
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface"
                                value={formData.paymentStatus}
                                onChange={e => setFormData({ ...formData, paymentStatus: e.target.value })}
                            >
                                <option value="Pending">Pending</option>
                                <option value="Paid">Paid</option>
                                <option value="Pay on Arrival">Pay on Arrival</option>
                            </select>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Notes</label>
                        <Input
                            placeholder="Notes"
                            value={formData.notes}
                            onChange={e => setFormData({ ...formData, notes: e.target.value })}
                        />
                    </div>
                </form>

                <div className="mt-8 space-y-4">
                    <h3 className="font-semibold text-lg border-b pb-2">Financial History</h3>

                    {/* Add New Payment */}
                    <div className="p-4 rounded-lg bg-muted/30 border space-y-4">
                        <h4 className="text-sm font-medium">Add Transaction</h4>
                        <div className="grid grid-cols-2 gap-2">
                            <select
                                className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                value={newPayment.type}
                                onChange={e => setNewPayment({ ...newPayment, type: e.target.value })}
                            >
                                <option value="Credit">Credit (In)</option>
                                <option value="Debit">Debit (Out)</option>
                            </select>
                            <Input
                                type="date"
                                className="h-9"
                                value={newPayment.date}
                                onChange={e => setNewPayment({ ...newPayment, date: e.target.value })}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <Input
                                type="number"
                                placeholder="Amount"
                                className="h-9"
                                value={newPayment.amount}
                                onChange={e => setNewPayment({ ...newPayment, amount: e.target.value })}
                            />
                            <select
                                className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                value={newPayment.medium}
                                onChange={e => setNewPayment({ ...newPayment, medium: e.target.value })}
                            >
                                <option value="Cash">Cash</option>
                                <option value="UPI">UPI</option>
                                <option value="Bank Transfer">Bank Transfer</option>
                                <option value="Card">Card</option>
                            </select>
                        </div>
                        <Input
                            placeholder="Transaction ID / Notes"
                            className="h-9"
                            value={newPayment.notes}
                            onChange={e => setNewPayment({ ...newPayment, notes: e.target.value })}
                        />
                        <Button onClick={handleAddPayment} size="sm" className="w-full" disabled={!newPayment.amount}>
                            <Plus className="h-4 w-4 mr-2" /> Add Entry
                        </Button>
                    </div>

                    {/* Ledger Table */}
                    <div className="border rounded-md">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Type</TableHead>
                                    <TableHead>Amount</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {formData.payments.map((p) => (
                                    <TableRow key={p.id}>
                                        <TableCell className="text-xs">{p.date}</TableCell>
                                        <TableCell>
                                            <span className={`text-xs px-2 py-0.5 rounded-full ${p.type === 'Credit' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                                }`}>
                                                {p.type}
                                            </span>
                                            <div className="text-[10px] text-muted-foreground mt-0.5">{p.medium}</div>
                                        </TableCell>
                                        <TableCell className="font-medium">₹{p.amount}</TableCell>
                                        <TableCell>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="h-6 w-6 p-0 text-destructive"
                                                onClick={() => handleDeletePayment(p.id)}
                                            >
                                                <Trash className="h-3 w-3" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                {formData.payments.length === 0 && (
                                    <TableRow>
                                        <TableCell colSpan={4} className="text-center text-muted-foreground text-xs py-4">
                                            No transactions recorded
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>

                    <div className="p-4 rounded-lg bg-muted/50 space-y-2 border">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">Total Rental Cost</span>
                            <span className="font-bold">₹{transaction.total}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">Total Paid (Credits - Debits)</span>
                            <span className="font-bold text-green-600">₹{totalPaid}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm pt-2 border-t">
                            <span className="font-medium">Pending Balance</span>
                            <span className={`font-bold ${pendingBalance > 0 ? 'text-destructive' : 'text-green-600'}`}>
                                ₹{pendingBalance}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mt-auto pt-4 border-t bg-background sticky bottom-0">
                    <Button type="submit" form="edit-transaction-form" className="w-full">Save Changes</Button>
                </div>
            </div>
        </Sheet>
    )
}
