import { useState, useEffect } from 'react'
import { useDriveway } from '../context/DrivewayContext'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { Sheet, SheetHeader, SheetTitle } from './ui/Sheet'

export function EditCustomerDrawer({ isOpen, onClose, customer }) {
    const { updateCustomer, dealers } = useDriveway()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        image: '',
        uniqueId: '',
        dob: '',
        dlImage: '',
        aadhaarFront: '',
        aadhaarBack: '',
        dealerId: ''
    })

    useEffect(() => {
        if (customer) {
            setFormData({
                name: customer.name,
                email: customer.email,
                phone: customer.phone,
                address: customer.address || '',
                image: customer.image || '',
                uniqueId: customer.uniqueId || '',
                dob: customer.dob || '',
                dlImage: customer.dlImage || '',
                aadhaarFront: customer.aadhaarFront || '',
                aadhaarBack: customer.aadhaarBack || '',
                dealerId: customer.dealerId || ''
            })
        }
    }, [customer])

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
        updateCustomer(customer.id, formData)
        onClose()
    }

    return (
        <Sheet isOpen={isOpen} onClose={onClose}>
            <SheetHeader>
                <SheetTitle>Edit Customer</SheetTitle>
            </SheetHeader>
            <div className="mt-6 h-[calc(100vh-10rem)] overflow-y-auto pr-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        placeholder="Name"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <Input
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                        <Input
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            required
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Input
                            placeholder="Unique ID (e.g. LIC123)"
                            value={formData.uniqueId}
                            onChange={e => setFormData({ ...formData, uniqueId: e.target.value })}
                        />
                        <Input
                            type="date"
                            placeholder="Date of Birth"
                            value={formData.dob}
                            onChange={e => setFormData({ ...formData, dob: e.target.value })}
                        />
                    </div>
                    <Input
                        placeholder="Address"
                        value={formData.address}
                        onChange={e => setFormData({ ...formData, address: e.target.value })}
                    />

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Assigned Dealer (Optional)</label>
                        <select
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface"
                            value={formData.dealerId}
                            onChange={e => setFormData({ ...formData, dealerId: e.target.value })}
                        >
                            <option value="">None</option>
                            {dealers.map(dealer => (
                                <option key={dealer.id} value={dealer.id}>{dealer.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-4 pt-4 border-t">
                        <h4 className="font-medium text-sm">Documents & Images</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-medium">Profile Image</label>
                                <Input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageChange('image', e)}
                                    className="cursor-pointer text-xs"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium">DL Image</label>
                                <Input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageChange('dlImage', e)}
                                    className="cursor-pointer text-xs"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium">Aadhaar Front</label>
                                <Input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageChange('aadhaarFront', e)}
                                    className="cursor-pointer text-xs"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium">Aadhaar Back</label>
                                <Input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageChange('aadhaarBack', e)}
                                    className="cursor-pointer text-xs"
                                />
                            </div>
                        </div>
                    </div>

                    {formData.image && (
                        <div className="mt-2 flex justify-center">
                            <img src={formData.image} alt="Preview" className="w-20 h-20 object-cover rounded-full border-2 border-primary" />
                        </div>
                    )}

                    <Button type="submit" className="w-full">Save Changes</Button>
                </form>
            </div>
        </Sheet>
    )
}
