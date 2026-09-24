import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pieces from './components/Pieces'
import Making from './components/Making'
import Counter from './components/Counter'
import Corner from './components/Corner'
import Proof from './components/Proof'
import Download from './components/Download'
import Contact from './components/Contact'
import Footer from './components/Footer'

/* The order a crafter meets the app: see what people make, make a piece,
   count the rows, decorate your corner, prove it is handmade, download. */
function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Pieces />
        <Making />
        <Counter />
        <Corner />
        <Proof />
        <Download />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
