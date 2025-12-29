import { useState, useEffect } from 'react'
import { pdf } from '@react-pdf/renderer'
import InvoiceDocument from './InvoiceDocument'
import { Dialog } from './ui/Dialog'
import { Button } from './ui/Button'
import { Badge } from './ui/Badge'
import { Input } from './ui/Input'

import {
    Calendar, Clock, User, Phone, Mail, FileText,
    CreditCard, AlertTriangle, CheckCircle, X, Download, Edit2, Check
} from 'lucide-react'
import { format } from 'date-fns'

export function TransactionDetailsModal({ isOpen, onClose, transaction, car, customer, onEdit, onUpdatePayment }) {
    if (!transaction) return null

    const [isEditingPayment, setIsEditingPayment] = useState(false)
    const [editedAmount, setEditedAmount] = useState(transaction.amountPaid || '')
    const [isAddingPayment, setIsAddingPayment] = useState(false)
    const [paymentAmount, setPaymentAmount] = useState('')

    useEffect(() => {
        if (transaction) {
            setEditedAmount(transaction.amountPaid || 0)
        }
    }, [transaction])

    const handleSavePayment = () => {
        onUpdatePayment(editedAmount)
        setIsEditingPayment(false)
    }

    const startDate = new Date(transaction.startDate)
    const endDate = new Date(transaction.endDate)
    const duration = Math.ceil(Math.abs(endDate - startDate) / (1000 * 60 * 60 * 24))

    const isPaid = transaction.paymentStatus === 'Paid'
    const balanceDue = (Number(transaction.total) || 0) - (Number(transaction.amountPaid) || 0)

    const handleDownloadInvoice = async () => {
        try {
            const invoiceData = {
                invoiceId: transaction.id.slice(0, 8).toUpperCase(),
                date: new Date().toISOString(), // Invoice Date
                customerName: customer?.name || 'Guest',
                phone: customer?.phone || '',
                address: customer?.address || '',
                vehicles: [{
                    vehicleModel: `${car.make} ${car.model}`,
                    vehicleNo: car.plateNumber,
                    startDate: transaction.startDate,
                    endDate: transaction.endDate,
                    rentDays: duration,
                    ratePerDay: transaction.dailyRate || car.price
                }],
                extraCharges: [], // Add if needed
                discount: 0,
                companyInfo: {
                    name: 'DriveWay Motors',
                    address: '123 Main St, City, Country', // Ideally from config
                    phone: '+91 98765 43210'
                }
            }

            const blob = await pdf(<InvoiceDocument data={invoiceData} />).toBlob()
            const url = URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.download = `Invoice_${transaction.id}.pdf`
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        } catch (error) {
            console.error('Error generating invoice:', error)
            alert('Failed to generate invoice. Please try again.')
        }
    }

    return (
        <Dialog isOpen={isOpen} onClose={onClose} className="max-w-[800px] p-0 bg-transparent border-none shadow-none">
            <div className="bg-[#1c1917] text-white w-[800px] max-w-full rounded-xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[90vh]">
                {/* Header */}
                <div className="p-6 border-b border-white/10 flex justify-between items-start bg-[#292524]">
                    <div>
                        <h2 className="text-xl font-bold text-white">Rental Details</h2>
                        <p className="text-xs text-gray-400 mt-1">Transaction ID: #{transaction.id.slice(0, 8).toUpperCase()}</p>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-8">
                    {/* Customer Section */}
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-lg font-bold text-white shadow-lg">
                                {customer?.name?.[0] || 'G'}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">{customer?.name || 'Guest Customer'}</h3>
                                <div className="flex flex-col gap-1 mt-1">
                                    <div className="flex items-center gap-2 text-xs text-gray-400">
                                        <Phone className="w-3 h-3" />
                                        <span>{customer?.phone || 'No Phone'}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-gray-400">
                                        <Mail className="w-3 h-3" />
                                        <span>{customer?.email || 'No Email'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                            <Badge variant={transaction.status === 'Active' ? 'success' : 'secondary'} className="px-3 py-1">
                                {transaction.status} Rental
                            </Badge>
                            <button className="text-xs text-red-400 hover:text-red-300 transition-colors">
                                View Customer Profile
                            </button>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-4 gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                        <div>
                            <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold block mb-1">Start Date</span>
                            <div className="font-bold text-sm text-white">{format(startDate, 'MMM dd, yyyy')}</div>
                            <div className="text-[10px] text-gray-400">{format(startDate, 'hh:mm a')}</div>
                        </div>
                        <div>
                            <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold block mb-1">End Date</span>
                            <div className="font-bold text-sm text-white">{format(endDate, 'MMM dd, yyyy')}</div>
                            <div className="text-[10px] text-gray-400">{format(endDate, 'hh:mm a')}</div>
                        </div>
                        <div>
                            <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold block mb-1">Duration</span>
                            <div className="font-bold text-sm text-white">{duration} Days</div>
                        </div>
                        <div>
                            <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold block mb-1">Total Amount</span>
                            <div className="font-bold text-lg text-green-400">₹{transaction.total}</div>
                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${isPaid ? 'border-green-500/30 text-green-400 bg-green-500/10' : 'border-yellow-500/30 text-yellow-400 bg-yellow-500/10'}`}>
                                {isPaid ? 'FULLY PAID' : 'PENDING'}
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Column: Notes */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-red-400 mb-2">
                                <FileText className="w-4 h-4" />
                                <h4 className="text-sm font-bold uppercase tracking-wider">Booking Notes</h4>
                            </div>
                            <div className="bg-white/5 rounded-lg p-4 border border-white/5 min-h-[120px]">
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    {transaction.notes || 'No notes provided for this booking.'}
                                </p>
                            </div>

                            <div className="pt-4">
                                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Description Note</h4>
                                <textarea
                                    className="w-full bg-[#151312] border border-white/10 rounded-lg p-3 text-sm text-gray-300 focus:outline-none focus:border-red-500/50 transition-colors h-24 resize-none"
                                    placeholder="Add internal notes about this transaction here..."
                                    readOnly // For now, purely display or non-functional as requested "present in a modal"
                                />
                            </div>
                        </div>

                        {/* Right Column: Payment Details */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-red-400 mb-2">
                                <CreditCard className="w-4 h-4" />
                                <h4 className="text-sm font-bold uppercase tracking-wider">Payment Details</h4>
                            </div>

                            <div className="bg-white/5 rounded-lg p-5 border border-white/5 space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Rental Fee ({duration} days x ₹{transaction.dailyRate || car?.price})</span>
                                    <span className="text-white font-medium">₹{transaction.total}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Insurance</span>
                                    <span className="text-white font-medium">Included</span>
                                </div>
                                {/* Mocked Deposit */}
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Deposit (Refundable)</span>
                                    <span className="text-white font-medium">₹0.00</span>
                                </div>

                                <div className="h-px bg-white/10 my-2" />

                                <div className="flex justify-between text-sm font-bold">
                                    <span className="text-white">Grand Total</span>
                                    <span className="text-white">₹{transaction.total}</span>
                                </div>
                                <div className="flex justify-between text-sm items-center h-8">
                                    <span className="text-green-500">Paid</span>
                                    {isEditingPayment ? (
                                        <div className="flex items-center gap-2">
                                            <Input
                                                type="number"
                                                value={editedAmount}
                                                onChange={(e) => setEditedAmount(e.target.value)}
                                                className="w-24 h-7 bg-[#151312] border-white/10 text-right text-sm py-1 px-2"
                                            />
                                            <button onClick={handleSavePayment} className="p-1 text-green-500 hover:bg-green-500/10 rounded">
                                                <Check className="w-4 h-4" />
                                            </button>
                                            <button onClick={() => setIsEditingPayment(false)} className="p-1 text-red-400 hover:bg-red-500/10 rounded">
                                                <X className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2">
                                            <span className="text-green-500">-₹{transaction.amountPaid || 0}</span>
                                            <button
                                                onClick={() => {
                                                    setEditedAmount(transaction.amountPaid || 0)
                                                    setIsEditingPayment(true)
                                                }}
                                                className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-gray-500 hover:text-white"
                                            >
                                                <Edit2 className="w-3 h-3" />
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <div className="h-px bg-white/10 my-2" />

                                <div className="flex justify-between text-sm font-bold items-center h-8">
                                    <span className="text-red-400">Balance Due</span>
                                    {isAddingPayment ? (
                                        <div className="flex items-center gap-2">
                                            <Input
                                                type="number"
                                                value={paymentAmount}
                                                onChange={(e) => setPaymentAmount(e.target.value)}
                                                className="w-24 h-7 bg-[#151312] border-white/10 text-right text-sm py-1 px-2 text-white"
                                                placeholder="Amount"
                                            />
                                            <button
                                                onClick={() => {
                                                    const newTotal = (Number(transaction.amountPaid) || 0) + (Number(paymentAmount) || 0)
                                                    onUpdatePayment(newTotal)
                                                    setIsAddingPayment(false)
                                                }}
                                                className="p-1 text-green-500 hover:bg-green-500/10 rounded"
                                            >
                                                <Check className="w-4 h-4" />
                                            </button>
                                            <button onClick={() => setIsAddingPayment(false)} className="p-1 text-red-400 hover:bg-red-500/10 rounded">
                                                <X className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2">
                                            <span className="text-red-400">₹{Math.max(0, balanceDue)}</span>
                                            {balanceDue > 0 && (
                                                <button
                                                    onClick={() => {
                                                        setPaymentAmount(Math.max(0, balanceDue))
                                                        setIsAddingPayment(true)
                                                    }}
                                                    className="ml-2 px-2 py-0.5 text-[10px] bg-green-600 hover:bg-green-700 text-white rounded font-medium transition-colors border border-green-500/50"
                                                >
                                                    PAY NOW
                                                </button>
                                            )}
                                        </div>
                                    )}
                                </div>

                                <div className="pt-2 flex items-center gap-2 text-[10px] text-gray-500">
                                    <CreditCard className="w-3 h-3" />
                                    Payment handling via System
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-white/10 bg-[#292524] flex items-center justify-between">
                    <button
                        onClick={handleDownloadInvoice}
                        className="text-xs font-medium text-gray-400 hover:text-white flex items-center gap-2 transition-colors"
                    >
                        <Download className="w-4 h-4" />
                        Download Invoice
                    </button>
                    <div className="flex items-center gap-3">
                        <Button variant="outline" className="border-white/10 hover:bg-white/5 text-white" onClick={() => alert('Report Issue Feature Coming Soon')}>
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            Report Issue
                        </Button>
                        <Button className="bg-red-600 hover:bg-red-700 text-white border-0" onClick={() => { onClose(); onEdit(transaction); }}>
                            Manage Booking
                        </Button>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}
