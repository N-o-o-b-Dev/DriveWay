import { useState, useEffect } from 'react'
import { useDriveway } from '../context/DrivewayContext'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { Sheet, SheetHeader, SheetTitle } from './ui/Sheet'
import { Upload } from 'lucide-react'

export function EditMaintenanceDrawer({ isOpen, onClose, record }) {
    const { updateMaintenanceRecord } = useDriveway()
    const [formData, setFormData] = useState({
        workshopName: '',
        workshopDetails: '',
        phoneNumber: '',
        amount: '',
        amountPaid: '',
        date: '',
        date: '',
        returnDate: '',
        paymentStatus: 'Paid',
        description: '',
        image: null
    })

    useEffect(() => {
        if (record) {
            setFormData({
                workshopName: record.workshopName || '',
                workshopDetails: record.workshopDetails || '',
                phoneNumber: record.phoneNumber || '',
                amount: record.amount || '',
                amountPaid: record.amountPaid || '',
                date: record.date || '',
                returnDate: record.returnDate || '',
                paymentStatus: record.paymentStatus || 'Paid',
                description: record.description || '',
                image: record.image || null
            })
        }
    }, [record])

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
        if (!record) return

        updateMaintenanceRecord(record.id, {
            ...record,
            ...formData,
            amount: formData.amount ? parseFloat(formData.amount) : 0,
            amountPaid: formData.amountPaid ? parseFloat(formData.amountPaid) : 0
        })
        onClose()
    }

    if (!record) return null

    return (
        <Sheet isOpen={isOpen} onClose={onClose}>
            <SheetHeader>
                <SheetTitle>Edit Maintenance Record</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Workshop Name</label>
                        <Input
                            value={formData.workshopName}
                            onChange={e => setFormData({ ...formData, workshopName: e.target.value })}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Workshop Address</label>
                        <Input
                            value={formData.workshopDetails}
                            onChange={e => setFormData({ ...formData, workshopDetails: e.target.value })}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Phone Number</label>
                        <Input
                            value={formData.phoneNumber}
                            onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
                            placeholder="Optional"
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
                        <label className="text-sm font-medium">Return Date (Completion)</label>
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
                                onClick={() => document.getElementById('edit-maintenance-image').click()}
                                className="w-full"
                            >
                                <Upload className="mr-2 h-4 w-4" /> Upload Image
                            </Button>
                            <input
                                id="edit-maintenance-image"
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
                        Save Changes
                    </Button>
                </form>
            </div>
        </Sheet>
    )
}
