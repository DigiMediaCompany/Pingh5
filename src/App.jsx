import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import AppRoutes from './routes/routes'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-16">
          <AppRoutes />
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
