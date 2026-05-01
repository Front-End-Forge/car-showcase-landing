import { useEffect, useRef, useState } from 'react'
import './Hero.css'

const TOTAL_FRAMES = 240
const PRELOAD_COUNT = 10

export default function Hero() {
  const canvasRef = useRef(null)
  const imagesRef = useRef([])
  const frameRef = useRef(0)
  const rafRef = useRef(null)
  const loadedRef = useRef(0)
  const [canvasReady, setCanvasReady] = useState(false)
  const [heroVisible, setHeroVisible] = useState(false)
  const scrollSectionRef = useRef(null)

  // Frame path helper
  const framePath = (i) => {
    const n = String(i).padStart(3, '0')
    return `/frames/frame${n}.jpg`
  }

  // Draw specific frame on canvas
  const drawFrame = (index) => {
    const canvas = canvasRef.current
    const img = imagesRef.current[index]
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return

    const ctx = canvas.getContext('2d')
    const { width, height } = canvas

    // Cover-fit: maintain aspect ratio
    const scale = Math.max(width / img.naturalWidth, height / img.naturalHeight)
    const sw = img.naturalWidth * scale
    const sh = img.naturalHeight * scale
    const sx = (width - sw) / 2
    const sy = (height - sh) / 2

    ctx.clearRect(0, 0, width, height)
    ctx.drawImage(img, sx, sy, sw, sh)
  }

  // Resize canvas
  const resizeCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    drawFrame(frameRef.current)
  }

  // Preload first N frames eagerly, rest lazily
  useEffect(() => {
    imagesRef.current = new Array(TOTAL_FRAMES).fill(null)

    const loadImage = (i) => {
      return new Promise((resolve) => {
        const img = new Image()
        img.src = framePath(i + 1)
        img.onload = () => {
          imagesRef.current[i] = img
          loadedRef.current++
          if (i === 0) {
            resizeCanvas()
            setCanvasReady(true)
            setTimeout(() => setHeroVisible(true), 100)
          }
          resolve()
        }
        img.onerror = () => {
          // Create fallback placeholder if frame doesn't exist
          imagesRef.current[i] = null
          loadedRef.current++
          resolve()
        }
      })
    }

    // Preload first frames immediately
    const preload = async () => {
      for (let i = 0; i < Math.min(PRELOAD_COUNT, TOTAL_FRAMES); i++) {
        await loadImage(i)
      }
      // Then load rest in background
      for (let i = PRELOAD_COUNT; i < TOTAL_FRAMES; i++) {
        loadImage(i)
      }
    }

    preload()

    window.addEventListener('resize', resizeCanvas, { passive: true })
    return () => window.removeEventListener('resize', resizeCanvas)
  }, [])

  // Scroll-based frame animation
  useEffect(() => {
    const onScroll = () => {
      const section = scrollSectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const sectionHeight = section.offsetHeight - window.innerHeight
      const scrolled = -rect.top

      // Clamp progress 0→1
      const progress = Math.max(0, Math.min(1, scrolled / sectionHeight))
      const targetFrame = Math.floor(progress * (TOTAL_FRAMES - 1))

      if (targetFrame !== frameRef.current) {
        frameRef.current = targetFrame
        drawFrame(targetFrame)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="hero" ref={scrollSectionRef} id="hero" aria-label="Hero">
      {/* Sticky canvas container */}
      <div className="hero__sticky">
        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="hero__canvas"
          aria-hidden="true"
        />

        {/* Gradient overlays */}
        <div className="hero__gradient-bottom" aria-hidden="true" />
        <div className="hero__gradient-top" aria-hidden="true" />
        <div className="hero__gradient-sides" aria-hidden="true" />

        {/* Content */}
        <div className={`hero__content ${heroVisible ? 'hero__content--visible' : ''}`}>
          <div className="hero__eyebrow label">Introducing</div>

          <h1 className="hero__title display-xl">
            <span className="hero__title-main">APEX</span>
            <em className="hero__title-sub">GTR</em>
          </h1>

          <p className="hero__tagline">
            Engineered Beyond Limits.
          </p>

          <div className="hero__actions">
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById('performance')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Explore APEX GTR"
            >
              Explore Now
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => document.getElementById('limited-edition')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Book a test drive"
            >
              Book Test Drive
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="hero__scroll-hint" aria-hidden="true">
            <div className="hero__scroll-line" />
            <span className="label">Scroll</span>
          </div>
        </div>

        {/* Corner specs */}
        <div className="hero__corner-specs" aria-label="Key specifications">
          <div className="hero__spec">
            <span className="hero__spec-num">710</span>
            <span className="hero__spec-unit label">HP</span>
          </div>
          <div className="hero__spec-divider" aria-hidden="true" />
          <div className="hero__spec">
            <span className="hero__spec-num">3.1</span>
            <span className="hero__spec-unit label">0–100s</span>
          </div>
          <div className="hero__spec-divider" aria-hidden="true" />
          <div className="hero__spec">
            <span className="hero__spec-num">330</span>
            <span className="hero__spec-unit label">km/h</span>
          </div>
        </div>
      </div>
    </section>
  )
}
