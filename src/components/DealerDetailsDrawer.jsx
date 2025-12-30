import { useState } from 'react'
import { useDriveway } from '../context/DrivewayContext'
import { Sheet, SheetHeader, SheetTitle } from './ui/Sheet'

import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'
import { Button } from './ui/Button'
import { Mail, Phone, Calendar, Car, Edit, Banknote, PlusCircle } from 'lucide-react'
import { EditTransactionModal } from './EditTransactionModal'
import { AddDealerTransactionModal } from './AddDealerTransactionModal'

export function DealerDetailsDrawer({ isOpen, onClose, dealer }) {
    const { transactions, customers, cars, dealerTransactions } = useDriveway()
    const [editingTransaction, setEditingTransaction] = useState(null)
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)

    if (!dealer) return null

    // Find all transactions for this dealer
    const rentals = transactions.filter(t => t.dealerId === dealer.id).map(t => ({ ...t, source: 'Rental' }))
    const manual = dealerTransactions.filter(t => t.dealerId === dealer.id).map(t => ({ ...t, source: 'Manual' }))

    // Merge and Sort
    const history = [...rentals, ...manual].sort((a, b) => {
        const dateA = a.startDate || a.date
        const dateB = b.startDate || b.date
        return new Date(dateB) - new Date(dateA) // Newest first
    })

    // Calculate Stats
    const totalEarned = rentals.reduce((sum, t) => sum + (Number(t.total) || 0), 0)
    const pendingAmount = rentals
        .filter(t => t.paymentStatus !== 'Paid')
        .reduce((sum, t) => sum + Math.max(0, (Number(t.total) || 0) - (Number(t.amountPaid) || 0)), 0)

    // Get unique customer IDs
    const customerIds = [...new Set(rentals.map(t => t.customerId).filter(id => id))]
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
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-lg">Transaction History</h3>
                        <Button size="sm" variant="outline" className="h-8 gap-2 border-black/10 dark:border-white/10 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10" onClick={() => setIsAddModalOpen(true)}>
                            <PlusCircle className="h-3.5 w-3.5" />
                            Add Entry
                        </Button>
                    </div>

                    <div className="space-y-3">
                        {history.length > 0 ? (
                            history.map(item => {
                                if (item.source === 'Rental') {
                                    // RENTAL CARD
                                    const car = cars.find(c => c.id === item.carId)
                                    return (
                                        <Card key={item.id} className="overflow-hidden border-l-4 border-l-blue-500">
                                            <CardContent className="p-4">
                                                <div className="flex justify-between items-start mb-2">
                                                    <div className="flex items-center gap-2">
                                                        <Car className="h-4 w-4 text-muted-foreground" />
                                                        <span className="font-medium">{car ? `${car.make} ${car.model}` : 'Unknown Car'}</span>
                                                        <span className="text-[10px] bg-blue-500/10 text-blue-500 px-1.5 py-0.5 rounded uppercase font-bold">Rental</span>
                                                    </div>
                                                    <span className={`text-sm font-semibold ${item.status === 'Active' ? 'text-green-600' : 'text-gray-600'}`}>
                                                        {item.status}
                                                    </span>
                                                </div>

                                                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                                                    <Calendar className="h-4 w-4" />
                                                    {item.startDate}
                                                </div>

                                                <div className="flex justify-between items-center pt-2 border-t">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm font-medium">₹{item.total}</span>
                                                    </div>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-6 w-6"
                                                        onClick={() => setEditingTransaction(item)}
                                                    >
                                                        <Edit className="h-3 w-3" />
                                                    </Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    )
                                } else {
                                    // MANUAL ENTRY CARD
                                    const car = cars.find(c => c.id === item.carId)
                                    const isCredit = item.type === 'Credit'
                                    return (
                                        <Card key={item.id} className={`overflow-hidden border-l-4 ${isCredit ? 'border-l-green-500' : 'border-l-red-500'}`}>
                                            <CardContent className="p-4">
                                                <div className="flex justify-between items-start mb-2">
                                                    <div className="flex items-center gap-2">
                                                        <Banknote className={`h-4 w-4 ${isCredit ? 'text-green-500' : 'text-red-500'}`} />
                                                        <span className="font-medium">{item.notes || (isCredit ? 'Manual Credit' : 'Manual Debit')}</span>
                                                    </div>
                                                    <span className={`text-[10px] px-1.5 py-0.5 rounded uppercase font-bold ${isCredit ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                                                        {item.type}
                                                    </span>
                                                </div>

                                                {car && (
                                                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                                                        <Car className="h-3 w-3" />
                                                        {car.make} {car.model}
                                                    </div>
                                                )}

                                                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                                                    <Calendar className="h-4 w-4" />
                                                    {new Date(item.date).toLocaleString()}
                                                </div>

                                                <div className="pt-2 border-t">
                                                    <span className={`text-sm font-bold ${isCredit ? 'text-green-500' : 'text-red-500'}`}>
                                                        {isCredit ? '+' : '-'} ₹{Number(item.amount).toLocaleString()}
                                                    </span>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    )
                                }
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

            <EditTransactionModal
                isOpen={!!editingTransaction}
                onClose={() => setEditingTransaction(null)}
                transaction={editingTransaction}
            />

            <AddDealerTransactionModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                dealer={dealer}
            />

        </Sheet>
    )
}
