import { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card'
import { Input } from '../../components/ui/Input'
import { Button } from '../../components/ui/Button'
import { Plus, Trash2, Save, FileText } from 'lucide-react'
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'
import { InvoicePDF } from '../../documents/InvoicePDF'
import { useNavigate, useLocation } from 'react-router-dom'

export function CreateInvoice() {
    const navigate = useNavigate()
    const location = useLocation()
    const [shopSettings, setShopSettings] = useState({})
    const [editingId, setEditingId] = useState(null)

    // Invoice State
    const [invoiceNo, setInvoiceNo] = useState(`INV-${Date.now().toString().slice(-6)}`)
    const [date, setDate] = useState(new Date().toISOString().split('T')[0])

    const [customerDetails, setCustomerDetails] = useState({
        name: '', phone: '', email: '', address: ''
    })

    const [vehicles, setVehicles] = useState([
        { id: 1, model: '', regNo: '', startDate: '', endDate: '', days: 0, rate: 0, amount: 0 }
    ])
    const [additionalCharges, setAdditionalCharges] = useState([
        { id: 'deposit', description: 'Deposit', amount: 0 }
    ])

    const [discount, setDiscount] = useState(0)
    const [taxRate, setTaxRate] = useState(0)
    const [notes, setNotes] = useState('')

    useEffect(() => {
        const stored = localStorage.getItem('driveway_shop_settings')
        if (stored) {
            setShopSettings(JSON.parse(stored))
        }

        // Check for edit mode
        if (location.state?.invoiceData) {
            const data = location.state.invoiceData
            setEditingId(data.id)
            setInvoiceNo(data.invoiceNo)
            setDate(data.date)
            setCustomerDetails(data.customerDetails || { name: '', phone: '', email: '', address: '' })
            setVehicles(data.vehicles || [])
            setAdditionalCharges(data.additionalCharges || [])
            setDiscount(data.discount || 0)
            setNotes(data.notes || '')
            // Backward compatibility for tax/vat if needed, though we didn't store rate explicitly before, 
            // we can try to derive it or default to 0. 
            // In the previous code, tax was an amount, but we have a rate input.
            // Let's assume user re-enters rate or we infer it: (tax / subtotal) * 100
            if (data.tax && data.subtotal) {
                setTaxRate(Math.round((data.tax / data.subtotal) * 100))
            }
        }
    }, [location.state])

    // Calculations
    const calculateTotals = () => {
        const vehicleTotal = vehicles.reduce((acc, v) => acc + (Number(v.amount) || 0), 0)
        const extraTotal = additionalCharges.reduce((acc, c) => acc + (Number(c.amount) || 0), 0)
        const subtotal = vehicleTotal + extraTotal
        const taxAmount = (subtotal * taxRate) / 100
        const grandTotal = subtotal + taxAmount - Number(discount)
        return { subtotal, tax: taxAmount, grandTotal }
    }

    const { subtotal, tax, grandTotal } = calculateTotals()

    const handleVehicleChange = (id, field, value) => {
        setVehicles(prev => prev.map(v => {
            if (v.id !== id) return v

            const updated = { ...v, [field]: value }

            // Auto calc amount
            if (field === 'days' || field === 'rate') {
                updated.amount = (Number(updated.days) || 0) * (Number(updated.rate) || 0)
            }
            // Auto calc days and amount if dates change
            if (field === 'startDate' || field === 'endDate') {
                if (updated.startDate && updated.endDate) {
                    const start = new Date(updated.startDate)
                    const end = new Date(updated.endDate)

                    if (!isNaN(start) && !isNaN(end)) {
                        const diffMs = end - start
                        if (diffMs > 0) {
                            const totalHours = diffMs / (1000 * 60 * 60)
                            let days = Math.floor(totalHours / 24)
                            const remainderHours = totalHours % 24

                            if (remainderHours > 5) {
                                days += 1
                            }
                            // Ensure minimum 0 (or strictly following the rule, 4h = 0 days?) 
                            // Going with strictly 0 if < 5h

                            updated.days = days
                            updated.amount = days * (Number(updated.rate) || 0)
                        } else {
                            // Negative or zero duration
                            updated.days = 0
                            updated.amount = 0
                        }
                    }
                }
            }

            return updated
        }))
    }

    const handleChargeChange = (id, field, value) => {
        setAdditionalCharges(prev => prev.map(c => c.id === id ? { ...c, [field]: value } : c))
    }

    const addCharge = () => {
        setAdditionalCharges([...additionalCharges, { id: Date.now(), description: '', amount: 0 }])
    }

    const removeCharge = (id) => {
        setAdditionalCharges(additionalCharges.filter(c => c.id !== id))
    }

    const addVehicle = () => {
        setVehicles([...vehicles, { id: Date.now(), model: '', regNo: '', startDate: '', endDate: '', days: 0, rate: 0, amount: 0 }])
    }

    const removeVehicle = (id) => {
        if (vehicles.length === 1) return
        setVehicles(vehicles.filter(v => v.id !== id))
    }

    const saveInvoice = () => {
        const invoiceData = {
            id: editingId || Date.now(),
            invoiceNo,
            date,
            customerDetails,
            vehicles,
            additionalCharges,
            subtotal,
            tax,
            discount,
            grandTotal,
            notes
        }

        const existing = JSON.parse(localStorage.getItem('driveway_invoices') || '[]')

        if (editingId) {
            const updated = existing.map(inv => inv.id === editingId ? invoiceData : inv)
            localStorage.setItem('driveway_invoices', JSON.stringify(updated))
            alert('Invoice Updated Successfully!')
        } else {
            localStorage.setItem('driveway_invoices', JSON.stringify([...existing, invoiceData]))
            alert('Invoice Created and Saved!')
        }
        navigate('/billing/history')
    }

    const invoiceObject = {
        invoiceNo,
        date,
        customerDetails,
        vehicles,
        additionalCharges,
        subtotal,
        tax,
        discount,
        grandTotal,
        notes,
        settings: shopSettings
    }

    return (
        <div className="flex flex-col h-[calc(100vh-100px)] gap-4">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">{editingId ? 'Edit Invoice' : 'New Invoice'}</h2>
                <div className="flex gap-2">
                    <Button variant="outline" onClick={saveInvoice}><Save className="mr-2 h-4 w-4" /> Save Record</Button>
                    <PDFDownloadLink document={<InvoicePDF invoice={invoiceObject} />} fileName={`${invoiceNo}.pdf`}>
                        {({ loading }) => (
                            <Button className="bg-red-600 hover:bg-red-700" disabled={loading}>
                                <FileText className="mr-2 h-4 w-4" /> {loading ? 'Preparing...' : 'Download PDF'}
                            </Button>
                        )}
                    </PDFDownloadLink>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 h-full overflow-hidden">
                {/* Left: Form Input */}
                <div className="flex-1 overflow-y-auto pr-2 space-y-6 pb-20">
                    <Card>
                        <CardHeader><CardTitle>Customer Details</CardTitle></CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <Input placeholder="Invoice No" value={invoiceNo} onChange={e => setInvoiceNo(e.target.value)} />
                                <Input type="date" value={date} onChange={e => setDate(e.target.value)} />
                            </div>
                            <Input placeholder="Full Name" value={customerDetails.name} onChange={e => setCustomerDetails({ ...customerDetails, name: e.target.value })} />
                            <div className="grid grid-cols-2 gap-4">
                                <Input placeholder="Phone" value={customerDetails.phone} onChange={e => setCustomerDetails({ ...customerDetails, phone: e.target.value })} />
                                <Input placeholder="Email" value={customerDetails.email} onChange={e => setCustomerDetails({ ...customerDetails, email: e.target.value })} />
                            </div>
                            <Input placeholder="Address" value={customerDetails.address} onChange={e => setCustomerDetails({ ...customerDetails, address: e.target.value })} />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row justify-between items-center">
                            <CardTitle>Vehicles / Items</CardTitle>
                            <Button size="sm" variant="outline" onClick={addVehicle}><Plus className="h-4 w-4" /></Button>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {vehicles.map((v, index) => (
                                <div key={v.id} className="p-4 border rounded-lg bg-muted/20 relative group">
                                    <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Button size="icon" variant="ghost" className="h-6 w-6 text-destructive" onClick={() => removeVehicle(v.id)}><Trash2 className="h-4 w-4" /></Button>
                                    </div>
                                    <h4 className="text-sm font-medium mb-2 text-muted-foreground">Item #{index + 1}</h4>
                                    <div className="grid grid-cols-2 gap-2 mb-2">
                                        <Input placeholder="Vehicle Model" value={v.model} onChange={e => handleVehicleChange(v.id, 'model', e.target.value)} />
                                        <Input placeholder="Reg No" value={v.regNo} onChange={e => handleVehicleChange(v.id, 'regNo', e.target.value)} />
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 mb-2">
                                        <div className="space-y-1">
                                            <label className="text-xs text-muted-foreground">Start Time</label>
                                            <Input type="datetime-local" value={v.startDate} onChange={e => handleVehicleChange(v.id, 'startDate', e.target.value)} />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs text-muted-foreground">End Time</label>
                                            <Input type="datetime-local" value={v.endDate} onChange={e => handleVehicleChange(v.id, 'endDate', e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="space-y-1">
                                            <label className="text-xs text-muted-foreground">Rate/Day</label>
                                            <Input type="number" value={v.rate} onChange={e => handleVehicleChange(v.id, 'rate', e.target.value)} />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs text-muted-foreground">Days</label>
                                            <Input type="number" value={v.days} onChange={e => handleVehicleChange(v.id, 'days', e.target.value)} className="bg-background" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs text-muted-foreground">Amount</label>
                                            <Input type="number" readOnly value={v.amount} className="bg-muted font-bold text-foreground" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row justify-between items-center">
                            <CardTitle>Additional Charges</CardTitle>
                            <Button size="sm" variant="outline" onClick={addCharge}><Plus className="h-4 w-4" /></Button>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {additionalCharges.map((item) => (
                                <div key={item.id} className="flex gap-4 items-center">
                                    <Input
                                        placeholder="Description (e.g. Deposit)"
                                        value={item.description}
                                        onChange={e => handleChargeChange(item.id, 'description', e.target.value)}
                                        className="flex-1"
                                    />
                                    <div className="w-32 relative">
                                        <span className="absolute left-3 top-2.5 text-muted-foreground text-xs">₹</span>
                                        <Input
                                            type="number"
                                            value={item.amount}
                                            onChange={e => handleChargeChange(item.id, 'amount', e.target.value)}
                                            className="pl-6"
                                        />
                                    </div>
                                    <Button size="icon" variant="ghost" onClick={() => removeCharge(item.id)} className="text-destructive">
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader><CardTitle>Summary</CardTitle></CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between items-center text-sm">
                                <span>Subtotal</span>
                                <span>₹{subtotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="flex items-center gap-2">Tax Rate % <Input type="number" className="h-6 w-16 text-right" value={taxRate} onChange={e => setTaxRate(Number(e.target.value))} /></span>
                                <span>₹{tax.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="flex items-center gap-2">Discount ₹ <Input type="number" className="h-6 w-20 text-right" value={discount} onChange={e => setDiscount(Number(e.target.value))} /></span>
                                <span className="text-red-500">-₹{discount.toLocaleString()}</span>
                            </div>
                            <div className="border-t pt-2 flex justify-between items-center font-bold text-lg">
                                <span>Grand Total</span>
                                <span className="text-red-600">₹{grandTotal.toLocaleString()}</span>
                            </div>
                            <div className="pt-4">
                                <label className="text-xs font-medium mb-1 block">Notes / Terms</label>
                                <textarea
                                    className="w-full min-h-[80px] rounded-md border bg-background px-3 py-2 text-sm"
                                    placeholder="Thank you for your business..."
                                    value={notes}
                                    onChange={e => setNotes(e.target.value)}
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right: PDF Preview */}
                <div className="hidden lg:block lg:flex-1 bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 shadow-2xl">
                    <PDFViewer width="100%" height="100%" className="w-full h-full" showToolbar={true}>
                        <InvoicePDF invoice={invoiceObject} />
                    </PDFViewer>
                </div>
            </div>
        </div>
    )
}
