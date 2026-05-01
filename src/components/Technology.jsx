import { useEffect, useRef } from 'react'
import './Technology.css'

const techs = [
  {
    label: '01',
    title: 'Neural Drive AI',
    body: 'Real-time machine learning analyses driver inputs 500× per second, pre-emptively adjusting dampers, torque vectoring, and brake bias.',
  },
  {
    label: '02',
    title: 'Active Aero Suite',
    body: 'Adaptive rear wing, underbody diffuser, and front splitter operate in concert, reshaping aerodynamic balance across every driving scenario.',
  },
  {
    label: '03',
    title: 'AR Head-Up Display',
    body: '3D augmented reality HUD projects navigation, performance telemetry, and hazard alerts directly onto the road surface ahead.',
  },
  {
    label: '04',
    title: 'OTA Architecture',
    body: 'Modular software architecture enables over-the-air updates — the GTR becomes more capable, more intelligent, with each update cycle.',
  },
  {
    label: '05',
    title: 'Thermal Intelligence',
    body: 'Predictive thermal management routes coolant intelligently between the engine, battery, brakes, and intercoolers based on GPS terrain data.',
  },
  {
    label: '06',
    title: 'Driver Biometrics',
    body: 'Steering wheel sensors monitor grip pressure and physiological stress, subtly adapting suspension stiffness to keep you at peak performance.',
  },
]

export default function Technology() {
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
    <section id="technology" className="section tech" ref={sectionRef} aria-label="Technology">
      <div className="container--wide">
        <div className="tech__header">
          <span className="label fade-in fade-in-delay-1">Technology</span>
          <div className="divider fade-in fade-in-delay-1" />
          <h2 className="display-lg tech__title fade-in fade-in-delay-2">
            Intelligence <br />
            <em>Engineered In</em>
          </h2>
          <p className="body-lg tech__subtitle fade-in fade-in-delay-3">
            Not electronics bolted on — technology woven into the DNA of every system,
            every sensor, every surface.
          </p>
        </div>

        <div className="tech__grid">
          {techs.map((t, i) => (
            <article
              className={`tech__card fade-in fade-in-delay-${(i % 3) + 2}`}
              key={t.label}
            >
              <span className="tech__num label">{t.label}</span>
              <div className="tech__card-top">
                <div className="tech__card-dot" aria-hidden="true" />
              </div>
              <h3 className="tech__card-title">{t.title}</h3>
              <p className="body-sm tech__card-body">{t.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
