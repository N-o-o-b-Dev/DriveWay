import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../components/ui/Card'
import { AlertCircle, Lock } from 'lucide-react'

export function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [secretCode, setSecretCode] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { signup } = useAuth()
    const navigate = useNavigate()

    const REQUIRED_CODE = "WestEast@9966"

    async function handleSubmit(e) {
        e.preventDefault()
        setError('')

        if (password !== confirmPassword) {
            return setError('Passwords do not match')
        }

        if (secretCode !== REQUIRED_CODE) {
            return setError('Invalid Secret Code. You are not authorized to sign up.')
        }

        try {
            setLoading(true)
            await signup(email, password)
            navigate('/')
        } catch (err) {
            setError('Failed to create an account: ' + err.message)
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-background-dark p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
                    <CardDescription>
                        Enter your details and the secret code to join
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {error && (
                        <div className="bg-destructive/15 text-destructive text-sm p-3 mb-4 rounded-md flex items-center gap-2">
                            <AlertCircle className="h-4 w-4" />
                            {error}
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-4">
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
                        <div className="space-y-2">
                            <label className="text-sm font-medium flex items-center gap-1">
                                Secret Unique Code <Lock size={12} className="text-muted-foreground" />
                            </label>
                            <Input
                                type="password"
                                placeholder="Enter secret code"
                                value={secretCode}
                                onChange={(e) => setSecretCode(e.target.value)}
                                required
                            />
                        </div>
                        <Button className="w-full" type="submit" disabled={loading}>
                            {loading ? 'Creating Account...' : 'Sign Up'}
                        </Button>
                    </form>
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
