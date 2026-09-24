import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Making from './components/Making'
import Counter from './components/Counter'
import Corner from './components/Corner'
import Proof from './components/Proof'
import Giveaway from './components/Giveaway'
import Download from './components/Download'
import Contact from './components/Contact'
import Footer from './components/Footer'

/* Six sections, in the order a crafter meets the app: make a piece, count
   the rows, decorate your corner, prove it is handmade, download. */
function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Making />
        <Counter />
        <Corner />
        <Proof />
        <Giveaway />
        <Download />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
