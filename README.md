# APEX GTR — Premium Car Landing Page

A world-class luxury automotive landing page inspired by Apple's product pages.

## Tech Stack
- React 18 + Vite 5
- Custom CSS (no Tailwind dependency)
- HTML5 Canvas for frame animation
- Intersection Observer for scroll animations
- CSS custom properties for theming

## Quick Start

```bash
npm install
npm run dev
```

## Adding Car Images (Frame Animation)

The hero section uses an HTML5 canvas image-sequence animation.

1. Place your 64 images in `/public/frames/`
2. Name them: `frame001.jpg` through `frame064.jpg`
3. Recommended resolution: 1920×1080px or 2560×1440px
4. Format: JPEG (compressed for performance)

The canvas will:
- Preload the first 10 frames immediately
- Load remaining frames lazily in the background
- Animate based on scroll progress through the hero section

## Project Structure

```
apex-gtr/
├── public/
│   ├── frames/          ← Place frame001.jpg to frame240.jpg here
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx + .css
│   │   ├── Hero.jsx + .css         ← Canvas animation
│   │   ├── Performance.jsx + .css
│   │   ├── DesignSection.jsx + .css
│   │   ├── Interior.jsx + .css
│   │   ├── Storytelling.jsx + .css ← Pinned scroll section
│   │   ├── Technology.jsx + .css
│   │   ├── Specs.jsx + .css
│   │   ├── LimitedEdition.jsx + .css
│   │   └── FinalCTA.jsx + .css
│   ├── styles/
│   │   └── global.css              ← Design tokens + utilities
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## Customization

### Colors (src/styles/global.css)
```css
--c-gold: #C9A84C;        /* Primary accent */
--c-bg: #080808;           /* Background */
```

### Sections
Each section is a self-contained component. Edit content directly in each `.jsx` file.

## Performance

- Lazy loading for canvas frames
- Passive event listeners for scroll
- CSS contain for layout performance
- Minimal JS bundle

## Build for Production

```bash
npm run build
npm run preview
```
