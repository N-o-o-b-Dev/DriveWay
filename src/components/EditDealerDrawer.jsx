import { useState, useEffect } from 'react'
import { useDriveway } from '../context/DrivewayContext'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { Sheet, SheetHeader, SheetTitle } from './ui/Sheet'

export function EditDealerDrawer({ isOpen, onClose, dealer }) {
    const { updateDealer } = useDriveway()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        contactPerson: '',
        pan: '',
        image: '',
        logo: '',
        shopAct: '',
        panImage: '',
        proof: '', // New
        altProof: '' // New
    })

    useEffect(() => {
        if (dealer) {
            setFormData({
                name: dealer.name || '',
                email: dealer.email || '',
                phone: dealer.phone || '',
                address: dealer.address || '',
                contactPerson: dealer.contactPerson || '',
                pan: dealer.pan || '',
                image: dealer.image || '',
                logo: dealer.logo || '',
                shopAct: dealer.shopAct || '',
                panImage: dealer.panImage || '',
                proof: dealer.proof || '',
                altProof: dealer.altProof || ''
            })
        }
    }, [dealer])

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
        updateDealer(dealer.id, formData)
        onClose()
    }

    return (
        <Sheet isOpen={isOpen} onClose={onClose}>
            <SheetHeader>
                <SheetTitle>Edit Dealer</SheetTitle>
            </SheetHeader>
            <div className="mt-6 h-[calc(100vh-10rem)] overflow-y-auto pr-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <Input
                            placeholder="Dealer Name"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                        <Input
                            placeholder="Unique ID (e.g. DLR001)"
                            value={formData.uniqueId}
                            onChange={e => setFormData({ ...formData, uniqueId: e.target.value })}
                        />
                    </div>
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
                    <Input
                        placeholder="Contact Person Name"
                        value={formData.contactPerson}
                        onChange={e => setFormData({ ...formData, contactPerson: e.target.value })}
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">PAN Number</label>
                            <Input
                                value={formData.pan}
                                onChange={e => setFormData({ ...formData, pan: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Address</label>
                            <Input
                                value={formData.address}
                                onChange={e => setFormData({ ...formData, address: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t">
                        <h4 className="font-medium text-sm">Documents & Images</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-medium">Profile Image</label>
                                <Input type="file" accept="image/*" onChange={(e) => handleImageChange('image', e)} className="text-xs" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium">Logo</label>
                                <Input type="file" accept="image/*" onChange={(e) => handleImageChange('logo', e)} className="text-xs" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium">Proof</label>
                                <Input type="file" accept="image/*" onChange={(e) => handleImageChange('proof', e)} className="text-xs" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium">Alt Proof</label>
                                <Input type="file" accept="image/*" onChange={(e) => handleImageChange('altProof', e)} className="text-xs" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium">Shop Act</label>
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleImageChange('panImage', e)}
                                className="cursor-pointer text-xs"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium">GST Certificate</label>
                                <Input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageChange('gstImage', e)}
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
                    <Button type="submit" className="w-full">
                        Save Changes
                    </Button>
                </form>
            </div>
        </Sheet>
    )
}
