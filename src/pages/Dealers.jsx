import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDriveway } from '../context/DrivewayContext'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Plus, Edit, Users, ChevronDown, ChevronUp, User, Trash2 } from 'lucide-react'
import { EditDealerDrawer } from '../components/EditDealerDrawer'
import { PendingTransactionsDrawer } from '../components/PendingTransactionsDrawer'

function DealerCard({ dealer, transactions = [], onEdit, onViewDetails, onDelete, onPendingClick }) {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-lg border-l-4 border-l-secondary/20 hover:border-l-secondary">
            <CardContent className="p-6">
                <div className="flex justify-between items-start">
                    <div className="flex gap-4">
                        <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
                            {dealer.image ? (
                                <img src={dealer.image} alt={dealer.name} className="h-full w-full object-cover" />
                            ) : (
                                <User className="h-6 w-6 text-secondary" />
                            )}
                        </div>
                        <div>
                            <h3 className="font-bold text-lg leading-none mb-2">{dealer.name}</h3>
                            <p className="text-sm text-muted-foreground mb-1">{dealer.email}</p>
                            <p className="text-sm text-muted-foreground">{dealer.phone}</p>
                        </div>
                    </div>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground hover:text-foreground"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </Button>
                </div>

                {isExpanded && (
                    <div className="mt-6 pt-6 border-t animate-in slide-in-from-top-2 duration-200">
                        {/* Financial Overview */}
                        {(() => {
                            const dealerTransactions = transactions.filter(t => t.dealerId === dealer.id)
                            const pendingAmount = dealerTransactions
                                .filter(t => t.paymentStatus !== 'Paid')
                                .reduce((sum, t) => sum + Math.max(0, (Number(t.total) || 0) - (Number(t.amountPaid) || 0)), 0)
                            const recentTransactions = [...dealerTransactions]
                                .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
                                .slice(0, 2)

                            return (
                                <div className="mb-6 space-y-4">
                                    <div
                                        className="flex justify-between items-center p-3 bg-muted/50 rounded-lg cursor-pointer hover:bg-muted transition-colors"
                                        onClick={onPendingClick}
                                    >
                                        <span className="text-sm font-medium">Pending Collection</span>
                                        <span className={`font-bold ${pendingAmount > 0 ? 'text-destructive' : 'text-muted-foreground'}`}>
                                            ₹{pendingAmount.toLocaleString()}
                                        </span>
                                    </div>

                                    {recentTransactions.length > 0 && (
                                        <div>
                                            <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2">Recent Activity</h4>
                                            <div className="space-y-2">
                                                {recentTransactions.map(t => (
                                                    <div key={t.id} className="text-sm flex justify-between items-center border-b pb-2 last:border-0 last:pb-0">
                                                        <div>
                                                            <div className="font-medium">{t.startDate}</div>
                                                            <div className="text-xs text-muted-foreground">₹{t.total}</div>
                                                        </div>
                                                        <span className={`text-xs px-2 py-0.5 rounded-full ${t.paymentStatus === 'Paid' ? 'bg-green-100 text-green-800' :
                                                            t.paymentStatus === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                                                'bg-red-100 text-red-800'
                                                            }`}>
                                                            {t.paymentStatus || 'Pending'}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )
                        })()}

                        {dealer.address && (
                            <div className="mb-4">
                                <h4 className="text-sm font-semibold mb-1">Address</h4>
                                <p className="text-sm text-muted-foreground">{dealer.address}</p>
                            </div>
                        )}

                        <div className="flex gap-2 justify-end mt-4">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={onDelete}
                                className="gap-2 text-destructive hover:text-destructive hover:bg-destructive/10 border-destructive/20"
                            >
                                <Trash2 className="h-4 w-4" />
                                Delete
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={onViewDetails}
                                className="gap-2"
                            >
                                <Users className="h-4 w-4" />
                                View Details
                            </Button>
                            <Button
                                variant="default"
                                size="sm"
                                onClick={onEdit}
                                className="gap-2"
                            >
                                <Edit className="h-4 w-4" />
                                Edit Details
                            </Button>
                        </div>
                    </div>
                )}
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
            } catch (error) {
                alert('Failed to delete dealer: ' + error.message)
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            addDealer(newDealer) // This will throw if duplicate phone
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

            {isAdding && (
                <Card className="max-w-2xl">
                    <CardHeader>
                        <CardTitle>Add New Dealer</CardTitle>
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

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {dealers.map((dealer) => (
                    <DealerCard
                        key={dealer.id}
                        dealer={dealer}
                        transactions={transactions}
                        onEdit={() => setEditingDealer(dealer)}
                        onViewDetails={() => navigate('/dealers/' + dealer.id)}
                        onPendingClick={() => setPendingDrawerEntity(dealer)}
                        onDelete={() => handleDelete(dealer.id)}
                    />
                ))}
            </div>

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
