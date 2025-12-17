import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDriveway } from '../context/DrivewayContext'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Plus, Edit } from 'lucide-react'
import { EditCarDrawer } from '../components/EditCarDrawer'

export function Cars() {
    const { cars, addCar } = useDriveway()
    const [isAdding, setIsAdding] = useState(false)
    const [newCar, setNewCar] = useState({
        make: '',
        model: '',
        year: '',
        price: '',
        tenDayPrice: '',
        monthlyPrice: '',
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
    const [editingCar, setEditingCar] = useState(null)

    const handleImageChange = (field, e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setNewCar(prev => ({ ...prev, [field]: reader.result }))
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (cars.some(car => car.plateNumber === newCar.plateNumber)) {
            alert('A car with this Plate Number already exists!')
            return
        }
        addCar({ ...newCar, status: 'Available' })
        setIsAdding(false)
        setNewCar({
            make: '', model: '', year: '', price: '', tenDayPrice: '', monthlyPrice: '', plateNumber: '', image: '',
            color: '', mileage: '', fuelType: 'Petrol', fitnessValidTo: '', taxValidTo: '', insuranceValidTo: '', description: '',
            rcImage: '', insuranceImage: '', pocImage: ''
        })
    }

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Cars</h2>
                <Button onClick={() => setIsAdding(!isAdding)}>
                    <Plus className="mr-2 h-4 w-4" /> Add Car
                </Button>
            </div>

            {isAdding && (
                <Card className="max-w-4xl mx-auto">
                    <CardHeader>
                        <CardTitle>Add New Car</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <Input
                                    placeholder="Make"
                                    value={newCar.make}
                                    onChange={e => setNewCar({ ...newCar, make: e.target.value })}
                                    required
                                />
                                <Input
                                    placeholder="Model"
                                    value={newCar.model}
                                    onChange={e => setNewCar({ ...newCar, model: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Input
                                    type="number"
                                    placeholder="Year"
                                    value={newCar.year}
                                    onChange={e => setNewCar({ ...newCar, year: e.target.value })}
                                    required
                                />
                                <Input
                                    placeholder="Plate Number"
                                    value={newCar.plateNumber}
                                    onChange={e => setNewCar({ ...newCar, plateNumber: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Input
                                    placeholder="Color"
                                    value={newCar.color}
                                    onChange={e => setNewCar({ ...newCar, color: e.target.value })}
                                />
                                <Input
                                    placeholder="Mileage"
                                    value={newCar.mileage}
                                    onChange={e => setNewCar({ ...newCar, mileage: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Fuel Type</label>
                                <select
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface"
                                    value={newCar.fuelType}
                                    onChange={e => setNewCar({ ...newCar, fuelType: e.target.value })}
                                >
                                    <option value="Petrol">Petrol</option>
                                    <option value="Diesel">Diesel</option>
                                    <option value="Electric">Electric</option>
                                    <option value="Hybrid">Hybrid</option>
                                    <option value="CNG">CNG</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <Input
                                    type="number"
                                    placeholder="Daily Price"
                                    value={newCar.price}
                                    onChange={e => setNewCar({ ...newCar, price: e.target.value })}
                                    required
                                />
                                <Input
                                    type="number"
                                    placeholder="10 Days Price"
                                    value={newCar.tenDayPrice}
                                    onChange={e => setNewCar({ ...newCar, tenDayPrice: e.target.value })}
                                />
                                <Input
                                    type="number"
                                    placeholder="Monthly Price"
                                    value={newCar.monthlyPrice}
                                    onChange={e => setNewCar({ ...newCar, monthlyPrice: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Validity Dates</label>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-xs text-muted-foreground">Fitness</label>
                                        <Input
                                            type="date"
                                            value={newCar.fitnessValidTo}
                                            onChange={e => setNewCar({ ...newCar, fitnessValidTo: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs text-muted-foreground">Tax</label>
                                        <Input
                                            type="date"
                                            value={newCar.taxValidTo}
                                            onChange={e => setNewCar({ ...newCar, taxValidTo: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs text-muted-foreground">Insurance</label>
                                        <Input
                                            type="date"
                                            value={newCar.insuranceValidTo}
                                            onChange={e => setNewCar({ ...newCar, insuranceValidTo: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Description</label>
                                <textarea
                                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface"
                                    placeholder="Car description..."
                                    value={newCar.description}
                                    onChange={e => setNewCar({ ...newCar, description: e.target.value })}
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
                            <Button type="submit" className="w-full">Save Car</Button>
                        </form>
                    </CardContent>
                </Card>
            )}

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {cars.map((car) => (
                    <div key={car.id} className="relative group">
                        <Link to={`/cars/${car.id}`}>
                            <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                                <div className="aspect-video w-full overflow-hidden">
                                    <img
                                        src={car.image}
                                        alt={`${car.make} ${car.model}`}
                                        className="h-full w-full object-cover transition-transform hover:scale-105"
                                    />
                                </div>
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="font-bold text-xl">{car.make} {car.model}</h3>
                                            <p className="text-muted-foreground">{car.year} • {car.plateNumber}</p>
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${car.status === 'Available' ? 'bg-green-100 text-green-800' :
                                            car.status === 'On Rent' ? 'bg-blue-100 text-blue-800' :
                                                car.status === 'On Maintenance' ? 'bg-orange-100 text-orange-800' :
                                                    'bg-yellow-100 text-yellow-800'
                                            }`}>
                                            {car.status}
                                        </span>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-lg font-bold text-primary">₹{car.price}<span className="text-sm font-normal text-muted-foreground">/day</span></p>
                                        {car.monthlyPrice && (
                                            <p className="text-sm text-muted-foreground">₹{car.monthlyPrice}/month</p>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                        <Button
                            variant="secondary"
                            size="icon"
                            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                            onClick={(e) => {
                                e.preventDefault()
                                setEditingCar(car)
                            }}
                        >
                            <Edit className="h-4 w-4" />
                        </Button>
                    </div>
                ))}
            </div>

            <EditCarDrawer
                isOpen={!!editingCar}
                onClose={() => setEditingCar(null)}
                car={editingCar}
            />
        </div>
    )
}
