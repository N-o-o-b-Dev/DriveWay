import { useState, useMemo } from 'react'
import { useDriveway } from '../context/DrivewayContext'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Card, CardContent } from '../components/ui/Card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/Table'
import { Sheet, SheetHeader, SheetTitle } from '../components/ui/Sheet'
import { Plus, ArrowRight, ArrowLeft } from 'lucide-react'

export function Register() {
    const { registers, cars, customers, addRegister, isLoading } = useDriveway()
    const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [typeFilter, setTypeFilter] = useState('All')
    const [dateStart, setDateStart] = useState('')
    const [dateEnd, setDateEnd] = useState('')
    const [formData, setFormData] = useState({
        date: new Date().toISOString().slice(0, 16), // Default to now, format YYYY-MM-DDTHH:mm
        type: 'Entry',
        carId: '',
        name: '',
        notes: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        addRegister({
            ...formData,
            date: new Date(formData.date).toISOString()
        })
        setIsAddDrawerOpen(false)
        // Reset form slightly but keep date/time? No, reset all usually better or keep recent context.
        setFormData({
            date: new Date().toISOString().slice(0, 16),
            type: 'Entry',
            carId: '',
            name: '',
            notes: ''
        })
    }

    // Filter and Sort registers
    const filteredRegisters = registers.filter(entry => {
        const car = cars.find(c => c.id === entry.carId)
        let displayName = entry.name
        if (entry.customerId) {
            const customer = customers.find(c => c.id === entry.customerId)
            if (customer) displayName = customer.name
        }

        const searchString = `${displayName || ''} ${car?.make || ''} ${car?.model || ''} ${car?.plateNumber || ''} ${entry.notes || ''}`.toLowerCase()
        const matchesSearch = searchString.includes(searchTerm.toLowerCase())
        const matchesType = typeFilter === 'All' || entry.type === typeFilter

        const entryDate = new Date(entry.date)
        const matchesDateStart = !dateStart || entryDate >= new Date(dateStart)
        const matchesDateEnd = !dateEnd || entryDate <= new Date(dateEnd + 'T23:59:59')

        return matchesSearch && matchesType && matchesDateStart && matchesDateEnd
    })

    const sortedRegisters = useMemo(() => {
        return [...filteredRegisters].sort((a, b) => new Date(b.date) - new Date(a.date))
    }, [filteredRegisters])

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold tracking-tight">Entry/Exit Register</h2>
                <Button onClick={() => setIsAddDrawerOpen(true)}>
                    <Plus className="mr-2 h-4 w-4" /> Manual Entry
                </Button>
            </div>

            <div className="flex flex-col gap-4 bg-muted/40 p-4 rounded-lg border">
                <div className="flex flex-col sm:flex-row gap-4 items-center w-full">
                    <div className="relative flex-1 w-full">
                        <Input
                            placeholder="Search register by name, vehicle, or notes..."
                            className="bg-background"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <select
                        className="h-10 w-full sm:w-[150px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                        value={typeFilter}
                        onChange={e => setTypeFilter(e.target.value)}
                    >
                        <option value="All">All Types</option>
                        <option value="Entry">Entry (In)</option>
                        <option value="Exit">Exit (Out)</option>
                    </select>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground whitespace-nowrap">From:</span>
                        <Input
                            type="date"
                            className="bg-background w-auto"
                            value={dateStart}
                            onChange={e => setDateStart(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground whitespace-nowrap">To:</span>
                        <Input
                            type="date"
                            className="bg-background w-auto"
                            value={dateEnd}
                            onChange={e => setDateEnd(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <Card>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date & Time</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Car</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Notes</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {isLoading ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                                        Loading register...
                                    </TableCell>
                                </TableRow>
                            ) : sortedRegisters.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                                        No entries found.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                sortedRegisters.map((entry) => {
                                    const car = cars.find(c => c.id === entry.carId)
                                    // Try to find customer by name if possible or just show raw name
                                    // Implementation note: entry.name might be a direct string or customerId
                                    // logic below handles both if name was stored or customerId
                                    let displayName = entry.name
                                    if (entry.customerId) {
                                        const customer = customers.find(c => c.id === entry.customerId)
                                        if (customer) displayName = customer.name
                                    }

                                    return (
                                        <TableRow key={entry.id}>
                                            <TableCell className="font-medium">
                                                {new Date(entry.date).toLocaleDateString()}
                                                <span className="text-muted-foreground ml-2 text-xs">
                                                    {new Date(entry.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                </span>
                                            </TableCell>
                                            <TableCell>
                                                <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${entry.type === 'Entry'
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-orange-100 text-orange-800'
                                                    }`}>
                                                    {entry.type === 'Entry' ? <ArrowRight className="h-3 w-3" /> : <ArrowLeft className="h-3 w-3" />}
                                                    {entry.type}
                                                </span>
                                            </TableCell>
                                            <TableCell>
                                                {car ? (
                                                    <div className="flex flex-col">
                                                        <span>{car.make} {car.model}</span>
                                                        <span className="text-xs text-muted-foreground">{car.plateNumber}</span>
                                                    </div>
                                                ) : (
                                                    <span className="text-muted-foreground italic">Unknown Car</span>
                                                )}
                                            </TableCell>
                                            <TableCell>{displayName || '-'}</TableCell>
                                            <TableCell className="text-muted-foreground text-sm truncate max-w-[200px]">
                                                {entry.notes}
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <Sheet isOpen={isAddDrawerOpen} onClose={() => setIsAddDrawerOpen(false)} className="w-[400px] sm:w-[540px]">
                <div className="h-full flex flex-col">
                    <SheetHeader>
                        <SheetTitle>Add Register Entry</SheetTitle>
                    </SheetHeader>

                    <form id="add-register-form" onSubmit={handleSubmit} className="mt-6 space-y-6 flex-1 overflow-y-auto">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Type</label>
                                <div className="grid grid-cols-2 gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, type: 'Entry' })}
                                        className={`flex items-center justify-center gap-2 p-3 rounded-md border text-sm font-medium transition-colors ${formData.type === 'Entry'
                                            ? 'bg-green-100 border-green-200 text-green-900'
                                            : 'hover:bg-muted bg-background'
                                            }`}
                                    >
                                        <ArrowRight className="h-4 w-4" />
                                        Entry (In)
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, type: 'Exit' })}
                                        className={`flex items-center justify-center gap-2 p-3 rounded-md border text-sm font-medium transition-colors ${formData.type === 'Exit'
                                            ? 'bg-orange-100 border-orange-200 text-orange-900'
                                            : 'hover:bg-muted bg-background'
                                            }`}
                                    >
                                        <ArrowLeft className="h-4 w-4" />
                                        Exit (Out)
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Date & Time</label>
                                <Input
                                    type="datetime-local"
                                    value={formData.date}
                                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Vehicle</label>
                                <select
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    value={formData.carId}
                                    onChange={e => setFormData({ ...formData, carId: e.target.value })}
                                    required
                                >
                                    <option value="">Select a vehicle...</option>
                                    {cars.map(car => (
                                        <option key={car.id} value={car.id}>
                                            {car.make} {car.model} ({car.plateNumber})
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Name (Driver/Customer)</label>
                                <Input
                                    placeholder="Enter name"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Notes</label>
                                <Input
                                    placeholder="Optional notes"
                                    value={formData.notes}
                                    onChange={e => setFormData({ ...formData, notes: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="pt-4 mt-auto">
                            <Button type="submit" className="w-full">
                                Add Entry
                            </Button>
                        </div>
                    </form>
                </div>
            </Sheet>
        </div>
    )
}
