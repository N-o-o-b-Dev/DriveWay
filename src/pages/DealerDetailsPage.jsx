import { useState, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDriveway } from '../context/DrivewayContext'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Input } from '../components/ui/Input'
import {
    Mail, Phone, Calendar, Car, Edit, ArrowLeft, Download, CreditCard,
    Wallet, CheckCircle, AlertCircle, Users, MapPin, Building, FileText, Search, Plus, MoreHorizontal,
    User as UserIcon, Folder
} from 'lucide-react'
import { EditTransactionModal } from '../components/EditTransactionModal'
import { cn } from '../lib/utils'

export function DealerDetailsPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { transactions, dealers, customers, cars } = useDriveway()
    const [editingTransaction, setEditingTransaction] = useState(null)

    // Derived State
    const dealer = useMemo(() => dealers.find(d => d.id === id), [dealers, id])

    // Sorted Transactions
    const dealerTransactions = useMemo(() => {
        if (!dealer) return []
        return transactions
            .filter(t => t.dealerId === dealer.id)
            .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
    }, [dealer, transactions])

    // Stats Calculations
    const stats = useMemo(() => {
        if (!dealer) return { total: 0, paid: 0, pending: 0, customers: 0 }

        const dealerTrans = dealerTransactions.filter(t => t.status !== 'Cancelled')
        const total = dealerTrans.reduce((sum, t) => sum + (Number(t.total) || 0), 0)
        const paid = dealerTrans.reduce((sum, t) => sum + (Number(t.amountPaid) || 0), 0)
        const pending = dealerTrans.reduce((sum, t) => {
            const tTotal = Number(t.total) || 0
            const tPaid = Number(t.amountPaid) || 0
            return sum + Math.max(0, tTotal - tPaid)
        }, 0)

        const uniqueCustomers = new Set(dealerTrans.map(t => t.customerId).filter(Boolean)).size

        return { total, paid, pending, customers: uniqueCustomers }
    }, [dealer, transactions])

    // Tabs / Pagination State
    const [customerPage, setCustomerPage] = useState(1)
    const [transactionPage, setTransactionPage] = useState(1)
    const ITEMS_PER_PAGE = 5

    if (!dealer) return <div className="p-8 text-white">Loading...</div>

    // Sub-components helpers
    const StatCard = ({ icon: Icon, label, value, colorClass, iconBgClass }) => (
        <Card className="bg-[#1c1917] border-white/5">
            <CardContent className="p-6 flex items-center gap-4">
                <div className={cn("h-12 w-12 rounded-xl flex items-center justify-center", iconBgClass)}>
                    <Icon className={cn("h-6 w-6", colorClass)} />
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{label}</p>
                    <h3 className="text-2xl font-black text-white">{value}</h3>
                </div>
            </CardContent>
        </Card>
    )

    const DetailItem = ({ icon: Icon, label, value, subValue }) => (
        <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-lg bg-[#292524] flex items-center justify-center shrink-0">
                <Icon className="h-5 w-5 text-gray-500" />
            </div>
            <div>
                <p className="text-xs text-gray-500 font-medium mb-0.5">{label}</p>
                <p className="text-sm font-bold text-white">{value || 'N/A'}</p>
                {subValue && <p className="text-[10px] text-gray-500 mt-1 max-w-[200px]">{subValue}</p>}
            </div>
        </div>
    )

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header Section */}
            <div className="relative">
                {/* Banner */}
                <div className="h-48 w-full bg-gradient-to-r from-gray-900 to-[#1c1917] rounded-t-2xl border-x border-t border-white/5"></div>

                {/* Profile Info */}
                <div className="bg-[#1c1917] px-8 pb-8 rounded-b-2xl border-x border-b border-white/5 -mt-1 pt-12 relative">
                    {/* Avatar */}
                    <div className="absolute -top-16 left-8 h-32 w-32 rounded-full border-4 border-[#1c1917] bg-[#292524] flex items-center justify-center overflow-hidden">
                        {dealer.image ? (
                            <img src={dealer.image} alt={dealer.name} className="h-full w-full object-cover" />
                        ) : (
                            <span className="text-4xl font-bold text-gray-600">{dealer.name[0]}</span>
                        )}
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 ml-36"> {/* 36 (left-8 + w-32 - padding) approx adjustment */}
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <h1 className="text-4xl font-black text-white">{dealer.name}</h1>
                                <Badge className="bg-red-600/10 text-red-500 border-red-600/20 hover:bg-red-600/20">
                                    Personal Broker
                                </Badge>
                            </div>
                            <div className="flex items-center gap-4 text-gray-400 text-sm">
                                <span className="flex items-center gap-1">
                                    <MapPin className="h-4 w-4" />
                                    {dealer.address || 'Location Unknown'}
                                </span>
                                <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                                <span>Joined Jan 2023</span> {/* Static for now or add createdAt */}
                                <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                                <span className="flex items-center gap-1 text-yellow-500">
                                    ★ 4.9 <span className="text-gray-500">(AVG. RATING)</span>
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <Button
                                onClick={() => navigate('/dealers')}
                                variant="outline"
                                className="border-white/10 text-gray-300 hover:bg-white/5 hover:text-white"
                            >
                                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Network
                            </Button>
                            <Button variant="outline" className="border-white/10 text-gray-300 hover:bg-white/5 hover:text-white">
                                <Download className="mr-2 h-4 w-4" /> Download Report
                            </Button>
                            <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 shadow-lg shadow-red-900/20">
                                Pay Commission
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard
                    icon={Wallet}
                    label="Total Amount"
                    value={`₹${stats.total.toLocaleString()}`}
                    colorClass="text-white"
                    iconBgClass="bg-gray-800"
                />
                <StatCard
                    icon={CheckCircle}
                    label="Paid Amount"
                    value={`₹${stats.paid.toLocaleString()}`}
                    colorClass="text-green-500"
                    iconBgClass="bg-green-500/10"
                />
                <StatCard
                    icon={AlertCircle}
                    label="Pending Amount"
                    value={`₹${stats.pending.toLocaleString()}`}
                    colorClass="text-yellow-500"
                    iconBgClass="bg-yellow-500/10"
                />
                <StatCard
                    icon={Users}
                    label="Total Customers"
                    value={stats.customers}
                    colorClass="text-blue-500"
                    iconBgClass="bg-blue-500/10"
                />
            </div>

            {/* Main Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column (Sidebar) */}
                <div className="space-y-6">
                    {/* Placeholder for Left Column */}
                    {/* Personal Details */}
                    <Card className="bg-[#1c1917] border-white/5 overflow-hidden">
                        <div className="p-4 border-b border-white/5 flex items-center gap-2">
                            <UserIcon className="h-5 w-5 text-red-500" />
                            <h3 className="font-bold text-white">Personal Details</h3>
                        </div>
                        <div className="p-4 space-y-4">
                            <DetailItem icon={Calendar} label="Date of Birth" value={dealer.dob || 'Not Provided'} />
                            <DetailItem icon={Building} label="Broker License #" value={dealer.license || 'BL-CA-99821'} />
                            <DetailItem icon={FileText} label="Tax ID (Last 4)" value={dealer.pan ? `***-**-${dealer.pan.slice(-4)}` : 'Not Provided'} />
                            <DetailItem icon={Mail} label="Email Address" value={dealer.email} subValue="Optional. Defaults to Unknown@email.com if left blank." />
                            <DetailItem icon={Phone} label="Phone Number" value={dealer.phone} />
                            <DetailItem icon={MapPin} label="Address" value={dealer.address} subValue="4500 Wilshire Blvd, Suite 200, Los Angeles, CA 90010" />
                        </div>
                    </Card>

                    {/* Documents */}
                    <Card className="bg-[#1c1917] border-white/5 overflow-hidden">
                        <div className="p-4 border-b border-white/5 flex items-center gap-2">
                            <Folder className="h-5 w-5 text-red-500" />
                            <h3 className="font-bold text-white">Documents</h3>
                        </div>
                        <div className="p-4 grid grid-cols-2 gap-3">
                            {[
                                { img: dealer.proof || dealer.idFront, label: 'ID Front' },
                                { img: dealer.altProof || dealer.idBack, label: 'ID Back' },
                                { img: dealer.panImage, label: 'Tax Document' },
                                { img: dealer.shopAct, label: 'Other Doc' }
                            ].map((doc, i) => (
                                doc.img ? (
                                    <div key={i} className="group relative aspect-video bg-black/40 rounded-lg overflow-hidden border border-white/5 cursor-pointer">
                                        <img src={doc.img} alt={doc.label} className="h-full w-full object-cover opacity-75 group-hover:opacity-100 transition-opacity" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60">
                                            <span className="text-xs text-white font-medium">{doc.label}</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div key={i} className="aspect-video bg-white/5 rounded-lg flex flex-col items-center justify-center text-gray-600 border border-white/5 border-dashed">
                                        <FileText className="h-5 w-5 mb-1 opacity-50" />
                                        <span className="text-[10px]">{doc.label}</span>
                                    </div>
                                )
                            ))}
                        </div>
                    </Card>
                </div>

                {/* Right Column (Main) */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Brokered Vehicles */}
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                <Car className="h-5 w-5 text-red-500" />
                                Brokered Vehicles
                            </h3>
                            <div className="flex gap-2">
                                <Button size="icon" variant="outline" className="h-8 w-8 border-white/10"><ArrowLeft className="h-4 w-4" /></Button>
                                <Button size="icon" variant="outline" className="h-8 w-8 border-white/10"><ArrowLeft className="h-4 w-4 rotate-180" /></Button>
                            </div>
                        </div>
                        {/* Mock Carousel for now - displaying first 3 unique cars */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[...new Set(dealerTransactions.map(t => t.carId))]
                                .slice(0, 3)
                                .map(carId => {
                                    const car = cars.find(c => c.id === carId)
                                    if (!car) return null
                                    return (
                                        <div key={carId} className="aspect-[4/3] relative rounded-xl overflow-hidden group">
                                            <img src={car.image} className="h-full w-full object-cover" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-4">
                                                <Badge className="bg-green-500/20 text-green-500 border-green-500/20 w-fit mb-2 text-[10px]">
                                                    AVAILABLE
                                                </Badge>
                                                <h4 className="font-bold text-white text-sm">{car.make} {car.model}</h4>
                                                <div className="flex justify-between items-center mt-1">
                                                    <p className="text-xs text-gray-400">Rate</p>
                                                    <p className="font-bold text-white text-sm">₹{car.pricePerDay}<span className="text-[10px] font-normal text-gray-400">/day</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            {dealerTransactions.length === 0 && (
                                <p className="col-span-3 text-gray-500 text-sm">No vehicles brokered yet.</p>
                            )}
                        </div>
                    </div>

                    {/* Grid for Customers and Transactions */}
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                        {/* Associated Customers */}
                        <Card className="bg-[#1c1917] border-white/5 h-full">
                            <div className="p-6 border-b border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
                                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                    <Users className="h-5 w-5 text-red-500" />
                                    Customers
                                </h3>
                                <div className="relative w-full sm:w-auto">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                                    <Input
                                        placeholder="Search..."
                                        className="bg-[#292524] border-white/10 pl-9 h-9 text-xs text-white w-full sm:w-40"
                                    />
                                </div>
                            </div>
                            <div className="p-0 overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead className="text-xs text-gray-500 uppercase bg-[#292524] border-b border-white/5">
                                        <tr>
                                            <th className="px-4 py-3 font-medium">Customer</th>
                                            <th className="px-4 py-3 font-medium text-center">Status</th>
                                            <th className="px-4 py-3 font-medium text-right">More</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {customers.filter(c => dealerTransactions.some(t => t.customerId === c.id))
                                            .slice((customerPage - 1) * 5, customerPage * 5)
                                            .map(cust => (
                                                <tr key={cust.id} className="hover:bg-white/5 transition-colors">
                                                    <td className="px-4 py-3 font-medium text-white flex items-center gap-3">
                                                        <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                                                            {cust.name[0]}
                                                        </div>
                                                        <div className="truncate max-w-[100px]">{cust.name}</div>
                                                    </td>
                                                    <td className="px-4 py-3 text-center">
                                                        <Badge className="bg-green-500/10 text-green-500 border-green-500/20 text-[10px]">ACTIVE</Badge>
                                                    </td>
                                                    <td className="px-4 py-3 text-right">
                                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-white/10">
                                                            <MoreHorizontal className="h-4 w-4 text-gray-400" />
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                            {/* Pagination (Simplified) */}
                            <div className="p-4 border-t border-white/5 flex justify-end gap-2">
                                <Button
                                    size="sm" variant="outline"
                                    disabled={customerPage === 1}
                                    onClick={() => setCustomerPage(p => p - 1)}
                                    className="h-8 border-white/10 text-white"
                                >
                                    Prev
                                </Button>
                                <Button
                                    size="sm" variant="outline"
                                    onClick={() => setCustomerPage(p => p + 1)}
                                    className="h-8 border-white/10 text-white"
                                >
                                    Next
                                </Button>
                            </div>
                        </Card>

                        {/* Transaction History */}
                        <Card className="bg-[#1c1917] border-white/5 h-full">
                            <div className="p-6 border-b border-white/5 flex items-center gap-2">
                                <FileText className="h-5 w-5 text-red-500" />
                                <h3 className="font-bold text-white">History</h3>
                            </div>
                            <div className="p-0 overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead className="text-xs text-gray-500 uppercase bg-[#292524] border-b border-white/5">
                                        <tr>
                                            <th className="px-4 py-3 font-medium">Vehicle</th>
                                            <th className="px-4 py-3 font-medium">Amount</th>
                                            <th className="px-4 py-3 font-medium text-center">Status</th>
                                            <th className="px-4 py-3 font-medium text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {dealerTransactions
                                            .slice((transactionPage - 1) * ITEMS_PER_PAGE, transactionPage * ITEMS_PER_PAGE)
                                            .map(t => {
                                                const car = cars.find(c => c.id === t.carId)
                                                return (
                                                    <tr key={t.id} className="hover:bg-white/5 transition-colors">
                                                        <td className="px-4 py-3 font-medium text-white">
                                                            <div className="truncate max-w-[120px]">{car ? `${car.make} ${car.model}` : 'Unknown'}</div>
                                                            <div className="text-[10px] text-gray-500">{new Date(t.startDate).toLocaleDateString()}</div>
                                                        </td>
                                                        <td className="px-4 py-3 text-white font-bold">₹{Number(t.total).toLocaleString()}</td>
                                                        <td className="px-4 py-3 text-center">
                                                            <Badge className={cn(
                                                                "text-[10px]",
                                                                t.paymentStatus === 'Paid' ? "bg-green-500/10 text-green-500" :
                                                                    t.paymentStatus === 'Pending' ? "bg-yellow-500/10 text-yellow-500" : "bg-red-500/10 text-red-500"
                                                            )}>
                                                                {t.paymentStatus || 'Pending'}
                                                            </Badge>
                                                        </td>
                                                        <td className="px-4 py-3 text-right">
                                                            <Button
                                                                variant="ghost"
                                                                size="sm"
                                                                className="h-8 w-8 p-0 hover:bg-white/10"
                                                                onClick={() => setEditingTransaction(t)}
                                                            >
                                                                <MoreHorizontal className="h-4 w-4 text-gray-400" />
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            {/* Pagination (Simplified) */}
                            <div className="p-4 border-t border-white/5 flex justify-end gap-2">
                                <Button
                                    size="sm" variant="outline"
                                    disabled={transactionPage === 1}
                                    onClick={() => setTransactionPage(p => p - 1)}
                                    className="h-8 border-white/10 text-white"
                                >
                                    Prev
                                </Button>
                                <Button
                                    size="sm" variant="outline"
                                    onClick={() => setTransactionPage(p => p + 1)}
                                    className="h-8 border-white/10 text-white"
                                >
                                    Next
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div >

            <EditTransactionModal
                isOpen={!!editingTransaction}
                onClose={() => setEditingTransaction(null)}
                transaction={editingTransaction}
            />
        </div >
    )
}
