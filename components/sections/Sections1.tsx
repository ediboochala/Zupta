import { STATS, HOW_STEPS, FEATURES, VENDORS } from '@/lib/data'

/* ── STATS ──────────────────────────────────────────────────────────── */
export function Stats() {
  return (
    <section className="stats-section">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }}>
          {STATS.map((s, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                textAlign: 'center',
                padding: '8px 36px',
                borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              <span
                className="stat-number"
                data-target={s.target}
                data-suffix={s.suffix}
              >
                0{s.suffix}
              </span>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── HOW IT WORKS ───────────────────────────────────────────────────── */
export function HowItWorks() {
  return (
    <section id="how" className="section" style={{ background: 'var(--cream)' }}>
      <div className="container">

        <div style={{ textAlign: 'center', marginBottom: 72 }} className="reveal">
          <div className="tag">The Process</div>
          <h2 className="section-title">
            Four steps to a <span className="highlight">queue-free lunch</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            From discovery to delicious — the whole process takes less than two minutes.
          </p>
        </div>

        <div
          className="how-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 4, position: 'relative' }}
        >
          {/* Connector line */}
          <div style={{
            position: 'absolute', top: 56, left: 'calc(12.5% + 52px)', right: 'calc(12.5% + 52px)',
            height: 1,
            background: 'linear-gradient(90deg, var(--amber), rgba(232,146,10,0.2), var(--amber))',
            opacity: 0.4, zIndex: 0,
          }} />

          {HOW_STEPS.map((step, i) => (
            <div
              key={i}
              className="how-step reveal"
              style={{ margin: 4, transitionDelay: `${(i + 1) * 0.1}s` }}
            >
              <div className="how-step-num">{step.num}</div>
              <div className="how-step-icon">{step.icon}</div>
              <div style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 16, fontWeight: 700, color: 'var(--ink)', marginBottom: 10,
              }}>
                {step.title}
              </div>
              <div style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.7 }}>{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── FEATURES ───────────────────────────────────────────────────────── */
export function Features() {
  return (
    <section id="features" className="section" style={{ background: 'var(--white)' }}>
      <div className="container">

        <div style={{ textAlign: 'center', marginBottom: 72 }} className="reveal">
          <div className="tag">What We Offer</div>
          <h2 className="section-title">
            Built for the way <span className="highlight">Nigerians actually eat</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Fast, affordable, reliable — designed specifically for the Nigerian lunch experience.
          </p>
        </div>

        <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className={`feature-card${f.featured ? ' featured' : ''} reveal`}
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="feature-icon">{f.icon}</div>

              <div style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 15, fontWeight: 700,
                color: f.featured ? 'white' : 'var(--ink)', marginBottom: 9,
              }}>
                {f.title}
              </div>

              <div style={{
                fontSize: 13, lineHeight: 1.75,
                color: f.featured ? 'rgba(255,255,255,0.55)' : 'var(--muted)',
              }}>
                {f.desc}
              </div>

              <a style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                color: 'var(--amber)', fontSize: 12.5, fontWeight: 600,
                marginTop: 18, textDecoration: 'none',
                transition: 'gap var(--t)', cursor: 'pointer',
                letterSpacing: '0.2px',
              }}>
                {f.link} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── APP SHOWCASE ───────────────────────────────────────────────────── */
export function AppShowcase({ onOrderClick }: { onOrderClick: () => void }) {
  return (
    <section id="app-showcase" className="section" style={{ background: 'var(--navy)', position: 'relative', overflow: 'hidden' }}>

      {/* Background radial accents */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 70% 50%, rgba(34,22,99,0.5) 0%, transparent 65%), radial-gradient(ellipse at 15% 80%, rgba(232,146,10,0.12) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          className="showcase-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: 80 }}
        >

          {/* UI Cards panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, animation: 'fade-up 0.9s var(--ease-out) 0.2s both' }}>

            {/* Live order card */}
            <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: '18px 20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 600 }}>📍 Abuja · Live Order</span>
                <span style={{ background: 'rgba(74,222,128,0.15)', color: '#4ADE80', fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 99 }}>● Cooking</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 48, height: 48, background: 'var(--amber)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0 }}>🍛</div>
                <div>
                  <div style={{ color: 'white', fontWeight: 700, fontSize: 15, fontFamily: 'Poppins, sans-serif' }}>Mama Nkechi&apos;s Jollof</div>
                  <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12.5, marginTop: 2 }}>Ready in ~8 minutes · CBD, Abuja</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                {[['✅', 'Ordered'], ['🍳', 'Cooking'], ['⏳', 'Ready']].map(([icon, label], i) => (
                  <div key={i} style={{ flex: 1, textAlign: 'center', padding: '8px 0', borderRadius: 10, background: i < 2 ? 'rgba(232,146,10,0.15)' : 'rgba(255,255,255,0.04)', color: i < 2 ? 'var(--amber)' : 'rgba(255,255,255,0.22)', fontSize: 10.5, fontWeight: 600 }}>
                    <div style={{ fontSize: 15, marginBottom: 3 }}>{icon}</div>
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {/* Pickup code */}
              <div style={{ background: 'var(--amber)', borderRadius: 20, padding: '20px 18px' }}>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 9.5, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '1.2px', fontWeight: 600 }}>Pickup Code</div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 36, fontWeight: 900, color: 'white', letterSpacing: '5px', lineHeight: 1, marginBottom: 8 }}>ZP42</div>
                <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 11.5 }}>Show at the counter</div>
              </div>

              {/* Rewards */}
              <div style={{ background: 'linear-gradient(135deg, var(--plum), var(--violet))', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: '20px 18px' }}>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 9.5, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '1.2px', fontWeight: 600 }}>Zupta Points</div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 36, fontWeight: 800, color: 'var(--amber)', lineHeight: 1, marginBottom: 8 }}>2,450</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11.5 }}>≈ ₦2,450 in value</div>
              </div>
            </div>

            {/* Monthly stats */}
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: '18px 24px', display: 'flex', justifyContent: 'space-between', gap: 16 }}>
              {[['18', 'Orders this month'], ['6.5 hrs', 'Time saved'], ['₦3,200', 'Rewards earned']].map(([val, label], i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 22, fontWeight: 800, color: 'white', lineHeight: 1, marginBottom: 5 }}>{val}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.38)', lineHeight: 1.45 }}>{label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Copy */}
          <div className="reveal-right" style={{ color: 'white' }}>
            <div className="tag" style={{ background: 'rgba(232,146,10,0.12)', borderColor: 'rgba(232,146,10,0.25)', color: 'var(--amber)' }}>
              The Zupta App
            </div>

            <h2 style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(28px, 3.6vw, 48px)',
              fontWeight: 800, lineHeight: 1.08,
              letterSpacing: '-1.5px', marginBottom: 18, color: 'white',
            }}>
              Your hunger,{' '}
              <span style={{ color: 'var(--amber)' }}>managed.</span>
            </h2>

            <p style={{ fontSize: 15.5, color: 'rgba(255,255,255,0.52)', lineHeight: 1.8, marginBottom: 36 }}>
              The Zupta app is designed for the way Nigerians actually eat — fast, intuitive and built for the lunch rush. From discovery to pickup in under 2 minutes.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 40 }}>
              {[
                ['⚡', 'Real-time order tracking', 'Watch your food go from order to oven to ready'],
                ['🔔', 'Smart pickup alerts', 'We ping you exactly when to leave for pickup'],
                ['💳', 'Multi-payment options', 'Pay with card, bank transfer or USSD'],
                ['🌙', 'Dark mode included', 'Easy on the eyes for evening and early morning orders'],
              ].map(([icon, title, desc], i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                    background: 'rgba(232,146,10,0.13)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                  }}>
                    {icon}
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: 13.5, color: 'white', marginBottom: 2 }}>{title}</strong>
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={onOrderClick}>Download Free →</button>
              <button
                className="btn btn-ghost"
                onClick={() => document.getElementById('vendors')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Browse Vendors
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── VENDORS ────────────────────────────────────────────────────────── */
export function Vendors({ onOrderClick }: { onOrderClick: () => void }) {
  return (
    <section id="vendors" className="section" style={{ background: 'var(--white)' }}>
      <div className="container">

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56, flexWrap: 'wrap', gap: 20 }}>
          <div className="reveal">
            <div className="tag">Trusted Vendors</div>
            <h2 className="section-title">
              The best of Abuja&apos;s{' '}
              <span className="highlight">local food scene</span>
            </h2>
          </div>
          <div className="reveal">
            <button
              className="btn btn-secondary"
              style={{ borderColor: 'rgba(9,7,26,0.14)', fontSize: 13.5 }}
              onClick={onOrderClick}
            >
              View all 340+ vendors →
            </button>
          </div>
        </div>

        <div className="vendors-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22 }}>
          {VENDORS.map((v, i) => (
            <div key={i} className="vendor-card reveal" style={{ transitionDelay: `${(i + 1) * 0.08}s` }}>
              <div className="vendor-hero" style={{ background: v.bg }}>
                <span>{v.emoji}</span>
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: 60,
                  background: 'linear-gradient(transparent, rgba(9,7,26,0.45))',
                }} />
              </div>
              <div style={{ padding: '20px 22px' }}>
                <div style={{ fontSize: 11, color: 'var(--amber)', fontWeight: 600, marginBottom: 5, letterSpacing: '0.5px' }}>
                  {v.type}
                </div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>
                  {v.name}
                </div>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  fontSize: 12.5, color: 'var(--muted)', marginBottom: 16, flexWrap: 'wrap',
                }}>
                  <span>⭐ {v.rating} <span style={{ opacity: 0.65 }}>({v.reviews} reviews)</span></span>
                  <span>⏱ {v.time}</span>
                  <span>📍 {v.area}</span>
                </div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {v.tags.map((tag, j) => (
                    <div key={j} className="vendor-tag">{tag}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div style={{
          marginTop: 52, background: 'var(--cream)', borderRadius: 'var(--r-xl)',
          padding: '36px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 24, flexWrap: 'wrap', border: '1px solid var(--line)',
        }} className="reveal">
          <div>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 17, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>
              Are you a food vendor?
            </div>
            <div style={{ fontSize: 14, color: 'var(--muted)', maxWidth: 400 }}>
              Join 340+ local vendors on Zupta and reach thousands of hungry customers in your city.
            </div>
          </div>
          <button className="btn btn-primary" onClick={onOrderClick} style={{ whiteSpace: 'nowrap' }}>
            Register Your Business →
          </button>
        </div>

      </div>
    </section>
  )
}
