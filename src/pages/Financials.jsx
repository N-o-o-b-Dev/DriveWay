import { useState, useMemo } from 'react'
import { useDriveway } from '../context/DrivewayContext'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import {
    ArrowUpRight,
    ArrowDownLeft,
    Search,
    Filter,
    Download,
    Landmark,
    Wallet,
    CreditCard,
    Car,
    Wrench,
    MoreVertical,
    TrendingUp,
    TrendingDown,
    Building2
} from 'lucide-react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell
} from 'recharts'
import { cn } from '../lib/utils'

export function Financials() {
    const { transactions, cars, customers, dealers, maintenanceRecords } = useDriveway()
    const [searchTerm, setSearchTerm] = useState('')
    const [timeRange, setTimeRange] = useState('Last 6 Months')
    const [activeTab, setActiveTab] = useState('Overview')

    // --- Data Processing ---

    const allPayments = useMemo(() => {
        const flattened = []

        // 1. Rental Income
        transactions.forEach(t => {
            const car = cars.find(c => c.id === t.carId)
            const customer = customers.find(c => c.id === t.customerId)

            if (t.payments?.length > 0) {
                t.payments.forEach(p => {
                    flattened.push({
                        id: p.id,
                        displayId: `INV-${t.id.slice(0, 4).toUpperCase()}-${p.id.slice(0, 3)}`,
                        date: p.date,
                        actualDate: new Date(p.date),
                        amount: Number(p.amount),
                        type: 'Credit',
                        category: 'Rental',
                        heading: `${car ? `${car.make} ${car.model}` : 'Unknown Car'} Rental`,
                        subHeading: customer ? customer.name : 'Unknown Customer',
                        medium: p.medium,
                        icon: Car,
                        color: 'bg-red-500/10 text-red-500',
                        note: p.notes || ''
                    })
                })
            }
        })

        // 2. Maintenance Expenses
        if (maintenanceRecords) {
            maintenanceRecords.forEach(m => {
                const amount = m.amountPaid ? Number(m.amountPaid) : (m.paymentStatus === 'Paid' ? Number(m.amount) : 0)
                if (amount > 0) {
                    const car = cars.find(c => c.id === m.carId)
                    flattened.push({
                        id: m.id,
                        displayId: `EXP-${m.id.slice(0, 4).toUpperCase()}`,
                        date: m.date,
                        actualDate: new Date(m.date),
                        amount: amount,
                        type: 'Debit',
                        category: 'Maintenance',
                        heading: `${car ? `${car.make} ${car.model}` : 'Unknown Car'} Maintenance`,
                        subHeading: m.workshopName || 'Workshop',
                        medium: 'Cash', // Default
                        icon: Wrench,
                        color: 'bg-slate-500/10 text-slate-400',
                        note: `Maintenance: ${m.description || 'No description'}`
                    })
                }
            })
        }

        return flattened.sort((a, b) => b.actualDate - a.actualDate)
    }, [transactions, cars, customers, maintenanceRecords])

    // --- Chart Data Preparation ---
    const chartData = useMemo(() => {
        const monthlyData = {}
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

        // Initialize last 6 months
        const today = new Date()
        for (let i = 5; i >= 0; i--) {
            const d = new Date(today.getFullYear(), today.getMonth() - i, 1)
            const key = `${months[d.getMonth()]}`
            monthlyData[key] = { name: key, income: 0, expense: 0, net: 0 }
        }

        allPayments.forEach(p => {
            const d = new Date(p.date)
            // Only include if within last 6 months (roughly)
            // For simplicity, just matching month names if they exist in our initialized keys
            const key = months[d.getMonth()]
            if (monthlyData[key]) {
                if (p.type === 'Credit') monthlyData[key].income += p.amount
                else monthlyData[key].expense += p.amount
            }
        })

        return Object.values(monthlyData).map(d => ({
            ...d,
            net: d.income - d.expense
        }))
    }, [allPayments])


    // --- Totals ---
    const totalIncome = allPayments.filter(p => p.type === 'Credit').reduce((sum, p) => sum + p.amount, 0)
    const totalExpenses = allPayments.filter(p => p.type === 'Debit').reduce((sum, p) => sum + p.amount, 0)
    const netCashflow = totalIncome - totalExpenses

    // --- Filtering for List ---
    const filteredList = allPayments.filter(p =>
        p.heading.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.subHeading.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.note.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="space-y-8 pb-10">

            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Financial Overview</h1>
                    <p className="text-slate-400">Track your income, expenses, and transaction history.</p>
                </div>

                <div className="bg-[#1c1917] border border-white/5 p-1 rounded-lg flex items-center">
                    {['Overview', 'Reports', 'Invoices'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={cn(
                                "px-4 py-1.5 text-sm font-medium rounded-md transition-all",
                                activeTab === tab
                                    ? "bg-[#292524] text-white shadow-sm"
                                    : "text-slate-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Net Cashflow */}
                <div className="bg-[#1c1917] border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
                    <div className="relative z-10">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Net Cashflow</p>
                        <h3 className="text-4xl font-black text-white mb-2">₹{netCashflow.toLocaleString()}</h3>
                        <div className="flex items-center gap-2">
                            <Badge className={cn("bg-green-500/10 text-green-500 border-0 flex items-center gap-1", netCashflow < 0 && "bg-red-500/10 text-red-500")}>
                                {netCashflow >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                                {netCashflow >= 0 ? '+12.5%' : '-2.4%'}
                            </Badge>
                            <span className="text-xs text-slate-500">from last month</span>
                        </div>
                    </div>
                    <Building2 className="absolute right-[-20px] bottom-[-20px] h-32 w-32 text-white/[0.03] group-hover:text-white/[0.05] transition-colors" />
                </div>

                {/* Total Income */}
                <div className="bg-[#1c1917] border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
                    <div className="relative z-10">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Total Income</p>
                        <h3 className="text-4xl font-black text-white mb-2">₹{totalIncome.toLocaleString()}</h3>
                        <div className="flex items-center gap-2">
                            <Badge className="bg-green-500/10 text-green-500 border-0 flex items-center gap-1">
                                <TrendingUp className="h-3 w-3" />
                                +8.2%
                            </Badge>
                            <span className="text-xs text-slate-500">from last month</span>
                        </div>
                    </div>
                    <Wallet className="absolute right-[-20px] bottom-[-20px] h-32 w-32 text-white/[0.03] group-hover:text-white/[0.05] transition-colors" />
                </div>

                {/* Total Expenses */}
                <div className="bg-[#1c1917] border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
                    <div className="relative z-10">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Total Expenses</p>
                        <h3 className="text-4xl font-black text-white mb-2">₹{totalExpenses.toLocaleString()}</h3>
                        <div className="flex items-center gap-2">
                            <Badge className="bg-orange-500/10 text-orange-500 border-0 flex items-center gap-1">
                                <TrendingDown className="h-3 w-3" />
                                +2.4%
                            </Badge>
                            <span className="text-xs text-slate-500">from last month</span>
                        </div>
                    </div>
                    <CreditCard className="absolute right-[-20px] bottom-[-20px] h-32 w-32 text-white/[0.03] group-hover:text-white/[0.05] transition-colors" />
                </div>
            </div>

            {/* Charts Section */}
            <div className="bg-[#1c1917] border border-white/5 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-1 bg-red-600 rounded-full"></div>
                        <h3 className="text-lg font-bold text-white">Financial Performance</h3>
                    </div>
                    <select className="bg-black/20 border border-white/10 rounded-lg text-sm text-slate-300 px-3 py-1.5 focus:outline-none focus:border-red-500">
                        <option>Last 6 Months</option>
                        <option>Last Year</option>
                    </select>
                </div>

                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData}>
                            {/* <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} /> */}
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#64748b', fontSize: 12 }}
                                dy={10}
                            />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#0c0a09', border: '1px solid #333', borderRadius: '8px' }}
                                itemStyle={{ color: '#fff' }}
                                cursor={{ fill: '#ffffff05' }}
                            />
                            <Bar dataKey="net" radius={[4, 4, 4, 4]}>
                                {chartData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={index === chartData.length - 1 ? '#ef4444' : '#292524'}
                                        className="hover:opacity-80 transition-opacity cursor-pointer"
                                    />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Transactions List */}
            <div className="bg-[#1c1917] border border-white/5 rounded-2xl overflow-hidden">
                {/* Header */}
                <div className="p-6 border-b border-white/5 flex flex-col md:flex-row gap-4 justify-between items-center">
                    <div className="flex items-center gap-3 self-start md:self-auto">
                        <div className="p-2 bg-red-500/10 rounded-lg">
                            <CreditCard className="h-5 w-5 text-red-500" />
                        </div>
                        <h3 className="text-lg font-bold text-white">Recent Transactions</h3>
                    </div>

                    <div className="flex gap-2 w-full md:w-auto">
                        <div className="relative flex-1 md:w-64">
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                            <Input
                                placeholder="Search transactions..."
                                className="pl-9 bg-black/20 border-white/10 text-white placeholder:text-slate-600 focus:ring-red-500"
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <Button variant="outline" className="bg-black/20 border-white/10 text-slate-300 hover:text-white hover:bg-white/5">
                            <Filter className="h-4 w-4 mr-2" /> Filter
                        </Button>
                        <Button variant="outline" className="bg-black/20 border-white/10 text-slate-300 hover:text-white hover:bg-white/5">
                            <Download className="h-4 w-4 mr-2" /> Export
                        </Button>
                    </div>
                </div>

                {/* Table Header */}
                <div className="grid grid-cols-12 px-6 py-3 border-b border-white/5 bg-black/20 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    <div className="col-span-3">Transaction Details</div>
                    <div className="col-span-2">Note</div>
                    <div className="col-span-2">Date</div>
                    <div className="col-span-2">Medium</div>
                    <div className="col-span-2 text-right">Amount</div>
                    <div className="col-span-1 text-right">Type</div>
                </div>

                {/* Table Body */}
                <div className="divide-y divide-white/5">
                    {filteredList.length === 0 ? (
                        <div className="p-8 text-center text-slate-500">No transactions found.</div>
                    ) : (
                        filteredList.map((item) => (
                            <div key={`${item.category}-${item.id}`} className="grid grid-cols-12 px-6 py-4 items-center hover:bg-white/[0.02] transition-colors group">
                                {/* Details */}
                                <div className="col-span-3 flex items-center gap-4">
                                    <div className={cn("h-10 w-10 rounded-lg flex items-center justify-center shrink-0", item.color)}>
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="text-sm font-bold text-white truncate">{item.heading}</h4>
                                        <p className="text-xs text-slate-500 font-mono">Ref: {item.displayId}</p>
                                    </div>
                                </div>

                                {/* Note */}
                                <div className="col-span-2">
                                    <p className="text-xs text-slate-400 truncate">{item.note || '-'}</p>
                                </div>

                                {/* Date */}
                                <div className="col-span-2 text-sm text-slate-400">
                                    {new Date(item.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                </div>

                                {/* Medium */}
                                <div className="col-span-2">
                                    <Badge className="bg-white/5 text-slate-300 border-white/10 hover:bg-white/10">
                                        {item.medium}
                                    </Badge>
                                </div>

                                {/* Amount */}
                                <div className={cn(
                                    "col-span-2 text-right font-black text-sm",
                                    item.type === 'Credit' ? "text-green-500" : "text-white"
                                )}>
                                    {item.type === 'Credit' ? '+' : '-'}₹{item.amount.toLocaleString()}
                                </div>

                                {/* Type */}
                                <div className="col-span-1 flex justify-end items-center gap-4">
                                    <Badge className={cn(
                                        "border hover:bg-transparent",
                                        item.type === 'Credit'
                                            ? "bg-green-500/10 text-green-500 border-green-500/20"
                                            : "bg-white/10 text-slate-400 border-white/10"
                                    )}>
                                        {item.type.toUpperCase().slice(0, 3)}
                                    </Badge>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}
