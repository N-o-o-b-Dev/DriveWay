import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Car, Users, Receipt, LayoutDashboard, Moon, Sun, Plus, Wrench, Menu, X, FileText, LogOut } from 'lucide-react'
import { cn } from '../lib/utils'
import { Button } from './ui/Button'
import { GlobalRentalDrawer } from './GlobalRentalDrawer'
import { useDriveway } from '../context/DrivewayContext'
import { useAuth } from '../context/AuthContext'

export function Layout({ children }) {
    const [isDark, setIsDark] = useState(false)
    const [isRentalDrawerOpen, setIsRentalDrawerOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const { logout } = useAuth()
    const { isLoading } = useDriveway()

    async function handleLogout() {
        try {
            await logout()
            navigate('/login')
        } catch (error) {
            console.error("Failed to log out", error)
        }
    }

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDark])

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [location.pathname])

    const navItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
        { icon: Car, label: 'Cars', path: '/cars' },
        { icon: Users, label: 'Customers', path: '/customers' },
        { icon: Users, label: 'Dealers', path: '/dealers' },
        { icon: FileText, label: 'Rentals', path: '/transactions' },
        { icon: Receipt, label: 'Financials', path: '/financials' },
        { icon: Wrench, label: 'Maintenance', path: '/maintenance' },
    ]

    const SidebarContent = () => (
        <div className="flex flex-col h-full">
            <div className="p-6 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Driveway" className="h-8 w-8 object-contain" />
                    <h1 className="text-2xl font-bold text-primary">Driveway</h1>
                </div>
                <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
                    <X size={20} />
                </Button>
            </div>
            <div className="px-4 mb-4">
                <Button
                    className="w-full justify-start gap-2"
                    onClick={() => setIsRentalDrawerOpen(true)}
                >
                    <Plus size={20} />
                    New Rental
                </Button>
            </div>
            <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
                {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = location.pathname === item.path
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                                isActive
                                    ? "bg-primary/10 text-primary"
                                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                            )}
                        >
                            <Icon size={20} />
                            <span className="font-medium">{item.label}</span>
                        </Link>
                    )
                })}
            </nav>
            <div className="p-4 border-t border-gray-200 dark:border-gray-800">
                <Button
                    variant="ghost"
                    className="w-full justify-start gap-3"
                    onClick={() => setIsDark(!isDark)}
                >
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                </Button>
                <Button
                    variant="ghost"
                    className="w-full justify-start gap-3 mt-2 text-destructive hover:text-destructive hover:bg-destructive/10"
                    onClick={handleLogout}
                >
                    <LogOut size={20} />
                    <span>Log Out</span>
                </Button>
            </div>
        </div>
    )

    if (isLoading) {
        return (
            <div className="min-h-screen bg-surface dark:bg-background-dark flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Loading..." className="h-16 w-16 animate-pulse object-contain" />
                    <p className="text-muted-foreground animate-pulse">Loading...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-surface dark:bg-background-dark flex flex-col md:flex-row">
            {/* Mobile Header */}
            <div className="md:hidden bg-background dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800 p-4 flex justify-between items-center sticky top-0 z-20">
                <div className="flex items-center gap-3">
                    <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Driveway" className="h-8 w-8 object-contain" />
                    <h1 className="text-2xl font-bold text-primary">Driveway</h1>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(true)}>
                    <Menu size={24} />
                </Button>
            </div>

            {/* Desktop Sidebar */}
            <aside className="hidden md:flex w-64 bg-background dark:bg-surface-dark border-r border-gray-200 dark:border-gray-800 flex-col sticky top-0 h-screen">
                <SidebarContent />
            </aside>

            {/* Mobile Sidebar Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 md:hidden">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
                    <div className="absolute left-0 top-0 bottom-0 w-64 bg-background dark:bg-surface-dark shadow-xl animate-in slide-in-from-left">
                        <SidebarContent />
                    </div>
                </div>
            )}

            {/* Main Content */}
            <main className="flex-1 overflow-auto w-full">
                <div className="p-4 md:p-8 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>

            <GlobalRentalDrawer
                isOpen={isRentalDrawerOpen}
                onClose={() => setIsRentalDrawerOpen(false)}
            />
        </div>
    )
}
