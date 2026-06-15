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

      {/* Noise overlay */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.025,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        backgroundSize: '200px 200px', pointerEvents: 'none',
      }} />

      {/* Subtle radial glow behind headline */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -58%)',
        width: 700, height: 400,
        background: 'radial-gradient(ellipse at center, rgba(232,146,10,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          textAlign: 'center', padding: '110px 0 90px',
        }}>

          {/* Eyebrow label */}
          <div style={{
            animation: 'hero-sub-in 0.7s var(--ease-out) 0s both',
            display: 'inline-flex', alignItems: 'center', gap: 10,
            marginBottom: 32,
          }}>
            <span style={{
              display: 'block', width: 28, height: 1.5,
              background: 'var(--amber)', borderRadius: 2,
            }} />
            <span style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 11, fontWeight: 600, letterSpacing: '3px',
              textTransform: 'uppercase', color: 'var(--amber)',
            }}>
              Food Pre-Order Platform
            </span>
            <span style={{
              display: 'block', width: 28, height: 1.5,
              background: 'var(--amber)', borderRadius: 2,
            }} />
          </div>

          {/* Headline — each line in overflow:hidden wrapper for reveal */}
          <div style={{ maxWidth: 780, marginBottom: 36 }}>

            {/* Line 1 */}
            <div style={{ overflow: 'hidden', lineHeight: 1.0, marginBottom: 2 }}>
              <h1 style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 'clamp(44px, 6.5vw, 88px)',
                fontWeight: 800,
                color: 'white',
                lineHeight: 1.05,
                letterSpacing: '-1px',
                margin: 0,
                animation: 'hero-line-up 0.85s cubic-bezier(0.16,1,0.3,1) 0.15s both',
              }}>
                Skip the Queue.
              </h1>
            </div>

            {/* Line 2 */}
            <div style={{ overflow: 'hidden', lineHeight: 1.0, marginBottom: 2 }}>
              <h1 style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 'clamp(44px, 6.5vw, 88px)',
                fontWeight: 900,
                fontStyle: 'italic',
                color: 'var(--amber)',
                lineHeight: 1.05,
                letterSpacing: '-1px',
                margin: 0,
                animation: 'hero-line-up 0.85s cubic-bezier(0.16,1,0.3,1) 0.32s both, amber-flicker 4s ease-in-out 1.5s infinite',
              }}>
                Order Ahead.
              </h1>
            </div>

            {/* Line 3 */}
            <div style={{ overflow: 'hidden', lineHeight: 1.0 }}>
              <h1 style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 'clamp(44px, 6.5vw, 88px)',
                fontWeight: 800,
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.05,
                letterSpacing: '-1px',
                margin: 0,
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
            <div style={{ width: 40, height: 1, background: 'rgba(255,255,255,0.12)' }} />
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--amber)' }} />
            <div style={{ width: 40, height: 1, background: 'rgba(255,255,255,0.12)' }} />
          </div>

          {/* Subtext */}
          <p style={{
            animation: 'hero-sub-in 0.75s var(--ease-out) 0.78s both',
            fontFamily: 'Poppins, sans-serif',
            fontSize: 16, color: 'rgba(255,255,255,0.48)',
            lineHeight: 1.85, maxWidth: 500,
            fontWeight: 400, letterSpacing: '0.1px', margin: '0 0 44px',
          }}>
            Zupta connects you with your favourite local food vendors.
            Pre-order in seconds, pick up when it&apos;s hot.
            No waiting. No stress. Just food.
          </p>

          {/* CTA buttons */}
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

      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 120,
        background: 'linear-gradient(transparent, rgba(9,7,26,0.3))',
        pointerEvents: 'none',
      }} />
    </section>
  )
}
