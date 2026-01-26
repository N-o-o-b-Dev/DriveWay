import { useState, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDriveway } from '../context/DrivewayContext'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge' // Assuming we have or will make a simple badge style
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs'
import {
    Calendar, Gauge, Fuel, CreditCard, Edit, Trash, Plus,
    FileCheck, ShieldCheck, AlertTriangle, Wallet, Wrench, Clock, FileText
} from 'lucide-react'
import { cn } from '../lib/utils'

// Drawers
import { EditCarDrawer } from '../components/EditCarDrawer'
import { GlobalRentalDrawer } from '../components/GlobalRentalDrawer'
import { AddMaintenanceModal } from '../components/AddMaintenanceModal'

import { DeleteConfirmDialog } from '../components/DeleteConfirmDialog'
import { TransactionDetailsModal } from '../components/TransactionDetailsModal'

export function CarDetails() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { cars, transactions, maintenanceRecords, customers, deleteCar, updateTransaction } = useDriveway()

    // Local State
    const [isEditCarOpen, setIsEditCarOpen] = useState(false)
    const [isRentModalOpen, setIsRentModalOpen] = useState(false) // Use GlobalRentalDrawer logic ideally
    const [isAddMaintenanceOpen, setIsAddMaintenanceOpen] = useState(false)
    const [editingMaintenance, setEditingMaintenance] = useState(null)
    const [activeTab, setActiveTab] = useState('rentals')
    const [viewingTransaction, setViewingTransaction] = useState(null)
    const [viewingImage, setViewingImage] = useState(null)

    const car = cars.find(c => c.id === id)

    // Derived Data
    const carTransactions = useMemo(() => {
        const all = transactions
            .filter(t => t.carId === id && t.status !== 'Cancelled')
            .map(t => {
                const customer = customers.find(c => c.id === t.customerId)
                return { ...t, customerName: customer ? customer.name : 'Unknown Customer' }
            })
            .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))

        const now = new Date()
        const upcoming = all.filter(t => new Date(t.startDate) > now)
        const past = all.filter(t => new Date(t.startDate) <= now)

        return { all, upcoming, past }
    }, [transactions, id, customers])

    const carMaintenance = useMemo(() =>
        maintenanceRecords
            .filter(m => m.carId === id)
            .sort((a, b) => new Date(b.date) - new Date(a.date)),
        [maintenanceRecords, id])

    // Financials Calculation
    const financials = useMemo(() => {
        const totalEarned = carTransactions.all.reduce((sum, t) => sum + (Number(t.total) || 0), 0)
        const totalSpent = carMaintenance.reduce((sum, m) => sum + (Number(m.amount) || 0), 0)
        const netProfit = totalEarned - totalSpent
        return { totalEarned, totalSpent, netProfit }
    }, [carTransactions.all, carMaintenance])

    // Determine which list to show
    const displayTransactions = activeTab === 'upcoming' ? carTransactions.upcoming : carTransactions.past

    if (!car) return <div className="p-8 text-center text-white">Vehicle not found.</div>

    // Helper for compliance dates
    const checkCompliance = (dateString) => {
        if (!dateString) return { status: 'Unknown', color: 'text-gray-500', bg: 'bg-gray-500/10' }
        const date = new Date(dateString)
        const today = new Date()
        const diffDays = Math.ceil((date - today) / (1000 * 60 * 60 * 24))

        if (diffDays < 0) return { status: 'Expired', label: 'Expired', color: 'text-red-500', bg: 'bg-red-500/10' }
        if (diffDays < 30) return { status: 'Expiring Soon', label: `${diffDays} Days Left`, color: 'text-orange-500', bg: 'bg-orange-500/10' }
        return { status: 'Valid', label: 'Valid', color: 'text-green-500', bg: 'bg-green-500/10' }
    }

    const insuranceStatus = checkCompliance(car.insuranceValidTo)
    const taxStatus = checkCompliance(car.taxValidTo)
    // Mock pollution cert as it might not be in schema
    const pollutionStatus = checkCompliance(car.pollutionValidTo)

    // Handle Delete
    // Handle Delete
    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this vehicle?')) {
            deleteCar(car.id)
            navigate('/cars') // Correct route
        }
    }

    const handlePaymentUpdate = (transactionId, newAmount, total) => {
        const amount = Number(newAmount)
        const status = amount >= Number(total) ? 'Paid' : 'Pending'

        // Update in Firebase
        updateTransaction(transactionId, {
            amountPaid: amount,
            paymentStatus: status
        })

        // Update local viewing state to reflect change immediately without closing
        setViewingTransaction(prev => ({
            ...prev,
            amountPaid: amount,
            paymentStatus: status
        }))
    }

    return (
        <div className="space-y-6 pb-20">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <span className="cursor-pointer hover:text-gray-300" onClick={() => navigate('/')}>Dashboard</span>
                <span>›</span>
                <span className="cursor-pointer hover:text-gray-300" onClick={() => navigate('/cars')}>Fleet</span>
                <span>›</span>
                <span className="text-white">{car.make} {car.model}</span>
            </div>

            {/* Header Actions */}
            <div className="flex justify-end gap-3">
                <Button variant="outline" className="border-white/10 text-white bg-[#1c1917] hover:bg-[#292524]" onClick={() => setIsEditCarOpen(true)}>
                    <Edit className="w-4 h-4 mr-2" /> Edit Profile
                </Button>
                <Button className="bg-red-600 hover:bg-red-700 text-white" onClick={() => setIsRentModalOpen(true)}>
                    <Plus className="w-4 h-4 mr-2" /> Book Rental
                </Button>
            </div>

            {/* Main Details Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Hero Card (Image + Overlay) */}
                <div className="lg:col-span-2 relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden group">
                    <img
                        src={car.image || 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop'}
                        alt={car.model}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                    {/* Status Pill */}
                    <div className="absolute top-4 right-4">
                        <span className={cn(
                            "px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-sm border",
                            car.status === 'Available' ? "bg-green-500/20 text-green-400 border-green-500/30" :
                                car.status === 'On Rent' ? "bg-orange-500/20 text-orange-400 border-orange-500/30" :
                                    "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                        )}>
                            ● {car.status === 'On Rent' ? 'Rented' : car.status}
                        </span>
                    </div>

                    {/* Overlay Content */}
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                        <h1 className="text-4xl font-bold text-white mb-2">{car.make} {car.model}</h1>
                        <p className="text-gray-300 max-w-xl text-sm leading-relaxed">
                            {car.description || "Premium styling with sport-tuned suspension and paddle shifters. Perfect for executive travel."}
                        </p>
                    </div>
                </div>

                {/* Financial Summary Widget */}
                <div className="flex flex-col gap-6">
                    <div className="bg-[#1c1917] border border-white/5 rounded-2xl p-6 flex flex-col justify-between flex-1">
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <div className="p-2 bg-red-600/20 rounded-full text-red-500">
                                    <Wallet className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold text-white">Financial Summary</h3>
                                <span className="ml-auto text-xs font-mono text-gray-500 bg-black/40 px-2 py-1 rounded">YTD 2024</span>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-gray-400">Total Earned</span>
                                        <span className="text-green-400 font-bold">+₹{financials.totalEarned.toLocaleString()}</span>
                                    </div>
                                    <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-green-500 h-full rounded-full" style={{ width: '75%' }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-gray-400">Total Spent</span>
                                        <span className="text-red-400 font-bold">-₹{financials.totalSpent.toLocaleString()}</span>
                                    </div>
                                    <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                                        {/* Just a visual representation, logic could be simpler */}
                                        <div className="bg-red-500 h-full rounded-full" style={{ width: '25%' }}></div>
                                    </div>
                                    <p className="text-xs text-gray-600 mt-2">Includes maintenance, insurance, and taxes.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/5">
                            <div className="flex justify-between items-end">
                                <span className="text-gray-400 font-medium">Net Profit</span>
                                <span className="text-3xl font-bold text-white">₹{financials.netProfit.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>

                    {/* Rental Rates Widget */}
                    <div className="bg-[#1c1917] border border-white/5 rounded-2xl p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <CreditCard className="w-5 h-5 text-gray-400" />
                            <h3 className="text-lg font-bold text-white">Rental Rates</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                                <span className="text-sm text-gray-400">Daily Rate</span>
                                <span className="text-lg font-bold text-white">₹{car.price}</span>
                            </div>
                            {car.tenDayPrice && (
                                <div className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                                    <span className="text-sm text-gray-400">10 Days Rate</span>
                                    <span className="text-lg font-bold text-white">₹{car.tenDayPrice}</span>
                                </div>
                            )}
                            {car.monthlyPrice && (
                                <div className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                                    <span className="text-sm text-gray-400">Monthly Rate</span>
                                    <span className="text-lg font-bold text-white">₹{car.monthlyPrice}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Spec Cards Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { label: "Plate No.", value: car.plateNumber, icon: CreditCard, color: "text-red-500" },
                    { label: "Model Year", value: car.year, icon: Calendar, color: "text-red-500" },
                    { label: "Mileage", value: `${car.mileage || 0} km`, icon: Gauge, color: "text-red-500" }, // Mock data usually in k miles in design, sticking to km
                    { label: "Fuel Type", value: car.fuelType, icon: Fuel, color: "text-red-500" },
                ].map((spec, i) => (
                    <div key={i} className="bg-[#1c1917] p-5 rounded-xl border border-white/5 flex flex-col justify-between h-24 relative overflow-hidden">
                        <div>
                            <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">{spec.label}</span>
                            <p className="text-xl font-bold text-white mt-1">{spec.value}</p>
                        </div>
                        <spec.icon className={cn("absolute bottom-4 right-4 w-5 h-5 opacity-50", spec.color)} />
                    </div>
                ))}
            </div>

            {/* Compliance Status Row */}
            <div className="bg-[#1c1917] rounded-xl border border-white/5 p-6">
                <div className="flex items-center gap-2 mb-6">
                    <ShieldCheck className="w-5 h-5 text-gray-400" />
                    <h3 className="text-lg font-bold text-white">Compliance Status</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ComplianceCard
                        title="Insurance Exp."
                        date={car.insuranceValidTo || 'N/A'}
                        status={insuranceStatus}
                        icon={ShieldCheck}
                    />
                    <ComplianceCard
                        title="Road Tax Exp."
                        date={car.taxValidTo || 'N/A'}
                        status={taxStatus}
                        icon={FileCheck}
                    />
                    {/* Placeholder for Pollution Cert */}
                    <ComplianceCard
                        title="Pollution Cert."
                        date={car.pollutionValidTo || 'N/A'}
                        status={pollutionStatus}
                        icon={AlertTriangle}
                    />
                </div>
            </div>

            {/* Vehicle Documents Section */}
            <div className="bg-[#1c1917] rounded-xl border border-white/5 p-6">
                <div className="flex items-center gap-2 mb-6">
                    <FileCheck className="w-5 h-5 text-gray-400" />
                    <h3 className="text-lg font-bold text-white">Vehicle Documents</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <DocumentCard
                        title="Registration Certificate (RC)"
                        image={car.rcImage}
                        fallback="No RC Image"
                        onView={() => setViewingImage(car.rcImage)}
                    />
                    <DocumentCard
                        title="Insurance Policy"
                        image={car.insuranceImage}
                        fallback="No Insurance Image"
                        onView={() => setViewingImage(car.insuranceImage)}
                    />
                    <DocumentCard
                        title="Pollution / POC"
                        image={car.pocImage}
                        fallback="No POC Image"
                        onView={() => setViewingImage(car.pocImage)}
                    />
                </div>
            </div>

            {/* Bottom Content: Rentals & Maintenance */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Rentals List (Left 2 cols) */}
                <div className="lg:col-span-2 bg-[#1c1917] p-6 rounded-xl border border-white/5 min-h-[400px]">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex gap-6">
                            <button
                                onClick={() => setActiveTab('rentals')}
                                className={cn("text-lg font-bold transition-colors", activeTab === 'rentals' ? "text-white" : "text-gray-600 hover:text-gray-400")}
                            >
                                Rentals
                            </button>
                            <button
                                onClick={() => setActiveTab('upcoming')}
                                className={cn("text-lg font-bold transition-colors", activeTab === 'upcoming' ? "text-white" : "text-gray-600 hover:text-gray-400")}
                            >
                                Upcoming
                            </button>
                        </div>
                        <span className="text-xs text-red-500 font-bold cursor-pointer uppercase hover:underline">View All</span>
                    </div>

                    <div className="space-y-1">
                        <div className="grid grid-cols-4 text-xs font-bold text-gray-500 uppercase tracking-wider pb-3 border-b border-white/5 px-2">
                            <div>Customer</div>
                            <div>Dates</div>
                            <div>Duration</div>
                            <div className="text-right">Amount</div>
                        </div>
                        {displayTransactions.length > 0 ? (
                            displayTransactions.map(t => (
                                <div
                                    key={t.id}
                                    className="grid grid-cols-4 items-center py-4 border-b border-white/5 last:border-0 hover:bg-white/5 px-2 rounded transition-colors group cursor-pointer"
                                    onClick={() => setViewingTransaction(t)}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold text-white">
                                            {t.customerName ? t.customerName[0] : 'U'}
                                        </div>
                                        <span className="text-sm text-gray-200 font-medium">{t.customerName || 'Unknown User'}</span>
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        {new Date(t.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {new Date(t.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                    </div>
                                    <div className="text-sm text-gray-300">
                                        {Math.ceil(Math.abs(new Date(t.endDate) - new Date(t.startDate)) / (1000 * 60 * 60 * 24))} Days
                                    </div>
                                    <div className="text-right">
                                        <span className="text-sm font-bold text-green-400">₹{t.total}</span>
                                        <span className={cn("block text-[10px] uppercase font-bold", t.status === 'Active' ? "text-blue-500" : "text-gray-600")}>{t.status}</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="py-10 text-center text-gray-500 text-sm">No rental history available.</div>
                        )}
                    </div>
                </div>

                {/* Maintenance List (Right Col) */}
                <div className="bg-[#1c1917] p-6 rounded-xl border border-white/5 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-2">
                            <Wrench className="w-4 h-4 text-gray-400" />
                            <h3 className="text-lg font-bold text-white">Maintenance</h3>
                        </div>
                        <button onClick={() => setIsAddMaintenanceOpen(true)} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 text-white">
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="space-y-6 flex-1 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
                        {carMaintenance.length > 0 ? (
                            carMaintenance.map(m => (
                                <div key={m.id} className="relative pl-6 border-l border-white/10 pb-6 last:pb-0">
                                    <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full border-2 border-[#1c1917]" style={{ backgroundColor: '#ef4444' }}></div>
                                    <h4 className="text-sm font-bold text-white">{m.description || 'Routine Service'}</h4>
                                    <p className="text-xs text-gray-500 mt-1">{new Date(m.date).toLocaleDateString()} • {m.mileageAtMaintenance || car.mileage} km</p>
                                    <div className="flex justify-between items-center mt-2">
                                        <span className="text-[10px] font-bold text-gray-600 bg-white/5 px-2 py-0.5 rounded uppercase">{m.type || 'Routine'}</span>
                                        <span className="text-sm font-bold text-red-500">-₹{m.amount}</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center text-gray-500 text-sm py-4">No maintenance records.</div>
                        )}
                    </div>
                </div>
            </div>

            {/* Transaction Details Modal */}
            <TransactionDetailsModal
                isOpen={!!viewingTransaction}
                onClose={() => setViewingTransaction(null)}
                transaction={viewingTransaction}
                car={car}
                customer={viewingTransaction ? customers.find(c => c.id === viewingTransaction.customerId) : null}
                onEdit={(t) => alert('Edit Feature Coming Soon')}
                onUpdatePayment={(amount) => handlePaymentUpdate(viewingTransaction.id, amount, viewingTransaction.total)}
            />

            {/* Modals & Drawers */}
            <EditCarDrawer
                isOpen={isEditCarOpen}
                onClose={() => setIsEditCarOpen(false)}
                car={car}
            />
            {/* Note: GlobalRentalDrawer might need preSelectedCarId prop support or use Sheet for rental form like previously */}
            {/* I will use GlobalRentalDrawer if available, assuming it handles pre-select if logic exists, otherwise falling back to custom or assuming update later. 
                 Previous file had a custom Sheet. To be safe/clean, I'll stick to GlobalRentalDrawer if imports work. */}
            <GlobalRentalDrawer
                isOpen={isRentModalOpen}
                onClose={() => setIsRentModalOpen(false)}
                preSelectedCarId={car.id}
            />

            <AddMaintenanceModal
                isOpen={isAddMaintenanceOpen}
                onClose={() => setIsAddMaintenanceOpen(false)}
                preselectedCarId={car.id}
            />
            <ImageViewer
                isOpen={!!viewingImage}
                onClose={() => setViewingImage(null)}
                src={viewingImage}
            />
        </div>
    )
}

function ComplianceCard({ title, date, status, icon: Icon }) {
    return (
        <div className="bg-[#292524] p-4 rounded-lg flex items-start justify-between">
            <div className="flex items-center gap-3">
                <div className={cn("p-2 rounded-full", status.bg)}>
                    <Icon className={cn("w-5 h-5", status.color)} />
                </div>
                <div>
                    <span className="text-xs text-gray-400 block mb-0.5">{title}</span>
                    <span className="text-white font-bold text-sm block">{date}</span>
                    <span className={cn("text-[10px] font-bold flex items-center gap-1 mt-1", status.color)}>
                        {status.status === 'Valid' ? <ShieldCheck className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                        {status.label}
                    </span>
                </div>
            </div>
            {status.status !== 'Valid' && (
                <Button size="sm" className="h-7 text-xs bg-red-600 hover:bg-red-700 text-white px-2">Renew</Button>
            )}
        </div>
    )
}

function DocumentCard({ title, image, fallback, onView }) {
    return (
        <div className="bg-[#292524] p-4 rounded-lg flex flex-col gap-3 group">
            <div className="flex justify-between items-center">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">{title}</h4>
                <div className="p-1.5 bg-white/5 rounded-full text-gray-400 group-hover:bg-white/10 group-hover:text-white transition-colors">
                    <FileText className="w-4 h-4" />
                </div>
            </div>

            <div className="aspect-video w-full bg-black/40 rounded-md overflow-hidden border border-white/5 relative">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                        onClick={onView}
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-600 gap-2">
                        <FileText className="w-8 h-8 opacity-20" />
                        <span className="text-[10px] font-medium">{fallback}</span>
                    </div>
                )}
            </div>

            {image && (
                <button
                    className="w-full py-2 text-[10px] font-bold uppercase tracking-wider bg-white/5 hover:bg-white/10 text-gray-300 rounded transition-colors"
                    onClick={onView}
                >
                    View Full Size
                </button>
            )}
        </div>
    )
}

function ImageViewer({ src, isOpen, onClose }) {
    if (!isOpen || !src) return null
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={onClose}>
            <button className="absolute top-4 right-4 text-white hover:text-gray-300 p-2" onClick={onClose}>
                <Trash className="w-6 h-6 rotate-45" /> {/* Using Trash as Close icon X equivalent or just import X */}
            </button>
            <img
                src={src}
                alt="Full Preview"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={e => e.stopPropagation()}
            />
        </div>
    )
}
