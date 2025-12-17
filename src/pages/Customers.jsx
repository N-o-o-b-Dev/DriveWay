import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDriveway } from '../context/DrivewayContext'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Plus, Edit, Store, ChevronDown, ChevronUp, User, Car, Calendar, ExternalLink, Trash2 } from 'lucide-react'
import { EditCustomerDrawer } from '../components/EditCustomerDrawer'
import { PendingTransactionsDrawer } from '../components/PendingTransactionsDrawer'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../components/ui/Table"

function CustomerCard({ customer, transactions = [], cars = [], dealers = [], onEdit, onViewDetails, onDelete, onPendingClick }) {
    const [isExpanded, setIsExpanded] = useState(false)

    // Calculate Financials & Generate Ledger
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
                    type: p.type, // 'Credit' or 'Debit' (refunds?) Usually Credit
                    status: 'Paid',
                    amount: Number(p.amount) || 0,
                    isRental: false
                })
            })
        } else if (Number(t.amountPaid) > 0) {
            // Legacy/Migration: If no specific payments recorded but amountPaid exists
            entries.push({
                id: `${t.id}_payment`,
                uniqueId: 'Legacy',
                date: t.startDate, // Default to start date if unknown
                description: `Payment for ${carName}`,
                type: 'Credit',
                status: 'Paid',
                amount: Number(t.amountPaid),
                isRental: false
            })
        }

        return entries
    }).sort((a, b) => new Date(b.date) - new Date(a.date))

    const pendingAmount = customerTransactions
        .filter(t => t.paymentStatus !== 'Paid')
        .reduce((sum, t) => sum + Math.max(0, (Number(t.total) || 0) - (Number(t.amountPaid) || 0)), 0)

    const dealer = dealers.find(d => d.id === customer.dealerId)

    return (
        <Card className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg border-l-4 ${pendingAmount > 0 ? 'border-l-destructive/50' : 'border-l-primary/20 hover:border-l-primary'}`}>
            <CardContent className="p-6">
                <div className="flex justify-between items-start">
                    <div className="flex gap-4">
                        <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 overflow-hidden border-2 border-white shadow-sm">
                            {customer.image ? (
                                <img src={customer.image} alt={customer.name} className="h-full w-full object-cover" />
                            ) : (
                                <User className="h-7 w-7 text-primary" />
                            )}
                        </div>
                        <div>
                            <h3 className="font-bold text-lg leading-tight">{customer.name}</h3>
                            <div className="flex flex-col text-sm text-muted-foreground mt-1">
                                <span>{customer.phone}</span>
                                {customer.uniqueId && <span className="text-xs bg-muted px-1.5 py-0.5 rounded w-fit mt-1">ID: {customer.uniqueId}</span>}
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        {pendingAmount > 0 && (
                            <div
                                onClick={(e) => { e.stopPropagation(); onPendingClick(); }}
                                className="flex flex-col items-end mr-2 cursor-pointer hover:opacity-80 transition-opacity"
                            >
                                <span className="text-[10px] uppercase font-bold text-destructive">Pending</span>
                                <span className="text-sm font-bold text-destructive">₹{pendingAmount.toLocaleString()}</span>
                            </div>
                        )}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-muted-foreground hover:text-foreground"
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>

                {isExpanded && (
                    <div className="mt-6 pt-6 border-t animate-in slide-in-from-top-2 duration-300 space-y-6">

                        {/* 1. Personal Details Grid */}
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <label className="text-xs text-muted-foreground font-medium">Email</label>
                                <div className="font-medium truncate" title={customer.email}>{customer.email}</div>
                            </div>
                            <div>
                                <label className="text-xs text-muted-foreground font-medium">Date of Birth</label>
                                <div className="font-medium">{customer.dob || 'N/A'}</div>
                            </div>
                            <div className="col-span-2">
                                <label className="text-xs text-muted-foreground font-medium">Address</label>
                                <div className="font-medium">{customer.address || 'N/A'}</div>
                            </div>
                            {dealer && (
                                <div className="col-span-2">
                                    <label className="text-xs text-muted-foreground font-medium">Assigned Dealer</label>
                                    <div className="font-medium flex items-center gap-1">
                                        <Store className="h-3 w-3" /> {dealer.name}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* 2. Documents Section */}
                        {(customer.dlImage || customer.aadhaarFront || customer.aadhaarBack) && (
                            <div>
                                <h4 className="text-xs font-bold uppercase text-muted-foreground mb-2">Documents</h4>
                                <div className="flex gap-2 overflow-x-auto pb-2">
                                    {[
                                        { img: customer.dlImage, label: 'DL' },
                                        { img: customer.aadhaarFront, label: 'Aadhaar Front' },
                                        { img: customer.aadhaarBack, label: 'Aadhaar Back' }
                                    ].map((doc, idx) => doc.img && (
                                        <div
                                            key={idx}
                                            className="h-20 w-32 flex-shrink-0 rounded-md border bg-muted overflow-hidden relative group cursor-pointer"
                                            onClick={() => window.open(doc.img, '_blank')}
                                        >
                                            <img src={doc.img} alt={doc.label} className="h-full w-full object-cover" />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <ExternalLink className="h-5 w-5 text-white" />
                                            </div>
                                            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-[10px] px-1 py-0.5 truncate text-center">
                                                {doc.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* 3. Financial Table (Ledger) */}
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <h4 className="text-xs font-bold uppercase text-muted-foreground">Financial Ledger</h4>
                            </div>

                            <div className="rounded-md border">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="bg-muted/50">
                                            <TableHead className="w-[85px] text-xs">Trans ID</TableHead>
                                            <TableHead className="text-xs">Description</TableHead>
                                            <TableHead className="w-[100px] text-xs">Status</TableHead>
                                            <TableHead className="w-[90px] text-xs">Date</TableHead>
                                            <TableHead className="text-right text-xs">Amount</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {ledger.length > 0 ? (
                                            ledger.slice(0, 5).map((entry, idx) => (
                                                <TableRow key={`${entry.id}-${idx}`} className="text-xs">
                                                    <TableCell className="font-mono text-[10px] text-muted-foreground">
                                                        {entry.uniqueId === 'Legacy' ? '-' : entry.uniqueId.slice(0, 8)}
                                                    </TableCell>
                                                    <TableCell className="font-medium">
                                                        {entry.description}
                                                    </TableCell>
                                                    <TableCell>
                                                        <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium whitespace-nowrap ${entry.type === 'Credit'
                                                            ? 'bg-green-100/50 text-green-800'
                                                            : 'bg-red-100/50 text-red-800'
                                                            }`}>
                                                            {entry.type}
                                                        </span>
                                                    </TableCell>
                                                    <TableCell>{entry.date}</TableCell>
                                                    <TableCell className={`text-right font-medium ${entry.type === 'Credit' ? 'text-green-600' : ''}`}>
                                                        {entry.type === 'Credit' ? '+' : '-'}₹{entry.amount.toLocaleString()}
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        ) : (
                                            <TableRow>
                                                <TableCell colSpan={5} className="text-center text-xs text-muted-foreground py-4">
                                                    No financial records found
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2 justify-end pt-2">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={onDelete}
                                className="h-8 text-xs gap-2 text-destructive hover:text-destructive hover:bg-destructive/10 border-destructive/20"
                            >
                                <Trash2 className="h-3 w-3" />
                                Delete
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={onViewDetails}
                                className="h-8 text-xs gap-2"
                            >
                                <User className="h-3 w-3" />
                                Full Profile
                            </Button>
                            <Button
                                variant="default"
                                size="sm"
                                onClick={onEdit}
                                className="h-8 text-xs gap-2"
                            >
                                <Edit className="h-3 w-3" />
                                Edit
                            </Button>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}

export function Customers() {
    const { customers, addCustomer, deleteCustomer, transactions, dealers, cars } = useDriveway()
    const navigate = useNavigate()
    const [isAdding, setIsAdding] = useState(false)
    const [newCustomer, setNewCustomer] = useState({
        name: '', email: '', phone: '', address: '', dob: '',
        dealerId: '', dlImage: '', aadhaarFront: '', aadhaarBack: ''
    })
    const [editingCustomer, setEditingCustomer] = useState(null)
    const [pendingDrawerEntity, setPendingDrawerEntity] = useState(null)

    const handleImageChange = (field, e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setNewCustomer(prev => ({ ...prev, [field]: reader.result }))
            }
            reader.readAsDataURL(file)
        }
    }

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this customer? This action cannot be undone.')) {
            try {
                await deleteCustomer(id)
            } catch (error) {
                alert('Failed to delete customer: ' + error.message)
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            addCustomer(newCustomer)
            setIsAdding(false)
            setNewCustomer({
                name: '', email: '', phone: '', address: '', dob: '',
                dealerId: '', dlImage: '', aadhaarFront: '', aadhaarBack: ''
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const uniqueDealers = dealers.filter(d => Boolean(d.id))

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
                <Button onClick={() => setIsAdding(!isAdding)}>
                    <Plus className="mr-2 h-4 w-4" /> Add Customer
                </Button>
            </div>

            {isAdding && (
                <Card className="max-w-2xl">
                    <CardHeader>
                        <CardTitle>Add New Customer</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <Input
                                    placeholder="Customer Name"
                                    value={newCustomer.name}
                                    onChange={e => setNewCustomer({ ...newCustomer, name: e.target.value })}
                                    required
                                />
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    value={newCustomer.email}
                                    onChange={e => setNewCustomer({ ...newCustomer, email: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Input
                                    placeholder="Phone"
                                    value={newCustomer.phone}
                                    onChange={e => setNewCustomer({ ...newCustomer, phone: e.target.value })}
                                    required
                                />
                                <Input
                                    type="date"
                                    placeholder="Date of Birth"
                                    value={newCustomer.dob}
                                    onChange={e => setNewCustomer({ ...newCustomer, dob: e.target.value })}
                                />
                                <select
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface"
                                    value={newCustomer.dealerId}
                                    onChange={e => setNewCustomer({ ...newCustomer, dealerId: e.target.value })}
                                >
                                    <option value="">Select Dealer (Optional)</option>
                                    {dealers.map(dealer => (
                                        <option key={dealer.id} value={dealer.id}>{dealer.name}</option>
                                    ))}
                                </select>
                            </div>
                            <Input
                                placeholder="Address"
                                value={newCustomer.address}
                                onChange={e => setNewCustomer({ ...newCustomer, address: e.target.value })}
                            />

                            <div className="space-y-4 pt-4 border-t">
                                <h4 className="font-medium text-sm">Documents & Images</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-medium">Profile Image</label>
                                        <Input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => handleImageChange('image', e)}
                                            className="cursor-pointer text-xs"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-medium">DL Image</label>
                                        <Input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => handleImageChange('dlImage', e)}
                                            className="cursor-pointer text-xs"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-medium">Aadhaar Front</label>
                                        <Input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => handleImageChange('aadhaarFront', e)}
                                            className="cursor-pointer text-xs"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-medium">Aadhaar Back</label>
                                        <Input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => handleImageChange('aadhaarBack', e)}
                                            className="cursor-pointer text-xs"
                                        />
                                    </div>
                                </div>
                            </div>

                            <Button type="submit" className="w-full">Save Customer</Button>
                        </form>
                    </CardContent>
                </Card>
            )
            }

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {customers.map((customer) => (
                    <CustomerCard
                        key={customer.id}
                        customer={customer}
                        transactions={transactions}
                        cars={cars}
                        dealers={dealers}
                        onEdit={() => setEditingCustomer(customer)}
                        onViewDetails={() => navigate('/customers/' + customer.id)}
                        onPendingClick={() => setPendingDrawerEntity(customer)}
                        onDelete={() => handleDelete(customer.id)}
                    />
                ))}
            </div>

            <EditCustomerDrawer
                isOpen={!!editingCustomer}
                onClose={() => setEditingCustomer(null)}
                customer={editingCustomer}
            />

            <PendingTransactionsDrawer
                isOpen={!!pendingDrawerEntity}
                onClose={() => setPendingDrawerEntity(null)}
                entity={pendingDrawerEntity}
                transactions={transactions}
                type="customer"
            />
        </div >
    )
}
