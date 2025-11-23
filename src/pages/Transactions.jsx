import { useState } from 'react'
import { useDriveway } from '../context/DrivewayContext'
import { Card, CardContent } from '../components/ui/Card'
import { Edit } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { EditTransactionDrawer } from '../components/EditTransactionDrawer'

export function Transactions() {
    const { transactions, cars, customers } = useDriveway()
    const [editingTransaction, setEditingTransaction] = useState(null)

    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">Transactions</h2>

            <div className="grid gap-4">
                {transactions.map((transaction) => {
                    const car = cars.find(c => c.id === transaction.carId)
                    const customer = customers.find(c => c.id === transaction.customerId)

                    return (
                        <Card key={transaction.id} className="relative group">
                            <CardContent className="p-6 flex items-center justify-between">
                                <div>
                                    <h3 className="font-bold text-lg">{car?.make} {car?.model}</h3>
                                    <p className="text-sm text-muted-foreground">Customer: {customer?.name}</p>
                                    <p className="text-sm text-muted-foreground">
                                        {transaction.startDate} - {transaction.endDate}
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-right">
                                        <p className="font-bold text-xl">₹{transaction.total}</p>
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${transaction.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                            }`}>
                                            {transaction.status}
                                        </span>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                                        onClick={() => setEditingTransaction(transaction)}
                                    >
                                        <Edit className="h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>

            <EditTransactionDrawer
                isOpen={!!editingTransaction}
                onClose={() => setEditingTransaction(null)}
                transaction={editingTransaction}
            />
        </div>
    )
}
