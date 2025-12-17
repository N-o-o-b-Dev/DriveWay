import { useState, useMemo } from 'react'
import { useDriveway } from '../context/DrivewayContext'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/Table'
import { ArrowUpRight, ArrowDownLeft, Search, Filter } from 'lucide-react'

export function Financials() {
    const { transactions, cars, customers, dealers } = useDriveway()
    const [searchTerm, setSearchTerm] = useState('')
    const [filterType, setFilterType] = useState('All') // All, Credit, Debit

    // Flatten all payments into a single list with context
    const allPayments = useMemo(() => {
        const flattened = []
        transactions.forEach(t => {
            const car = cars.find(c => c.id === t.carId)
            const customer = customers.find(c => c.id === t.customerId)
            const dealer = dealers.find(d => d.id === t.dealerId)

            if (t.payments && t.payments.length > 0) {
                t.payments.forEach(p => {
                    flattened.push({
                        ...p,
                        transactionId: t.id,
                        carModel: car ? `${car.make} ${car.model}` : 'Unknown Car',
                        customerName: customer ? customer.name : 'Unknown Customer',
                        dealerName: dealer ? dealer.name : null, // Optional
                        rentalDate: `${t.startDate} - ${t.endDate}`
                    })
                })
            }
        })
        // Sort by date descending
        return flattened.sort((a, b) => new Date(b.date) - new Date(a.date))
    }, [transactions, cars, customers, dealers])

    // Filter Logic
    const filteredPayments = allPayments.filter(p => {
        const matchesSearch =
            p.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.carModel.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (p.notes && p.notes.toLowerCase().includes(searchTerm.toLowerCase()))

        const matchesType = filterType === 'All' || p.type === filterType

        return matchesSearch && matchesType
    })

    const totalIncome = filteredPayments
        .filter(p => p.type === 'Credit')
        .reduce((sum, p) => sum + (Number(p.amount) || 0), 0)

    const totalExpenses = filteredPayments
        .filter(p => p.type === 'Debit')
        .reduce((sum, p) => sum + (Number(p.amount) || 0), 0)

    const netCashflow = totalIncome - totalExpenses

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Financials</h2>

            {/* Summary Cards */}
            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Net Cashflow</CardTitle>
                        <span className="text-muted-foreground font-bold text-lg">₹</span>
                    </CardHeader>
                    <CardContent>
                        <div className={`text-2xl font-bold ${netCashflow >= 0 ? 'text-green-600' : 'text-destructive'}`}>
                            {netCashflow >= 0 ? '+' : ''}₹{netCashflow.toLocaleString()}
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Income (Credit)</CardTitle>
                        <ArrowDownLeft className="h-4 w-4 text-green-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-600">
                            ₹{totalIncome.toLocaleString()}
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Expenses (Debit)</CardTitle>
                        <ArrowUpRight className="h-4 w-4 text-destructive" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-destructive">
                            ₹{totalExpenses.toLocaleString()}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Controls */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search customer, car, or notes..."
                        className="pl-8"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <Button
                        variant={filterType === 'All' ? 'default' : 'outline'}
                        onClick={() => setFilterType('All')}
                        size="sm"
                    >
                        All
                    </Button>
                    <Button
                        variant={filterType === 'Credit' ? 'default' : 'outline'}
                        onClick={() => setFilterType('Credit')}
                        size="sm"
                        className={filterType === 'Credit' ? 'bg-green-600 hover:bg-green-700' : ''}
                    >
                        Income Only
                    </Button>
                    <Button
                        variant={filterType === 'Debit' ? 'default' : 'outline'}
                        onClick={() => setFilterType('Debit')}
                        size="sm"
                        className={filterType === 'Debit' ? 'bg-destructive hover:bg-destructive/90' : ''}
                    >
                        Expense Only
                    </Button>
                </div>
            </div>

            {/* Ledger Table */}
            <Card>
                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Entity</TableHead>
                                <TableHead>Details</TableHead>
                                <TableHead>Medium</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredPayments.map((p) => (
                                <TableRow key={p.id}>
                                    <TableCell className="font-medium whitespace-nowrap">{p.date}</TableCell>
                                    <TableCell>
                                        <span className={`text-xs px-2 py-1 rounded-full ${p.type === 'Credit' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                            }`}>
                                            {p.type}
                                        </span>
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-medium">{p.customerName}</div>
                                        {p.dealerName && <div className="text-xs text-muted-foreground">Dealer: {p.dealerName}</div>}
                                    </TableCell>
                                    <TableCell>
                                        <div className="text-sm">{p.carModel}</div>
                                        <div className="text-xs text-muted-foreground">{p.notes || 'No notes'}</div>
                                    </TableCell>
                                    <TableCell className="text-muted-foreground">{p.medium}</TableCell>
                                    <TableCell className={`text-right font-bold ${p.type === 'Credit' ? 'text-green-600' : 'text-destructive'
                                        }`}>
                                        {p.type === 'Debit' ? '-' : '+'}₹{p.amount}
                                    </TableCell>
                                </TableRow>
                            ))}
                            {filteredPayments.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                                        No financial records found matching your filters.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </Card>
        </div>
    )
}
