import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDriveway } from '../context/DrivewayContext'
import { Card, CardContent, CardHeader } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Plus, Edit, Users, ChevronRight, User, Trash2, ArrowUpRight } from 'lucide-react'
import { EditDealerDrawer } from '../components/EditDealerDrawer'
import { PendingTransactionsDrawer } from '../components/PendingTransactionsDrawer'
import { Dialog, DialogHeader, DialogTitle } from '../components/ui/Dialog'

function DealerCard({ dealer, onQuickView }) {
    return (
        <Card
            className="relative overflow-hidden transition-all duration-300 hover:shadow-lg border-l-4 border-l-secondary/20 hover:border-l-secondary cursor-pointer"
            onClick={onQuickView}
        >
            <CardContent className="p-6">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
                            {dealer.image ? (
                                <img src={dealer.image} alt={dealer.name} className="h-full w-full object-cover" />
                            ) : (
                                <User className="h-6 w-6 text-secondary" />
                            )}
                        </div>
                        <div>
                            <h3 className="font-bold text-lg leading-none mb-1">{dealer.name}</h3>
                            <p className="text-sm text-muted-foreground">{dealer.phone}</p>
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

export function Dealers() {
    const { dealers, addDealer, deleteDealer, transactions } = useDriveway()
    const navigate = useNavigate()
    const [isAdding, setIsAdding] = useState(false)
    const [newDealer, setNewDealer] = useState({
        name: '', email: '', phone: '', address: '',
        contactPerson: '', pan: '',
        image: '', logo: '', shopAct: '', panImage: '',
        proof: '', altProof: ''
    })
    const [editingDealer, setEditingDealer] = useState(null)
    const [pendingDrawerEntity, setPendingDrawerEntity] = useState(null)
    const [quickViewDealer, setQuickViewDealer] = useState(null)
    const [searchTerm, setSearchTerm] = useState('')

    const filteredDealers = dealers.filter(d =>
        (d.name + ' ' + d.phone + ' ' + d.email).toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleImageChange = (field, e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setNewDealer(prev => ({ ...prev, [field]: reader.result }))
            }
            reader.readAsDataURL(file)
        }
    }

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this dealer? This action cannot be undone.')) {
            try {
                await deleteDealer(id)
                if (quickViewDealer?.id === id) setQuickViewDealer(null)
            } catch (error) {
                alert('Failed to delete dealer: ' + error.message)
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            addDealer(newDealer)
            setIsAdding(false)
            setNewDealer({
                name: '', email: '', phone: '', address: '',
                contactPerson: '', pan: '',
                image: '', logo: '', shopAct: '', panImage: '',
                proof: '', altProof: ''
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Dealers</h2>
                <Button onClick={() => setIsAdding(!isAdding)}>
                    <Plus className="mr-2 h-4 w-4" /> Add Dealer
                </Button>
            </div>

            <div className="flex items-center bg-muted/40 p-4 rounded-lg border">
                <div className="relative flex-1">
                    <div className="absolute left-2.5 top-2.5 text-muted-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                    </div>
                    <Input
                        placeholder="Search dealers by name, phone, or email..."
                        className="pl-9 bg-background"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {isAdding && (
                <Card className="max-w-2xl">
                    <CardHeader>
                        {/* Corrected: CardTitle imported but not used in header? No, it is used here */}
                        <div className="text-lg font-semibold">Add New Dealer</div>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <Input
                                    placeholder="Dealer Name"
                                    value={newDealer.name}
                                    onChange={e => setNewDealer({ ...newDealer, name: e.target.value })}
                                    required
                                />
                                <Input
                                    placeholder="Contact Person Name"
                                    value={newDealer.contactPerson}
                                    onChange={e => setNewDealer({ ...newDealer, contactPerson: e.target.value })}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    value={newDealer.email}
                                    onChange={e => setNewDealer({ ...newDealer, email: e.target.value })}
                                    required
                                />
                                <Input
                                    placeholder="Phone"
                                    value={newDealer.phone}
                                    onChange={e => setNewDealer({ ...newDealer, phone: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Input
                                    placeholder="PAN Number"
                                    value={newDealer.pan}
                                    onChange={e => setNewDealer({ ...newDealer, pan: e.target.value })}
                                />
                                <Input
                                    placeholder="Address"
                                    value={newDealer.address}
                                    onChange={e => setNewDealer({ ...newDealer, address: e.target.value })}
                                />
                            </div>

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
                                        <label className="text-xs font-medium">Logo</label>
                                        <Input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => handleImageChange('logo', e)}
                                            className="cursor-pointer text-xs"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-medium">Proof</label>
                                        <Input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => handleImageChange('proof', e)}
                                            className="cursor-pointer text-xs"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-medium">Alt Proof</label>
                                        <Input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => handleImageChange('altProof', e)}
                                            className="cursor-pointer text-xs"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-medium">Shop Act</label>
                                        <Input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => handleImageChange('shopAct', e)}
                                            className="cursor-pointer text-xs"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-medium">PAN Card Image</label>
                                        <Input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => handleImageChange('panImage', e)}
                                            className="cursor-pointer text-xs"
                                        />
                                    </div>
                                </div>
                            </div>

                            <Button type="submit" className="w-full">Save Dealer</Button>
                        </form>
                    </CardContent>
                </Card>
            )}

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start">
                {filteredDealers.map((dealer) => (
                    <DealerCard
                        key={dealer.id}
                        dealer={dealer}
                        onQuickView={() => setQuickViewDealer(dealer)}
                    />
                ))}
            </div>

            <Dialog isOpen={!!quickViewDealer} onClose={() => setQuickViewDealer(null)}>
                {quickViewDealer && (() => {
                    const dealerTransactions = transactions.filter(t => t.dealerId === quickViewDealer.id)
                    const pendingAmount = dealerTransactions
                        .filter(t => t.paymentStatus !== 'Paid')
                        .reduce((sum, t) => sum + Math.max(0, (Number(t.total) || 0) - (Number(t.amountPaid) || 0)), 0)
                    const recentTransactions = [...dealerTransactions]
                        .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
                        .slice(0, 3)

                    return (
                        <div className="space-y-6">
                            <div className="flex items-start justify-between">
                                <div>
                                    <DialogTitle className="text-xl mb-1">{quickViewDealer.name}</DialogTitle>
                                    <p className="text-sm text-muted-foreground">{quickViewDealer.email}</p>
                                    <p className="text-sm text-muted-foreground">{quickViewDealer.phone}</p>
                                    {quickViewDealer.address && <p className="text-sm text-muted-foreground mt-1">{quickViewDealer.address}</p>}
                                </div>
                                {quickViewDealer.image && (
                                    <div className="h-16 w-16 rounded-full overflow-hidden border shrink-0 ml-4">
                                        <img src={quickViewDealer.image} className="w-full h-full object-cover" />
                                    </div>
                                )}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div
                                    className="p-4 bg-muted/40 rounded-lg cursor-pointer hover:bg-muted transition-colors border"
                                    onClick={() => {
                                        setQuickViewDealer(null)
                                        setPendingDrawerEntity(quickViewDealer)
                                    }}
                                >
                                    <p className="text-xs font-medium text-muted-foreground">Pending Collection</p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <p className={`text-xl font-bold ${pendingAmount > 0 ? 'text-destructive' : ''}`}>
                                            ₹{pendingAmount.toLocaleString()}
                                        </p>
                                        <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                                    </div>
                                </div>
                                <div className="p-4 bg-muted/40 rounded-lg border">
                                    <p className="text-xs font-medium text-muted-foreground">Lifetime Rentals</p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <p className="text-xl font-bold">
                                            {dealerTransactions.length}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold mb-3">Recent Activity</h4>
                                <div className="space-y-3">
                                    {recentTransactions.length > 0 ? recentTransactions.map(t => (
                                        <div key={t.id} className="flex justify-between items-center text-sm border-b pb-2 last:border-0 last:pb-0">
                                            <div>
                                                <p className="font-medium">{new Date(t.startDate).toLocaleDateString()}</p>
                                                <p className="text-xs text-muted-foreground">₹{t.total} • {t.paymentStatus || 'Pending'}</p>
                                            </div>
                                            <span className={`text-xs px-2 py-1 rounded-full ${t.paymentStatus === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                {t.paymentStatus || 'Pending'}
                                            </span>
                                        </div>
                                    )) : (
                                        <p className="text-sm text-muted-foreground italic">No recent activity</p>
                                    )}
                                </div>
                            </div>

                            <div className="flex gap-2 pt-2">
                                <Button
                                    className="flex-1"
                                    onClick={() => {
                                        setQuickViewDealer(null)
                                        navigate('/dealers/' + quickViewDealer.id)
                                    }}
                                >
                                    <Users className="mr-2 h-4 w-4" /> View Full Profile
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => {
                                        setQuickViewDealer(null)
                                        setEditingDealer(quickViewDealer)
                                    }}
                                >
                                    <Edit className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant="destructive"
                                    size="icon"
                                    onClick={() => handleDelete(quickViewDealer.id)}
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    )
                })()}
            </Dialog>

            <EditDealerDrawer
                isOpen={!!editingDealer}
                onClose={() => setEditingDealer(null)}
                dealer={editingDealer}
            />

            <PendingTransactionsDrawer
                isOpen={!!pendingDrawerEntity}
                onClose={() => setPendingDrawerEntity(null)}
                entity={pendingDrawerEntity}
                transactions={transactions}
                type="dealer"
            />
        </div>
    )
}
