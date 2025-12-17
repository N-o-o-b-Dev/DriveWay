import { useState } from 'react'
import { useDriveway } from '../context/DrivewayContext'
import { Sheet, SheetHeader, SheetTitle } from './ui/Sheet'

import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'
import { Button } from './ui/Button'
import { Mail, Phone, Calendar, Car, Edit } from 'lucide-react'
import { EditTransactionDrawer } from './EditTransactionDrawer'

export function DealerDetailsDrawer({ isOpen, onClose, dealer }) {
    const { transactions, customers, cars } = useDriveway()
    const [editingTransaction, setEditingTransaction] = useState(null)

    if (!dealer) return null

    // Find all transactions for this dealer
    const dealerTransactions = transactions.filter(t => t.dealerId === dealer.id)

    // Calculate Stats
    const totalEarned = dealerTransactions.reduce((sum, t) => sum + (Number(t.total) || 0), 0)
    const pendingAmount = dealerTransactions
        .filter(t => t.paymentStatus !== 'Paid')
        .reduce((sum, t) => sum + Math.max(0, (Number(t.total) || 0) - (Number(t.amountPaid) || 0)), 0)

    // Get unique customer IDs for existing functionality
    const customerIds = [...new Set(dealerTransactions.map(t => t.customerId).filter(id => id))]
    const dealerCustomers = customers.filter(c => customerIds.includes(c.id))

    return (
        <Sheet isOpen={isOpen} onClose={onClose}>
            <SheetHeader>
                <SheetTitle>Dealer Details: {dealer.name}</SheetTitle>
            </SheetHeader>
            <div className="mt-6 space-y-6">

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                    <Card>
                        <CardContent className="p-4 pt-4">
                            <p className="text-sm text-muted-foreground">Total Generated</p>
                            <h3 className="text-2xl font-bold">₹{totalEarned.toLocaleString()}</h3>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4 pt-4">
                            <p className="text-sm text-muted-foreground">Pending Collection</p>
                            <h3 className="text-2xl font-bold text-destructive">₹{pendingAmount.toLocaleString()}</h3>
                        </CardContent>
                    </Card>
                </div>

                {/* Business Info */}
                {/* Business Info */}
                <Card>
                    <CardHeader className="pb-3">
                        <CardTitle className="text-base">Business Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Unique ID</span>
                            <span className="font-medium">{dealer.uniqueId || 'N/A'}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Contact Person</span>
                            <span className="font-medium">{dealer.contactPerson || 'N/A'}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">PAN Number</span>
                            <span className="font-medium">{dealer.pan || 'N/A'}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Address</span>
                            <span className="font-medium max-w-[200px] text-right">{dealer.address || 'N/A'}</span>
                        </div>
                    </CardContent>
                </Card>

                {/* Documents */}
                <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Documents</h3>
                    <div className="grid grid-cols-4 gap-2">
                        {dealer.logo && (
                            <div className="aspect-square rounded bg-muted overflow-hidden relative group cursor-pointer" onClick={() => window.open(dealer.logo)}>
                                <img src={dealer.logo} alt="Logo" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-bold">Logo</div>
                            </div>
                        )}
                        {dealer.proof && (
                            <div className="aspect-square rounded bg-muted overflow-hidden relative group cursor-pointer" onClick={() => window.open(dealer.proof)}>
                                <img src={dealer.proof} alt="Proof" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-bold">Proof</div>
                            </div>
                        )}
                        {dealer.altProof && (
                            <div className="aspect-square rounded bg-muted overflow-hidden relative group cursor-pointer" onClick={() => window.open(dealer.altProof)}>
                                <img src={dealer.altProof} alt="Alt Proof" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-bold">Alt Proof</div>
                            </div>
                        )}
                        {dealer.shopAct && (
                            <div className="aspect-square rounded bg-muted overflow-hidden relative group cursor-pointer" onClick={() => window.open(dealer.shopAct)}>
                                <img src={dealer.shopAct} alt="Shop Act" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-bold">Shop Act</div>
                            </div>
                        )}
                        {dealer.panImage && (
                            <div className="aspect-square rounded bg-muted overflow-hidden relative group cursor-pointer" onClick={() => window.open(dealer.panImage)}>
                                <img src={dealer.panImage} alt="PAN" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-bold">PAN</div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Transactions History */}
                <div>
                    <h3 className="font-semibold text-lg mb-3">Transaction History</h3>
                    <div className="space-y-3">
                        {dealerTransactions.length > 0 ? (
                            dealerTransactions.map(transaction => {
                                const car = cars.find(c => c.id === transaction.carId)
                                return (
                                    <Card key={transaction.id} className="overflow-hidden">
                                        <CardContent className="p-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <div className="flex items-center gap-2">
                                                    <Car className="h-4 w-4 text-muted-foreground" />
                                                    <span className="font-medium">{car ? `${car.make} ${car.model}` : 'Unknown Car'}</span>
                                                </div>
                                                <span className={`text-sm font-semibold ${transaction.status === 'Active' ? 'text-green-600' : 'text-gray-600'}`}>
                                                    {transaction.status}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                                                <Calendar className="h-4 w-4" />
                                                {transaction.startDate} - {transaction.endDate}
                                            </div>

                                            <div className="flex justify-between items-center pt-2 border-t">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm font-medium">₹{transaction.total}</span>
                                                    {(Number(transaction.amountPaid) > 0 && transaction.paymentStatus !== 'Paid') && (
                                                        <span className="text-xs text-muted-foreground">
                                                            (Paid: ₹{transaction.amountPaid})
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className={`text-xs px-2 py-1 rounded-full ${transaction.paymentStatus === 'Paid' ? 'bg-green-100 text-green-800' :
                                                        transaction.paymentStatus === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                                            'bg-red-100 text-red-800'
                                                        }`}>
                                                        {transaction.paymentStatus || 'Pending'}
                                                    </span>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-6 w-6"
                                                        onClick={() => setEditingTransaction(transaction)}
                                                    >
                                                        <Edit className="h-3 w-3" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })
                        ) : (
                            <p className="text-sm text-muted-foreground">No transactions found.</p>
                        )}
                    </div>
                </div>

                {/* Associated Customers (Existing Feature) */}
                <div>
                    <h3 className="font-semibold text-lg mb-3">Associated Customers</h3>
                    <div className="space-y-3">
                        {dealerCustomers.length > 0 ? (
                            dealerCustomers.map(customer => (
                                <Card key={customer.id}>
                                    <CardContent className="p-4">
                                        <h4 className="font-medium mb-1">{customer.name}</h4>
                                        <div className="space-y-1">
                                            <div className="flex items-center text-sm text-muted-foreground">
                                                <Mail className="mr-2 h-4 w-4" />
                                                {customer.email}
                                            </div>
                                            <div className="flex items-center text-sm text-muted-foreground">
                                                <Phone className="mr-2 h-4 w-4" />
                                                {customer.phone}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))
                        ) : (
                            <p className="text-sm text-muted-foreground">No associated customers.</p>
                        )}
                    </div>
                </div>

            </div>

            <EditTransactionDrawer
                isOpen={!!editingTransaction}
                onClose={() => setEditingTransaction(null)}
                transaction={editingTransaction}
            />

        </Sheet>
    )
}
