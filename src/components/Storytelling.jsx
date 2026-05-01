import { useEffect, useRef, useState } from 'react'
import './Storytelling.css'

const chapters = [
  { word: 'Power', sub: '710 horses, perfectly harnessed', desc: 'Raw mechanical force translated into precise motion.' },
  { word: 'Precision', sub: 'Every input, amplified', desc: 'Steering feedback so pure, the road speaks directly to your hands.' },
  { word: 'Control', sub: 'Command the edge', desc: 'Torque vectoring and active differentials eliminate uncertainty.' },
  { word: 'Presence', sub: 'Unmistakable. Always.', desc: 'A car that announces itself without saying a word.' },
]

export default function Storytelling() {
  const sectionRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const sectionHeight = section.offsetHeight - window.innerHeight
      const scrolled = -rect.top

      const p = Math.max(0, Math.min(1, scrolled / sectionHeight))
      setProgress(p)

      const idx = Math.min(
        Math.floor(p * chapters.length),
        chapters.length - 1
      )
      setActiveIndex(idx)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const chapter = chapters[activeIndex]

  return (
    <section className="story" ref={sectionRef} aria-label="The APEX story">
      <div className="story__sticky">
        {/* Background progress line */}
        <div className="story__progress-bar" aria-hidden="true">
          <div
            className="story__progress-fill"
            style={{ height: `${progress * 100}%` }}
          />
        </div>

        {/* Content */}
        <div className="story__content">
          {/* Chapter indicators */}
          <nav className="story__chapters" aria-label="Story chapters">
            {chapters.map((c, i) => (
              <div
                key={c.word}
                className={`story__chapter-dot ${i === activeIndex ? 'active' : ''} ${i < activeIndex ? 'past' : ''}`}
                aria-current={i === activeIndex ? 'step' : undefined}
              >
                <span className="story__chapter-label label">{c.word}</span>
              </div>
            ))}
          </nav>

          {/* Main word */}
          <div className="story__main" key={activeIndex} aria-live="polite">
            <span className="label story__eye">Chapter {String(activeIndex + 1).padStart(2,'0')}</span>
            <h2 className="story__word display-xl">{chapter.word}</h2>
            <p className="story__sub">{chapter.sub}</p>
            <div className="divider story__divider" />
            <p className="body-lg story__desc">{chapter.desc}</p>
          </div>

          {/* Decorative element */}
          <div className="story__deco" aria-hidden="true">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
              <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(201,168,76,0.08)" strokeWidth="1" />
              <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(201,168,76,0.06)" strokeWidth="1" />
              <circle cx="100" cy="100" r="40" fill="none" stroke="rgba(201,168,76,0.1)" strokeWidth="1" />
              <circle cx="100" cy="100" r="4" fill="rgba(201,168,76,0.4)" />
              {/* Animated arc */}
              <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(201,168,76,0.4)" strokeWidth="1"
                strokeDasharray="10 502" strokeDashoffset={`${-502 * progress}`}
                style={{transition:'stroke-dashoffset 0.1s'}}
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
