
import { useState } from 'react'
import { useDriveway } from '../context/DrivewayContext'
import { Dialog, DialogHeader, DialogTitle } from './ui/Dialog'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { Plus, MinusCircle, PlusCircle } from 'lucide-react'
import { generateId } from '../lib/utils'

export function AddDealerTransactionModal({ isOpen, onClose, dealer }) {
    const { addDealerTransaction, cars } = useDriveway()
    const [formData, setFormData] = useState({
        amount: '',
        type: 'Credit', // Credit (Green - Paid to Dealer/Dealer Earned) or Debit (Red - Deducted)
        date: new Date().toISOString().slice(0, 16),
        notes: '',
        carId: ''
    })

    const handleSubmit = () => {
        if (!formData.amount || !dealer) return

        const transaction = {
            id: generateId(),
            dealerId: dealer.id,
            ...formData,
            amount: Number(formData.amount)
        }

        addDealerTransaction(transaction)
        onClose()
        // Reset form
        setFormData({
            amount: '',
            type: 'Credit',
            date: new Date().toISOString().slice(0, 16),
            notes: '',
            carId: ''
        })
    }

    if (!dealer) return null

    return (
        <Dialog isOpen={isOpen} onClose={onClose} className="max-w-md bg-[#0c0a09] border-white/10 text-white p-0 gap-0">
            <DialogHeader className="px-6 py-4 border-b border-white/10">
                <DialogTitle className="text-lg font-bold">Add Manual Transaction</DialogTitle>
                <p className="text-xs text-slate-500">Record a credit or debit for {dealer.name}</p>
            </DialogHeader>

            <div className="p-6 space-y-4">
                {/* Type Selection */}
                <div className="grid grid-cols-2 gap-3">
                    <button
                        className={`flex flex-col items-center justify-center p-3 rounded border ${formData.type === 'Credit'
                            ? 'bg-green-500/10 border-green-500 text-green-500'
                            : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                            } transition-colors`}
                        onClick={() => setFormData({ ...formData, type: 'Credit' })}
                    >
                        <PlusCircle className="h-6 w-6 mb-2" />
                        <span className="font-bold text-sm">Credit (Add)</span>
                    </button>
                    <button
                        className={`flex flex-col items-center justify-center p-3 rounded border ${formData.type === 'Debit'
                            ? 'bg-red-500/10 border-red-500 text-red-500'
                            : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                            } transition-colors`}
                        onClick={() => setFormData({ ...formData, type: 'Debit' })}
                    >
                        <MinusCircle className="h-6 w-6 mb-2" />
                        <span className="font-bold text-sm">Debit (Deduct)</span>
                    </button>
                </div>

                <div className="space-y-1">
                    <label className="text-xs text-slate-400">Amount</label>
                    <div className="relative">
                        <span className="absolute left-3 top-2.5 text-slate-500">₹</span>
                        <Input
                            type="number"
                            className="pl-8 bg-white/5 border-white/10"
                            placeholder="0.00"
                            value={formData.amount}
                            onChange={e => setFormData({ ...formData, amount: e.target.value })}
                        />
                    </div>
                </div>

                <div className="space-y-1">
                    <label className="text-xs text-slate-400">Date</label>
                    <Input
                        type="datetime-local"
                        className="bg-white/5 border-white/10"
                        value={formData.date}
                        onChange={e => setFormData({ ...formData, date: e.target.value })}
                    />
                </div>

                <div className="space-y-1">
                    <label className="text-xs text-slate-400">Related Car (Optional)</label>
                    <select
                        className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                        value={formData.carId}
                        onChange={e => setFormData({ ...formData, carId: e.target.value })}
                    >
                        <option value="" className="bg-[#0c0a09]">No Car Associated</option>
                        {cars.map(car => (
                            <option key={car.id} value={car.id} className="bg-[#0c0a09]">
                                {car.make} {car.model} ({car.plateNumber})
                            </option>
                        ))}
                    </select>
                </div>

                <div className="space-y-1">
                    <label className="text-xs text-slate-400">Notes / Reason</label>
                    <textarea
                        className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500 min-h-[80px]"
                        placeholder="e.g. Bonus, Penalty, Setup Fee..."
                        value={formData.notes}
                        onChange={e => setFormData({ ...formData, notes: e.target.value })}
                    />
                </div>

                <Button
                    className={`w-full font-bold ${formData.type === 'Credit' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}`}
                    onClick={handleSubmit}
                    disabled={!formData.amount}
                >
                    {formData.type === 'Credit' ? 'Add Credit' : 'Deduct Amount'}
                </Button>
            </div>
        </Dialog>
    )
}
