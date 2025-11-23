import { useDriveway } from '../context/DrivewayContext'
import { Sheet, SheetHeader, SheetTitle } from './ui/Sheet'
import { Card, CardContent } from './ui/Card'
import { Mail, Phone } from 'lucide-react'

export function DealerCustomersDrawer({ isOpen, onClose, dealer }) {
    const { transactions, customers } = useDriveway()

    if (!dealer) return null

    // Find all transactions for this dealer
    const dealerTransactions = transactions.filter(t => t.dealerId === dealer.id)

    // Get unique customer IDs from these transactions
    const customerIds = [...new Set(dealerTransactions.map(t => t.customerId))]

    // Filter customers list
    const dealerCustomers = customers.filter(c => customerIds.includes(c.id))

    return (
        <Sheet isOpen={isOpen} onClose={onClose}>
            <SheetHeader>
                <SheetTitle>Customers for {dealer.name}</SheetTitle>
            </SheetHeader>
            <div className="mt-6 space-y-4">
                {dealerCustomers.length > 0 ? (
                    dealerCustomers.map(customer => (
                        <Card key={customer.id}>
                            <CardContent className="p-4">
                                <h3 className="font-bold text-lg mb-1">{customer.name}</h3>
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
                    <div className="text-center py-8 text-muted-foreground">
                        No customers found for this dealer.
                    </div>
                )}
            </div>
        </Sheet>
    )
}
