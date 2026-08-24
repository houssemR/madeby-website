import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Mascots from './components/Mascots'
import AppShowcase from './components/AppShowcase'
import Features from './components/Features'
import Community from './components/Community'
import Verification from './components/Verification'
import ExpertPanel from './components/ExpertPanel'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Mascots />
      <AppShowcase />
      <Features />
      <Community />
      <Verification />
      <ExpertPanel />
      <CTA />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
