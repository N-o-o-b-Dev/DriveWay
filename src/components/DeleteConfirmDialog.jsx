import { useState } from 'react'
import { Dialog, DialogHeader, DialogTitle } from './ui/Dialog'
import { Input } from './ui/Input'
import { Button } from './ui/Button'
import { Lock } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export function DeleteConfirmDialog({ isOpen, onClose, onConfirm, title = "Confirm Deletion", description = "This action cannot be undone." }) {
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { currentUser, login } = useAuth()

    const handleConfirm = async (e) => {
        e.preventDefault() // Ensure form submission doesn't reload
        setError('')
        setLoading(true)

        try {
            if (!currentUser || !currentUser.email) {
                throw new Error("No user logged in")
            }

            // Verify password by re-authenticating (logging in with current email)
            await login(currentUser.email, password)

            // If successful, proceed
            onConfirm()
            onClose()
            setPassword('')
        } catch (err) {
            console.error("Delete verification failed", err)
            setError('Incorrect password')
        } finally {
            setLoading(false)
        }
    }

    const handleClose = () => {
        onClose()
        setPassword('')
        setError('')
    }

    return (
        <Dialog isOpen={isOpen} onClose={handleClose}>
            <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-destructive" />
                    {title}
                </DialogTitle>
                <p className="text-sm text-muted-foreground">
                    {description}
                </p>
            </DialogHeader>

            <form onSubmit={handleConfirm}>
                <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                        <p className="text-sm font-medium">Enter your login password to confirm:</p>
                        <Input
                            type="password"
                            placeholder="Enter login password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                                setError('')
                            }}
                            className={error ? 'border-destructive' : ''}
                            disabled={loading}
                        />
                        {error && <p className="text-xs text-destructive">{error}</p>}
                    </div>
                </div>
                <div className="flex justify-end gap-2">
                    <Button type="button" variant="outline" onClick={handleClose} disabled={loading}>
                        Cancel
                    </Button>
                    <Button type="submit" variant="destructive" disabled={loading || !password}>
                        {loading ? 'Verifying...' : 'Confirm Delete'}
                    </Button>
                </div>
            </form>
        </Dialog>
    )
}
