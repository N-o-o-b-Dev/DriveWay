import { useState } from 'react'
import { useDriveway } from '../context/DrivewayContext'
import { Sheet, SheetHeader, SheetTitle } from './ui/Sheet'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'
import { Button } from './ui/Button'
import { Mail, Phone, Calendar, Car, Edit } from 'lucide-react'
import { EditTransactionDrawer } from './EditTransactionDrawer'

export function CustomerDetailsDrawer({ isOpen, onClose, customer }) {
    const { transactions, dealers, cars } = useDriveway()
    const [editingTransaction, setEditingTransaction] = useState(null)

    if (!customer) return null

    // Find all transactions for this customer
    const customerTransactions = transactions.filter(t => t.customerId === customer.id)

    // Calculate Stats
    const totalSpent = customerTransactions.reduce((sum, t) => sum + (Number(t.total) || 0), 0)
    const pendingAmount = customerTransactions
        .filter(t => t.paymentStatus !== 'Paid')
        .reduce((sum, t) => sum + Math.max(0, (Number(t.total) || 0) - (Number(t.amountPaid) || 0)), 0)

    // Get unique dealer IDs for existing functionality
    const dealerIds = [...new Set(customerTransactions.map(t => t.dealerId).filter(id => id))]
    const customerDealers = dealers.filter(d => dealerIds.includes(d.id))

    return (
        <Sheet isOpen={isOpen} onClose={onClose}>
            <SheetHeader>
                <SheetTitle>Customer Details: {customer.name}</SheetTitle>
            </SheetHeader>
            <div className="mt-6 space-y-6">

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                    <Card>
                        <CardContent className="p-4 pt-4">
                            <p className="text-sm text-muted-foreground">Total Spent</p>
                            <h3 className="text-2xl font-bold">₹{totalSpent.toLocaleString()}</h3>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4 pt-4">
                            <p className="text-sm text-muted-foreground">Pending Amount</p>
                            <h3 className="text-2xl font-bold text-destructive">₹{pendingAmount.toLocaleString()}</h3>
                        </CardContent>
                    </Card>
                </div>

                {/* Personal Info */}
                <Card>
                    <CardHeader className="pb-3">
                        <CardTitle className="text-base">Personal Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Unique ID</span>
                            <span className="font-medium">{customer.uniqueId || 'N/A'}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Date of Birth</span>
                            <span className="font-medium">{customer.dob || 'N/A'}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Address</span>
                            <span className="font-medium max-w-[200px] text-right">{customer.address || 'N/A'}</span>
                        </div>
                        {customer.dealerId && (
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Assigned Dealer</span>
                                <span className="font-medium">
                                    {dealers.find(d => d.id === customer.dealerId)?.name || 'Unknown'}
                                </span>
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Documents */}
                <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Documents</h3>
                    <div className="grid grid-cols-3 gap-2">
                        {customer.dlImage && (
                            <div className="aspect-video rounded bg-muted overflow-hidden relative group cursor-pointer" onClick={() => window.open(customer.dlImage)}>
                                <img src={customer.dlImage} alt="DL" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-bold">View DL</div>
                            </div>
                        )}
                        {customer.aadhaarFront && (
                            <div className="aspect-video rounded bg-muted overflow-hidden relative group cursor-pointer" onClick={() => window.open(customer.aadhaarFront)}>
                                <img src={customer.aadhaarFront} alt="Aadhaar Front" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-bold">Front</div>
                            </div>
                        )}
                        {customer.aadhaarBack && (
                            <div className="aspect-video rounded bg-muted overflow-hidden relative group cursor-pointer" onClick={() => window.open(customer.aadhaarBack)}>
                                <img src={customer.aadhaarBack} alt="Aadhaar Back" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-bold">Back</div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Transactions History */}
                <div>
                    <h3 className="font-semibold text-lg mb-3">Transaction History</h3>
                    <div className="space-y-3">
                        {customerTransactions.length > 0 ? (
                            customerTransactions.map(transaction => {
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

                {/* Associated Dealers (Existing Feature) */}
                <div>
                    <h3 className="font-semibold text-lg mb-3">Associated Dealers</h3>
                    <div className="space-y-3">
                        {customerDealers.length > 0 ? (
                            customerDealers.map(dealer => (
                                <Card key={dealer.id}>
                                    <CardContent className="p-4">
                                        <h4 className="font-medium mb-1">{dealer.name}</h4>
                                        <div className="space-y-1">
                                            <div className="flex items-center text-sm text-muted-foreground">
                                                <Mail className="mr-2 h-4 w-4" />
                                                {dealer.email}
                                            </div>
                                            <div className="flex items-center text-sm text-muted-foreground">
                                                <Phone className="mr-2 h-4 w-4" />
                                                {dealer.phone}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))
                        ) : (
                            <p className="text-sm text-muted-foreground">No associated dealers.</p>
                        )}
                    </div>
                </div>

                <EditTransactionDrawer
                    isOpen={!!editingTransaction}
                    onClose={() => setEditingTransaction(null)}
                    transaction={editingTransaction}
                />

            </div>
        </Sheet>
    )
}
