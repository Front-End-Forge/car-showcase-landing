import { useEffect, useRef } from 'react'
import './FinalCTA.css'

export default function FinalCTA() {
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
    <section className="section cta-section" ref={sectionRef} aria-label="Reserve your GTR">
      <div className="cta__bg" aria-hidden="true">
        <svg viewBox="0 0 1400 700" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
          <defs>
            <radialGradient id="ctaGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#080808" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1400" height="700" fill="#080808" />
          <rect width="1400" height="700" fill="url(#ctaGrad)" />
          {/* Horizontal lines */}
          {[150, 250, 350, 450, 550].map((y, i) => (
            <line key={i} x1="0" y1={y} x2="1400" y2={y}
              stroke="rgba(201,168,76,0.04)" strokeWidth="1" />
          ))}
          {/* Vertical */}
          {[200, 400, 600, 800, 1000, 1200].map((x, i) => (
            <line key={i} x1={x} y1="0" x2={x} y2="700"
              stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
          ))}
          {/* Large background text */}
          <text x="700" y="420" textAnchor="middle" fill="rgba(255,255,255,0.015)"
            fontSize="220" fontFamily="Cormorant Garamond" fontWeight="300" letterSpacing="-10">
            APEX
          </text>
        </svg>
      </div>

      <div className="container cta__content">
        <span className="label fade-in fade-in-delay-1">Reserve Yours Today</span>
        <div className="divider divider--center fade-in fade-in-delay-1" />
        <h2 className="display-xl cta__title fade-in fade-in-delay-2">
          Your Legacy<br />
          <em>Awaits</em>
        </h2>
        <p className="body-lg cta__body fade-in fade-in-delay-3">
          Join an exclusive circle of 250. A fully refundable reservation secures your production slot
          and initiates your personal configuration journey with our specialist team in Modena.
        </p>

        <div className="cta__actions fade-in fade-in-delay-4">
          <button className="btn btn-primary cta__btn-main">
            Reserve Now — €50,000 Deposit
          </button>
        </div>

        <div className="cta__contact fade-in fade-in-delay-5">
          <span className="body-sm">Questions? Our specialists are available 24/7</span>
          <a href="mailto:reserve@apexgtr.com" className="cta__email label">
            reserve@apexgtr.com
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="cta__footer">
        <div className="container cta__footer-inner">
          <div className="cta__footer-logo">
            <span>APEX</span>
            <span className="cta__footer-gtr">GTR</span>
          </div>
          <nav className="cta__footer-links" aria-label="Footer navigation">
            <a href="#performance">Performance</a>
            <a href="#design">Design</a>
            <a href="#interior">Interior</a>
            <a href="#technology">Technology</a>
            <a href="#specs">Specs</a>
          </nav>
          <p className="cta__footer-copy body-sm">
            © {new Date().getFullYear()} APEX Automotive. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  )
}
