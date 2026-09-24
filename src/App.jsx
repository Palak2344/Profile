import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Stats from './components/Stats'
import Services from './components/Services'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Marquee />
        <About />
        <Stats />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
    </>
  )
}
