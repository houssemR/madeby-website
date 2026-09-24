import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Making from './components/Making'
import Counter from './components/Counter'
import Corner from './components/Corner'
import Proof from './components/Proof'
import Giveaway from './components/Giveaway'
import Contact from './components/Contact'
import Footer from './components/Footer'

/* The order a crafter meets the app: make a piece, count the rows, decorate
   your corner, prove it is handmade, give it away. The download lives in the
   header and in the footer rather than in a section of its own. */
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
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
