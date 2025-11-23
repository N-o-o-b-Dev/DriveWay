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
        image: ''
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
                image: car.image
            })
        }
    }, [car])

    const handleImageChange = (e) => {
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
        updateCar(car.id, formData)
        onClose()
    }

    return (
        <Sheet isOpen={isOpen} onClose={onClose}>
            <SheetHeader>
                <SheetTitle>Edit Car</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
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
                    <Input
                        type="number"
                        placeholder="Year"
                        value={formData.year}
                        onChange={e => setFormData({ ...formData, year: e.target.value })}
                        required
                    />
                    <div className="grid grid-cols-3 gap-4">
                        <Input
                            type="number"
                            placeholder="Daily Price"
                            value={formData.price}
                            onChange={e => setFormData({ ...formData, price: e.target.value })}
                            required
                        />
                        <Input
                            type="number"
                            placeholder="10 Days Price"
                            value={formData.tenDayPrice}
                            onChange={e => setFormData({ ...formData, tenDayPrice: e.target.value })}
                        />
                        <Input
                            type="number"
                            placeholder="Monthly Price"
                            value={formData.monthlyPrice}
                            onChange={e => setFormData({ ...formData, monthlyPrice: e.target.value })}
                        />
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
                        <label className="text-sm font-medium">Car Image</label>
                        <Input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="cursor-pointer"
                        />
                    </div>
                    <Button type="submit" className="w-full">Save Changes</Button>
                </form>
            </div>
        </Sheet>
    )
}
