import { useState } from 'react'
import { useDriveway } from '../context/DrivewayContext'
import { Sheet, SheetHeader, SheetTitle } from './ui/Sheet'
import { Card, CardContent } from './ui/Card'
import { Button } from './ui/Button'
import { EditTransactionDrawer } from './EditTransactionDrawer'

export function PendingTransactionsDrawer({ isOpen, onClose, entity, transactions, type }) {
    const { cars } = useDriveway()
    const [selectedTransaction, setSelectedTransaction] = useState(null)

    if (!entity) return null

    // Filter for pending transactions for this specific entity
    const pendingTransactions = transactions.filter(t => {
        const isForEntity = type === 'customer'
            ? t.customerId === entity.id
            : t.dealerId === entity.id

        const isPending = t.paymentStatus !== 'Paid'
        return isForEntity && isPending
    })

    const handleSettle = (transaction) => {
        setSelectedTransaction(transaction)
    }

    return (
        <>
            <Sheet isOpen={isOpen} onClose={onClose}>
                <SheetHeader>
                    <SheetTitle>Pending {type === 'customer' ? 'Payments' : 'Collections'}: {entity.name}</SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-4">
                    {pendingTransactions.length > 0 ? (
                        pendingTransactions.map(t => {
                            const car = cars.find(c => c.id === t.carId)
                            const paid = Number(t.amountPaid) || 0
                            const total = Number(t.total) || 0
                            const pending = Math.max(0, total - paid)

                            return (
                                <Card key={t.id} className="overflow-hidden">
                                    <div className="h-1 w-full bg-destructive" />
                                    <CardContent className="p-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h4 className="font-bold">{car ? `${car.make} ${car.model}` : 'Unknown Car'}</h4>
                                                <p className="text-sm text-muted-foreground">{t.startDate} - {t.endDate}</p>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-bold text-destructive">₹{pending}</div>
                                                <div className="text-xs text-muted-foreground">of ₹{total}</div>
                                            </div>
                                        </div>
                                        <Button
                                            size="sm"
                                            className="w-full mt-2"
                                            variant="outline"
                                            onClick={() => handleSettle(t)}
                                        >
                                            Settle Amount
                                        </Button>
                                    </CardContent>
                                </Card>
                            )
                        })
                    ) : (
                        <div className="text-center py-8 text-muted-foreground">
                            No pending transactions found.
                        </div>
                    )}
                </div>
            </Sheet>

            {/* Nested Drawer for editing/paying */}
            <EditTransactionDrawer
                isOpen={!!selectedTransaction}
                onClose={() => {
                    setSelectedTransaction(null)
                    // Optional: Check if we should close the parent drawer if all paid, 
                    // but keeping it open to show updated list is better UX usually.
                }}
                transaction={selectedTransaction}
            />
        </>
    )
}
