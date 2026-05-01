import { useEffect, useRef } from 'react'
import './Performance.css'

const stats = [
  {
    value: '710',
    unit: 'HP',
    label: 'Power Output',
    description: 'Twin-turbocharged V12 engine delivering relentless thrust across every rev range.',
  },
  {
    value: '3.1',
    unit: 's',
    label: '0 – 100 km/h',
    description: 'Launch control catapults you forward with surgical precision and raw force.',
  },
  {
    value: '330',
    unit: 'km/h',
    label: 'Top Speed',
    description: 'Aerodynamic perfection meets mechanical mastery at the absolute edge of motion.',
  },
]

export default function Performance() {
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
      { threshold: 0.15 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="performance" className="section perf" ref={sectionRef} aria-label="Performance">
      <div className="container">
        {/* Header */}
        <div className="perf__header">
          <div className="label fade-in fade-in-delay-1">Performance</div>
          <div className="divider fade-in fade-in-delay-1" />
          <h2 className="display-lg perf__title fade-in fade-in-delay-2">
            Numbers That<br />
            <em>Defy Reality</em>
          </h2>
          <p className="body-lg perf__subtitle fade-in fade-in-delay-3">
            Every specification is not just a claim — it's a promise forged through thousands of hours
            of engineering obsession.
          </p>
        </div>

        {/* Stats grid */}
        <div className="perf__grid">
          {stats.map((stat, i) => (
            <article className={`perf__card fade-in fade-in-delay-${i + 2}`} key={stat.label}>
              <div className="perf__card-number">
                <span className="perf__num">{stat.value}</span>
                <span className="perf__unit label">{stat.unit}</span>
              </div>
              <div className="perf__card-body">
                <h3 className="perf__label label">{stat.label}</h3>
                <p className="perf__desc body-sm">{stat.description}</p>
              </div>
              <div className="perf__card-line" aria-hidden="true" />
            </article>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="perf__bottom fade-in fade-in-delay-5">
          <div className="perf__engine-tag">
            <span className="label">Engine</span>
            <span className="perf__engine-name">V12 Biturbo · 6.2L</span>
          </div>
          <div className="perf__engine-tag">
            <span className="label">Drivetrain</span>
            <span className="perf__engine-name">AWD · Torque Vectoring</span>
          </div>
          <div className="perf__engine-tag">
            <span className="label">Transmission</span>
            <span className="perf__engine-name">8-Speed Dual Clutch</span>
          </div>
          <div className="perf__engine-tag">
            <span className="label">Braking</span>
            <span className="perf__engine-name">Carbon Ceramic · 6-Piston</span>
          </div>
        </div>
      </div>
    </section>
  )
}
