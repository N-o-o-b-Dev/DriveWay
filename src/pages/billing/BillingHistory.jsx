import { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card'
import { Input } from '../../components/ui/Input'
import { Button } from '../../components/ui/Button'
import { Search, FileText, Trash2, ArrowLeft, Pencil } from 'lucide-react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { InvoicePDF } from '../../documents/InvoicePDF'
import { useNavigate } from 'react-router-dom'

export function BillingHistory() {
    const navigate = useNavigate()
    const [invoices, setInvoices] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const stored = localStorage.getItem('driveway_invoices')
        if (stored) {
            try {
                const parsed = JSON.parse(stored)
                // Sort by ID descending (newest first)
                setInvoices(parsed.sort((a, b) => b.id - a.id))
            } catch (e) {
                console.error("Failed to parse invoices", e)
            }
        }
    }, [])

    const deleteInvoice = (id) => {
        if (confirm('Are you sure you want to delete this invoice record?')) {
            const updated = invoices.filter(inv => inv.id !== id)
            setInvoices(updated)
            localStorage.setItem('driveway_invoices', JSON.stringify(updated))
        }
    }

    const filteredInvoices = invoices.filter(inv =>
        inv.customerDetails?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inv.invoiceNo?.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" onClick={() => navigate('/billing')}>
                    <ArrowLeft className="h-5 w-5" />
                </Button>
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Invoice History</h2>
                    <p className="text-muted-foreground">Search and manage past transactions.</p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search by name or invoice #..."
                        className="pl-9"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <Card className="bg-background border">
                <CardContent className="p-0">
                    <div className="w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead className="[&_tr]:border-b">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Inovice #</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Date</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Customer</th>
                                    <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Details</th>
                                    <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Total</th>
                                    <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0">
                                {filteredInvoices.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="p-4 text-center text-muted-foreground">No records found.</td>
                                    </tr>
                                ) : (
                                    filteredInvoices.map((inv) => (
                                        <tr key={inv.id} className="border-b transition-colors hover:bg-muted/50">
                                            <td className="p-4 font-medium">{inv.invoiceNo}</td>
                                            <td className="p-4">{new Date(inv.date).toLocaleDateString()}</td>
                                            <td className="p-4">{inv.customerDetails?.name}</td>
                                            <td className="p-4 text-right max-w-[200px] truncate" title={inv.vehicles?.map(v => v.model).join(', ')}>
                                                {inv.vehicles?.length} Vehicle(s)
                                            </td>
                                            <td className="p-4 text-right font-bold">₹{inv.grandTotal?.toLocaleString()}</td>
                                            <td className="p-4 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <Button size="icon" variant="ghost" className="h-8 w-8 text-foreground" onClick={() => navigate('/billing/create', { state: { invoiceData: inv } })} title="Edit Invoice">
                                                        <Pencil className="h-4 w-4" />
                                                    </Button>
                                                    <PDFDownloadLink document={<InvoicePDF invoice={inv} />} fileName={`${inv.invoiceNo}.pdf`}>
                                                        {({ loading }) => (
                                                            <Button size="icon" variant="ghost" className="h-8 w-8 text-blue-600" disabled={loading} title="Download PDF">
                                                                <FileText className="h-4 w-4" />
                                                            </Button>
                                                        )}
                                                    </PDFDownloadLink>
                                                    <Button size="icon" variant="ghost" className="h-8 w-8 text-destructive" onClick={() => deleteInvoice(inv.id)} title="Delete Record">
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
