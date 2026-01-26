import { useState, useEffect } from 'react'
import { useDriveway } from '../context/DrivewayContext'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { Dialog, DialogHeader, DialogTitle } from './ui/Dialog'
import { compressImage } from '../lib/imageCompression'

export function EditCarDrawer({ isOpen, onClose, car }) {
    const { updateCar } = useDriveway()
    const [formData, setFormData] = useState({
        make: '',
        model: '',
        year: '',
        price: '',
        tenDayPrice: '',
        monthlyPrice: '',
        status: '',
        plateNumber: '',
        image: '',
        color: '',
        mileage: '',
        fuelType: 'Petrol',
        pollutionValidTo: '',
        taxValidTo: '',
        insuranceValidTo: '',
        description: '',
        rcImage: '',
        insuranceImage: '',
        pocImage: ''
    })

    useEffect(() => {
        if (car && isOpen) {
            setFormData({
                make: car.make,
                model: car.model,
                year: car.year,
                price: car.price,
                tenDayPrice: car.tenDayPrice || '',
                monthlyPrice: car.monthlyPrice || '',
                status: car.status,
                plateNumber: car.plateNumber || '',
                image: car.image,
                color: car.color || '',
                mileage: car.mileage || '',
                fuelType: car.fuelType || 'Petrol',
                pollutionValidTo: car.pollutionValidTo || '',
                fitnessValidTo: car.fitnessValidTo || '', // Keep for backward compatibility if needed, but UI shows Pollution
                taxValidTo: car.taxValidTo || '',
                insuranceValidTo: car.insuranceValidTo || '',
                description: car.description || '',
                rcImage: car.rcImage || '',
                insuranceImage: car.insuranceImage || '',
                pocImage: car.pocImage || ''
            })
        }
    }, [isOpen, car]) // Keeping car in deps but adding check to avoid reset if unrelated?
    // Wait, if I keep car in deps, it still resets on car change.
    // I should strictly use [isOpen]. But I need 'car' in the effect body.
    // React linter warns if I omit 'car'.
    // Better: Use a ref to track if we started editing?
    // Or just suppress warning since we know car is stable enough or we want to ignore updates?
    // Actually, [isOpen] is enough because car is provided by parent which renders conditionally.
    // But if car updates from DB, we *don't* want to overwrite user work.
    // So [isOpen] is safer for UX.

    // Changing dependency to [isOpen] and disable lint rule for this line if needed, or just accepted.
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    useEffect(() => {
        if (car && isOpen) {
            console.log("Initializing Edit Form for:", car.id)
            setFormData({
                make: car.make || '',
                model: car.model || '',
                year: car.year || '',
                price: car.price || '',
                tenDayPrice: car.tenDayPrice || '',
                monthlyPrice: car.monthlyPrice || '',
                status: car.status || 'Available',
                plateNumber: car.plateNumber || '',
                image: car.image || '',
                color: car.color || '',
                mileage: car.mileage || '',
                fuelType: car.fuelType || 'Petrol',
                pollutionValidTo: car.pollutionValidTo || '',
                fitnessValidTo: car.fitnessValidTo || '',
                taxValidTo: car.taxValidTo || '',
                insuranceValidTo: car.insuranceValidTo || '',
                description: car.description || '',
                rcImage: car.rcImage || '',
                insuranceImage: car.insuranceImage || '',
                pocImage: car.pocImage || ''
            })
        }
    }, [isOpen])

    const handleImageChange = async (field, e) => {
        const file = e.target.files[0]
        if (file) {
            try {
                console.log(`Compressing image for ${field}...`)
                const compressedImage = await compressImage(file)
                console.log(`Image compressed for ${field}, length:`, compressedImage?.length)
                setFormData(prev => ({ ...prev, [field]: compressedImage }))
            } catch (error) {
                console.error("Error compressing image:", error)
                window.alert("Failed to process image.")
            }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log("Submitting Car Update:", car.id, formData)
            await updateCar(car.id, formData)
            // Use a small timeout to allow UI to update if needed, but alert is synchronous blocking usually.
            // Converting to a more robust notification if possible, but for now enforcing window.alert
            window.alert('Car updated successfully!')
            onClose()
        } catch (error) {
            console.error("Failed to update car:", error)
            window.alert(`Failed to update car: ${error.message}`)
        }
    }

    return (
        <Dialog isOpen={isOpen} onClose={onClose} className="max-w-3xl">
            <DialogHeader>
                <DialogTitle>Edit Car</DialogTitle>
            </DialogHeader>
            <div className="mt-4 max-h-[80vh] overflow-y-auto pr-2">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <Input
                            placeholder="Make"
                            value={formData.make}
                            onChange={e => setFormData({ ...formData, make: e.target.value })}
                            required
                        />
                        <Input
                            placeholder="Model"
                            value={formData.model}
                            onChange={e => setFormData({ ...formData, model: e.target.value })}
                            required
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Input
                            type="number"
                            placeholder="Year"
                            value={formData.year}
                            onChange={e => setFormData({ ...formData, year: e.target.value })}
                            required
                        />
                        <Input
                            placeholder="Plate Number"
                            value={formData.plateNumber}
                            onChange={e => setFormData({ ...formData, plateNumber: e.target.value })}
                            required
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Input
                            placeholder="Color"
                            value={formData.color}
                            onChange={e => setFormData({ ...formData, color: e.target.value })}
                        />
                        <Input
                            placeholder="Mileage"
                            value={formData.mileage}
                            onChange={e => setFormData({ ...formData, mileage: e.target.value })}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Fuel Type</label>
                        <select
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface"
                            value={formData.fuelType}
                            onChange={e => setFormData({ ...formData, fuelType: e.target.value })}
                        >
                            <option value="Petrol">Petrol</option>
                            <option value="Diesel">Diesel</option>
                            <option value="Electric">Electric</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="CNG">CNG</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs font-medium">Daily Rate</label>
                            <Input
                                type="number"
                                placeholder="Daily"
                                value={formData.price}
                                onChange={e => setFormData({ ...formData, price: e.target.value })}
                                required
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-medium">10 Days Rate</label>
                            <Input
                                type="number"
                                placeholder="10 Days"
                                value={formData.tenDayPrice}
                                onChange={e => setFormData({ ...formData, tenDayPrice: e.target.value })}
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-medium">Monthly Rate</label>
                            <Input
                                type="number"
                                placeholder="Monthly"
                                value={formData.monthlyPrice}
                                onChange={e => setFormData({ ...formData, monthlyPrice: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Validity Dates</label>
                        <div className="grid grid-cols-3 gap-2">
                            <div className="space-y-1">
                                <label className="text-xs text-muted-foreground">Pollution Certificate Validity</label>
                                <Input
                                    type="date"
                                    value={formData.pollutionValidTo}
                                    onChange={e => setFormData({ ...formData, pollutionValidTo: e.target.value })}
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs text-muted-foreground">Tax</label>
                                <Input
                                    type="date"
                                    value={formData.taxValidTo}
                                    onChange={e => setFormData({ ...formData, taxValidTo: e.target.value })}
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs text-muted-foreground">Insurance</label>
                                <Input
                                    type="date"
                                    value={formData.insuranceValidTo}
                                    onChange={e => setFormData({ ...formData, insuranceValidTo: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Status</label>
                        <select
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface"
                            value={formData.status}
                            onChange={e => setFormData({ ...formData, status: e.target.value })}
                        >
                            <option value="Available">Available</option>
                            <option value="Rented">Rented</option>
                            <option value="Maintenance">Maintenance</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Description</label>
                        <textarea
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface"
                            placeholder="Car description..."
                            value={formData.description}
                            onChange={e => setFormData({ ...formData, description: e.target.value })}
                        />
                    </div>

                    <div className="space-y-4 pt-4 border-t">
                        <h4 className="font-medium text-sm">Documents & Images</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-medium">Main Image</label>
                                <Input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageChange('image', e)}
                                    className="cursor-pointer text-xs"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium">RC Image</label>
                                <Input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageChange('rcImage', e)}
                                    className="cursor-pointer text-xs"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium">Insurance</label>
                                <Input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageChange('insuranceImage', e)}
                                    className="cursor-pointer text-xs"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium">POC Image</label>
                                <Input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageChange('pocImage', e)}
                                    className="cursor-pointer text-xs"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                        <Button type="button" variant="ghost" onClick={onClose}>Cancel</Button>
                        <Button type="submit">Save Changes</Button>
                    </div>
                </form>
            </div>
        </Dialog>
    )
}
