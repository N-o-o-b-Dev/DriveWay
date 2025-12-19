import { useState } from 'react'
import { Sheet, SheetHeader, SheetTitle } from './ui/Sheet'
import { Card, CardContent } from './ui/Card'
import { Button } from './ui/Button'
import { MapPin, Phone, Wrench, Edit, Trash2 } from 'lucide-react'
import { useDriveway } from '../context/DrivewayContext'
import { EditMaintenanceDrawer } from './EditMaintenanceDrawer'

export function WorkshopDetailsDrawer({ isOpen, onClose, workshop }) {
    const { cars, deleteMaintenanceRecord } = useDriveway()
    const [editingRecord, setEditingRecord] = useState(null)
    const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false)

    if (!workshop) return null

    const handleEdit = (record) => {
        setEditingRecord(record)
        setIsEditDrawerOpen(true)
    }

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this maintenance record?')) {
            deleteMaintenanceRecord(id)
        }
    }

    return (
        <>
            <Sheet isOpen={isOpen} onClose={onClose}>
                <SheetHeader>
                    <SheetTitle className="flex items-center gap-2">
                        <Wrench className="h-5 w-5" />
                        {workshop.name}
                    </SheetTitle>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" /> {workshop.details}
                    </p>
                </SheetHeader>
                <div className="mt-6 space-y-6">
                    <Card>
                        <CardContent className="p-4 flex justify-between items-center">
                            <div>
                                <p className="text-sm text-muted-foreground">Total Spent</p>
                                <p className="text-2xl font-bold">₹{workshop.totalSpent}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-muted-foreground">Total Services</p>
                                <p className="text-2xl font-bold">{workshop.records.length}</p>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Service History</h3>
                        {workshop.records.map((record) => {
                            const car = cars.find(c => c.id === record.carId)
                            return (
                                <Card key={record.id}>
                                    <CardContent className="p-4">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <p className="font-medium">{car ? `${car.make} ${car.model} ` : 'Unknown Car'}</p>
                                                    <span className={`text-xs px-2 py-0.5 rounded-full ${record.paymentStatus === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                                                        {record.paymentStatus || 'Paid'}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-muted-foreground mt-1">{record.description}</p>
                                                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                                                    <span>{record.date}</span>
                                                    {record.returnDate && (
                                                        <>
                                                            <span>-</span>
                                                            <span>{record.returnDate}</span>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="text-right flex flex-col items-end gap-2">
                                                <div>
                                                    <p className="font-bold">₹{record.amount}</p>
                                                    {record.amountPaid !== undefined && record.amountPaid < record.amount && (
                                                        <p className="text-xs text-muted-foreground">Paid: ₹{record.amountPaid}</p>
                                                    )}
                                                </div>
                                                <div className="flex gap-2">
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="h-8 w-8 p-0"
                                                        onClick={() => handleEdit(record)}
                                                    >
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive"
                                                        onClick={() => handleDelete(record.id)}
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                    {record.image && (
                                                        <Button
                                                            variant="link"
                                                            size="sm"
                                                            className="h-auto p-0 text-xs"
                                                            onClick={() => {
                                                                const win = window.open();
                                                                win.document.write('<img src="' + record.image + '" style="max-width:100%;"/>');
                                                            }}
                                                        >
                                                            Receipt
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </Sheet>

            <EditMaintenanceDrawer
                isOpen={isEditDrawerOpen}
                onClose={() => setIsEditDrawerOpen(false)}
                record={editingRecord}
            />
        </>
    )
}
