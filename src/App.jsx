import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DrivewayProvider } from './context/DrivewayContext'
import { Layout } from './components/Layout'
import { InstallPrompt } from './components/InstallPrompt'
import { AuthProvider } from './context/AuthContext'
import { PrivateRoute } from './components/PrivateRoute'

// Lazy load pages to improve performance
const Dashboard = lazy(() => import('./pages/Dashboard').then(module => ({ default: module.Dashboard })))
const Cars = lazy(() => import('./pages/Cars').then(module => ({ default: module.Cars })))
const CarDetails = lazy(() => import('./pages/CarDetails').then(module => ({ default: module.CarDetails })))
const Customers = lazy(() => import('./pages/Customers').then(module => ({ default: module.Customers })))
const CustomerDetailsPage = lazy(() => import('./pages/CustomerDetailsPage').then(module => ({ default: module.CustomerDetailsPage })))
const Dealers = lazy(() => import('./pages/Dealers').then(module => ({ default: module.Dealers })))
const DealerDetailsPage = lazy(() => import('./pages/DealerDetailsPage').then(module => ({ default: module.DealerDetailsPage })))
const Transactions = lazy(() => import('./pages/Transactions').then(module => ({ default: module.Transactions })))
const Financials = lazy(() => import('./pages/Financials').then(module => ({ default: module.Financials })))
const Maintenance = lazy(() => import('./pages/Maintenance').then(module => ({ default: module.Maintenance })))
const Register = lazy(() => import('./pages/Register').then(module => ({ default: module.Register })))
const Login = lazy(() => import('./pages/Login').then(module => ({ default: module.Login })))
const Signup = lazy(() => import('./pages/Signup').then(module => ({ default: module.Signup })))

// Billing App Routes
const BillingDashboard = lazy(() => import('./pages/billing/BillingDashboard').then(module => ({ default: module.BillingDashboard })))
const CreateInvoice = lazy(() => import('./pages/billing/CreateInvoice').then(module => ({ default: module.CreateInvoice })))
const BillingHistory = lazy(() => import('./pages/billing/BillingHistory').then(module => ({ default: module.BillingHistory })))
const BillingSettings = lazy(() => import('./pages/billing/BillingSettings').then(module => ({ default: module.BillingSettings })))

// Simple loading spinner for Suspense fallback
const PageLoader = () => (
    <div className="flex items-center justify-center p-8 w-full h-full min-h-[50vh]">
        <div className="flex flex-col items-center gap-2">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            <p className="text-sm text-muted-foreground">Loading page...</p>
        </div>
    </div>
)

function App() {
    return (
        <AuthProvider>
            <DrivewayProvider>
                <Router basename={import.meta.env.BASE_URL}>
                    <Suspense fallback={<PageLoader />}>
                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />

                            <Route path="/*" element={
                                <PrivateRoute>
                                    <Layout>
                                        <Suspense fallback={<PageLoader />}>
                                            <Routes>
                                                <Route path="/" element={<Dashboard />} />
                                                <Route path="/cars" element={<Cars />} />
                                                <Route path="/cars/:id" element={<CarDetails />} />
                                                <Route path="/customers" element={<Customers />} />
                                                <Route path="/customers/:id" element={<CustomerDetailsPage />} />
                                                <Route path="/dealers" element={<Dealers />} />
                                                <Route path="/dealers/:id" element={<DealerDetailsPage />} />
                                                <Route path="/transactions" element={<Transactions />} />
                                                <Route path="/financials" element={<Financials />} />
                                                <Route path="/maintenance" element={<Maintenance />} />
                                                <Route path="/register" element={<Register />} />

                                                {/* Billing Section */}
                                                <Route path="/billing" element={<BillingDashboard />} />
                                                <Route path="/billing/create" element={<CreateInvoice />} />
                                                <Route path="/billing/history" element={<BillingHistory />} />
                                                <Route path="/billing/settings" element={<BillingSettings />} />
                                            </Routes>
                                        </Suspense>
                                    </Layout>
                                </PrivateRoute>
                            } />
                        </Routes>
                        <InstallPrompt />
                    </Suspense>
                </Router>
            </DrivewayProvider>
        </AuthProvider>
    )
}

export default App
