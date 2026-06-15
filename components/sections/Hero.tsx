interface HeroProps {
  onOrderClick: () => void
}

export default function Hero({ onOrderClick }: HeroProps) {
  return (
    <section id="hero" className="hero-section" style={{ overflow: 'hidden' }}>

      {/* ── Video background ── */}
      <div style={{
        position: 'absolute', inset: 0,
        overflow: 'hidden', zIndex: 0,
      }}>
        <iframe
          src="https://www.youtube.com/embed/SnyKLOgtDxg?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=SnyKLOgtDxg&playsinline=1&modestbranding=1&start=30"
          title="Background video"
          allow="autoplay; encrypted-media"
          style={{
            position: 'absolute',
            top: '50%', left: '50%',
            /* Cover trick: maintain 16:9, always fill container */
            width: '177.78vh',   /* 100vh × 16/9 */
            height: '56.25vw',  /* 100vw × 9/16 */
            minWidth: '100%',
            minHeight: '100%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            pointerEvents: 'none',
          }}
        />
        {/* Dark overlay: ink base + vignette for readability */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(9,7,26,0.72) 0%, rgba(9,7,26,0.55) 50%, rgba(9,7,26,0.80) 100%)',
        }} />
        {/* Radial vignette on edges */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(9,7,26,0.6) 100%)',
        }} />
        {/* Amber warm tint on the lower portion */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 50% 80%, rgba(232,146,10,0.08) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
      </div>

      {/* Ambient orbs (sit above video, below content) */}
      <div className="hero-orb hero-orb-1" style={{ opacity: 0.35 }} />
      <div className="hero-orb hero-orb-2" style={{ opacity: 0.25 }} />

      {/* Noise grain overlay */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.035, zIndex: 1,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        backgroundSize: '200px 200px', pointerEvents: 'none',
      }} />

      {/* ── Content ── */}
      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          textAlign: 'center', padding: '120px 0 100px',
        }}>

          {/* Eyebrow */}
          <div style={{
            animation: 'hero-sub-in 0.7s var(--ease-out) 0s both',
            display: 'inline-flex', alignItems: 'center', gap: 10,
            marginBottom: 36,
          }}>
            <span style={{ display: 'block', width: 28, height: 1.5, background: 'var(--amber)', borderRadius: 2 }} />
            <span style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 11, fontWeight: 600, letterSpacing: '3px',
              textTransform: 'uppercase', color: 'var(--amber)',
            }}>
              Food Pre-Order Platform
            </span>
            <span style={{ display: 'block', width: 28, height: 1.5, background: 'var(--amber)', borderRadius: 2 }} />
          </div>

          {/* Headline — staggered line reveal */}
          <div style={{ maxWidth: 800, marginBottom: 36 }}>

            <div style={{ overflow: 'hidden', marginBottom: 4 }}>
              <h1 style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 'clamp(44px, 6.5vw, 88px)',
                fontWeight: 800, color: 'white',
                lineHeight: 1.05, letterSpacing: '-1px', margin: 0,
                animation: 'hero-line-up 0.85s cubic-bezier(0.16,1,0.3,1) 0.15s both',
              }}>
                Skip the Queue.
              </h1>
            </div>

            <div style={{ overflow: 'hidden', marginBottom: 4 }}>
              <h1 style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 'clamp(44px, 6.5vw, 88px)',
                fontWeight: 900, fontStyle: 'italic',
                color: 'var(--amber)',
                lineHeight: 1.05, letterSpacing: '-1px', margin: 0,
                animation: 'hero-line-up 0.85s cubic-bezier(0.16,1,0.3,1) 0.32s both, amber-flicker 4s ease-in-out 1.5s infinite',
              }}>
                Order Ahead.
              </h1>
            </div>

            <div style={{ overflow: 'hidden' }}>
              <h1 style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 'clamp(44px, 6.5vw, 88px)',
                fontWeight: 800, color: 'rgba(255,255,255,0.52)',
                lineHeight: 1.05, letterSpacing: '-1px', margin: 0,
                animation: 'hero-line-up 0.85s cubic-bezier(0.16,1,0.3,1) 0.49s both',
              }}>
                Eat Fresh.
              </h1>
            </div>
          </div>

          {/* Divider */}
          <div style={{
            animation: 'hero-sub-in 0.7s var(--ease-out) 0.7s both',
            display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28,
          }}>
            <div style={{ width: 40, height: 1, background: 'rgba(255,255,255,0.15)' }} />
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--amber)' }} />
            <div style={{ width: 40, height: 1, background: 'rgba(255,255,255,0.15)' }} />
          </div>

          {/* Subtext */}
          <p style={{
            animation: 'hero-sub-in 0.75s var(--ease-out) 0.78s both',
            fontFamily: 'Poppins, sans-serif',
            fontSize: 16, color: 'rgba(255,255,255,0.52)',
            lineHeight: 1.85, maxWidth: 500,
            fontWeight: 400, letterSpacing: '0.1px', margin: '0 0 44px',
          }}>
            Zupta connects you with your favourite local food vendors.
            Pre-order in seconds, pick up when it&apos;s hot.
            No waiting. No stress. Just food.
          </p>

          {/* CTAs */}
          <div style={{
            animation: 'hero-cta-in 0.7s var(--ease-out) 1s both',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 14, flexWrap: 'wrap',
          }}>
            <button
              className="btn btn-primary"
              style={{ fontSize: 15.5, padding: '16px 38px' }}
              onClick={onOrderClick}
            >
              Pre-Order Now →
            </button>
            <button
              className="btn btn-ghost"
              style={{ fontSize: 15.5, padding: '16px 28px' }}
              onClick={() => {
                const el = document.getElementById('how')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              ▶ See How It Works
            </button>
          </div>

        </div>
      </div>

      {/* Bottom fade into next section */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 160,
        background: 'linear-gradient(transparent, var(--ink))',
        pointerEvents: 'none', zIndex: 2,
      }} />
    </section>
  )
}
