import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../components/ui/Card'
import { AlertCircle, Phone, CheckCircle2 } from 'lucide-react'

export function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    // OTP State
    const [otp, setOtp] = useState('')
    const [showOtpInput, setShowOtpInput] = useState(false)
    const [confirmObj, setConfirmObj] = useState(null)

    const { signup, setUpRecaptcha } = useAuth()
    const navigate = useNavigate()

    const TARGET_NUMBER = "+91 8075448758" // The number to verify against

    async function handleSendOtp(e) {
        e.preventDefault()
        setError('')
        setMessage('')

        if (password !== confirmPassword) {
            return setError('Passwords do not match')
        }

        if (!email || !password) {
            return setError('Please fill in all fields')
        }

        try {
            setLoading(true)
            setMessage(`Sending verification code to ${TARGET_NUMBER}...`)
            const response = await setUpRecaptcha(TARGET_NUMBER)
            setConfirmObj(response)
            setShowOtpInput(true)
            setMessage(`Code sent to ${TARGET_NUMBER}. Please enter it below.`)
            setLoading(false)
        } catch (err) {
            setError(err.message)
            setLoading(false)
            console.error(err)
        }
    }

    async function handleVerifyAndSignup(e) {
        e.preventDefault()
        setError('')

        if (!otp || otp.length < 6) {
            return setError('Please enter a valid 6-digit OTP')
        }

        try {
            setLoading(true)
            // 1. Verify OTP
            await confirmObj.confirm(otp)

            // 2. Create Account
            await signup(email, password)
            navigate('/')
        } catch (err) {
            setError('Invalid OTP or Verification Failed: ' + err.message)
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-background-dark p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
                    <CardDescription>
                        Verify your identity to sign up
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {error && (
                        <div className="bg-destructive/15 text-destructive text-sm p-3 mb-4 rounded-md flex items-center gap-2">
                            <AlertCircle className="h-4 w-4" />
                            {error}
                        </div>
                    )}
                    {message && !error && (
                        <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm p-3 mb-4 rounded-md flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4" />
                            {message}
                        </div>
                    )}

                    {!showOtpInput ? (
                        <form onSubmit={handleSendOtp} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <Input
                                    type="email"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Password</label>
                                <Input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Confirm Password</label>
                                <Input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Hidden container for Recaptcha */}
                            <div id="recaptcha-container"></div>

                            <Button className="w-full gap-2" type="submit" disabled={loading}>
                                <Phone size={16} />
                                {loading ? 'Sending Code...' : `Verify ${TARGET_NUMBER}`}
                            </Button>
                        </form>
                    ) : (
                        <form onSubmit={handleVerifyAndSignup} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Verification Code</label>
                                <Input
                                    type="text"
                                    placeholder="123456"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    required
                                    className="text-center text-lg tracking-widest"
                                />
                                <p className="text-xs text-muted-foreground text-center">
                                    Enter the 6-digit code sent to {TARGET_NUMBER}
                                </p>
                            </div>
                            <Button className="w-full gap-2" type="submit" disabled={loading}>
                                {loading ? 'Creating Account...' : 'Confirm & Sign Up'}
                            </Button>
                            <Button
                                type="button"
                                variant="ghost"
                                className="w-full"
                                onClick={() => setShowOtpInput(false)}
                                disabled={loading}
                            >
                                Cancel
                            </Button>
                        </form>
                    )}
                </CardContent>
                <CardFooter className="flex justify-center text-sm text-muted-foreground">
                    Already have an account?
                    <Link to="/login" className="ml-1 text-primary hover:underline font-medium">
                        Log in
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}
