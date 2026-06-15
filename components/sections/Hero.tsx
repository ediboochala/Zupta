interface HeroProps {
  onOrderClick: () => void
}

export default function Hero({ onOrderClick }: HeroProps) {
  return (
    <section id="hero" className="hero-section">
      {/* Ambient orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      {/* Subtle noise overlay */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.025,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        backgroundSize: '200px 200px', pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div
          className="hero-grid"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '100px 0 80px' }}
        >

          {/* ── Copy ── */}
          <div style={{ animation: 'fade-up 0.9s var(--ease-out) 0.1s both', maxWidth: 700 }}>

            {/* Main headline */}
            <h1 style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(40px, 5.2vw, 68px)',
              fontWeight: 900,
              color: 'white',
              lineHeight: 1.05,
              letterSpacing: '-2.5px',
              marginBottom: 24,
            }}>
              Skip the Queue.
              <span style={{ display: 'block', color: 'var(--amber)', marginTop: 4 }}>
                Order Ahead.
              </span>
              <span style={{ color: 'rgba(255,255,255,0.78)' }}>Eat Fresh.</span>
            </h1>

            <p style={{
              fontSize: 16, color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.85, maxWidth: 540,
              fontWeight: 400, letterSpacing: '0.1px', margin: '0 auto 40px',
            }}>
              Zupta connects you with your favourite local food vendors.
              Pre-order in seconds, pick up when it&apos;s hot.
              No waiting. No stress. Just food.
            </p>

            {/* CTA buttons */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
              <button
                className="btn btn-primary"
                style={{ fontSize: 15.5, padding: '16px 36px' }}
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
      </div>

      {/* Bottom fade-out edge */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 120,
        background: 'linear-gradient(transparent, rgba(9,7,26,0.3))',
        pointerEvents: 'none',
      }} />
    </section>
  )
}
