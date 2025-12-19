import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDriveway } from '../context/DrivewayContext'
import { Card, CardContent } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Plus, Edit, Store, ChevronRight, User, Trash2, ArrowUpRight } from 'lucide-react'
import { EditCustomerDrawer } from '../components/EditCustomerDrawer'
import { PendingTransactionsDrawer } from '../components/PendingTransactionsDrawer'
import { Dialog, DialogHeader, DialogTitle } from '../components/ui/Dialog'

function CustomerCard({ customer, onQuickView }) {
    return (
        <Card
            className="relative overflow-hidden transition-all duration-300 hover:shadow-lg border-l-4 border-l-primary/20 hover:border-l-primary cursor-pointer"
            onClick={onQuickView}
        >
            <CardContent className="p-6">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 overflow-hidden border-2 border-white shadow-sm">
                            {customer.image ? (
                                <img src={customer.image} alt={customer.name} className="h-full w-full object-cover" />
                            ) : (
                                <User className="h-6 w-6 text-primary" />
                            )}
                        </div>
                        <div>
                            <h3 className="font-bold text-lg leading-none mb-1">{customer.name}</h3>
                            <div className="flex flex-col text-sm text-muted-foreground">
                                <span>{customer.phone}</span>
                            </div>
                        </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-muted-foreground">
                        <ChevronRight className="h-5 w-5" />
                    </Button>
                </div>
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
    const [quickViewCustomer, setQuickViewCustomer] = useState(null)

    const handleImageChange = async (field, e) => {
        const file = e.target.files[0]
        if (file) {
            try {
                // Dynamically import to avoid top-level dependency issues
                const { compressImage } = await import('../lib/imageCompression')
                const compressedBase64 = await compressImage(file)
                setNewCustomer(prev => ({ ...prev, [field]: compressedBase64 }))
            } catch (error) {
                console.error("Image compression failed:", error)
                // Fallback to normal reading
                const reader = new FileReader()
                reader.onloadend = () => {
                    setNewCustomer(prev => ({ ...prev, [field]: reader.result }))
                }
                reader.readAsDataURL(file)
            }
        }
    }

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this customer? This action cannot be undone.')) {
            try {
                await deleteCustomer(id)
                if (quickViewCustomer?.id === id) setQuickViewCustomer(null)
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
                    <CardContent className="pt-6">
                        <div className="text-lg font-semibold mb-4">Add New Customer</div>
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
            )}

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start">
                {customers.map((customer) => (
                    <CustomerCard
                        key={customer.id}
                        customer={customer}
                        onQuickView={() => setQuickViewCustomer(customer)}
                    />
                ))}
            </div>

            <Dialog isOpen={!!quickViewCustomer} onClose={() => setQuickViewCustomer(null)}>
                {quickViewCustomer && (() => {
                    const customerTransactions = transactions.filter(t => t.customerId === quickViewCustomer.id)
                    const pendingAmount = customerTransactions
                        .filter(t => t.paymentStatus !== 'Paid')
                        .reduce((sum, t) => sum + Math.max(0, (Number(t.total) || 0) - (Number(t.amountPaid) || 0)), 0)

                    const recentRentals = [...customerTransactions]
                        .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
                        .slice(0, 3)

                    const dealer = dealers.find(d => d.id === quickViewCustomer.dealerId)

                    return (
                        <div className="space-y-6">
                            <div className="flex items-start justify-between">
                                <div>
                                    <DialogTitle className="text-xl mb-1">{quickViewCustomer.name}</DialogTitle>
                                    <p className="text-sm text-muted-foreground">{quickViewCustomer.email}</p>
                                    <p className="text-sm text-muted-foreground">{quickViewCustomer.phone}</p>
                                    {quickViewCustomer.address && <p className="text-sm text-muted-foreground mt-1">{quickViewCustomer.address}</p>}
                                    {customerTransactions.length > 0 && <p className="text-xs bg-muted px-2 py-0.5 rounded w-fit mt-2">ID: {quickViewCustomer.uniqueId || 'N/A'}</p>}
                                </div>
                                {quickViewCustomer.image && (
                                    <div className="h-16 w-16 rounded-full overflow-hidden border shrink-0 ml-4">
                                        <img src={quickViewCustomer.image} className="w-full h-full object-cover" />
                                    </div>
                                )}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div
                                    className="p-4 bg-muted/40 rounded-lg cursor-pointer hover:bg-muted transition-colors border"
                                    onClick={() => {
                                        setQuickViewCustomer(null)
                                        setPendingDrawerEntity(quickViewCustomer)
                                    }}
                                >
                                    <p className="text-xs font-medium text-muted-foreground">Pending Balance</p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <p className={`text-xl font-bold ${pendingAmount > 0 ? 'text-destructive' : ''}`}>
                                            ₹{pendingAmount.toLocaleString()}
                                        </p>
                                        <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                                    </div>
                                </div>
                                <div className="p-4 bg-muted/40 rounded-lg border">
                                    <p className="text-xs font-medium text-muted-foreground">Total Rentals</p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <p className="text-xl font-bold">
                                            {customerTransactions.length}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {dealer && (
                                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/20 p-2 rounded">
                                    <Store className="h-4 w-4" />
                                    <span>Referred by: <span className="font-medium text-foreground">{dealer.name}</span></span>
                                </div>
                            )}

                            <div>
                                <h4 className="text-sm font-semibold mb-3">Recent Rentals</h4>
                                <div className="space-y-3">
                                    {recentRentals.length > 0 ? recentRentals.map(t => {
                                        const car = cars.find(c => c.id === t.carId)
                                        return (
                                            <div key={t.id} className="flex justify-between items-center text-sm border-b pb-2 last:border-0 last:pb-0">
                                                <div>
                                                    <p className="font-medium">{car ? `${car.make} ${car.model}` : 'Unknown Car'}</p>
                                                    <p className="text-xs text-muted-foreground">{new Date(t.startDate).toLocaleDateString()} • ₹{t.total}</p>
                                                </div>
                                                <span className={`text-xs px-2 py-1 rounded-full ${t.paymentStatus === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                    {t.paymentStatus || 'Pending'}
                                                </span>
                                            </div>
                                        )
                                    }) : (
                                        <p className="text-sm text-muted-foreground italic">No recent rentals</p>
                                    )}
                                </div>
                            </div>

                            <div className="flex gap-2 pt-2">
                                <Button
                                    className="flex-1"
                                    onClick={() => {
                                        setQuickViewCustomer(null)
                                        navigate('/customers/' + quickViewCustomer.id)
                                    }}
                                >
                                    <User className="mr-2 h-4 w-4" /> View Full Profile
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => {
                                        setQuickViewCustomer(null)
                                        setEditingCustomer(quickViewCustomer)
                                    }}
                                >
                                    <Edit className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant="destructive"
                                    size="icon"
                                    onClick={() => handleDelete(quickViewCustomer.id)}
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    )
                })()}
            </Dialog>

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
        </div>
    )
}
