import { useEffect, useRef } from 'react'
import './DesignSection.css'

const details = [
  { label: 'Aerodynamics', title: 'Form Follows Force', body: 'Every curve, vent, and surface is a calculated aerodynamic statement. 320 kg of downforce at 250 km/h.' },
  { label: 'Exterior', title: 'Sculpted in Motion', body: 'Carbon fibre monocoque construction sheds 40% of mass while multiplying rigidity beyond steel.' },
  { label: 'Lighting', title: 'Laser Matrix LED', body: 'Adaptive laser headlights project 600 metres ahead with surgical precision, reading the road before you do.' },
]

export default function DesignSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-in').forEach((el) => {
              el.classList.add('visible')
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="design" className="section ds" ref={sectionRef} aria-label="Design">
      {/* Full-width visual */}
      <div className="ds__hero-visual fade-in" aria-hidden="true">
        <div className="ds__hero-bg" />
        <div className="ds__hero-overlay" />
        <div className="ds__hero-content">
          <span className="label fade-in fade-in-delay-1">Exterior Design</span>
          <h2 className="display-lg ds__hero-title fade-in fade-in-delay-2">
            Pure<br /><em>Sculpture</em>
          </h2>
        </div>
        {/* SVG Car Silhouette as visual placeholder */}
        <svg className="ds__car-svg" viewBox="0 0 1000 350" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="carGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C9A84C" stopOpacity="0" />
              <stop offset="30%" stopColor="#C9A84C" stopOpacity="0.3" />
              <stop offset="70%" stopColor="#E8C96A" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          {/* Supercar silhouette */}
          <path d="M 80 260 Q 100 260 120 250 L 180 200 Q 220 165 280 155 L 420 145 Q 480 140 520 138 L 620 136 Q 680 135 720 145 L 780 160 Q 820 170 850 185 L 890 210 Q 910 225 920 240 L 930 260 Z"
            fill="url(#carGrad)" filter="url(#glow)" opacity="0.6" />
          {/* Wheel arches */}
          <circle cx="220" cy="262" r="45" fill="none" stroke="#C9A84C" strokeWidth="1.5" opacity="0.5" />
          <circle cx="220" cy="262" r="30" fill="none" stroke="#C9A84C" strokeWidth="0.5" opacity="0.3" />
          <circle cx="760" cy="262" r="45" fill="none" stroke="#C9A84C" strokeWidth="1.5" opacity="0.5" />
          <circle cx="760" cy="262" r="30" fill="none" stroke="#C9A84C" strokeWidth="0.5" opacity="0.3" />
          {/* Ground line */}
          <line x1="0" y1="308" x2="1000" y2="308" stroke="rgba(201,168,76,0.15)" strokeWidth="1" />
          {/* Spec lines */}
          <line x1="220" y1="200" x2="220" y2="130" stroke="rgba(201,168,76,0.3)" strokeWidth="0.5" strokeDasharray="4,4" />
          <line x1="760" y1="200" x2="760" y2="130" stroke="rgba(201,168,76,0.3)" strokeWidth="0.5" strokeDasharray="4,4" />
          <line x1="200" y1="130" x2="780" y2="130" stroke="rgba(201,168,76,0.2)" strokeWidth="0.5" />
          <text x="490" y="122" textAnchor="middle" fill="#C9A84C" fontSize="10" fontFamily="Barlow Condensed" letterSpacing="3" opacity="0.7">4,820 MM WHEELBASE</text>
        </svg>
      </div>

      {/* Details grid */}
      <div className="container">
        <div className="ds__grid">
          {details.map((d, i) => (
            <article className={`ds__card fade-in fade-in-delay-${i + 2}`} key={d.label}>
              <span className="label ds__card-label">{d.label}</span>
              <h3 className="display-md ds__card-title">{d.title}</h3>
              <div className="divider" />
              <p className="body-lg">{d.body}</p>
            </article>
          ))}
        </div>

        {/* Full width image placeholder */}
        <div className="ds__detail-visual fade-in fade-in-delay-3">
          <svg viewBox="0 0 1200 400" style={{ width: '100%', height: '100%' }}>

            <image
              href="/assets/carImage.png"   // 👈 put your image in public folder
              x="-40"
              y="10"
              width="110%"
              height="110%"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>
          <div className="ds__detail-caption">
            <span className="label">Detail — Front Fascia</span>
            <p className="body-sm" style={{ marginTop: '8px' }}>
              Adaptive front splitter extends 40mm at speed, generating precise downforce distribution.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
