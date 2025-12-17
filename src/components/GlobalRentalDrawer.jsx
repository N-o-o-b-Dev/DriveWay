import { useState, useEffect } from 'react'
import { useDriveway } from '../context/DrivewayContext'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { Sheet, SheetHeader, SheetTitle } from './ui/Sheet'

export function GlobalRentalDrawer({ isOpen, onClose }) {
    const { cars, customers, dealers, addTransaction, transactions } = useDriveway()

    const [rentalData, setRentalData] = useState({
        carId: '',
        customerId: '',
        dealerId: '',
        startDate: '',
        endDate: '',
        notes: '',
        paymentStatus: 'Pending',
        dailyRate: ''
    })
    const [priceDetails, setPriceDetails] = useState({
        total: 0,
        breakdown: []
    })

    const selectedCar = cars.find(c => c.id === rentalData.carId)

    useEffect(() => {
        if (selectedCar && !rentalData.dailyRate) {
            setRentalData(prev => ({ ...prev, dailyRate: selectedCar.price }))
        }
    }, [selectedCar])

    useEffect(() => {
        if (rentalData.startDate && rentalData.endDate && selectedCar) {
            const start = new Date(rentalData.startDate)
            const end = new Date(rentalData.endDate)
            const diffTime = Math.abs(end - start)
            const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

            let price = 0
            let breakdown = []
            const currentDailyRate = rentalData.dailyRate ? parseFloat(rentalData.dailyRate) : selectedCar.price

            if (days > 0) {
                let remainingDays = days

                if (days >= 30 && selectedCar.monthlyPrice) {
                    const effectiveDailyRate = selectedCar.monthlyPrice / 30
                    price = Math.round(effectiveDailyRate * days)
                    breakdown.push({
                        label: `Monthly Rate Applied (${days} days @ ₹${Math.round(effectiveDailyRate)}/day)`,
                        amount: price
                    })
                } else if (days >= 10 && selectedCar.tenDayPrice) {
                    const effectiveDailyRate = selectedCar.tenDayPrice / 10
                    price = Math.round(effectiveDailyRate * days)
                    breakdown.push({
                        label: `10-Day Rate Applied (${days} days @ ₹${Math.round(effectiveDailyRate)}/day)`,
                        amount: price
                    })
                } else {
                    price = Math.round(currentDailyRate * days)
                    breakdown.push({
                        label: `Standard Daily Rate (${days} days @ ₹${currentDailyRate}/day)`,
                        amount: price
                    })
                }
            }
            setPriceDetails({ total: price, breakdown })
        } else {
            setPriceDetails({ total: 0, breakdown: [] })
        }
    }, [rentalData.startDate, rentalData.endDate, selectedCar, rentalData.dailyRate])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!selectedCar) return

        // Date Overlap Validation
        const newStart = new Date(rentalData.startDate)
        const newEnd = new Date(rentalData.endDate)

        const hasOverlap = transactions.some(t => {
            if (t.carId !== selectedCar.id || t.status === 'Cancelled') return false
            const existingStart = new Date(t.startDate)
            const existingEnd = new Date(t.endDate)

            return (
                (newStart >= existingStart && newStart <= existingEnd) ||
                (newEnd >= existingStart && newEnd <= existingEnd) ||
                (newStart <= existingStart && newEnd >= existingEnd)
            )
        })

        if (hasOverlap) {
            alert('This car is already rented for the selected dates!')
            return
        }

        addTransaction({
            carId: selectedCar.id,
            customerId: rentalData.customerId,
            dealerId: rentalData.dealerId ? rentalData.dealerId : null,
            startDate: rentalData.startDate,
            endDate: rentalData.endDate,
            total: priceDetails.total,
            status: 'Active',
            paymentStatus: rentalData.paymentStatus,
            notes: rentalData.notes,
            breakdown: priceDetails.breakdown,
            dailyRate: rentalData.dailyRate
        })
        onClose()
        setRentalData({ carId: '', customerId: '', dealerId: '', startDate: '', endDate: '', notes: '', paymentStatus: 'Pending', dailyRate: '' })
    }

    return (
        <Sheet isOpen={isOpen} onClose={onClose}>
            <SheetHeader>
                <SheetTitle>New Rental</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Car</label>
                        <select
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface"
                            value={rentalData.carId}
                            onChange={e => setRentalData({ ...rentalData, carId: e.target.value })}
                            required
                        >
                            <option value="">Select Car</option>
                            {cars.map(car => (
                                <option
                                    key={car.id}
                                    value={car.id}
                                    disabled={car.status === 'Maintenance' || car.status === 'Rented'}
                                >
                                    {car.make} {car.model} ({car.status})
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Customer</label>
                        <select
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface"
                            value={rentalData.customerId}
                            onChange={e => setRentalData({ ...rentalData, customerId: e.target.value })}
                            required
                        >
                            <option value="">Select Customer</option>
                            {customers.map(customer => (
                                <option key={customer.id} value={customer.id}>{customer.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Dealer (Optional)</label>
                        <select
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface"
                            value={rentalData.dealerId}
                            onChange={e => setRentalData({ ...rentalData, dealerId: e.target.value })}
                        >
                            <option value="">Select Dealer</option>
                            {dealers.map(dealer => (
                                <option key={dealer.id} value={dealer.id}>{dealer.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Start Date</label>
                            <Input
                                type="date"
                                value={rentalData.startDate}
                                onChange={e => setRentalData({ ...rentalData, startDate: e.target.value })}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">End Date</label>
                            <Input
                                type="date"
                                value={rentalData.endDate}
                                onChange={e => setRentalData({ ...rentalData, endDate: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Per Day Amount</label>
                        <Input
                            type="number"
                            value={rentalData.dailyRate}
                            onChange={e => setRentalData({ ...rentalData, dailyRate: e.target.value })}
                            placeholder="Enter daily rate"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Payment Status</label>
                        <select
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface"
                            value={rentalData.paymentStatus}
                            onChange={e => setRentalData({ ...rentalData, paymentStatus: e.target.value })}
                        >
                            <option value="Pending">Pending</option>
                            <option value="Paid">Paid</option>
                            <option value="Pay on Arrival">Pay on Arrival</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Notes</label>
                        <Input
                            placeholder="Additional notes..."
                            value={rentalData.notes}
                            onChange={e => setRentalData({ ...rentalData, notes: e.target.value })}
                        />
                    </div>

                    <div className="bg-surface dark:bg-surface-dark p-4 rounded-lg space-y-2">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">Price Breakdown</span>
                        </div>
                        {priceDetails.breakdown.length > 0 ? (
                            <div className="space-y-1">
                                {priceDetails.breakdown.map((item, index) => (
                                    <div key={index} className="flex justify-between text-sm text-muted-foreground">
                                        <span>{item.label}</span>
                                        <span>₹{item.amount}</span>
                                    </div>
                                ))}
                                <div className="border-t pt-2 mt-2 flex justify-between text-sm font-bold">
                                    <span>Total</span>
                                    <span>₹{priceDetails.total}</span>
                                </div>
                            </div>
                        ) : (
                            <p className="text-xs text-muted-foreground">Select car and dates to see price breakdown.</p>
                        )}
                    </div>

                    <Button type="submit" className="w-full">
                        Create Rental
                    </Button>
                </form>
            </div>
        </Sheet>
    )
}
