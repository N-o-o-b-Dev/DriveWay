import { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card'
import { Input } from '../../components/ui/Input'
import { Button } from '../../components/ui/Button'
import { ArrowLeft, Save } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function BillingSettings() {
    const navigate = useNavigate()
    const [settings, setSettings] = useState({
        shopName: '',
        email: '',
        phone: '',
        address: '',
        website: ''
    })

    useEffect(() => {
        const stored = localStorage.getItem('driveway_shop_settings')
        if (stored) {
            setSettings(JSON.parse(stored))
        }
    }, [])

    const handleSave = () => {
        localStorage.setItem('driveway_shop_settings', JSON.stringify(settings))
        alert('Settings Saved Successfully!')
    }

    return (
        <div className="space-y-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" onClick={() => navigate('/billing')}>
                    <ArrowLeft className="h-5 w-5" />
                </Button>
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Billing Settings</h2>
                    <p className="text-muted-foreground">Configure your shop details for invoices.</p>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Business Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Business / Shop Name</label>
                        <Input
                            value={settings.shopName}
                            onChange={e => setSettings({ ...settings, shopName: e.target.value })}
                            placeholder="e.g. DriveWay Rentals"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email</label>
                            <Input
                                value={settings.email}
                                onChange={e => setSettings({ ...settings, email: e.target.value })}
                                placeholder="billing@example.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Phone</label>
                            <Input
                                value={settings.phone}
                                onChange={e => setSettings({ ...settings, phone: e.target.value })}
                                placeholder="+91 98765 43210"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Address</label>
                        <Input
                            value={settings.address}
                            onChange={e => setSettings({ ...settings, address: e.target.value })}
                            placeholder="Shop 123, Main Street, City"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Website</label>
                        <Input
                            value={settings.website}
                            onChange={e => setSettings({ ...settings, website: e.target.value })}
                            placeholder="www.yourwebsite.com"
                        />
                    </div>
                    <div className="pt-4">
                        <Button onClick={handleSave} className="w-full bg-red-600 hover:bg-red-700 text-white">
                            <Save className="mr-2 h-4 w-4" /> Save Configuration
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
