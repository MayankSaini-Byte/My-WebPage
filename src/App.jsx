import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useClientSystems } from './hooks/useClientEffect'

/**
 * App
 * Top-level layout. Sections flow in a single column; each carries its own id
 * so the navbar's anchor links resolve correctly.
 *
 * useClientSystems mounts the vanilla-JS cursor + IntersectionObserver reveal
 * once the tree has painted, and tears them down on unmount.
 */
export default function App() {
  useClientSystems()

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
