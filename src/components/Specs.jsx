import { useEffect, useRef } from 'react'
import './Specs.css'

const specs = [
  { category: 'Powertrain', items: [
    ['Engine', 'V12 Twin-Turbo · 6.2L'],
    ['Power', '710 HP @ 7,200 RPM'],
    ['Torque', '850 Nm @ 3,800 RPM'],
    ['Transmission', '8-Speed Dual-Clutch PDK'],
    ['Drivetrain', 'All-Wheel Drive · Torque Vectoring'],
  ]},
  { category: 'Performance', items: [
    ['0 – 100 km/h', '3.1 seconds'],
    ['0 – 200 km/h', '7.4 seconds'],
    ['Top Speed', '330 km/h (limited)'],
    ['Nürburgring', '6:41.3 (production record)'],
    ['Braking 100–0', '28.4 metres'],
  ]},
  { category: 'Chassis', items: [
    ['Construction', 'Carbon fibre monocoque'],
    ['Suspension', 'Active magnetic dampers'],
    ['Brakes Front', 'Carbon ceramic · 420mm · 6-piston'],
    ['Brakes Rear', 'Carbon ceramic · 380mm · 4-piston'],
    ['Wheels', 'Forged magnesium · 21" front / 22" rear'],
  ]},
  { category: 'Dimensions', items: [
    ['Length', '4,820 mm'],
    ['Width', '2,040 mm (mirrors inc.)'],
    ['Height', '1,185 mm'],
    ['Wheelbase', '2,800 mm'],
    ['Kerb Weight', '1,480 kg (DIN)'],
  ]},
]

export default function Specs() {
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
    <section id="specs" className="section specs" ref={sectionRef} aria-label="Technical specifications">
      <div className="container">
        <div className="specs__header">
          <span className="label fade-in fade-in-delay-1">Technical Specifications</span>
          <div className="divider fade-in fade-in-delay-1" />
          <h2 className="display-lg specs__title fade-in fade-in-delay-2">
            Every Number<br /><em>Has a Purpose</em>
          </h2>
        </div>

        <div className="specs__grid">
          {specs.map((group, gi) => (
            <div className={`specs__group fade-in fade-in-delay-${gi + 2}`} key={group.category}>
              <h3 className="specs__cat label">{group.category}</h3>
              <dl className="specs__list">
                {group.items.map(([key, val]) => (
                  <div className="specs__row" key={key}>
                    <dt className="specs__key">{key}</dt>
                    <dd className="specs__val">{val}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
