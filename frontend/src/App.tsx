import { MotionConfig } from 'framer-motion'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { BackgroundFX } from './components/layout/BackgroundFX'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Experience } from './sections/Experience'
import { Projects } from './sections/Projects'
import { Education } from './sections/Education'
import { Contact } from './sections/Contact'
import { useActiveSection } from './hooks/useActiveSection'
import { SECTION_IDS } from './data/portfolio'

export default function App() {
  const active = useActiveSection(SECTION_IDS)

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen overflow-x-clip font-sans">
        <BackgroundFX />
        <Navbar active={active} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
