import { useState, useEffect } from 'react'
import { useDriveway } from '../context/DrivewayContext'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { Sheet, SheetHeader, SheetTitle } from './ui/Sheet'

export function EditWorkshopDrawer({ isOpen, onClose, workshop }) {
    const { renameWorkshop } = useDriveway()
    const [formData, setFormData] = useState({
        name: '',
        details: '',
        phoneNumber: ''
    })

    useEffect(() => {
        if (workshop) {
            setFormData({
                name: workshop.name || '',
                details: workshop.details || '',
                phoneNumber: workshop.records[0]?.phoneNumber || ''
            })
        }
    }, [workshop])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!workshop) return

        renameWorkshop(workshop.name, formData.name, formData.details, formData.phoneNumber)
        onClose()
    }

    if (!workshop) return null

    return (
        <Sheet isOpen={isOpen} onClose={onClose}>
            <SheetHeader>
                <SheetTitle>Edit Workshop</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Workshop Name</label>
                        <Input
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                        <p className="text-xs text-muted-foreground">Changes will apply to {workshop.records.length} maintenance records.</p>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Address / Details</label>
                        <Input
                            value={formData.details}
                            onChange={e => setFormData({ ...formData, details: e.target.value })}
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

                    <Button type="submit" className="w-full">
                        Update Workshop
                    </Button>
                </form>
            </div>
        </Sheet>
    )
}
