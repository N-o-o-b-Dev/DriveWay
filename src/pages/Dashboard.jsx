import { useState, useMemo } from 'react'
import { useDriveway } from '../context/DrivewayContext'
import { useAuth } from '../context/AuthContext'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Car, Wrench, DollarSign, Clock, Plus, MoreVertical, Calendar } from 'lucide-react'
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    BarChart, Bar, Cell
} from 'recharts'
import { useNavigate } from 'react-router-dom'
import { GlobalRentalDrawer } from '../components/GlobalRentalDrawer'

// Mock Data for Charts (since we might not have enough real historical data for a pretty curve)
// In a real app, this would be derived from `transactions`
const revenueData = [
    { name: 'Week 1', value: 4000 },
    { name: 'Week 2', value: 3000 },
    { name: 'Week 3', value: 5000 },
    { name: 'Week 4', value: 2780 },
    { name: 'Week 5', value: 1890 },
    { name: 'Week 6', value: 2390 },
    { name: 'Week 7', value: 3490 },
];

// --- Utilization Data (Real) ---
export function Dashboard() {
    const { cars, transactions, customers, maintenanceRecords } = useDriveway()
    const { currentUser } = useAuth()
    const navigate = useNavigate()
    const [isRentalDrawerOpen, setIsRentalDrawerOpen] = useState(false)
    const [timeRange, setTimeRange] = useState('Last 30 Days')

    const availableCars = cars.filter(c => c.status === 'Available').length
    const totalCars = cars.length

    // "Upcoming" definition: Active or Reserved status AND start date is in the future
    const upcomingRentalsCount = transactions.filter(t => (t.status === 'Active' || t.status === 'Reserved') && new Date(t.startDate) > new Date()).length

    // Total Revenue (Simple sum of all completed/active transactions)
    const totalRevenue = transactions.reduce((acc, t) => acc + (Number(t.total) || 0), 0)

    // Maintenance count
    const maintenanceCount = cars.filter(c => c.status === 'Maintenance' || c.status === 'On Maintenance').length

    // Group active rentals by Car Make
    // Group active rentals by Car Make
    const utilizationData = useMemo(() => {
        const activeTx = transactions.filter(t => t.status === 'Active')
        const makeCounts = {}

        if (activeTx.length === 0) {
            // Fallback to showing fleet composition if no active rentals, or just empty
            // Let's show Fleet Composition by Make if no rentals, so chart isn't empty?
            // User asked for "Utilization", so 0 is accurate.
            // But let's show "Most Popular Brands" based on ALL active/completed transactions for better visuals if empty?
            // Let's stick to "Active Rentals" for true utilization.
        }

        activeTx.forEach(t => {
            const car = cars.find(c => c.id === t.carId)
            if (car && car.make) {
                makeCounts[car.make] = (makeCounts[car.make] || 0) + 1
            }
        })

        // Format for Chart
        // If data is empty, maybe show 0 for top makes?
        if (Object.keys(makeCounts).length === 0) {
            // Return dummy "No Data" or just empty
            return []
        }

        return Object.entries(makeCounts).map(([name, value]) => ({
            name,
            value,
            color: '#ef4444' // Keep red theme
        })).sort((a, b) => b.value - a.value).slice(0, 5) // Top 5
    }, [transactions, cars])

    const utilizationPercentage = useMemo(() => {
        if (totalCars === 0) return 0;
        const activeCount = transactions.filter(t => t.status === 'Active').length;
        return Math.round((activeCount / totalCars) * 100);
    }, [transactions, totalCars]);

    // --- Table Data Preparation ---
    const combinedRentals = useMemo(() => {
        // Filter for active or upcoming
        const activeOrUpcoming = transactions.filter(t => t.status !== 'Cancelled' && t.status !== 'Completed')

        return activeOrUpcoming.map(t => {
            const car = cars.find(c => c.id === t.carId)
            const customer = customers.find(c => c.id === t.customerId)
            return {
                id: t.id,
                carModel: car ? `${car.make} ${car.model}` : 'Unknown Car',
                carPlate: car?.plateNumber || '---',
                carImage: car?.image,
                customerName: customer?.name || 'Unknown',
                customerImage: customer?.image, // Assuming we have this
                startDate: new Date(t.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                endDate: new Date(t.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                status: t.status,
                amount: t.total
            }
        }).slice(0, 5) // Show top 5
    }, [transactions, cars, customers])

    return (
        <div className="space-y-8 pb-8">
            {/* ... Header & Stats Cards (Unchanged) ... */}

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Good Morning, {currentUser?.displayName?.split(' ')[0] || 'Alex'}</h1>
                    <p className="text-muted-foreground mt-1">Here's your fleet performance overview for today.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" onClick={() => setIsRentalDrawerOpen(true)}>
                        <Plus className="mr-2 h-4 w-4" /> New Booking
                    </Button>
                    <Button variant="destructive" onClick={() => navigate('/cars')}>
                        <Car className="mr-2 h-4 w-4" /> Add New Car
                    </Button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {/* Available Cars */}
                <Card className="bg-[#1c1917] border-0 text-white relative overflow-hidden">
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-gray-400">Available Cars</p>
                                <div className="mt-2 flex items-baseline gap-1">
                                    <span className="text-3xl font-bold">{availableCars}</span>
                                    <span className="text-sm text-gray-400">/{totalCars}</span>
                                </div>
                                <p className="text-xs text-green-500 mt-2 flex items-center">
                                    <span className="mr-1">↗</span> +2 since yesterday
                                </p>
                            </div>
                            <div className="h-10 w-10 rounded-lg bg-red-900/30 flex items-center justify-center text-red-500">
                                <Car className="h-6 w-6" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Upcoming Rentals */}
                <Card className="bg-[#1c1917] border-0 text-white relative overflow-hidden">
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-gray-400">Upcoming Rentals</p>
                                <div className="mt-2 flex items-baseline gap-1">
                                    <span className="text-3xl font-bold">{upcomingRentalsCount}</span>
                                </div>
                                <p className="text-xs text-gray-400 mt-2">
                                    Scheduled for today
                                </p>
                            </div>
                            <div className="h-10 w-10 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-500">
                                <Clock className="h-6 w-6" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Total Revenue */}
                <Card className="bg-[#1c1917] border-0 text-white relative overflow-hidden">
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-gray-400">Total Revenue</p>
                                <div className="mt-2 flex items-baseline gap-1">
                                    <span className="text-3xl font-bold">₹{(totalRevenue / 1000).toFixed(1)}k</span>
                                </div>
                                <p className="text-xs text-green-500 mt-2 flex items-center">
                                    <span className="mr-1">↗</span> +12% vs last month
                                </p>
                            </div>
                            <div className="h-10 w-10 rounded-lg bg-green-900/30 flex items-center justify-center text-green-500">
                                <DollarSign className="h-6 w-6" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Maintenance */}
                <Card className="bg-[#1c1917] border-0 text-white relative overflow-hidden">
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-gray-400">Maintenance</p>
                                <div className="mt-2 flex items-baseline gap-1">
                                    <span className="text-3xl font-bold">{maintenanceCount}</span>
                                    <span className="text-sm text-gray-400 mx-1">Cars</span>
                                </div>
                                <p className="text-xs text-red-500 mt-2">
                                    Action Required
                                </p>
                            </div>
                            <div className="h-10 w-10 rounded-lg bg-orange-900/30 flex items-center justify-center text-orange-500">
                                <Wrench className="h-6 w-6" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Charts Section */}
            <div className="grid gap-4 md:grid-cols-3">
                {/* Revenue Overview Chart */}
                <Card className="md:col-span-2 bg-[#1c1917] border-0 text-white">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <div>
                            <CardTitle className="text-lg font-bold">Revenue Overview</CardTitle>
                            <p className="text-sm text-gray-400">Income vs Expenses over the last month</p>
                        </div>
                        <select
                            className="bg-[#292524] border-0 text-sm rounded-md px-3 py-1 text-gray-300 focus:ring-0"
                            value={timeRange}
                            onChange={(e) => setTimeRange(e.target.value)}
                        >
                            <option>Last 30 Days</option>
                            <option>Last 7 Days</option>
                            <option>This Year</option>
                        </select>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={revenueData}>
                                    <defs>
                                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
                                    <XAxis
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#6b7280', fontSize: 12 }}
                                        dy={10}
                                    />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#ef4444"
                                        strokeWidth={3}
                                        fillOpacity={1}
                                        fill="url(#colorRevenue)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Fleet Utilization Chart */}
                <Card className="bg-[#1c1917] border-0 text-white">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-bold">Details</CardTitle>
                        <p className="text-sm text-gray-400">Active Rentals by Make</p>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[200px] w-full mt-8">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={utilizationData} barSize={40}>
                                    <XAxis
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#6b7280', fontSize: 12 }}
                                        dy={10}
                                    />
                                    <Tooltip
                                        cursor={{ fill: 'transparent' }}
                                        contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                                    />
                                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                                        {utilizationData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="mt-6 flex items-baseline justify-center gap-2">
                            <span className="text-4xl font-bold">{utilizationPercentage}%</span>
                            <span className="text-sm text-gray-400">Total Utilization</span>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Current & Upcoming Rentals Table */}
            <Card className="bg-[#1c1917] border-0 text-white">
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle className="text-lg font-bold">Current & Upcoming Rentals</CardTitle>
                        <p className="text-sm text-gray-400">Latest fleet movements</p>
                    </div>
                    <Button variant="link" className="text-red-500 hover:text-red-400" onClick={() => navigate('/transactions')}>
                        View All
                    </Button>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead>
                                <tr className="text-gray-500 border-b border-gray-800">
                                    <th className="pb-4 font-medium">VEHICLE</th>
                                    <th className="pb-4 font-medium">CUSTOMER</th>
                                    <th className="pb-4 font-medium">DATES</th>
                                    <th className="pb-4 font-medium">STATUS</th>
                                    <th className="pb-4 font-medium">AMOUNT</th>
                                    <th className="pb-4 font-medium">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {combinedRentals.map((rental) => (
                                    <tr key={rental.id} className="border-b border-gray-800 last:border-0 hover:bg-white/5 transition-colors">
                                        <td className="py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-14 rounded bg-gray-700 overflow-hidden">
                                                    {rental.carImage ? (
                                                        <img src={rental.carImage} alt="" className="h-full w-full object-cover" />
                                                    ) : (
                                                        <div className="h-full w-full flex items-center justify-center text-gray-500"><Car size={16} /></div>
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="font-bold">{rental.carModel}</p>
                                                    <p className="text-xs text-gray-500">{rental.carPlate}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="h-8 w-8 rounded-full bg-gray-700 overflow-hidden">
                                                    {/* Avatar Placeholder */}
                                                    <div className="h-full w-full flex items-center justify-center text-xs font-bold text-gray-300">
                                                        {rental.customerName.charAt(0)}
                                                    </div>
                                                </div>
                                                <span className="font-medium">{rental.customerName}</span>
                                            </div>
                                        </td>
                                        <td className="py-4">
                                            <div className="flex flex-col">
                                                <span className="font-medium">{rental.startDate} - {rental.endDate}</span>
                                                <span className="text-xs text-gray-500">Duration</span>
                                            </div>
                                        </td>
                                        <td className="py-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${rental.status === 'Active' ? 'bg-blue-900/50 text-blue-400' :
                                                rental.status === 'Completed' ? 'bg-green-900/50 text-green-400' :
                                                    'bg-yellow-900/50 text-yellow-400'
                                                }`}>
                                                {rental.status}
                                            </span>
                                        </td>
                                        <td className="py-4 font-bold">
                                            ₹{rental.amount}
                                        </td>
                                        <td className="py-4">
                                            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                                                <MoreVertical size={16} />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {combinedRentals.length === 0 && (
                            <div className="text-center py-8 text-gray-500">
                                No active or upcoming rentals found.
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>

            <GlobalRentalDrawer
                isOpen={isRentalDrawerOpen}
                onClose={() => setIsRentalDrawerOpen(false)}
            />
        </div>
    )
}
