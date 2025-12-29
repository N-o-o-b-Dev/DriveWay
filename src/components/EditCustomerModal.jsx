import { useState, useEffect } from 'react'
import { useDriveway } from '../context/DrivewayContext'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { Dialog, DialogHeader, DialogTitle } from './ui/Dialog'

export function EditCustomerModal({ isOpen, onClose, customer }) {
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
        <Dialog isOpen={isOpen} onClose={onClose}>
            <DialogHeader>
                <DialogTitle>Edit Customer</DialogTitle>
            </DialogHeader>
            <div className="mt-6 max-h-[80vh] overflow-y-auto pr-2">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        placeholder="Name"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-[#292524] border-white/10 text-white"
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <Input
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                            required
                            className="bg-[#292524] border-white/10 text-white"
                        />
                        <Input
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            required
                            className="bg-[#292524] border-white/10 text-white"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Input
                            placeholder="Unique ID (e.g. LIC123)"
                            value={formData.uniqueId}
                            onChange={e => setFormData({ ...formData, uniqueId: e.target.value })}
                            className="bg-[#292524] border-white/10 text-white"
                        />
                        <Input
                            type="date"
                            placeholder="Date of Birth"
                            value={formData.dob}
                            onChange={e => setFormData({ ...formData, dob: e.target.value })}
                            className="bg-[#292524] border-white/10 text-white"
                        />
                    </div>
                    <Input
                        placeholder="Address"
                        value={formData.address}
                        onChange={e => setFormData({ ...formData, address: e.target.value })}
                        className="bg-[#292524] border-white/10 text-white"
                    />

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Assigned Dealer (Optional)</label>
                        <select
                            className="flex h-10 w-full rounded-md border border-white/10 bg-[#292524] px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                            value={formData.dealerId}
                            onChange={e => setFormData({ ...formData, dealerId: e.target.value })}
                        >
                            <option value="">None</option>
                            {dealers.map(dealer => (
                                <option key={dealer.id} value={dealer.id}>{dealer.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-white/10">
                        <h4 className="font-medium text-sm text-gray-300">Documents & Images</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-gray-400">Profile Image</label>
                                <Input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageChange('image', e)}
                                    className="cursor-pointer text-xs bg-[#292524] border-white/10 text-gray-300 file:bg-white/10 file:text-white file:border-0"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-gray-400">DL Image</label>
                                <Input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageChange('dlImage', e)}
                                    className="cursor-pointer text-xs bg-[#292524] border-white/10 text-gray-300 file:bg-white/10 file:text-white file:border-0"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-gray-400">Aadhaar Front</label>
                                <Input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageChange('aadhaarFront', e)}
                                    className="cursor-pointer text-xs bg-[#292524] border-white/10 text-gray-300 file:bg-white/10 file:text-white file:border-0"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-gray-400">Aadhaar Back</label>
                                <Input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageChange('aadhaarBack', e)}
                                    className="cursor-pointer text-xs bg-[#292524] border-white/10 text-gray-300 file:bg-white/10 file:text-white file:border-0"
                                />
                            </div>
                        </div>
                    </div>

                    {formData.image && (
                        <div className="mt-2 flex justify-center">
                            <img src={formData.image} alt="Preview" className="w-20 h-20 object-cover rounded-full border-2 border-red-500" />
                        </div>
                    )}

                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white border-0">Save Changes</Button>
                </form>
            </div>
        </Dialog>
    )
}
