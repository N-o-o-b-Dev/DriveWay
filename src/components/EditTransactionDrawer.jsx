import { useState, useEffect } from 'react'
import { useDriveway } from '../context/DrivewayContext'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { Sheet, SheetHeader, SheetTitle } from './ui/Sheet'

export function EditTransactionDrawer({ isOpen, onClose, transaction }) {
    const { updateTransaction, cars, customers } = useDriveway()
    const [formData, setFormData] = useState({
        startDate: '',
        endDate: '',
        status: '',
        paymentStatus: '',
        notes: ''
    })

    useEffect(() => {
        if (transaction) {
            setFormData({
                startDate: transaction.startDate,
                endDate: transaction.endDate,
                status: transaction.status,
                paymentStatus: transaction.paymentStatus || 'Pending',
                notes: transaction.notes || ''
            })
        }
    }, [transaction])

    const handleSubmit = (e) => {
        e.preventDefault()
        updateTransaction(transaction.id, formData)
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
            <div className="mt-6">
                <div className="mb-6 space-y-2">
                    <p className="text-sm text-muted-foreground">Transaction ID: {transaction.id}</p>
                    <p className="font-medium">{car?.make} {car?.model}</p>
                    <p className="text-sm">{customer?.name}</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Notes</label>
                        <Input
                            placeholder="Notes"
                            value={formData.notes}
                            onChange={e => setFormData({ ...formData, notes: e.target.value })}
                        />
                    </div>
                    <Button type="submit" className="w-full">Save Changes</Button>
                </form>
            </div>
        </Sheet>
    )
}
