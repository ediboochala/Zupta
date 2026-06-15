'use client'
import { useEffect } from 'react'

export default function ScrollEffects() {
  useEffect(() => {
    // ── Custom cursor ──────────────────────────────────────────────────
    const dot  = document.getElementById('cursor-dot')
    const ring = document.getElementById('cursor-ring')
    let mx = 0, my = 0, rx = 0, ry = 0
    let rafCursor: number

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      if (dot) { dot.style.left = mx + 'px'; dot.style.top = my + 'px' }
    }
    window.addEventListener('mousemove', onMouseMove)

    const animRing = () => {
      rx += (mx - rx) * 0.1
      ry += (my - ry) * 0.1
      if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px' }
      rafCursor = requestAnimationFrame(animRing)
    }
    animRing()

    // Cursor scale on interactive elements
    const interactives = document.querySelectorAll('a, button, .btn, .faq-q, .vendor-card, .blog-card, .blog-card-featured, .how-step, .feature-card')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', () => {
        if (ring) { ring.style.width = '52px'; ring.style.height = '52px'; ring.style.borderColor = 'rgba(232,146,10,0.7)' }
        if (dot)  dot.style.transform = 'translate(-50%,-50%) scale(0)'
      })
      el.addEventListener('mouseleave', () => {
        if (ring) { ring.style.width = '30px'; ring.style.height = '30px'; ring.style.borderColor = 'rgba(232,146,10,0.55)' }
        if (dot)  dot.style.transform = 'translate(-50%,-50%) scale(1)'
      })
    })

    // ── Magnetic button effect ─────────────────────────────────────────
    const magneticBtns = document.querySelectorAll<HTMLElement>('.btn-primary, .btn-white')
    magneticBtns.forEach(btn => {
      const onMove = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top  - rect.height / 2
        btn.style.transform = `translate(${x * 0.18}px, ${y * 0.28}px)`
        btn.style.transition = 'transform 0.1s ease'
      }
      const onLeave = () => {
        btn.style.transform = ''
        btn.style.transition = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)'
      }
      btn.addEventListener('mousemove', onMove)
      btn.addEventListener('mouseleave', onLeave)
    })

    // ── Scroll progress + back-to-top ──────────────────────────────────
    const progress = document.getElementById('scroll-progress')
    const backTop  = document.getElementById('back-top')

    const onScroll = () => {
      const s = document.documentElement.scrollTop
      const h = document.documentElement.scrollHeight - document.documentElement.clientHeight
      if (progress) progress.style.width = (s / h * 100) + '%'
      if (backTop)  backTop.classList.toggle('visible', s > 400)

      // Parallax hero orbs
      const orbs = document.querySelectorAll<HTMLElement>('.hero-orb')
      orbs.forEach((orb, i) => {
        orb.style.transform = `translateY(${s * (0.07 + i * 0.04)}px)`
      })

      // Subtle hero phone parallax
      const phone = document.querySelector<HTMLElement>('.hero-phone')
      if (phone) phone.style.transform = `translateY(${s * 0.04}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // ── Scroll reveal (IntersectionObserver) ───────────────────────────
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
      },
      { threshold: 0.10, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
      .forEach(el => observer.observe(el))

    // ── Animated stat counters ─────────────────────────────────────────
    const animateCounter = (el: HTMLElement) => {
      const target   = parseInt(el.dataset.target || '0')
      const suffix   = el.dataset.suffix || ''
      const duration = 1800
      const steps    = 60
      const inc      = target / steps
      let   current  = 0
      let   frame    = 0

      const tick = () => {
        frame++
        // ease-out curve
        const progress = frame / steps
        const eased    = 1 - Math.pow(1 - progress, 3)
        current        = Math.round(eased * target)
        el.textContent = current.toLocaleString() + suffix

        if (frame < steps) {
          setTimeout(tick, duration / steps)
        } else {
          el.textContent = target.toLocaleString() + suffix
        }
      }
      tick()
    }

    const statsGrid = document.querySelector('.stats-grid')
    if (statsGrid) {
      const statsObs = new IntersectionObserver(
        entries => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              e.currentTarget.querySelectorAll<HTMLElement>('[data-target]').forEach(animateCounter)
              statsObs.unobserve(e.currentTarget)
            }
          })
        },
        { threshold: 0.3 }
      )
      statsObs.observe(statsGrid)
    }

    // ── Stagger children in grids ──────────────────────────────────────
    document.querySelectorAll('.blog-grid, .features-grid, .vendors-grid, .how-grid, .pricing-grid').forEach(grid => {
      (grid as HTMLElement).querySelectorAll<HTMLElement>(':scope > *').forEach((child, i) => {
        if (!child.style.transitionDelay) {
          child.style.transitionDelay = `${i * 0.07}s`
        }
      })
    })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafCursor)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div id="scroll-progress" />
      <div id="cursor-dot" />
      <div id="cursor-ring" />
      <button
        id="back-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  )
}
