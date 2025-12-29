import { useState, useEffect } from 'react'
import { useDriveway } from '../context/DrivewayContext'
import { Dialog } from './ui/Dialog'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { Label } from './ui/Label'
import { Upload, X, Calendar as CalendarIcon, Car, Wrench, Building2, DollarSign } from 'lucide-react'
import { cn } from '../lib/utils'

export function AddMaintenanceModal({ isOpen, onClose, preselectedCarId }) {
    const { addMaintenanceRecord, cars, maintenanceRecords } = useDriveway()
    const [selectedCarId, setSelectedCarId] = useState(preselectedCarId || '')

    // Form State
    const [workshopMode, setWorkshopMode] = useState('select') // 'select' | 'new'
    const [formData, setFormData] = useState({
        workshopName: '',
        workshopDetails: '',
        phoneNumber: '',
        maintenanceType: 'Routine', // Routine, Repair, Inspection, Accident
        urgency: 'Medium', // Low, Medium, High
        amount: '',
        amountPaid: '',
        paymentStatus: 'Pending',
        date: new Date().toISOString().split('T')[0],
        returnDate: '',
        description: '',
        image: null
    })

    // Reset when opening
    useEffect(() => {
        if (isOpen) {
            setSelectedCarId(preselectedCarId || '')
            setFormData({
                workshopName: '',
                workshopDetails: '',
                phoneNumber: '',
                maintenanceType: 'Routine',
                urgency: 'Medium',
                amount: '',
                amountPaid: '',
                paymentStatus: 'Pending',
                date: new Date().toISOString().split('T')[0],
                returnDate: '',
                description: '',
                image: null
            })
            setWorkshopMode('select')
        }
    }, [isOpen, preselectedCarId])

    // Extract unique workshops
    const existingWorkshops = maintenanceRecords.reduce((acc, record) => {
        if (!acc.some(w => w.name === record.workshopName)) {
            acc.push({
                name: record.workshopName,
                details: record.workshopDetails,
                phone: record.phoneNumber
            })
        }
        return acc
    }, [])

    const handleWorkshopSelect = (name) => {
        if (name === '_NEW_') {
            setWorkshopMode('new')
            setFormData(prev => ({ ...prev, workshopName: '', workshopDetails: '', phoneNumber: '' }))
            return
        }

        const workshop = existingWorkshops.find(w => w.name === name)
        if (workshop) {
            setWorkshopMode('select')
            setFormData(prev => ({
                ...prev,
                workshopName: workshop.name,
                workshopDetails: workshop.details || '',
                phoneNumber: workshop.phone || ''
            }))
        }
    }

    const handleImageUpload = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setFormData(prev => ({ ...prev, image: reader.result }))
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!selectedCarId) return

        addMaintenanceRecord({
            ...formData,
            carId: selectedCarId,
            amount: formData.amount ? parseFloat(formData.amount) : 0,
            amountPaid: formData.amountPaid ? parseFloat(formData.amountPaid) : 0
        })
        onClose()
    }

    return (
        <Dialog
            isOpen={isOpen}
            onClose={onClose}
            className="max-w-2xl bg-[#0F0F0F] border-white/10 p-0 gap-0 overflow-hidden"
        >
            <div className="flex flex-col max-h-[90vh] w-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/5 bg-[#0F0F0F]">
                    <div>
                        <h2 className="text-xl font-bold text-white">New Maintenance Request</h2>
                        <p className="text-sm text-slate-400 mt-1">Log a new service ticket for fleet maintenance.</p>
                    </div>
                    {/* Close button is handled by Dialog generally, but keeping this for custom header look if Dialog's one is hidden/styled differently. 
                        Dialog has absolute close button. We might have double close buttons. 
                        To hide Dialog's default close button, we would need to edit Dialog or accept it. 
                        For now, keeping this one. 
                    */}
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-[#0F0F0F]">

                    {/* Row 1: Car & Type */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label className="text-slate-300 text-xs font-bold uppercase tracking-wider">Select Vehicle</Label>
                            <div className="relative">
                                <Car className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                                <select
                                    className="w-full h-10 pl-9 pr-3 bg-[#1A1A1A] border border-white/10 rounded-lg text-white text-sm focus:ring-1 focus:ring-red-500 focus:border-red-500 appearance-none"
                                    value={selectedCarId}
                                    onChange={e => setSelectedCarId(e.target.value)}
                                    disabled={!!preselectedCarId}
                                >
                                    <option value="">Choose a vehicle...</option>
                                    {cars.map(car => (
                                        <option key={car.id} value={car.id}>{car.make} {car.model} ({car.plateNumber})</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label className="text-slate-300 text-xs font-bold uppercase tracking-wider">Maintenance Type</Label>
                            <div className="relative">
                                <Wrench className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                                <select
                                    className="w-full h-10 pl-9 pr-3 bg-[#1A1A1A] border border-white/10 rounded-lg text-white text-sm focus:ring-1 focus:ring-red-500 focus:border-red-500 appearance-none"
                                    value={formData.maintenanceType}
                                    onChange={e => setFormData({ ...formData, maintenanceType: e.target.value })}
                                >
                                    <option value="Routine">Routine Maintenance</option>
                                    <option value="Repair">Repair</option>
                                    <option value="Inspection">Inspection</option>
                                    <option value="Accident">Accident/Damage</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Workshop section */}
                    <div className="space-y-4 pt-2 border-t border-white/5">
                        <div className="flex items-center justify-between">
                            <Label className="text-slate-300 text-xs font-bold uppercase tracking-wider">Workshop Details</Label>
                            {workshopMode === 'new' && (
                                <button
                                    type="button"
                                    onClick={() => { setWorkshopMode('select'); setFormData(prev => ({ ...prev, workshopName: '' })) }}
                                    className="text-xs text-red-500 hover:text-red-400"
                                >
                                    Back to Select
                                </button>
                            )}
                        </div>

                        {workshopMode === 'select' ? (
                            <div className="relative">
                                <Building2 className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                                <select
                                    className="w-full h-10 pl-9 pr-3 bg-[#1A1A1A] border border-white/10 rounded-lg text-white text-sm focus:ring-1 focus:ring-red-500 focus:border-red-500 appearance-none"
                                    value={formData.workshopName}
                                    onChange={e => handleWorkshopSelect(e.target.value)}
                                >
                                    <option value="">Select Workshop...</option>
                                    {existingWorkshops.map((w, idx) => (
                                        <option key={idx} value={w.name}>{w.name}</option>
                                    ))}
                                    <option value="_NEW_">+ Add New Workshop</option>
                                </select>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in zoom-in-95 duration-200">
                                <Input
                                    placeholder="Workshop Name"
                                    value={formData.workshopName}
                                    onChange={e => setFormData({ ...formData, workshopName: e.target.value })}
                                    className="bg-[#1A1A1A] border-white/10"
                                />
                                <Input
                                    placeholder="Phone Number"
                                    value={formData.phoneNumber}
                                    onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
                                    className="bg-[#1A1A1A] border-white/10"
                                />
                                <Input
                                    placeholder="Address / Location"
                                    value={formData.workshopDetails}
                                    onChange={e => setFormData({ ...formData, workshopDetails: e.target.value })}
                                    className="md:col-span-2 bg-[#1A1A1A] border-white/10"
                                />
                            </div>
                        )}
                    </div>

                    {/* Row 3: Dates & Urgency */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 border-t border-white/5">
                        <div className="space-y-2">
                            <Label className="text-slate-300 text-xs font-bold uppercase tracking-wider">Scheduled Date</Label>
                            <div className="relative">
                                <CalendarIcon className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                                <Input
                                    type="date"
                                    className="pl-9 bg-[#1A1A1A] border-white/10 text-white calendar-picker-indicator-white"
                                    value={formData.date}
                                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label className="text-slate-300 text-xs font-bold uppercase tracking-wider">Return Date (Opt)</Label>
                            <div className="relative">
                                <CalendarIcon className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                                <Input
                                    type="date"
                                    className="pl-9 bg-[#1A1A1A] border-white/10 text-white calendar-picker-indicator-white"
                                    value={formData.returnDate}
                                    onChange={e => setFormData({ ...formData, returnDate: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label className="text-slate-300 text-xs font-bold uppercase tracking-wider">Urgency Level</Label>
                            <div className="flex bg-[#1A1A1A] rounded-lg p-1 border border-white/10">
                                {['Low', 'Medium', 'High'].map((level) => (
                                    <button
                                        key={level}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, urgency: level })}
                                        className={cn(
                                            "flex-1 py-1.5 text-xs font-medium rounded-md transition-all",
                                            formData.urgency === level
                                                ? "bg-[#2A2A2A] text-white shadow-sm border border-white/5"
                                                : "text-slate-500 hover:text-slate-300"
                                        )}
                                    >
                                        {level}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Row 4: Financials */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 border-t border-white/5">
                        <div className="space-y-2">
                            <Label className="text-slate-300 text-xs font-bold uppercase tracking-wider">Estimated Cost</Label>
                            <div className="relative">
                                <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                                <Input
                                    type="number"
                                    placeholder="0.00"
                                    className="pl-9 bg-[#1A1A1A] border-white/10 text-white"
                                    value={formData.amount}
                                    onChange={e => setFormData({ ...formData, amount: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label className="text-slate-300 text-xs font-bold uppercase tracking-wider">Paid So Far</Label>
                            <div className="relative">
                                <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                                <Input
                                    type="number"
                                    placeholder="0.00"
                                    className="pl-9 bg-[#1A1A1A] border-white/10 text-white"
                                    value={formData.amountPaid}
                                    onChange={e => setFormData({ ...formData, amountPaid: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label className="text-slate-300 text-xs font-bold uppercase tracking-wider">Payment Status</Label>
                            <select
                                className="w-full h-10 px-3 bg-[#1A1A1A] border border-white/10 rounded-lg text-white text-sm focus:ring-1 focus:ring-red-500 focus:border-red-500 appearance-none"
                                value={formData.paymentStatus}
                                onChange={e => setFormData({ ...formData, paymentStatus: e.target.value })}
                            >
                                <option value="Pending">Pending</option>
                                <option value="Paid">Paid</option>
                                <option value="Partial">Partial</option>
                            </select>
                        </div>
                    </div>

                    {/* Row 5: Description & Image */}
                    <div className="space-y-4 pt-2 border-t border-white/5">
                        <div className="space-y-2">
                            <Label className="text-slate-300 text-xs font-bold uppercase tracking-wider">Description of Issue</Label>
                            <textarea
                                className="w-full min-h-[100px] rounded-lg border border-white/10 bg-[#1A1A1A] p-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-red-500"
                                placeholder="Please provide details about the issue or required service..."
                                value={formData.description}
                                onChange={e => setFormData({ ...formData, description: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label className="text-slate-300 text-xs font-bold uppercase tracking-wider">Receipt / Image</Label>
                            <div className="border border-dashed border-white/10 rounded-lg p-4 bg-[#1A1A1A]/50 hover:bg-[#1A1A1A] transition-colors">
                                {!formData.image ? (
                                    <div
                                        className="flex flex-col items-center justify-center cursor-pointer py-4"
                                        onClick={() => document.getElementById('modal-maintenance-image').click()}
                                    >
                                        <Upload className="h-8 w-8 text-slate-500 mb-2" />
                                        <span className="text-sm text-slate-400">Click to upload image</span>
                                    </div>
                                ) : (
                                    <div className="relative h-40 w-full rounded-md overflow-hidden group">
                                        <img src={formData.image} alt="Preview" className="h-full w-full object-cover" />
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button
                                                type="button"
                                                onClick={() => setFormData({ ...formData, image: null })}
                                                className="text-white bg-red-600 px-3 py-1 rounded-full text-xs"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                )}
                                <input
                                    id="modal-maintenance-image"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleImageUpload}
                                />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer */}
                <div className="p-6 border-t border-white/5 flex items-center justify-end gap-3 bg-[#0F0F0F] rounded-b-xl">
                    <Button
                        variant="outline"
                        onClick={onClose}
                        className="bg-transparent border-white/10 text-white hover:bg-white/5"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        className="bg-red-600 hover:bg-red-700 text-white min-w-[140px]"
                        disabled={!selectedCarId || !formData.workshopName}
                    >
                        Save Request
                    </Button>
                </div>
            </div>
        </Dialog>
    )
}
