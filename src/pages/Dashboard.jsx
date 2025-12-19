import { useState, useMemo } from 'react'
import { useDriveway } from '../context/DrivewayContext'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card'
import { Car, Wrench, Wallet, TrendingUp, TrendingDown, Activity, PieChart as PieIcon, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend } from 'recharts'

const COLORS = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6'];

export function Dashboard() {
    const { cars, customers, transactions, maintenanceRecords } = useDriveway()
    const [timeRange, setTimeRange] = useState('all') // 'week', 'month', 'year', 'all'

    // --- 1. Filter Data based on Time Range ---
    const filterByDate = (dateStr) => {
        if (timeRange === 'all') return true
        const date = new Date(dateStr)
        const now = new Date()

        if (timeRange === 'week') {
            const oneWeekAgo = new Date(now.setDate(now.getDate() - 7))
            return date >= oneWeekAgo
        }
        if (timeRange === 'month') {
            const oneMonthAgo = new Date(now.setMonth(now.getMonth() - 1))
            return date >= oneMonthAgo
        }
        if (timeRange === 'year') {
            const oneYearAgo = new Date(now.setFullYear(now.getFullYear() - 1))
            return date >= oneYearAgo
        }
        return true
    }

    const filteredTransactions = useMemo(() => transactions.filter(t => t.status !== 'Cancelled' && filterByDate(t.startDate)), [transactions, timeRange])
    const filteredMaintenance = useMemo(() => maintenanceRecords.filter(m => filterByDate(m.date)), [maintenanceRecords, timeRange])

    // --- 2. Calculate Key Metrics ---
    const totalRevenue = filteredTransactions.reduce((acc, t) => acc + (Number(t.total) || 0), 0)

    // Calculate Expenses: Only 'Paid' maintenance or fallback legacy
    const totalMaintenanceCost = filteredMaintenance.reduce((acc, r) => {
        let cost = 0
        if (r.amountPaid !== undefined && r.amountPaid !== '') {
            cost = parseFloat(r.amountPaid)
        } else if (r.paymentStatus === 'Paid' || !r.paymentStatus) {
            cost = parseFloat(r.amount) || 0
        }
        return acc + cost
    }, 0)

    const netProfit = totalRevenue - totalMaintenanceCost
    const profitMargin = totalRevenue > 0 ? ((netProfit / totalRevenue) * 100).toFixed(1) : 0

    // Fleet Status (Real-time, not time-ranged)
    const fleetStatusData = useMemo(() => {
        const statusCounts = { Available: 0, 'On Rent': 0, Maintenance: 0 }
        cars.forEach(car => {
            let status = 'Available'
            // Simple fallback logic if context computed status isn't reliable enough for this specific chart
            // (Though context.cars should have 'status' computed)
            if (car.status === 'On Rent') status = 'On Rent'
            if (car.status === 'On Maintenance' || car.status === 'Maintenance') status = 'Maintenance'
            statusCounts[status] = (statusCounts[status] || 0) + 1
        })
        return [
            { name: 'Available', value: statusCounts['Available'], color: '#10b981' },
            { name: 'On Rent', value: statusCounts['On Rent'], color: '#3b82f6' },
            { name: 'Maintenance', value: statusCounts['Maintenance'], color: '#ef4444' },
        ]
    }, [cars])

    // --- 3. Chart Data Preparation ---
    const financialChartData = useMemo(() => {
        // Group by Month (or Day if 'week')
        const dataMap = {}

        // Helper to get key
        const getKey = (dateStr) => {
            const d = new Date(dateStr)
            if (timeRange === 'week') return d.toLocaleDateString('en-US', { weekday: 'short' })
            return d.toLocaleDateString('en-US', { month: 'short', year: '2-digit' }) // Default Month-Year
        }

        filteredTransactions.forEach(t => {
            const key = getKey(t.startDate)
            if (!dataMap[key]) dataMap[key] = { name: key, revenue: 0, expense: 0 }
            dataMap[key].revenue += Number(t.total) || 0
        })

        filteredMaintenance.forEach(m => {
            const key = getKey(m.date)
            let cost = 0
            if (m.amountPaid !== undefined && m.amountPaid !== '') cost = parseFloat(m.amountPaid)
            else if (m.paymentStatus === 'Paid' || !m.paymentStatus) cost = parseFloat(m.amount) || 0

            if (!dataMap[key]) dataMap[key] = { name: key, revenue: 0, expense: 0 }
            dataMap[key].expense += cost
        })

        // Sort by date roughly
        return Object.values(dataMap).sort((a, b) => {
            // Heuristic sort: try to parse date name
            const dA = new Date(a.name)
            const dB = new Date(b.name)
            if (!isNaN(dA) && !isNaN(dB)) return dA - dB
            return 0
        })
    }, [filteredTransactions, filteredMaintenance, timeRange])


    // --- 4. Car Performance Analysis ---
    const carPerformance = cars.map(car => {
        const carTrans = transactions.filter(t => t.carId === car.id && t.status !== 'Cancelled')
        const carMaint = maintenanceRecords.filter(m => m.carId === car.id)

        const rev = carTrans.reduce((acc, t) => acc + (Number(t.total) || 0), 0)
        const trips = carTrans.length

        const cost = carMaint.reduce((acc, r) => {
            let c = 0
            if (r.paymentStatus === 'Paid' || !r.paymentStatus) c = parseFloat(r.amount) || 0
            return acc + c
        }, 0)

        const profit = rev - cost
        return { ...car, revenue: rev, cost, profit, trips }
    }).sort((a, b) => b.profit - a.profit).slice(0, 5) // Top 5

    return (
        <div className="space-y-8 p-1">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Executive Dashboard</h2>
                    <p className="text-muted-foreground">Overview of your company's financial health and fleet performance.</p>
                </div>
                <div className="flex bg-muted p-1 rounded-lg">
                    {['week', 'month', 'year', 'all'].map(range => (
                        <button
                            key={range}
                            onClick={() => setTimeRange(range)}
                            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${timeRange === range ? 'bg-background shadow text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            {range.charAt(0).toUpperCase() + range.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Key Metrics Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                        <Wallet className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">₹{totalRevenue.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground flex items-center mt-1">
                            From {filteredTransactions.length} completed rentals
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Maintenance Costs</CardTitle>
                        <Wrench className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">₹{totalMaintenanceCost.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground flex items-center mt-1">
                            {filteredMaintenance.length} service records
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className={`text-2xl font-bold ${netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            ₹{netProfit.toLocaleString()}
                        </div>
                        <div className="flex items-center text-xs mt-1">
                            {netProfit >= 0 ? <TrendingUp className="h-3 w-3 mr-1 text-green-600" /> : <TrendingDown className="h-3 w-3 mr-1 text-red-600" />}
                            <span className="text-muted-foreground">{profitMargin}% margin</span>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Fleet</CardTitle>
                        <Car className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{fleetStatusData.find(f => f.name === 'On Rent')?.value || 0}</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Cars currently on the road
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Charts Row */}
            <div className="grid gap-4 md:grid-cols-7">
                {/* Financial Chart */}
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Financial Performance</CardTitle>
                        <CardDescription>Revenue vs Expenses analysis</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-0">
                        <div style={{ width: '100%', height: 350 }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={financialChartData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                    <XAxis
                                        dataKey="name"
                                        stroke="#888888"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                    />
                                    <YAxis
                                        stroke="#888888"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                        tickFormatter={(value) => `₹${value}`}
                                    />
                                    <Tooltip
                                        cursor={{ fill: 'rgba(0,0,0,0.05)' }}
                                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    />
                                    <Legend />
                                    <Bar dataKey="revenue" name="Revenue" fill="#10b981" radius={[4, 4, 0, 0]} />
                                    <Bar dataKey="expense" name="Expenses" fill="#ef4444" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Fleet Details / Pie Chart */}
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Fleet Status</CardTitle>
                        <CardDescription>Current distribution of assets</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[250px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={fleetStatusData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {fleetStatusData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend verticalAlign="bottom" height={36} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                            {fleetStatusData.map((status) => (
                                <div key={status.name} className="flex flex-col">
                                    <span className="text-2xl font-bold" style={{ color: status.color }}>{status.value}</span>
                                    <span className="text-xs text-muted-foreground">{status.name}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Top Cars Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Top Performing Assets</CardTitle>
                    <CardDescription>Highest profit generating vehicles (Total Lifetime)</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {carPerformance.map((car, idx) => (
                            <div key={car.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted font-bold">
                                        #{idx + 1}
                                    </div>
                                    <div className="h-12 w-16 overflow-hidden rounded bg-muted">
                                        {car.image ? (
                                            <img src={car.image} alt={car.model} className="h-full w-full object-cover" />
                                        ) : <Car className="h-full w-full p-2 text-muted-foreground" />}
                                    </div>
                                    <div>
                                        <p className="font-medium">{car.make} {car.model}</p>
                                        <p className="text-sm text-muted-foreground">{car.licensePlate || 'N/A'} • {car.trips} Trips</p>
                                    </div>
                                </div>
                                <div className="flex gap-8 text-right">
                                    <div className="hidden sm:block">
                                        <p className="text-sm font-medium text-green-600">+₹{car.revenue.toLocaleString()}</p>
                                        <p className="text-xs text-muted-foreground">Revenue</p>
                                    </div>
                                    <div className="hidden sm:block">
                                        <p className="text-sm font-medium text-red-600">-₹{car.cost.toLocaleString()}</p>
                                        <p className="text-xs text-muted-foreground">Maintenance</p>
                                    </div>
                                    <div>
                                        <p className="font-bold">₹{car.profit.toLocaleString()}</p>
                                        <p className="text-xs text-muted-foreground">Net Profit</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
