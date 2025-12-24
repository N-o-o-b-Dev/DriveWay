import { useMemo } from 'react'
import { useDriveway } from '../context/DrivewayContext'

export function useNotifications() {
    const { cars, transactions } = useDriveway()

    const notifications = useMemo(() => {
        const notifs = []
        const today = new Date()
        const sevenDaysFromNow = new Date()
        sevenDaysFromNow.setDate(today.getDate() + 7)

        // 1. Check Car Document Expiries
        cars.forEach(car => {
            const checkExpiry = (dateStr, type) => {
                if (!dateStr) return
                const expiryDate = new Date(dateStr)
                // If expiry is in the past or within next 7 days
                if (expiryDate <= sevenDaysFromNow) {
                    const daysLeft = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24))

                    let message = ''
                    if (daysLeft < 0) {
                        message = `${type} Expired on ${expiryDate.toLocaleDateString()}`
                    } else if (daysLeft === 0) {
                        message = `${type} Expires TODAY`
                    } else {
                        message = `${type} Expires in ${daysLeft} days`
                    }

                    notifs.push({
                        id: `expiry-${car.id}-${type}`,
                        type: 'expiry',
                        severity: daysLeft <= 0 ? 'destructive' : 'warning',
                        title: `${car.make} ${car.model} (${car.plateNumber})`,
                        message: message,
                        link: `/cars/${car.id}`,
                        date: dateStr // For sorting
                    })
                }
            }

            checkExpiry(car.insuranceValidTo, 'Insurance')
            checkExpiry(car.taxValidTo, 'Tax')
            checkExpiry(car.fitnessValidTo, 'Fitness')
        })

        // 2. Check Overdue Payments (> 15 days from end date)
        const fifteenDaysAgo = new Date()
        fifteenDaysAgo.setDate(today.getDate() - 15)

        transactions.forEach(t => {
            if (t.status === 'Cancelled') return

            // Calculate pending balance
            let totalPaid = 0
            if (t.payments) {
                totalPaid = t.payments.reduce((sum, p) =>
                    p.type === 'Credit' ? sum + Number(p.amount) : sum - Number(p.amount)
                    , 0)
            } else if (t.amountPaid) {
                // Fallback for migrated data
                totalPaid = Number(t.amountPaid)
            }

            const total = Number(t.total) || 0
            const pending = total - totalPaid

            if (pending > 10) { // Tolerance of 10 rs
                const endDate = new Date(t.endDate)
                if (endDate < fifteenDaysAgo) {
                    const daysOverdue = Math.floor((today - endDate) / (1000 * 60 * 60 * 24))

                    // Get car details for title
                    const car = cars.find(c => c.id === t.carId)
                    const carName = car ? `${car.make} ${car.model}` : 'Unknown Car'

                    notifs.push({
                        id: `overdue-${t.id}`,
                        type: 'payment',
                        severity: 'destructive',
                        title: `Payment Overdue: ${carName}`,
                        message: `₹${pending.toLocaleString()} pending. Due since ${daysOverdue} days.`,
                        link: `/transactions`, // Ideally open specific transaction
                        actionData: t,
                        date: t.endDate
                    })
                }
            }
        })

        // Sort by severity (destructive first) then date
        return notifs.sort((a, b) => {
            if (a.severity === b.severity) return 0
            return a.severity === 'destructive' ? -1 : 1
        })

    }, [cars, transactions])

    const unreadCount = notifications.length

    return { notifications, unreadCount }
}
