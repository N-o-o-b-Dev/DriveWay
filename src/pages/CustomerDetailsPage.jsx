import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDriveway } from '../context/DrivewayContext'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Mail, Phone, Calendar, Car, Edit, ArrowLeft, User, ExternalLink, Store, X } from 'lucide-react'
import { EditTransactionDrawer } from '../components/EditTransactionDrawer'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../components/ui/Table"

export function CustomerDetailsPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { customers, transactions, dealers, cars } = useDriveway()
    const [customer, setCustomer] = useState(null)
    const [editingTransaction, setEditingTransaction] = useState(null)
    const [expandedImage, setExpandedImage] = useState(null)

    useEffect(() => {
        const foundCustomer = customers.find(c => c.id === id)
        if (foundCustomer) {
            setCustomer(foundCustomer)
        }
    }, [id, customers])

    if (!customer) {
        return <div className="p-8">Loading...</div>
    }

    // Find all transactions for this customer
    const customerTransactions = transactions.filter(t => t.customerId === customer.id)

    // Create Ledger (Flatten Rentals and Payments)
    const ledger = customerTransactions.flatMap(t => {
        const car = cars.find(c => c.id === t.carId)
        const carName = car ? `${car.make} ${car.model}` : 'Unknown Car'
        const entries = []

        // 1. Debit Entry (The Rental Cost)
        entries.push({
            id: t.id,
            uniqueId: t.id, // For display
            date: t.startDate,
            description: carName,
            type: 'Debit',
            status: t.status, // Rental Status
            amount: Number(t.total) || 0,
            originalTransaction: t, // Keep reference for edit
            isRental: true
        })

        // 2. Credit Entries (Payments)
        if (t.payments && t.payments.length > 0) {
            t.payments.forEach(p => {
                entries.push({
                    id: p.id,
                    uniqueId: p.id,
                    date: p.date,
                    description: `Payment for ${carName}`,
                    type: p.type, // 'Credit'
                    status: 'Paid',
                    amount: Number(p.amount) || 0,
                    originalTransaction: t, // Keep reference for edit
                    isRental: false
                })
            })
        } else if (Number(t.amountPaid) > 0) {
            // Legacy/Migration
            entries.push({
                id: `${t.id}_payment`,
                uniqueId: 'Legacy',
                date: t.startDate,
                description: `Payment for ${carName}`,
                type: 'Credit',
                status: 'Paid',
                amount: Number(t.amountPaid),
                originalTransaction: t, // Keep reference for edit
                isRental: false
            })
        }

        return entries
    }).sort((a, b) => new Date(b.date) - new Date(a.date))

    // Calculate Stats
    const totalSpent = customerTransactions.reduce((sum, t) => sum + (Number(t.total) || 0), 0)
    const pendingAmount = customerTransactions
        .filter(t => t.paymentStatus !== 'Paid')
        .reduce((sum, t) => sum + Math.max(0, (Number(t.total) || 0) - (Number(t.amountPaid) || 0)), 0)

    // Get unique dealer IDs for existing functionality
    const dealerIds = [...new Set(customerTransactions.map(t => t.dealerId).filter(id => id))]
    const customerDealers = dealers.filter(d => dealerIds.includes(d.id))

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" onClick={() => navigate('/customers')}>
                    <ArrowLeft className="h-5 w-5" />
                </Button>
                <div className="flex items-center gap-4">
                    <div
                        className={`h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 overflow-hidden border-2 border-white shadow-sm ${customer.image ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}`}
                        onClick={() => customer.image && setExpandedImage(customer.image)}
                    >
                        {customer.image ? (
                            <img src={customer.image} alt={customer.name} className="h-full w-full object-cover" />
                        ) : (
                            <User className="h-6 w-6 text-primary" />
                        )}
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight">{customer.name}</h1>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                    {/* Bios */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Contact Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-muted-foreground" />
                                <span>{customer.email}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-muted-foreground" />
                                <span>{customer.phone}</span>
                            </div>
                        </CardContent>
                    </Card>

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
                                    <span className="font-medium flex items-center gap-1 justify-end">
                                        <Store className="h-3 w-3" />
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
                </div>

                <div className="space-y-6">
                    {/* Transactions History */}
                    <div>
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="font-semibold text-lg">Transaction History</h3>
                        </div>
                        <div className="rounded-md border bg-card">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-muted/50">
                                        <TableHead className="w-[85px] text-xs">Trans ID</TableHead>
                                        <TableHead className="text-xs">Description</TableHead>
                                        <TableHead className="w-[100px] text-xs">Status</TableHead>
                                        <TableHead className="w-[90px] text-xs">Date</TableHead>
                                        <TableHead className="text-right text-xs">Amount</TableHead>
                                        <TableHead className="w-[40px]"></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {ledger.length > 0 ? (
                                        ledger.map((entry, idx) => (
                                            <TableRow key={`${entry.id}-${idx}`} className="text-xs">
                                                <TableCell className="font-mono text-[10px] text-muted-foreground align-top py-3">
                                                    {entry.uniqueId === 'Legacy' ? '-' : entry.uniqueId.slice(0, 8)}
                                                </TableCell>
                                                <TableCell className="align-top py-3 font-medium">
                                                    {entry.description}
                                                    {entry.isRental && (
                                                        <div className="text-[10px] text-muted-foreground mt-0.5 font-normal">
                                                            {entry.originalTransaction?.endDate ? `Till ${entry.originalTransaction.endDate}` : 'Active'}
                                                        </div>
                                                    )}
                                                </TableCell>
                                                <TableCell className="align-top py-3">
                                                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium whitespace-nowrap ${entry.type === 'Credit'
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-red-100 text-red-800'
                                                        }`}>
                                                        {entry.type === 'Credit' ? 'Credit' : 'Debit'}
                                                    </span>
                                                </TableCell>
                                                <TableCell className="align-top py-3">
                                                    {new Date(entry.date).toLocaleString()}
                                                </TableCell>
                                                <TableCell className={`text-right font-medium align-top py-3 ${entry.type === 'Credit' ? 'text-green-600' : ''}`}>
                                                    {entry.type === 'Credit' ? '+' : '-'}₹{entry.amount.toLocaleString()}
                                                </TableCell>
                                                <TableCell className="align-top py-3">
                                                    {/* Only allow edit for parent transactions for now to simplify */}
                                                    {entry.originalTransaction && (
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            className="h-6 w-6"
                                                            onClick={() => setEditingTransaction(entry.originalTransaction)}
                                                        >
                                                            <Edit className="h-3 w-3" />
                                                        </Button>
                                                    )}
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    ) : (
                                        <TableRow>
                                            <TableCell colSpan={6} className="text-center text-xs text-muted-foreground py-4">
                                                No financial records found
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </div>

                    {/* Associated Dealers */}
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
                </div>
            </div>

            <EditTransactionDrawer
                isOpen={!!editingTransaction}
                onClose={() => setEditingTransaction(null)}
                transaction={editingTransaction}
            />

            {/* Expanded Image Overlay */}
            {expandedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-200"
                    onClick={() => setExpandedImage(null)}
                >
                    <div className="relative max-w-4xl max-h-[90vh]">
                        <img
                            src={expandedImage}
                            alt="Expanded Profile"
                            className="max-w-full max-h-[90vh] object-contain rounded-md"
                        />
                        <button
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors p-2"
                            onClick={(e) => { e.stopPropagation(); setExpandedImage(null); }}
                        >
                            <X size={32} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
