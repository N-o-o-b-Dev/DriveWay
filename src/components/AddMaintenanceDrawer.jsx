import { useState } from 'react'
import { useDriveway } from '../context/DrivewayContext'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { Sheet, SheetHeader, SheetTitle } from './ui/Sheet'
import { Upload } from 'lucide-react'

export function AddMaintenanceDrawer({ isOpen, onClose, carId }) {
    const { addMaintenanceRecord, cars, maintenanceRecords } = useDriveway()
    const [selectedCarId, setSelectedCarId] = useState(carId || '')
    const [useExistingWorkshop, setUseExistingWorkshop] = useState(false)
    const [formData, setFormData] = useState({
        workshopName: '',
        workshopDetails: '',
        phoneNumber: '',
        amount: '',
        amountPaid: '',
        date: '',
        returnDate: '',
        paymentStatus: 'Paid',
        description: '',
        image: null
    })

    // Extract unique workshops from existing records
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
        const workshop = existingWorkshops.find(w => w.name === name)
        if (workshop) {
            setFormData(prev => ({
                ...prev,
                workshopName: workshop.name,
                workshopDetails: workshop.details || '',
                phoneNumber: workshop.phone || ''
            }))
        } else {
            // Clearing selection
            setFormData(prev => ({
                ...prev,
                workshopName: '',
                workshopDetails: '',
                phoneNumber: ''
            }))
        }
    }

    const handleImageUpload = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setFormData({ ...formData, image: reader.result })
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const finalCarId = carId || selectedCarId
        if (!finalCarId) return

        addMaintenanceRecord({
            ...formData,
            carId: finalCarId,
            amount: formData.amount ? parseFloat(formData.amount) : 0,
            amountPaid: formData.amountPaid ? parseFloat(formData.amountPaid) : 0
        })
        onClose()
        setFormData({
            workshopName: '',
            workshopDetails: '',
            phoneNumber: '',
            amount: '',
            amountPaid: '',
            date: '',
            returnDate: '',
            paymentStatus: 'Paid',
            description: '',
            image: null
        })
        if (!carId) setSelectedCarId('')
        setUseExistingWorkshop(false)
    }

    return (
        <Sheet isOpen={isOpen} onClose={onClose}>
            <SheetHeader>
                <SheetTitle>Add Maintenance Record</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                    {!carId && (
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Select Car</label>
                            <select
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface"
                                value={selectedCarId}
                                onChange={e => setSelectedCarId(e.target.value)}
                                required
                            >
                                <option value="">Select a car...</option>
                                {cars.map(car => (
                                    <option key={car.id} value={car.id}>{car.make} {car.model} ({car.licensePlate || 'No Plate'})</option>
                                ))}
                            </select>
                        </div>
                    )}

                    {/* Workshop Selection Toggle */}
                    <div className="flex items-center space-x-2 mb-2">
                        <input
                            type="checkbox"
                            id="useExisting"
                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                            checked={useExistingWorkshop}
                            onChange={(e) => setUseExistingWorkshop(e.target.checked)}
                        />
                        <label htmlFor="useExisting" className="text-sm font-medium">Select from Existing Workshops</label>
                    </div>

                    {useExistingWorkshop ? (
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Select Workshop</label>
                            <select
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface"
                                value={formData.workshopName}
                                onChange={e => handleWorkshopSelect(e.target.value)}
                                required
                            >
                                <option value="">Select a workshop...</option>
                                {existingWorkshops.map((w, idx) => (
                                    <option key={idx} value={w.name}>{w.name}</option>
                                ))}
                            </select>
                        </div>
                    ) : (
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Workshop Name</label>
                            <Input
                                value={formData.workshopName}
                                onChange={e => setFormData({ ...formData, workshopName: e.target.value })}
                                required
                                placeholder="Enter new workshop name"
                            />
                        </div>
                    )}

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Workshop Address</label>
                        <Input
                            value={formData.workshopDetails}
                            onChange={e => setFormData({ ...formData, workshopDetails: e.target.value })}
                            required
                            readOnly={useExistingWorkshop} // Read-only if selected from existing
                            className={useExistingWorkshop ? "bg-muted text-muted-foreground" : ""}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Phone Number</label>
                        <Input
                            value={formData.phoneNumber}
                            onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
                            placeholder="Optional"
                            readOnly={useExistingWorkshop} // Read-only if selected from existing
                            className={useExistingWorkshop ? "bg-muted text-muted-foreground" : ""}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Total Amount</label>
                            <Input
                                type="number"
                                value={formData.amount}
                                onChange={e => setFormData({ ...formData, amount: e.target.value })}
                                placeholder="Total Bill"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Amount Paid</label>
                            <Input
                                type="number"
                                value={formData.amountPaid}
                                onChange={e => setFormData({ ...formData, amountPaid: e.target.value })}
                                placeholder="Paid so far"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Payment Status</label>
                            <select
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface"
                                value={formData.paymentStatus}
                                onChange={e => setFormData({ ...formData, paymentStatus: e.target.value })}
                            >
                                <option value="Paid">Paid</option>
                                <option value="Pending">Pending</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Date</label>
                            <Input
                                type="date"
                                value={formData.date}
                                onChange={e => setFormData({ ...formData, date: e.target.value })}
                                required
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Return Date (Optional)</label>
                        <Input
                            type="date"
                            value={formData.returnDate}
                            onChange={e => setFormData({ ...formData, returnDate: e.target.value })}
                            placeholder="Select return date"
                        />
                        <p className="text-xs text-muted-foreground">Setting a return date will mark the car as Available.</p>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Description</label>
                        <textarea
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface"
                            value={formData.description}
                            onChange={e => setFormData({ ...formData, description: e.target.value })}
                            placeholder="Optional"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Receipt/Image</label>
                        <div className="flex items-center gap-4">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => document.getElementById('maintenance-image').click()}
                                className="w-full"
                            >
                                <Upload className="mr-2 h-4 w-4" /> Upload Image
                            </Button>
                            <input
                                id="maintenance-image"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageUpload}
                            />
                        </div>
                        {formData.image && (
                            <div className="mt-2 relative h-32 w-full rounded-md overflow-hidden border">
                                <img src={formData.image} alt="Preview" className="h-full w-full object-cover" />
                            </div>
                        )}
                    </div>
                    <Button type="submit" className="w-full">
                        Save Record
                    </Button>
                </form>
            </div>
        </Sheet>
    )
}
