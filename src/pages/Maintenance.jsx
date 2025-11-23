import { useState } from 'react'
import { useDriveway } from '../context/DrivewayContext'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Wrench, MapPin, Phone, ArrowRight, Plus, Edit } from 'lucide-react'
import { WorkshopDetailsDrawer } from '../components/WorkshopDetailsDrawer'
import { AddMaintenanceDrawer } from '../components/AddMaintenanceDrawer'
import { EditMaintenanceDrawer } from '../components/EditMaintenanceDrawer'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs'

export function Maintenance() {
    const { maintenanceRecords, cars } = useDriveway()
    const [selectedWorkshop, setSelectedWorkshop] = useState(null)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [isAddMaintenanceOpen, setIsAddMaintenanceOpen] = useState(false)
    const [editingRecord, setEditingRecord] = useState(null)
    const [isEditMaintenanceOpen, setIsEditMaintenanceOpen] = useState(false)
    const [activeTab, setActiveTab] = useState("workshops")

    if (!maintenanceRecords || !cars) {
        return <div className="p-8">Loading maintenance data...</div>
    }

    // Group records by workshop
    const workshops = maintenanceRecords.reduce((acc, record) => {
        if (!acc[record.workshopName]) {
            acc[record.workshopName] = {
                name: record.workshopName,
                details: record.workshopDetails,
                totalSpent: 0,
                records: []
            }
        }
        acc[record.workshopName].totalSpent += record.amount
        acc[record.workshopName].records.push(record)
        return acc
    }, {})

    const handleViewDetails = (workshop) => {
        setSelectedWorkshop(workshop)
        setIsDrawerOpen(true)
    }

    const handleEditMaintenance = (record) => {
        setEditingRecord(record)
        setIsEditMaintenanceOpen(true)
    }

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold tracking-tight">Maintenance & Workshops</h2>
                <Button onClick={() => setIsAddMaintenanceOpen(true)}>
                    <Plus className="mr-2 h-4 w-4" /> Add Maintenance
                </Button>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
                <div className="border-b border-gray-200 dark:border-gray-800 mb-6">
                    <TabsList className="bg-transparent p-0">
                        <TabsTrigger
                            value="workshops"
                            className={`rounded-none border-b-2 px-6 py-3 ${activeTab === "workshops" ? "border-primary text-primary" : "border-transparent"}`}
                        >
                            Workshops
                        </TabsTrigger>
                        <TabsTrigger
                            value="history"
                            className={`rounded-none border-b-2 px-6 py-3 ${activeTab === "history" ? "border-primary text-primary" : "border-transparent"}`}
                        >
                            Service History
                        </TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="workshops">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {Object.values(workshops).map((workshop) => (
                            <Card key={workshop.name} className="flex flex-col">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Wrench className="h-5 w-5" />
                                        {workshop.name}
                                    </CardTitle>
                                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                                        <MapPin className="h-3 w-3" /> {workshop.details}
                                        {workshop.records[0]?.phoneNumber && (
                                            <>
                                                <span className="mx-1">•</span>
                                                <Phone className="h-3 w-3" /> {workshop.records[0].phoneNumber}
                                            </>
                                        )}
                                    </p>
                                </CardHeader>
                                <CardContent className="flex-1 flex flex-col">
                                    <div className="mb-4">
                                        <p className="text-2xl font-bold">${workshop.totalSpent}</p>
                                        <p className="text-xs text-muted-foreground">Total Spent</p>
                                    </div>
                                    <div className="space-y-3 mt-auto">
                                        <h4 className="font-medium text-sm">Recent Service History</h4>
                                        {workshop.records.slice(0, 3).map((record, idx) => {
                                            const car = cars.find(c => c.id === record.carId)
                                            return (
                                                <div key={idx} className="text-sm border-l-2 border-primary pl-3">
                                                    <p className="font-medium">{car ? `${car.make} ${car.model}` : 'Unknown Car'}</p>
                                                    <p className="text-muted-foreground text-xs">{record.date} • {record.description || 'No description'}</p>
                                                </div>
                                            )
                                        })}
                                        {workshop.records.length > 3 && (
                                            <p className="text-xs text-muted-foreground text-center">
                                                + {workshop.records.length - 3} more records
                                            </p>
                                        )}
                                        <Button
                                            variant="outline"
                                            className="w-full mt-4"
                                            onClick={() => handleViewDetails(workshop)}
                                        >
                                            View Details <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                        {Object.keys(workshops).length === 0 && (
                            <div className="col-span-full flex flex-col items-center justify-center py-12 text-muted-foreground bg-surface dark:bg-surface-dark rounded-lg border border-dashed">
                                <Wrench className="h-12 w-12 mb-4 opacity-20" />
                                <p>No maintenance records found.</p>
                                <Button variant="link" onClick={() => setIsAddMaintenanceOpen(true)}>
                                    Add your first maintenance record
                                </Button>
                            </div>
                        )}
                    </div>
                </TabsContent>

                <TabsContent value="history">
                    <div className="space-y-4">
                        {maintenanceRecords.sort((a, b) => new Date(b.date) - new Date(a.date)).map((record) => {
                            const car = cars.find(c => c.id === record.carId)
                            return (
                                <Card key={record.id}>
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2">
                                                    <h4 className="font-bold text-lg">{record.workshopName}</h4>
                                                    <span className="text-sm text-muted-foreground">• {car ? `${car.make} ${car.model}` : 'Unknown Car'}</span>
                                                </div>
                                                <p className="text-sm text-muted-foreground">{record.description || 'No description provided'}</p>
                                                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                                                    <span>{record.date}</span>
                                                    {record.returnDate && (
                                                        <>
                                                            <span>-</span>
                                                            <span>{record.returnDate}</span>
                                                        </>
                                                    )}
                                                    <span>•</span>
                                                    <span>{record.workshopDetails}</span>
                                                    {record.phoneNumber && (
                                                        <>
                                                            <span>•</span>
                                                            <span>{record.phoneNumber}</span>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="text-right flex flex-col items-end gap-2">
                                                <p className="font-bold text-xl">${record.amount}</p>
                                                <div className="flex gap-2">
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="h-8 w-8 p-0"
                                                        onClick={() => handleEditMaintenance(record)}
                                                    >
                                                        <Edit className="h-4 w-4" />
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
                        {maintenanceRecords.length === 0 && (
                            <div className="text-center py-12 text-muted-foreground">
                                No maintenance records found.
                            </div>
                        )}
                    </div>
                </TabsContent>
            </Tabs>

            <WorkshopDetailsDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                workshop={selectedWorkshop}
            />

            <AddMaintenanceDrawer
                isOpen={isAddMaintenanceOpen}
                onClose={() => setIsAddMaintenanceOpen(false)}
            />

            <EditMaintenanceDrawer
                isOpen={isEditMaintenanceOpen}
                onClose={() => setIsEditMaintenanceOpen(false)}
                record={editingRecord}
            />
        </div>
    )
}
