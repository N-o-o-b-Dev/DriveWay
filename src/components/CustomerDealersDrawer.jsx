import { useDriveway } from '../context/DrivewayContext'
import { Sheet, SheetHeader, SheetTitle } from './ui/Sheet'
import { Card, CardContent } from './ui/Card'
import { Mail, Phone } from 'lucide-react'

export function CustomerDealersDrawer({ isOpen, onClose, customer }) {
    const { transactions, dealers } = useDriveway()

    if (!customer) return null

    // Find all transactions for this customer
    const customerTransactions = transactions.filter(t => t.customerId === customer.id)

    // Get unique dealer IDs from these transactions
    const dealerIds = [...new Set(customerTransactions.map(t => t.dealerId).filter(id => id))]

    // Filter dealers list
    const customerDealers = dealers.filter(d => dealerIds.includes(d.id))

    return (
        <Sheet isOpen={isOpen} onClose={onClose}>
            <SheetHeader>
                <SheetTitle>Dealers for {customer.name}</SheetTitle>
            </SheetHeader>
            <div className="mt-6 space-y-4">
                {customerDealers.length > 0 ? (
                    customerDealers.map(dealer => (
                        <Card key={dealer.id}>
                            <CardContent className="p-4">
                                <h3 className="font-bold text-lg mb-1">{dealer.name}</h3>
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
                    <div className="text-center py-8 text-muted-foreground">
                        No dealers found for this customer.
                    </div>
                )}
            </div>
        </Sheet>
    )
}
