import { useState } from 'react'
import { useDriveway } from '../context/DrivewayContext'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { Dialog } from './ui/Dialog'
import { cn } from '../lib/utils'
import { X, User, CreditCard, FileText, BadgeCheck, Ban, Star } from 'lucide-react'

export function AddCustomerModal({ isOpen, onClose }) {
    const { addCustomer, dealers } = useDriveway()
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        dob: '',
        address: '',
        dealerId: '',
        status: 'Active', // Active (Regular), VIP, Blacklisted
        image: '',
        aadhaarFront: '',
        aadhaarBack: '',
        dlImage: ''
    })

    const handleImageChange = (field, e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setFormData(prev => ({ ...prev, [field]: reader.result }))
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addCustomer(formData)
        setFormData({
            name: '', phone: '', email: '', dob: '', address: '', dealerId: '',
            status: 'Active', image: '', aadhaarFront: '', aadhaarBack: '', dlImage: ''
        })
        onClose()
    }

    const StatusButton = ({ value, label, icon: Icon, activeClass }) => (
        <button
            type="button"
            onClick={() => setFormData(prev => ({ ...prev, status: value }))}
            className={cn(
                "flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md border text-xs font-medium transition-all",
                formData.status === value
                    ? cn("border-transparent", activeClass)
                    : "bg-[#292524] border-white/10 text-gray-400 hover:bg-[#3f3a38]"
            )}
        >
            <Icon className="h-3 w-3" />
            {label}
        </button>
    )

    const DocUpload = ({ label, field, icon: Icon }) => (
        <div className="relative group cursor-pointer border border-dashed border-white/10 rounded-lg p-4 bg-[#292524]/50 hover:bg-[#292524] hover:border-white/20 transition-all flex flex-col items-center justify-center gap-2 h-24">
            <input
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer"
                accept="image/*"
                onChange={(e) => handleImageChange(field, e)}
            />
            {formData[field] ? (
                <div className="absolute inset-0 p-1">
                    <img src={formData[field]} className="w-full h-full object-cover rounded" />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-xs text-white">Change</span>
                    </div>
                </div>
            ) : (
                <>
                    <Icon className="h-5 w-5 text-gray-500 group-hover:text-gray-300" />
                    <span className="text-[10px] text-gray-500 group-hover:text-gray-300">{label}</span>
                </>
            )}
        </div>
    )

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="w-full max-w-5xl bg-[#1c1917] border border-white/10 rounded-xl shadow-2xl max-h-[90vh] flex flex-col">

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/5">
                    <div>
                        <h2 className="text-xl font-bold text-white">Add New Customer</h2>
                        <p className="text-sm text-gray-400">Enter details to register a customer for rental.</p>
                    </div>
                    <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Body */}
                <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Left Column: Personal Info */}
                    <div className="space-y-6">
                        <h3 className="text-xs font-bold text-red-500 uppercase tracking-widest flex items-center gap-2">
                            <User className="h-3 w-3" /> Personal Information
                        </h3>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-xs font-medium text-gray-300">Full Name <span className="text-red-500">*</span></label>
                                <Input
                                    className="bg-[#292524] border-white/5 focus:border-red-500/50"
                                    placeholder="e.g. Rahul Sharma"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-medium text-gray-300">Phone Number <span className="text-red-500">*</span></label>
                                <Input
                                    className="bg-[#292524] border-white/5 focus:border-red-500/50"
                                    placeholder="+91 98765 43210"
                                    value={formData.phone}
                                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-xs font-medium text-gray-300">Email Address</label>
                                <Input
                                    type="email"
                                    className="bg-[#292524] border-white/5 focus:border-red-500/50"
                                    placeholder="unknown@gmail.com"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-medium text-gray-300">Date of Birth</label>
                                <Input
                                    type="date"
                                    className="bg-[#292524] border-white/5 focus:border-red-500/50 text-gray-300"
                                    value={formData.dob}
                                    onChange={e => setFormData({ ...formData, dob: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-medium text-gray-300">Full Address</label>
                            <textarea
                                className="w-full h-32 bg-[#292524] border border-white/5 rounded-md p-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500/50 resize-none"
                                placeholder="Enter complete residential address..."
                                value={formData.address}
                                onChange={e => setFormData({ ...formData, address: e.target.value })}
                            />
                        </div>
                    </div>

                    {/* Right Column: Management & Docs */}
                    <div className="space-y-6">
                        <h3 className="text-xs font-bold text-red-500 uppercase tracking-widest flex items-center gap-2">
                            <BadgeCheck className="h-3 w-3" /> Management & Docs
                        </h3>

                        <div className="bg-[#292524]/30 rounded-lg p-4 border border-white/5 space-y-4">
                            <div className="space-y-1.5">
                                <label className="text-xs font-medium text-gray-300">Assigned Dealer (Optional)</label>
                                <select
                                    className="w-full bg-[#292524] border border-white/5 rounded-md px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-red-500/50"
                                    value={formData.dealerId}
                                    onChange={e => setFormData({ ...formData, dealerId: e.target.value })}
                                >
                                    <option value="">Select a dealer</option>
                                    {dealers.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                                </select>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-medium text-gray-300">Customer Status</label>
                                <div className="flex gap-2">
                                    <StatusButton
                                        value="Active"
                                        label="Regular"
                                        icon={User}
                                        activeClass="bg-white/10 text-white border-white/20"
                                    />
                                    <StatusButton
                                        value="VIP"
                                        label="VIP"
                                        icon={Star}
                                        activeClass="bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                                    />
                                    <StatusButton
                                        value="Blacklisted"
                                        label="Blacklist"
                                        icon={Ban}
                                        activeClass="bg-red-500/20 text-red-400 border-red-500/30"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-medium text-gray-300">Documents</label>
                            <div className="grid grid-cols-2 gap-3">
                                <DocUpload label="Profile Photo" field="image" icon={User} />
                                <DocUpload label="Aadhaar Front" field="aadhaarFront" icon={CreditCard} />
                                <DocUpload label="Aadhaar Back" field="aadhaarBack" icon={CreditCard} />
                                <DocUpload label="License / Other" field="dlImage" icon={FileText} />
                            </div>
                        </div>
                    </div>

                </form>

                {/* Footer */}
                <div className="flex justify-between items-center p-6 border-t border-white/5 bg-[#292524]/30 rounded-b-xl">
                    <p className="text-xs text-red-500/80">* Required fields</p>
                    <div className="flex gap-3">
                        <Button
                            variant="ghost"
                            onClick={onClose}
                            className="text-gray-400 hover:text-white hover:bg-white/5"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleSubmit}
                            className="bg-red-600 hover:bg-red-700 text-white min-w-[140px]"
                        >
                            <FileText className="mr-2 h-4 w-4" /> Save Customer
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    )
}
