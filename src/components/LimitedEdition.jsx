import { useEffect, useRef, useState } from 'react'
import './LimitedEdition.css'

export default function LimitedEdition() {
  const sectionRef = useRef(null)
  const [count] = useState(47)

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
    <section id="limited-edition" className="section le" ref={sectionRef} aria-label="Limited Edition">
      <div className="le__bg" aria-hidden="true">
        <div className="le__bg-glow" />
        <div className="le__bg-lines">
          {Array.from({length: 20}).map((_, i) => (
            <div key={i} className="le__bg-line" style={{animationDelay: `${i * 0.15}s`}} />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="le__inner">
          <div className="le__left fade-in">
            <span className="label fade-in fade-in-delay-1">Exclusivity</span>
            <div className="divider fade-in fade-in-delay-1" />
            <h2 className="display-lg le__title fade-in fade-in-delay-2">
              Limited to<br />
              <span className="le__number text-gradient">250</span><br />
              Examples
            </h2>
            <p className="body-lg le__body fade-in fade-in-delay-3">
              Each APEX GTR is hand-assembled over 1,200 hours. Every car receives
              a unique chassis plate, personalised owner dossier, and factory delivery experience
              in our atelier in Modena, Italy.
            </p>

            <div className="le__availability fade-in fade-in-delay-4">
              <div className="le__avail-bar">
                <div
                  className="le__avail-fill"
                  style={{ width: `${(count / 250) * 100}%` }}
                  aria-label={`${count} of 250 available`}
                />
              </div>
              <div className="le__avail-text">
                <span className="label">{count} Remaining</span>
                <span className="body-sm">of 250 production units</span>
              </div>
            </div>

            <div className="le__actions fade-in fade-in-delay-5">
              <button className="btn btn-primary le__btn">
                Reserve Your GTR
              </button>
              <button className="btn btn-secondary le__btn">
                Configure
              </button>
            </div>
          </div>

          <div className="le__right fade-in fade-in-delay-3">
            <div className="le__plate" aria-label="Production plate">
              <div className="le__plate-inner">
                <span className="label le__plate-label">Production Unit</span>
                <div className="le__plate-num">204</div>
                <div className="le__plate-divider" />
                <span className="le__plate-of label">of 250</span>
                <div className="le__plate-name">APEX GTR</div>
                <div className="le__plate-year label">MMXXV · Modena, Italia</div>
              </div>
            </div>

            <div className="le__options">
              {['Onyx Midnight', 'Titanium Silver', 'Obsidian Red', 'Arctic White'].map((color) => (
                <div className="le__option" key={color}>
                  <div
                    className="le__color-swatch"
                    style={{
                      background: color === 'Onyx Midnight' ? '#0d0d0d' :
                                  color === 'Titanium Silver' ? 'linear-gradient(135deg,#8a8a8a,#c0c0c0)' :
                                  color === 'Obsidian Red' ? '#1a0505' : '#f5f5f5'
                    }}
                    aria-hidden="true"
                  />
                  <span className="le__color-name label">{color}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
