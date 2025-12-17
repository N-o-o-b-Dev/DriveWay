import { useState, useEffect } from 'react'
import { useDriveway } from '../context/DrivewayContext'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { Sheet, SheetHeader, SheetTitle } from './ui/Sheet'

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
        fitnessValidTo: '',
        taxValidTo: '',
        insuranceValidTo: '',
        description: '',
        rcImage: '',
        insuranceImage: '',
        pocImage: ''
    })

    useEffect(() => {
        if (car) {
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
                fitnessValidTo: car.fitnessValidTo || '',
                taxValidTo: car.taxValidTo || '',
                insuranceValidTo: car.insuranceValidTo || '',
                description: car.description || '',
                rcImage: car.rcImage || '',
                insuranceImage: car.insuranceImage || '',
                pocImage: car.pocImage || ''
            })
        }
    }, [car])

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
        updateCar(car.id, formData)
        onClose()
    }

    return (
        <Sheet isOpen={isOpen} onClose={onClose}>
            <SheetHeader>
                <SheetTitle>Edit Car</SheetTitle>
            </SheetHeader>
            <div className="mt-6 h-[calc(100vh-10rem)] overflow-y-auto pr-4">
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
                                <label className="text-xs text-muted-foreground">Fitness</label>
                                <Input
                                    type="date"
                                    value={formData.fitnessValidTo}
                                    onChange={e => setFormData({ ...formData, fitnessValidTo: e.target.value })}
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

                    <Button type="submit" className="w-full">Save Changes</Button>
                </form>
            </div>
        </Sheet>
    )
}
