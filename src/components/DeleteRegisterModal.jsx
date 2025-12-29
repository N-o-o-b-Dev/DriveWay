import { useState } from 'react'
import { Dialog } from './ui/Dialog'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { AlertTriangle, Trash2, Calendar, User, Car } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { cn } from '../lib/utils'

export function DeleteRegisterModal({ isOpen, onClose, onConfirm, entry }) {
    const { currentUser, login } = useAuth()
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    if (!entry) return null

    const handleSubmit = async () => {
        setError('')
        setIsDeleting(true)

        try {
            // Verify password by attempting to sign in
            await login(currentUser.email, password)

            // If successful, proceed with deletion
            await onConfirm()
            onClose()
        } catch (err) {
            console.error(err)
            setError('Incorrect password. Please try again.')
        } finally {
            setIsDeleting(false)
        }
    }

    return (
        <Dialog
            isOpen={isOpen}
            onClose={onClose}
            className="md:max-w-md p-0 overflow-hidden bg-[#1c1917] border border-red-900/40 shadow-2xl shadow-red-900/20"
            overlayClassName="backdrop-blur-sm bg-black/80"
        >
            {/* Header */}
            <div className="p-6 pb-0">
                <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
                        <AlertTriangle className="h-6 w-6 text-red-500" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-white mb-1">Delete Register Entry?</h2>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            You are about to permanently delete this register entry. This action <span className="text-red-400 font-bold">cannot be undone</span>.
                        </p>
                    </div>
                </div>
            </div>

            {/* Entry Summary Card */}
            <div className="px-6 py-6">
                <div className="bg-[#292524]/50 rounded-xl border border-white/5 p-4 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-gray-400">
                            <Car className="h-4 w-4" />
                            <span>Vehicle</span>
                        </div>
                        <span className="font-bold text-white">{entry.carMake} {entry.carModel}</span>
                    </div>
                    <div className="h-px bg-white/5" />
                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-gray-400">
                            <Calendar className="h-4 w-4" />
                            <span>Date</span>
                        </div>
                        <span className="font-medium text-white">
                            {new Date(entry.date).toLocaleDateString()} {new Date(entry.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                    </div>
                    <div className="h-px bg-white/5" />
                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-gray-400">
                            <User className="h-4 w-4" />
                            <span>Details</span>
                        </div>
                        <span className="font-bold text-white truncate max-w-[150px]">{entry.name}</span>
                    </div>
                </div>

                {/* Password Input */}
                <div className="mt-6 space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                        Confirm with Password
                    </label>
                    <Input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value)
                            setError('')
                        }}
                        className={cn(
                            "bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:ring-red-500",
                            error && "border-red-500 focus:ring-red-500"
                        )}
                    />
                    {error && (
                        <p className="text-xs text-red-500 font-medium animate-in fade-in slide-in-from-top-1">
                            {error}
                        </p>
                    )}
                </div>
            </div>

            {/* Footer */}
            <div className="bg-[#0c0a09] px-6 py-4 flex justify-end gap-3 border-t border-white/5">
                <Button
                    variant="ghost"
                    onClick={onClose}
                    className="text-gray-400 hover:text-white hover:bg-white/5"
                >
                    Cancel
                </Button>
                <Button
                    className="bg-red-600 hover:bg-red-700 text-white font-bold shadow-lg shadow-red-900/20"
                    onClick={handleSubmit}
                    disabled={!password || isDeleting}
                >
                    {isDeleting ? 'Deleting...' : (
                        <>
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete Entry
                        </>
                    )}
                </Button>
            </div>
        </Dialog>
    )
}
