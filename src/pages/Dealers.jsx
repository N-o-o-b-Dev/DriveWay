import { useState } from 'react'
import { useDriveway } from '../context/DrivewayContext'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Plus, Edit, Users } from 'lucide-react'
import { EditDealerDrawer } from '../components/EditDealerDrawer'
import { DealerCustomersDrawer } from '../components/DealerCustomersDrawer'

export function Dealers() {
    const { dealers, addDealer } = useDriveway()
    const [isAdding, setIsAdding] = useState(false)
    const [newDealer, setNewDealer] = useState({ name: '', email: '', phone: '' })
    const [editingDealer, setEditingDealer] = useState(null)
    const [viewingCustomersForDealer, setViewingCustomersForDealer] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        addDealer(newDealer)
        setIsAdding(false)
        setNewDealer({ name: '', email: '', phone: '' })
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
                <Card className="max-w-md">
                    <CardHeader>
                        <CardTitle>Add New Dealer</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <Input
                                placeholder="Name"
                                value={newDealer.name}
                                onChange={e => setNewDealer({ ...newDealer, name: e.target.value })}
                                required
                            />
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
                            <Button type="submit" className="w-full">Save Dealer</Button>
                        </form>
                    </CardContent>
                </Card>
            )}

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {dealers.map((dealer) => (
                    <Card key={dealer.id} className="relative group">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-bold text-xl mb-1">{dealer.name}</h3>
                                    <p className="text-sm text-muted-foreground mb-1">{dealer.email}</p>
                                    <p className="text-sm text-muted-foreground">{dealer.phone}</p>
                                </div>
                                <div className="flex gap-2">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                                        onClick={() => setViewingCustomersForDealer(dealer)}
                                        title="View Customers"
                                    >
                                        <Users className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                                        onClick={() => setEditingDealer(dealer)}
                                        title="Edit Dealer"
                                    >
                                        <Edit className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <EditDealerDrawer
                isOpen={!!editingDealer}
                onClose={() => setEditingDealer(null)}
                dealer={editingDealer}
            />

            <DealerCustomersDrawer
                isOpen={!!viewingCustomersForDealer}
                onClose={() => setViewingCustomersForDealer(null)}
                dealer={viewingCustomersForDealer}
            />
        </div>
    )
}
