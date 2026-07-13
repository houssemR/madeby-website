import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import HowItWorks from './components/HowItWorks'
import AppShowcase from './components/AppShowcase'
import Features from './components/Features'
import Community from './components/Community'
import Verification from './components/Verification'
import ExpertPanel from './components/ExpertPanel'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Stats />
      <HowItWorks />
      <AppShowcase />
      <Features />
      <Community />
      <Verification />
      <ExpertPanel />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
