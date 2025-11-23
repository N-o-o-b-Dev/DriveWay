import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DrivewayProvider } from './context/DrivewayContext'
import { Layout } from './components/Layout'
import { Dashboard } from './pages/Dashboard'
import { Cars } from './pages/Cars'
import { CarDetails } from './pages/CarDetails'
import { Customers } from './pages/Customers'
import { Transactions } from './pages/Transactions'
import { InstallPrompt } from './components/InstallPrompt'

import { Dealers } from './pages/Dealers'
import { Maintenance } from './pages/Maintenance'

function App() {
    return (
        <DrivewayProvider>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/cars" element={<Cars />} />
                        <Route path="/cars/:id" element={<CarDetails />} />
                        <Route path="/customers" element={<Customers />} />
                        <Route path="/dealers" element={<Dealers />} />
                        <Route path="/transactions" element={<Transactions />} />
                        <Route path="/maintenance" element={<Maintenance />} />
                    </Routes>
                </Layout>
                <InstallPrompt />
            </Router>
        </DrivewayProvider>
    )
}

export default App
