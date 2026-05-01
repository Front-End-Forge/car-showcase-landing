import { useEffect, useRef } from 'react'
import './Interior.css'

const features = [
  { icon: '◎', label: 'Seating', title: 'Racing DNA', body: 'Hand-stitched full-grain Nappa leather contoured carbon-shell bucket seats with 16-way electric adjustment and memory.' },
  { icon: '◈', label: 'Instrumentation', title: 'Pilot Command', body: '12.6" curved OLED instrument cluster with telemetry overlay. Zero-latency response. Configurable for street and track.' },
  { icon: '◇', label: 'Ambience', title: 'Sensory Design', body: '64-colour ambient lighting system responds to drive mode, music, and time of day, bathing the cockpit in emotion.' },
  { icon: '◉', label: 'Materials', title: 'Handcrafted Excellence', body: 'Open-pore carbon trim, brushed titanium accents, and Alcantara headliner — curated by master craftspeople in Italy.' },
]

export default function Interior() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-in').forEach((el) => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="interior" className="section int" ref={sectionRef} aria-label="Interior">
      <div className="container">
        <div className="int__header fade-in">
          <span className="label fade-in fade-in-delay-1">Interior</span>
          <div className="divider fade-in fade-in-delay-1" />
          <h2 className="display-lg int__title fade-in fade-in-delay-2">
            The Art of<br />
            <em>The Cockpit</em>
          </h2>
        </div>
      </div>

      {/* Wide cockpit visual */}
      <div className="int__visual-wrap fade-in fade-in-delay-2" aria-hidden="true">
        <div className="int__cockpit">
          <svg viewBox="0 0 1400 600" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
            <defs>
              <radialGradient id="cockpitGrad" cx="50%" cy="40%" r="55%">
                <stop offset="0%" stopColor="#1a1409" stopOpacity="1" />
                <stop offset="100%" stopColor="#080808" stopOpacity="1" />
              </radialGradient>
              <linearGradient id="screenGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#E8C96A" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <rect width="1400" height="600" fill="url(#cockpitGrad)" />
            {/* Dashboard curve */}
            <path d="M 0 280 Q 350 240 700 230 Q 1050 240 1400 280 L 1400 600 L 0 600 Z"
              fill="#0f0d08" opacity="0.8" />
            {/* Steering wheel */}
            <circle cx="700" cy="480" r="120" fill="none" stroke="rgba(201,168,76,0.3)" strokeWidth="20" />
            <circle cx="700" cy="480" r="80" fill="none" stroke="rgba(201,168,76,0.1)" strokeWidth="2" />
            <line x1="700" y1="360" x2="700" y2="600" stroke="rgba(201,168,76,0.2)" strokeWidth="12" strokeLinecap="round" />
            <line x1="580" y1="480" x2="820" y2="480" stroke="rgba(201,168,76,0.2)" strokeWidth="12" strokeLinecap="round" />
            <circle cx="700" cy="480" r="25" fill="rgba(201,168,76,0.15)" />
            <text x="700" y="487" textAnchor="middle" fill="#C9A84C" fontSize="12" fontFamily="Barlow Condensed" letterSpacing="3">APEX</text>
            {/* Main screen */}
            <rect x="300" y="215" width="800" height="120" rx="4" fill="url(#screenGlow)" />
            <rect x="302" y="217" width="796" height="116" rx="3" fill="rgba(10,8,4,0.7)" />
            <text x="700" y="286" textAnchor="middle" fill="rgba(201,168,76,0.9)" fontSize="52"
              fontFamily="Cormorant Garamond" fontWeight="300" letterSpacing="-2">710 HP</text>
            <text x="450" y="258" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="Barlow Condensed" letterSpacing="3">RPM</text>
            <text x="950" y="258" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="Barlow Condensed" letterSpacing="3">POWER MODE</text>
            {/* Side vents abstract */}
            {[180, 220, 260, 300].map((y, i) => (
              <line key={i} x1="50" y1={y} x2="240" y2={y} stroke="rgba(201,168,76,0.12)" strokeWidth="1" />
            ))}
            {[180, 220, 260, 300].map((y, i) => (
              <line key={i} x1="1160" y1={y} x2="1350" y2={y} stroke="rgba(201,168,76,0.12)" strokeWidth="1" />
            ))}
            {/* Ambient light strip */}
            <path d="M 0 340 Q 350 310 700 305 Q 1050 310 1400 340"
              fill="none" stroke="rgba(201,168,76,0.25)" strokeWidth="2" />
            <text x="700" y="570" textAnchor="middle" fill="rgba(255,255,255,0.07)"
              fontSize="11" fontFamily="Barlow Condensed" letterSpacing="6">
              PLACE YOUR INTERIOR IMAGE HERE
            </text>
          </svg>
        </div>
      </div>

      {/* Features */}
      <div className="container">
        <div className="int__features">
          {features.map((f, i) => (
            <article className={`int__feature fade-in fade-in-delay-${i + 2}`} key={f.label}>
              <div className="int__feature-icon" aria-hidden="true">{f.icon}</div>
              <div className="int__feature-body">
                <span className="label int__feature-label">{f.label}</span>
                <h3 className="int__feature-title">{f.title}</h3>
                <p className="body-sm int__feature-desc">{f.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
