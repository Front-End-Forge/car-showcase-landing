import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Performance from './components/Performance'
import DesignSection from './components/DesignSection'
import Interior from './components/Interior'
import Storytelling from './components/Storytelling'
import Technology from './components/Technology'
import Specs from './components/Specs'
import LimitedEdition from './components/LimitedEdition'
import FinalCTA from './components/FinalCTA'

export default function App() {
  return (
    <>
      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        {/* 1. Hero — canvas frame animation */}
        <Hero />

        {/* 2. Performance stats */}
        <Performance />

        {/* 3. Design */}
        <DesignSection />

        {/* 4. Interior */}
        <Interior />

        {/* 5. Pinned storytelling */}
        <Storytelling />

        {/* 6. Technology */}
        <Technology />

        {/* 7. Specs */}
        <Specs />

        {/* 8. Limited Edition */}
        <LimitedEdition />

        {/* 9. Final CTA */}
        <FinalCTA />
      </main>
    </>
  )
}
