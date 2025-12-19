import { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { FileText, Plus, History, Settings } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

export function BillingDashboard() {
    const navigate = useNavigate()
    const [recentInvoices, setRecentInvoices] = useState([])

    useEffect(() => {
        const stored = localStorage.getItem('driveway_invoices')
        if (stored) {
            try {
                const parsed = JSON.parse(stored)
                setRecentInvoices(parsed.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5))
            } catch (e) {
                console.error("Failed to parse invoices", e)
            }
        }
    }, [])

    return (
        <div className="space-y-8 p-1">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">Billing Overview</h2>
                    <p className="text-muted-foreground">Manage invoices, track payments, and generate bills.</p>
                </div>
                <div className="flex gap-2">
                    <Button onClick={() => navigate('/billing/create')} className="bg-red-600 hover:bg-red-700 text-white">
                        <Plus className="mr-2 h-4 w-4" /> Create Invoice
                    </Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <Card className="bg-zinc-900 border-zinc-800 text-white">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-zinc-400">Total Invoices</CardTitle>
                        <FileText className="h-4 w-4 text-red-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{recentInvoices.length > 5 ? '5+' : recentInvoices.length}</div>
                        <p className="text-xs text-zinc-500">Recent stored locally</p>
                    </CardContent>
                </Card>
                <Card className="cursor-pointer hover:bg-zinc-800 transition-colors bg-zinc-900 border-zinc-800 text-white" onClick={() => navigate('/billing/history')}>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-zinc-400">History</CardTitle>
                        <History className="h-4 w-4 text-red-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">View All</div>
                        <p className="text-xs text-zinc-500">Access past records</p>
                    </CardContent>
                </Card>
                <Card className="cursor-pointer hover:bg-zinc-800 transition-colors bg-zinc-900 border-zinc-800 text-white" onClick={() => navigate('/billing/settings')}>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-zinc-400">Settings</CardTitle>
                        <Settings className="h-4 w-4 text-red-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">Configure</div>
                        <p className="text-xs text-zinc-500">Shop details & logo</p>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Table */}
            <Card className="border-zinc-800 bg-black/40 backdrop-blur">
                <CardHeader>
                    <CardTitle>Recent Invoices</CardTitle>
                </CardHeader>
                <CardContent>
                    {recentInvoices.length === 0 ? (
                        <div className="text-center py-8 text-muted-foreground">No invoices generated yet.</div>
                    ) : (
                        <div className="space-y-4">
                            {recentInvoices.map((inv, idx) => (
                                <div key={idx} className="flex items-center justify-between border-b border-zinc-800 pb-4 last:border-0 last:pb-0">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-full bg-zinc-900 flex items-center justify-center text-red-500 font-bold border border-zinc-800">
                                            #{inv.invoiceNo?.slice(-3) || '000'}
                                        </div>
                                        <div>
                                            <p className="font-medium text-foreground">{inv.customerDetails?.name || 'Unknown'}</p>
                                            <p className="text-sm text-muted-foreground">{new Date(inv.date).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-foreground">₹{Number(inv.grandTotal).toLocaleString()}</p>
                                        <p className="text-xs text-muted-foreground">{inv.vehicles?.length} Item(s)</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
