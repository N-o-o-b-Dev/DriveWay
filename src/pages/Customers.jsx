import { useState } from 'react'
import { useDriveway } from '../context/DrivewayContext'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Plus, Edit, Store } from 'lucide-react'
import { EditCustomerDrawer } from '../components/EditCustomerDrawer'
import { CustomerDealersDrawer } from '../components/CustomerDealersDrawer'

export function Customers() {
    const { customers, addCustomer } = useDriveway()
    const [isAdding, setIsAdding] = useState(false)
    const [newCustomer, setNewCustomer] = useState({ name: '', email: '', phone: '' })
    const [editingCustomer, setEditingCustomer] = useState(null)
    const [viewingDealersForCustomer, setViewingDealersForCustomer] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        addCustomer(newCustomer)
        setIsAdding(false)
        setNewCustomer({ name: '', email: '', phone: '' })
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
                <Card className="max-w-md">
                    <CardHeader>
                        <CardTitle>Add New Customer</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <Input
                                placeholder="Name"
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
                            <Input
                                placeholder="Phone"
                                value={newCustomer.phone}
                                onChange={e => setNewCustomer({ ...newCustomer, phone: e.target.value })}
                                required
                            />
                            <Button type="submit" className="w-full">Save Customer</Button>
                        </form>
                    </CardContent>
                </Card>
            )}

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {customers.map((customer) => (
                    <Card key={customer.id} className="relative group">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-bold text-xl mb-1">{customer.name}</h3>
                                    <p className="text-sm text-muted-foreground mb-1">{customer.email}</p>
                                    <p className="text-sm text-muted-foreground">{customer.phone}</p>
                                </div>
                                <div className="flex gap-2">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                                        onClick={() => setViewingDealersForCustomer(customer)}
                                        title="View Dealers"
                                    >
                                        <Store className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                                        onClick={() => setEditingCustomer(customer)}
                                        title="Edit Customer"
                                    >
                                        <Edit className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <EditCustomerDrawer
                isOpen={!!editingCustomer}
                onClose={() => setEditingCustomer(null)}
                customer={editingCustomer}
            />

            <CustomerDealersDrawer
                isOpen={!!viewingDealersForCustomer}
                onClose={() => setViewingDealersForCustomer(null)}
                customer={viewingDealersForCustomer}
            />
        </div>
    )
}
