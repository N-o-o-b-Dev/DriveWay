import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DrivewayProvider } from './context/DrivewayContext'
import { Layout } from './components/Layout'
import { Dashboard } from './pages/Dashboard'
import { Cars } from './pages/Cars'
import { CarDetails } from './pages/CarDetails'
import { Customers } from './pages/Customers'
import { CustomerDetailsPage } from './pages/CustomerDetailsPage'
import { Transactions } from './pages/Transactions'
import { InstallPrompt } from './components/InstallPrompt'

import { Dealers } from './pages/Dealers'
import { DealerDetailsPage } from './pages/DealerDetailsPage'
import { Maintenance } from './pages/Maintenance'
import { Financials } from './pages/Financials'

import { AuthProvider } from './context/AuthContext'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { PrivateRoute } from './components/PrivateRoute'

function App() {
    return (
        <DrivewayProvider>
            <AuthProvider>
                <Router basename={import.meta.env.BASE_URL}>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />

                        <Route path="/*" element={
                            <PrivateRoute>
                                <Layout>
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
                                    </Routes>
                                </Layout>
                            </PrivateRoute>
                        } />
                    </Routes>
                    <InstallPrompt />
                </Router>
            </AuthProvider>
        </DrivewayProvider>
    )
}

export default App
