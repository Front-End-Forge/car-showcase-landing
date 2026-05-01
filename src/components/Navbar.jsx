import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Performance', 'Design', 'Interior', 'Technology', 'Specs']

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="navbar__inner">
          {/* Logo */}
          <a href="#" className="navbar__logo" aria-label="APEX GTR Home">
            <span className="navbar__logo-text">APEX</span>
            <span className="navbar__logo-sub">GTR</span>
          </a>

          {/* Desktop Links */}
          <ul className="navbar__links" role="list">
            {links.map(link => (
              <li key={link}>
                <button
                  className="navbar__link"
                  onClick={() => scrollTo(link)}
                  aria-label={`Go to ${link} section`}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="navbar__cta">
            <button
              className="btn btn-primary navbar__btn"
              onClick={() => scrollTo('limited-edition')}
            >
              Reserve
            </button>
          </div>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <ul>
          {links.map(link => (
            <li key={link}>
              <button onClick={() => scrollTo(link)}>{link}</button>
            </li>
          ))}
          <li>
            <button className="mobile-menu__reserve" onClick={() => scrollTo('limited-edition')}>
              Reserve Now
            </button>
          </li>
        </ul>
      </div>
    </>
  )
}
