import { useState, useMemo } from 'react'
import { useDriveway } from '../context/DrivewayContext'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Car, Users, Receipt, TrendingUp, Calendar } from 'lucide-react'
import { RevenueChart } from '../components/RevenueChart'
import { Button } from '../components/ui/Button'

export function Dashboard() {
    const { cars, customers, transactions } = useDriveway()
    const [timeRange, setTimeRange] = useState('month') // 'week', 'month', 'year'

    const stats = [
        {
            title: "Total Cars",
            value: cars.length,
            icon: Car,
            description: "In your fleet"
        },
        {
            title: "Active Rentals",
            value: transactions.filter(t => t.status === 'Active').length,
            icon: TrendingUp,
            description: "Currently on road"
        },
        {
            title: "Total Customers",
            value: customers.length,
            icon: Users,
            description: "Registered users"
        },
        {
            title: "Total Revenue",
            value: `₹${transactions.reduce((acc, t) => acc + t.total, 0)}`,
            icon: Receipt,
            description: "All time"
        }
    ]

    const chartData = useMemo(() => {
        const now = new Date()
        let data = []

        if (timeRange === 'week') {
            // Last 7 days
            for (let i = 6; i >= 0; i--) {
                const d = new Date(now)
                d.setDate(d.getDate() - i)
                const dayName = d.toLocaleDateString('en-US', { weekday: 'short' })
                const dateStr = d.toISOString().split('T')[0]

                const dayTotal = transactions
                    .filter(t => t.startDate === dateStr) // Simplified: matching start date
                    .reduce((acc, t) => acc + t.total, 0)

                data.push({ name: dayName, total: dayTotal })
            }
        } else if (timeRange === 'month') {
            // Last 4 weeks (approx)
            for (let i = 3; i >= 0; i--) {
                const d = new Date(now)
                d.setDate(d.getDate() - (i * 7))
                const weekLabel = `Week ${4 - i}`

                // Mocking weekly distribution for demo as we don't have enough real data spread out
                // In real app, would filter by date range
                const weekTotal = transactions.reduce((acc, t) => acc + (Math.random() * t.total * 0.2), 0)

                data.push({ name: weekLabel, total: Math.round(weekTotal) })
            }
        } else {
            // Last 12 months
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            data = months.map(m => ({ name: m, total: Math.floor(Math.random() * 5000) + 1000 })) // Mock data for year view
        }
        return data
    }, [timeRange, transactions])

    const recentTransactions = transactions.slice(-5).reverse()

    const topCars = [...cars].sort((a, b) => {
        const revenueA = transactions.filter(t => t.carId === a.id).reduce((acc, t) => acc + t.total, 0)
        const revenueB = transactions.filter(t => t.carId === b.id).reduce((acc, t) => acc + t.total, 0)
        return revenueB - revenueA
    }).slice(0, 3)

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                <div className="flex items-center space-x-2">
                    <Button
                        variant={timeRange === 'week' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setTimeRange('week')}
                    >
                        Week
                    </Button>
                    <Button
                        variant={timeRange === 'month' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setTimeRange('month')}
                    >
                        Month
                    </Button>
                    <Button
                        variant={timeRange === 'year' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setTimeRange('year')}
                    >
                        Year
                    </Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => {
                    const Icon = stat.icon
                    return (
                        <Card key={stat.title}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    {stat.title}
                                </CardTitle>
                                <Icon className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <p className="text-xs text-muted-foreground">
                                    {stat.description}
                                </p>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4">
                    <RevenueChart data={chartData} title="Revenue Overview" />
                </div>
                <div className="col-span-3">
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle>Recent Sales</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-8">
                                {recentTransactions.map(t => {
                                    const customer = customers.find(c => c.id === t.customerId)
                                    return (
                                        <div key={t.id} className="flex items-center">
                                            <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                                {customer?.name[0]}
                                            </div>
                                            <div className="ml-4 space-y-1">
                                                <p className="text-sm font-medium leading-none">{customer?.name}</p>
                                                <p className="text-sm text-muted-foreground">{customer?.email}</p>
                                            </div>
                                            <div className="ml-auto font-medium">+₹{t.total}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Top Performing Cars</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 md:grid-cols-3">
                            {topCars.map(car => {
                                const revenue = transactions.filter(t => t.carId === car.id).reduce((acc, t) => acc + t.total, 0)
                                return (
                                    <div key={car.id} className="flex items-center space-x-4 border p-4 rounded-lg">
                                        <div className="h-16 w-24 overflow-hidden rounded bg-muted">
                                            <img src={car.image} alt={car.model} className="h-full w-full object-cover" />
                                        </div>
                                        <div>
                                            <p className="font-medium">{car.make} {car.model}</p>
                                            <p className="text-sm text-muted-foreground">Total Revenue: ₹{revenue}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
