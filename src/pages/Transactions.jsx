import { useState } from 'react'
import { useDriveway } from '../context/DrivewayContext'
import { Card, CardContent } from '../components/ui/Card'
import { Edit, Trash } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { EditTransactionDrawer } from '../components/EditTransactionDrawer'
import { DeleteConfirmDialog } from '../components/DeleteConfirmDialog'

export function Transactions() {
    const [expandedId, setExpandedId] = useState(null)
    const { transactions, cars, customers, dealers, deleteTransaction } = useDriveway()
    const [editingTransaction, setEditingTransaction] = useState(null)
    const [deleteDialogProps, setDeleteDialogProps] = useState({ isOpen: false, transactionId: null })
    const [searchTerm, setSearchTerm] = useState('')
    const [statusFilter, setStatusFilter] = useState('All')
    const [paymentFilter, setPaymentFilter] = useState('All')
    const [dateStart, setDateStart] = useState('')
    const [dateEnd, setDateEnd] = useState('')

    const filteredTransactions = transactions.filter(t => {
        const car = cars.find(c => c.id === t.carId)
        const customer = customers.find(c => c.id === t.customerId)
        const dealer = t.dealerId ? dealers.find(d => d.id === t.dealerId) : null

        const searchString = `${car?.make} ${car?.model} ${car?.plateNumber} ${customer?.name} ${dealer?.name || ''}`.toLowerCase()
        const matchesSearch = searchString.includes(searchTerm.toLowerCase())

        const matchesStatus = statusFilter === 'All' || t.status === statusFilter

        const totalPaid = (t.payments || []).reduce((sum, p) => p.type === 'Credit' ? sum + Number(p.amount) : sum - Number(p.amount), 0)
        const pendingBalance = Math.max(0, (t.total || 0) - totalPaid)
        const paymentStatus = pendingBalance > 0 ? 'Pending' : 'Completed'

        const matchesPayment = paymentFilter === 'All' || paymentStatus === paymentFilter

        const transactionDate = new Date(t.startDate)
        const matchesDateStart = !dateStart || transactionDate >= new Date(dateStart)
        const matchesDateEnd = !dateEnd || transactionDate <= new Date(dateEnd + 'T23:59:59')

        return matchesSearch && matchesStatus && matchesPayment && matchesDateStart && matchesDateEnd
    })

    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">Transactions</h2>

            <div className="flex flex-col gap-4 bg-muted/40 p-4 rounded-lg border">
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <div className="relative flex-1 w-full">
                        <Input
                            placeholder="Search transactions..."
                            className="bg-background"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2 w-full sm:w-auto">
                        <select
                            className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm w-full"
                            value={statusFilter}
                            onChange={e => setStatusFilter(e.target.value)}
                        >
                            <option value="All">All Status</option>
                            <option value="Active">Active</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                        </select>
                        <select
                            className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm w-full"
                            value={paymentFilter}
                            onChange={e => setPaymentFilter(e.target.value)}
                        >
                            <option value="All">All Payments</option>
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground whitespace-nowrap">From:</span>
                        <Input
                            type="date"
                            className="bg-background w-auto"
                            value={dateStart}
                            onChange={e => setDateStart(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground whitespace-nowrap">To:</span>
                        <Input
                            type="date"
                            className="bg-background w-auto"
                            value={dateEnd}
                            onChange={e => setDateEnd(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="grid gap-4">
                {filteredTransactions.map((transaction) => {
                    const car = cars.find(c => c.id === transaction.carId)
                    const customer = customers.find(c => c.id === transaction.customerId)
                    const dealer = transaction.dealerId ? dealers.find(d => d.id === transaction.dealerId) : null
                    const isExpanded = expandedId === transaction.id

                    const totalPaid = (transaction.payments || []).reduce((sum, p) => {
                        return p.type === 'Credit' ? sum + Number(p.amount) : sum - Number(p.amount)
                    }, 0)
                    const pendingBalance = Math.max(0, (transaction.total || 0) - totalPaid)

                    return (
                        <Card
                            key={transaction.id}
                            className={`relative group transition-all duration-200 ${isExpanded ? 'ring-2 ring-primary' : 'hover:bg-muted/50 cursor-pointer'}`}
                            onClick={() => setExpandedId(isExpanded ? null : transaction.id)}
                        >
                            <CardContent className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="font-bold text-lg">{car?.make} {car?.model}</h3>
                                        <p className="text-sm text-muted-foreground">Customer: {customer?.name}</p>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            {transaction.startDate} - {transaction.endDate}
                                        </p>
                                        {transaction.notes && (
                                            <p className="text-sm mt-2 text-foreground/90">
                                                {transaction.notes}
                                            </p>
                                        )}
                                    </div>
                                    <div className="flex gap-2">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${transaction.status === 'Active' ? 'bg-green-100 text-green-800 border-green-200' :
                                            transaction.status === 'Completed' ? 'bg-blue-100 text-blue-800 border-blue-200' :
                                                'bg-gray-100 text-gray-800 border-gray-200'
                                            }`}>
                                            {transaction.status}
                                        </span>
                                        {pendingBalance > 0 ? (
                                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 border border-red-200">
                                                Pending
                                            </span>
                                        ) : (
                                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                                                Completed
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                                    <div>
                                        <p className="text-xs text-muted-foreground">Total Amount</p>
                                        <p className="font-bold">₹{transaction.total}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Paid Amount</p>
                                        <p className="font-medium text-green-600">₹{totalPaid}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Balance</p>
                                        <p className={`font-bold ${pendingBalance > 0 ? 'text-destructive' : 'text-muted-foreground'}`}>
                                            ₹{pendingBalance}
                                        </p>
                                    </div>
                                </div>

                                {isExpanded && (
                                    <div className="mt-4 pt-4 border-t grid grid-cols-2 gap-4 animate-in slide-in-from-top-2 fade-in duration-200" onClick={e => e.stopPropagation()}>
                                        <div>
                                            <p className="text-xs text-muted-foreground">Dealer</p>
                                            <p className="font-medium">{dealer?.name || 'Unknown Dealer'}</p>
                                            {dealer?.phone && <p className="text-xs text-muted-foreground">{dealer.phone}</p>}
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground">Start Mileage</p>
                                            <p className="font-medium">{transaction.startMileage || '-'}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground">Car Plate</p>
                                            <p className="font-medium">{car?.plateNumber}</p>
                                        </div>
                                        <div className="flex gap-2 justify-end items-end h-full">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    setEditingTransaction(transaction)
                                                }}
                                            >
                                                <Edit className="h-4 w-4 mr-2" /> Edit
                                            </Button>
                                            <Button
                                                variant="destructive"
                                                size="sm"
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    setDeleteDialogProps({ isOpen: true, transactionId: transaction.id })
                                                }}
                                            >
                                                <Trash className="h-4 w-4 mr-2" /> Delete
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </CardContent>

                            {/* Actions moved to expanded view but kept hover icon for quick access if not expanded? 
                                Actually, user might want quick access. Let's keep the hover icons but maybe hide them if expanded 
                                or just let them be. The expanded view has distinct buttons now. 
                                Let's remove the absolute positioned icons if expanded to avoid clutter, 
                                OR just keep them. I'll remove the absolute ones to rely on the expanded view buttons for clarity. 
                            */}
                            {!isExpanded && (
                                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            setEditingTransaction(transaction)
                                        }}
                                    >
                                        <Edit className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            setDeleteDialogProps({ isOpen: true, transactionId: transaction.id })
                                        }}
                                    >
                                        <Trash className="h-4 w-4" />
                                    </Button>
                                </div>
                            )}
                        </Card>
                    )
                })}
            </div>

            <EditTransactionDrawer
                isOpen={!!editingTransaction}
                onClose={() => setEditingTransaction(null)}
                transaction={editingTransaction}
            />

            <DeleteConfirmDialog
                isOpen={deleteDialogProps.isOpen}
                onClose={() => setDeleteDialogProps({ isOpen: false, transactionId: null })}
                onConfirm={() => {
                    if (deleteDialogProps.transactionId) {
                        deleteTransaction(deleteDialogProps.transactionId)
                    }
                }}
                title="Delete Transaction"
                description="Are you sure you want to delete this transaction? This action cannot be undone."
            />
        </div>
    )
}
