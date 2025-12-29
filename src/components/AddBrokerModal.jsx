import { useState } from 'react'
import { Dialog, DialogHeader, DialogTitle } from './ui/Dialog'
import { Input } from './ui/Input'
import { Button } from './ui/Button'
import { Camera, Mail, Phone, MapPin, Upload, X, FileText, Calendar, Wallet } from 'lucide-react'
import { cn } from '../lib/utils'

export function AddBrokerModal({ isOpen, onClose, onAdd }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        dob: '',
        image: '',
        idFront: '',
        idBack: '',
        otherDoc: '' // prompt mentioned "other document"
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
        onAdd(formData)
        setFormData({
            name: '', email: '', phone: '', address: '', dob: '',
            image: '', idFront: '', idBack: '', otherDoc: ''
        })
    }

    return (
        <Dialog isOpen={isOpen} onClose={onClose} className="sm:max-w-[800px] p-0 overflow-hidden bg-[#1c1917] border-white/10 text-white">
            <div className="flex flex-col h-full max-h-[90vh]">

                {/* Header */}
                <div className="px-6 py-4 border-b border-white/10 flex justify-between items-center bg-[#1c1917]">
                    <div>
                        <h2 className="text-xl font-bold text-white">Add New Personal Broker</h2>
                        <p className="text-sm text-gray-400">Enter broker details and upload verification documents.</p>
                    </div>
                    {/* Close button is handled by Dialog but consistent header is nice */}
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-6 space-y-8 animate-in fade-in zoom-in-95 duration-200">
                    <form id="add-broker-form" onSubmit={handleSubmit} className="space-y-8">

                        {/* Top Section: Profile Image + Basic Info */}
                        <div className="flex flex-col md:flex-row gap-8">
                            {/* Left: Profile Image */}
                            <div className="flex flex-col items-center gap-3">
                                <div className="relative group">
                                    <div className="h-32 w-32 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center bg-[#292524] overflow-hidden group-hover:border-white/40 transition-colors">
                                        {formData.image ? (
                                            <img src={formData.image} alt="Profile" className="h-full w-full object-cover" />
                                        ) : (
                                            <Camera className="h-8 w-8 text-gray-500" />
                                        )}
                                    </div>
                                    <label className="absolute bottom-0 right-0 p-2 bg-red-600 rounded-full cursor-pointer hover:bg-red-700 transition-colors shadow-lg">
                                        <Upload className="h-4 w-4 text-white" />
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={(e) => handleImageChange('image', e)}
                                        />
                                    </label>
                                </div>
                                <p className="text-xs text-gray-400 font-medium">Upload Profile Picture</p>
                            </div>

                            {/* Right: Form Fields */}
                            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 flex items-center gap-1">Full Name <span className="text-red-500">*</span></label>
                                    <Input
                                        placeholder="e.g. John Doe"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        className="bg-[#292524] border-white/10 text-white placeholder:text-gray-600 focus:border-red-500/50 focus:ring-red-500/20"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 flex items-center gap-1">Date of Birth <span className="text-red-500">*</span></label>
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                                        <Input
                                            type="date"
                                            value={formData.dob}
                                            onChange={e => setFormData({ ...formData, dob: e.target.value })}
                                            className="bg-[#292524] border-white/10 text-white pl-9 appearance-none [&::-webkit-calendar-picker-indicator]:invert"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 flex items-center gap-1">Phone Number <span className="text-red-500">*</span></label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                                        <Input
                                            placeholder="+1 (555) 000-0000"
                                            value={formData.phone}
                                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                            required
                                            className="bg-[#292524] border-white/10 text-white pl-9"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                                        <Input
                                            type="email"
                                            placeholder="broker@example.com"
                                            value={formData.email}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            className="bg-[#292524] border-white/10 text-white pl-9"
                                        />
                                    </div>
                                    <p className="text-[10px] text-gray-500">Optional. Defaults to Unknown@email.com if left blank.</p>
                                </div>

                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-xs font-bold text-gray-400 flex items-center gap-1">Full Address <span className="text-red-500">*</span></label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                                        <Input
                                            placeholder="Street address, City, State, Zip Code"
                                            value={formData.address}
                                            onChange={e => setFormData({ ...formData, address: e.target.value })}
                                            className="bg-[#292524] border-white/10 text-white pl-9"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Middle Section: Government ID */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold text-white flex items-center gap-2">
                                <Wallet className="h-4 w-4 text-red-500" />
                                Government Identification
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Front ID */}
                                <div className="relative group">
                                    <div className="h-32 rounded-xl border-2 border-dashed border-white/10 bg-[#292524]/50 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-white/30 hover:bg-[#292524] transition-all">
                                        {formData.idFront ? (
                                            <div className="relative w-full h-full p-2">
                                                <img src={formData.idFront} className="w-full h-full object-contain rounded-lg" />
                                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                                                    <Upload className="h-6 w-6 text-white" />
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center">
                                                    <FileText className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <div className="text-center">
                                                    <p className="text-sm font-medium text-white">Upload ID Front</p>
                                                    <p className="text-xs text-gray-500">Driver's License, Aadhaar, etc.</p>
                                                </div>
                                            </>
                                        )}
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            onChange={(e) => handleImageChange('idFront', e)}
                                        />
                                    </div>
                                </div>

                                {/* Back ID */}
                                <div className="relative group">
                                    <div className="h-32 rounded-xl border-2 border-dashed border-white/10 bg-[#292524]/50 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-white/30 hover:bg-[#292524] transition-all">
                                        {formData.idBack ? (
                                            <div className="relative w-full h-full p-2">
                                                <img src={formData.idBack} className="w-full h-full object-contain rounded-lg" />
                                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                                                    <Upload className="h-6 w-6 text-white" />
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center">
                                                    <FileText className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <div className="text-center">
                                                    <p className="text-sm font-medium text-white">Upload ID Back</p>
                                                    <p className="text-xs text-gray-500">Document back side (Optional)</p>
                                                </div>
                                            </>
                                        )}
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            onChange={(e) => handleImageChange('idBack', e)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Admin Settings (Placeholder as per UI image, kept minimal) */}
                        <div className="space-y-4 pt-4 border-t border-white/5">
                            <h3 className="text-sm font-bold text-white flex items-center gap-2 text-gray-500">
                                <div className="h-4 w-4 rounded bg-red-600/20 flex items-center justify-center">
                                    <span className="text-[10px] text-red-500 font-bold">A</span>
                                </div>
                                Administrative Settings
                            </h3>
                        </div>

                    </form>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-white/10 bg-[#1c1917] flex justify-end gap-3">
                    <Button
                        type="button"
                        variant="ghost"
                        onClick={onClose}
                        className="text-gray-400 hover:text-white hover:bg-white/5"
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        form="add-broker-form"
                        className="bg-red-600 hover:bg-red-700 text-white font-bold px-6"
                    >
                        Create Broker Profile
                    </Button>
                </div>
            </div>
        </Dialog>
    )
}
