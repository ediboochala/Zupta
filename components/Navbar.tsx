'use client'
import { useEffect, useState } from 'react'
import { NAV_LINKS } from '@/lib/data'

interface NavbarProps {
  onOrderClick: () => void
}

export default function Navbar({ onOrderClick }: NavbarProps) {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [activeLink, setActive]   = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: offset, behavior: 'smooth' })
    }
    setActive(href)
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32 }}>

            {/* Logo */}
            <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <img
                src="/logo.png"
                alt="Zupta"
                style={{ height: 38, width: 'auto', objectFit: 'contain', display: 'block' }}
              />
            </a>

            {/* Desktop links */}
            <ul className="nav-links-desktop" style={{ display: 'flex', alignItems: 'center', gap: 34, listStyle: 'none' }}>
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <button
                    className="nav-link"
                    onClick={() => scrollTo(l.href)}
                    style={{
                      background: 'none', border: 'none',
                      cursor: 'pointer', fontFamily: 'inherit',
                      color: activeLink === l.href ? 'white' : undefined,
                    }}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="nav-cta-desktop" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <button
                className="btn btn-ghost"
                style={{ padding: '9px 20px', fontSize: 13.5 }}
                onClick={onOrderClick}
              >
                Sign In
              </button>
              <button
                className="btn btn-primary"
                style={{ padding: '9px 20px', fontSize: 13.5 }}
                onClick={onOrderClick}
              >
                Get Started
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="mobile-menu-btn"
              style={{ display: 'none', background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: 6, flexDirection: 'column', gap: 5 }}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              {[0, 1, 2].map(i => (
                <span key={i} style={{ display: 'block', width: 22, height: 1.5, background: 'rgba(255,255,255,0.8)', borderRadius: 2 }} />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 1200,
          background: 'rgba(9,7,26,0.97)', backdropFilter: 'blur(16px)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 36,
          animation: 'fade-in 0.25s ease',
        }}>
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'absolute', top: 22, right: 22,
              background: 'rgba(255,255,255,0.08)', border: 'none', color: 'rgba(255,255,255,0.7)',
              fontSize: 18, cursor: 'pointer', width: 40, height: 40,
              borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            ✕
          </button>

          {/* Brand mark */}
          <div style={{ marginBottom: 12 }}>
            <img src="/logo.png" alt="Zupta" style={{ height: 44, width: 'auto', objectFit: 'contain' }} />
          </div>

          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 26, fontWeight: 700, color: 'rgba(255,255,255,0.85)',
                background: 'none', border: 'none', cursor: 'pointer',
                transition: 'color 0.2s ease', letterSpacing: '-0.5px',
              }}
              onMouseEnter={e => { (e.target as HTMLButtonElement).style.color = 'var(--amber)' }}
              onMouseLeave={e => { (e.target as HTMLButtonElement).style.color = 'rgba(255,255,255,0.85)' }}
            >
              {l.label}
            </button>
          ))}

          <button
            className="btn btn-primary"
            style={{ fontSize: 16, padding: '16px 40px', marginTop: 8 }}
            onClick={() => { onOrderClick(); setMenuOpen(false) }}
          >
            Pre-Order Now
          </button>
        </div>
      )}
    </>
  )
}
