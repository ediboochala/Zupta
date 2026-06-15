'use client'
import { useState } from 'react'
import { TESTIMONIALS, PRICING_PLANS, LOCATIONS, TRUST_ITEMS, BLOG_POSTS, FAQ_ITEMS, FOOTER_LINKS } from '@/lib/data'

/* ── TESTIMONIALS ───────────────────────────────────────────────────── */
export function Testimonials() {
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS]
  return (
    <section id="testimonials" className="section" style={{ background: 'var(--cream)', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }} className="reveal">
          <div className="tag">Real Reviews</div>
          <h2 className="section-title">
            Nigerians love <span className="highlight">skipping the queue</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Over 12,000 customers have already made Zupta part of their daily routine.
          </p>
        </div>
      </div>
      <div className="testimonials-wrap">
        <div className="testimonials-track">
          {doubled.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div style={{ display: 'flex', gap: 2, marginBottom: 14, fontSize: 13, color: 'var(--amber)', letterSpacing: 2 }}>
                ★★★★★
              </div>
              <p style={{ fontSize: 13.5, lineHeight: 1.8, color: 'var(--body)', marginBottom: 22, fontStyle: 'italic' }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 38, height: 38, borderRadius: '50%',
                  background: t.color, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: 13, fontWeight: 700,
                  color: 'white', flexShrink: 0,
                  fontFamily: 'Poppins, sans-serif',
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>{t.name}</div>
                  <div style={{ fontSize: 11.5, color: 'var(--muted)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── PRICING ────────────────────────────────────────────────────────── */
export function Pricing({ onOrderClick }: { onOrderClick: () => void }) {
  return (
    <section id="pricing" className="section" style={{ background: 'var(--white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center' }} className="reveal">
          <div className="tag">Simple Pricing</div>
          <h2 className="section-title">
            Pricing that <span className="highlight">makes sense</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            No hidden fees. No surprises. Straightforward pricing for customers and vendors alike.
          </p>
        </div>

        <div
          className="pricing-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22, alignItems: 'start', marginTop: 64 }}
        >
          {PRICING_PLANS.map((plan, i) => (
            <div
              key={i}
              className={`pricing-card${plan.featured ? ' featured' : ''} reveal`}
              style={{ transitionDelay: `${(i + 1) * 0.1}s` }}
            >
              {plan.badge && (
                <div className="pricing-badge">{plan.badge}</div>
              )}

              <div style={{
                fontSize: 11, fontWeight: 600, color: 'var(--amber)',
                marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1.5,
              }}>
                {plan.name}
              </div>

              <div style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 44, fontWeight: 900, lineHeight: 1,
                marginBottom: 6, letterSpacing: '-2px',
                color: plan.featured ? 'white' : 'var(--ink)',
              }}>
                <sup style={{ fontSize: 22, fontWeight: 600, verticalAlign: 'top', marginTop: 12, display: 'inline-block' }}>₦</sup>
                {plan.price}
              </div>

              <div style={{
                fontSize: 13, marginBottom: 28,
                color: plan.featured ? 'rgba(255,255,255,0.42)' : 'var(--muted)',
              }}>
                {plan.period}
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 13, marginBottom: 34 }}>
                {plan.features.map((f, j) => (
                  <li key={j} style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    fontSize: 13.5,
                    color: plan.featured ? 'rgba(255,255,255,0.82)' : 'var(--body)',
                    opacity: f.ok ? 1 : 0.3,
                  }}>
                    <span style={{ fontSize: 14, flexShrink: 0 }}>{f.ok ? '✅' : '❌'}</span>
                    {f.text}
                  </li>
                ))}
              </ul>

              <button
                className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}
                style={{
                  width: '100%', justifyContent: 'center',
                  borderColor: !plan.featured ? 'rgba(9,7,26,0.15)' : undefined,
                }}
                onClick={onOrderClick}
              >
                {plan.cta} {plan.featured ? '→' : ''}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── TRUST BADGES ───────────────────────────────────────────────────── */
export function Trust() {
  return (
    <section id="trust" style={{ background: 'var(--surface)', padding: '56px 0', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="container">
        <p style={{
          textAlign: 'center', fontSize: 11, fontWeight: 600, color: 'var(--muted)',
          letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 32,
        }} className="reveal">
          Trusted &amp; Secure
        </p>
        <div
          className="trust-grid"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}
        >
          {TRUST_ITEMS.map((item, i) => (
            <div key={i} className="trust-item reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
              <span style={{ fontSize: 24 }}>{item.icon}</span>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--ink)', whiteSpace: 'pre-line', lineHeight: 1.45 }}>
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── LOCATIONS ──────────────────────────────────────────────────────── */
export function Locations() {
  return (
    <section id="locations" className="section" style={{ background: 'var(--cream)' }}>
      <div className="container">
        <div className="locations-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>

          <div className="reveal-left">
            <div className="tag">Where We Are</div>
            <h2 className="section-title">
              Now live in <span className="highlight">Abuja</span>,<br />the heart of Nigeria
            </h2>
            <p className="section-sub" style={{ marginBottom: 36 }}>
              We launched in Abuja, FCT — and we&apos;re building the most reliable food pre-order experience the city has ever seen. More cities coming soon.
            </p>

            {/* Abuja card */}
            {LOCATIONS.filter(l => l.name === 'Abuja, FCT').map((loc, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 16,
                background: 'white', borderRadius: 'var(--r-md)',
                padding: '20px 24px', border: '1px solid var(--line)',
                boxShadow: 'var(--shadow-sm)', marginBottom: 14,
              }}>
                <span style={{ fontSize: 32 }}>{loc.flag}</span>
                <div>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, fontWeight: 700, color: 'var(--ink)' }}>{loc.name}</div>
                  <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 3 }}>{loc.detail}</div>
                </div>
                <div style={{
                  marginLeft: 'auto', fontSize: 11, fontWeight: 600, padding: '5px 14px',
                  borderRadius: 99, background: 'rgba(21,128,61,0.1)', color: '#15803D', whiteSpace: 'nowrap',
                }}>
                  ● Live
                </div>
              </div>
            ))}

            {/* Stats strip */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, marginTop: 6 }}>
              {[
                { n: '118', label: 'Verified vendors' },
                { n: '5,400+', label: 'Active customers' },
                { n: '98%', label: 'On-time pickup' },
              ].map((s, i) => (
                <div key={i} style={{ background: 'white', borderRadius: 'var(--r-md)', padding: '16px 14px', border: '1px solid var(--line)', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 20, fontWeight: 800, color: 'var(--amber)', letterSpacing: '-0.5px', lineHeight: 1, marginBottom: 5 }}>{s.n}</div>
                  <div style={{ fontSize: 11.5, color: 'var(--muted)', lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-right">
            <div className="location-map" style={{ height: 420, display: 'flex', flexDirection: 'column' }}>
              <div className="map-grid-lines" />

              {/* SVG Nigeria Map */}
              <svg
                viewBox="0 0 300 280"
                style={{ width: '100%', flex: 1, padding: '20px 24px' }}
                role="img"
                aria-label="Map of Nigeria showing Zupta coverage"
              >
                {/* Country fill */}
                <path
                  d="M 22,196 L 28,238 L 58,246 L 90,246 L 122,237 L 144,233 L 156,210 L 178,176 L 232,95 L 268,26 L 243,15 L 210,15 L 166,11 L 122,15 L 78,15 L 30,27 L 12,63 L 5,97 L 12,141 L 18,174 Z"
                  fill="rgba(34,22,99,0.55)"
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />

                {/* ── ABUJA (live) — N: 9.1°, E: 7.5° ── */}
                {/* Outer pulse ring */}
                <circle cx="112" cy="130" r="22" fill="rgba(232,146,10,0.1)" />
                <circle cx="112" cy="130" r="16" fill="rgba(232,146,10,0.15)" style={{ animation: 'pulse-ring 2.2s ease-out infinite' }} />
                {/* Pin dot */}
                <circle cx="112" cy="130" r="9" fill="var(--amber)" stroke="white" strokeWidth="2.5" />
                <circle cx="112" cy="130" r="4" fill="white" />
                {/* Label card background */}
                <rect x="126" y="114" width="132" height="36" rx="8" fill="rgba(9,7,26,0.7)" />
                <text x="136" y="129" fill="white" fontSize="11" fontWeight="700" fontFamily="Poppins,sans-serif">Abuja, FCT</text>
                <text x="136" y="143" fill="rgba(232,146,10,0.95)" fontSize="9.5" fontFamily="Poppins,sans-serif">● Live  ·  118 vendors  ·  5,400+ users</text>
              </svg>

              {/* Bottom label */}
              <div style={{ textAlign: 'center', padding: '8px 0 16px' }}>
                <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: 2.5, textTransform: 'uppercase' }}>
                  Federal Republic of Nigeria
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ── BLOG ───────────────────────────────────────────────────────────── */
const BLOG_CATEGORIES = ['All', 'Food Culture', 'Product', 'Vendor Spotlight', 'Data & Insights', 'Industry', 'Customer Stories', 'Health & Nutrition', 'Entrepreneurship', 'Tech & Innovation']

export function Blog() {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [selectedPost, setSelectedPost] = useState<typeof BLOG_POSTS[0] | null>(null)
  const featured = BLOG_POSTS.find(p => p.featured)
  const allRegular = BLOG_POSTS.filter(p => !p.featured)
  const visiblePosts = activeCategory === 'All' ? allRegular : allRegular.filter(p => p.cat === activeCategory)
  const showFeatured = featured && (activeCategory === 'All' || activeCategory === featured.cat)

  return (
    <section id="blog" style={{ background: 'var(--white)' }}>

      {/* ── Editorial header banner ── */}
      <div style={{ background: 'var(--ink)', padding: '72px 0 52px', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle dot texture */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='24' cy='24' r='1' fill='%23ffffff' fill-opacity='0.03'/%3E%3C/svg%3E\")",
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 28, flexWrap: 'wrap' }}>
            <div style={{ animation: 'fade-up 0.7s var(--ease-out) both' }}>
              <div className="tag" style={{ background: 'rgba(232,146,10,0.12)', color: 'var(--amber)', borderLeft: 'none', marginBottom: 16 }}>
                Zupta Stories
              </div>
              <h2 style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(32px, 4vw, 54px)', fontWeight: 900,
                color: 'white', lineHeight: 1.06, letterSpacing: '-2px', marginBottom: 14,
              }}>
                Insights &amp; <span style={{ color: 'var(--amber)' }}>perspectives</span>
              </h2>
              <p style={{ fontSize: 15.5, color: 'rgba(255,255,255,0.48)', lineHeight: 1.8, maxWidth: 540, margin: 0 }}>
                Food culture, vendor journeys, industry data and product deep-dives — everything you need to understand the future of food in Nigeria.
              </p>
            </div>
            <button
              className="btn btn-primary"
              style={{ fontSize: 13.5, flexShrink: 0, animation: 'fade-up 0.7s var(--ease-out) 0.15s both' }}
            >
              View all articles →
            </button>
          </div>
        </div>
      </div>

      {/* ── Category filter strip ── */}
      <div style={{ background: 'var(--surface)', borderBottom: '1px solid var(--line)', padding: '14px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
            {BLOG_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '6px 15px', borderRadius: 99, fontSize: 12, fontWeight: 600,
                  border: '1px solid', cursor: 'pointer', fontFamily: 'Poppins, sans-serif',
                  transition: 'all 0.2s ease',
                  background: activeCategory === cat ? 'var(--ink)' : 'white',
                  color: activeCategory === cat ? 'white' : 'var(--muted)',
                  borderColor: activeCategory === cat ? 'var(--ink)' : 'var(--line)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Blog content ── */}
      <div style={{ padding: '48px 0 80px' }}>
      <div className="container">

        {/* ── Featured post ── */}
        {showFeatured && (
          <div
            className="blog-card-featured"
            style={{ marginBottom: 22, animation: 'fade-up 0.7s var(--ease-out) 0.1s both', cursor: 'pointer' }}
            onClick={() => setSelectedPost(featured!)}
          >
            <div className="blog-thumb-featured" style={{ background: featured!.bg, position: 'relative' }}>
              <img src={featured!.img} alt={featured!.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
              {/* Title overlay at bottom of image */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2,
                background: 'linear-gradient(transparent, rgba(9,7,26,0.88))',
                padding: '40px 24px 20px',
              }}>
                <span style={{
                  background: 'var(--amber)', color: 'white',
                  fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 4,
                  letterSpacing: '0.5px', textTransform: 'uppercase', display: 'inline-block', marginBottom: 8,
                }}>
                  {featured!.cat}
                </span>
                <div style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: 'clamp(14px, 1.4vw, 17px)', fontWeight: 700,
                  color: 'white', lineHeight: 1.3, letterSpacing: '-0.2px',
                }}>
                  {featured!.title}
                </div>
              </div>
              <div style={{
                position: 'absolute', inset: 0, opacity: 0, zIndex: 3,
                background: 'rgba(9,7,26,0.45)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'opacity 0.3s ease',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '0' }}
              >
                <button style={{
                  background: 'var(--amber)', color: 'white', padding: '10px 24px',
                  borderRadius: 99, fontSize: 13.5, fontWeight: 600, border: 'none',
                  cursor: 'pointer', fontFamily: 'inherit',
                }}>
                  Read Article →
                </button>
              </div>
            </div>
            <div style={{ padding: '36px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
                <span style={{
                  background: 'rgba(232,146,10,0.1)', color: 'var(--amber)',
                  fontSize: 10.5, fontWeight: 700, padding: '4px 12px', borderRadius: 99,
                  letterSpacing: '0.5px',
                }}>
                  {featured!.cat}
                </span>
                <span style={{ fontSize: 12, color: 'var(--muted)' }}>{featured!.date}</span>
                <span style={{
                  background: 'rgba(232,146,10,0.08)', color: 'var(--amber)',
                  fontSize: 10, fontWeight: 600, padding: '2px 8px', borderRadius: 4,
                }}>
                  Featured
                </span>
              </div>
              <h3 style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(17px, 1.8vw, 22px)', fontWeight: 700,
                color: 'var(--ink)', lineHeight: 1.25, marginBottom: 12, letterSpacing: '-0.3px',
              }}>
                {featured!.title}
              </h3>
              <p style={{ fontSize: 14.5, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 28 }}>
                {featured!.excerpt}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: '50%',
                    background: featured!.authorColor, color: 'white',
                    fontSize: 12, fontWeight: 700,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Poppins, sans-serif',
                  }}>
                    {featured!.authorInitials}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>{featured!.author}</div>
                    <div style={{ fontSize: 11.5, color: 'var(--muted)' }}>{featured!.readTime}</div>
                  </div>
                </div>
                <button style={{
                  background: 'none', border: 'none', color: 'var(--amber)',
                  fontSize: 13.5, fontWeight: 600, cursor: 'pointer',
                  fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 6,
                }}>
                  Read Article →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── Articles grid ── */}
        {visiblePosts.length > 0 ? (
          <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22, marginBottom: 44 }}>
            {visiblePosts.map((post, i) => (
              <div
                key={i}
                className="blog-card"
                style={{ animation: `fade-up 0.6s var(--ease-out) ${(i * 0.08).toFixed(2)}s both`, cursor: 'pointer' }}
                onClick={() => setSelectedPost(post)}
              >
                <div className="blog-thumb" style={{ background: post.bg, position: 'relative' }}>
                  <img src={post.img} alt={post.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }} />
                  {/* Bottom gradient + title */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2,
                    background: 'linear-gradient(transparent, rgba(9,7,26,0.82))',
                    padding: '28px 16px 14px',
                  }}>
                    <span style={{
                      background: 'var(--amber)', color: 'white',
                      fontSize: 9, fontWeight: 700, padding: '2px 8px', borderRadius: 4,
                      letterSpacing: '0.5px', textTransform: 'uppercase', display: 'inline-block', marginBottom: 6,
                    }}>
                      {post.cat}
                    </span>
                    <div style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: 12.5, fontWeight: 700, color: 'white',
                      lineHeight: 1.35, letterSpacing: '-0.1px',
                    }}>
                      {post.title}
                    </div>
                  </div>
                  <div className="blog-thumb-overlay" style={{ zIndex: 3 }}>
                    <button style={{
                      background: 'var(--amber)', color: 'white', padding: '8px 22px',
                      borderRadius: 99, fontSize: 13, fontWeight: 600, border: 'none',
                      cursor: 'pointer', fontFamily: 'inherit',
                    }}>
                      Read →
                    </button>
                  </div>
                </div>
                <div style={{ padding: '22px 22px 18px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    <span style={{
                      background: 'rgba(232,146,10,0.09)', color: 'var(--amber)',
                      fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 99,
                      letterSpacing: '0.5px', textTransform: 'uppercase',
                    }}>
                      {post.cat}
                    </span>
                    <span style={{ fontSize: 11, color: 'var(--muted)' }}>{post.date}</span>
                  </div>
                  <h3 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: 14, fontWeight: 700, color: 'var(--ink)',
                    lineHeight: 1.35, marginBottom: 7, letterSpacing: '-0.2px',
                  }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.75 }}>
                    {post.excerpt}
                  </p>
                </div>
                <div style={{
                  padding: '14px 22px', borderTop: '1px solid var(--line)',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{
                      width: 24, height: 24, borderRadius: '50%',
                      background: post.authorColor, color: 'white',
                      fontSize: 9, fontWeight: 700,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'Poppins, sans-serif',
                    }}>
                      {post.authorInitials}
                    </div>
                    <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--body)' }}>{post.author}</span>
                  </div>
                  <span style={{ fontSize: 11, color: 'var(--muted)' }}>{post.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{
            textAlign: 'center', padding: '60px 0 80px',
            color: 'var(--muted)', fontSize: 15,
          }}>
            No articles in this category yet — check back soon.
          </div>
        )}

        {/* ── Editorial quote block ── */}
        <div style={{ marginBottom: 44, animation: 'fade-up 0.7s var(--ease-out) 0.1s both' }}>
          <div style={{
            background: 'var(--ink)', borderRadius: 'var(--r-xl)',
            padding: '56px 60px',
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56,
            alignItems: 'center',
          }}>
            <div>
              <div style={{
                fontSize: 72, lineHeight: 0.7, color: 'var(--amber)',
                fontFamily: 'Georgia, serif', marginBottom: 24,
              }}>
                &ldquo;
              </div>
              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(16px, 1.6vw, 20px)', fontWeight: 600,
                color: 'white', lineHeight: 1.6, marginBottom: 28, letterSpacing: '-0.2px',
              }}>
                Food is the language of community in Nigeria. We built Zupta to make sure that language is spoken without the friction of a 25-minute queue.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 46, height: 46, borderRadius: '50%',
                  background: 'var(--amber)', color: 'white',
                  fontSize: 16, fontWeight: 700,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Poppins, sans-serif', flexShrink: 0,
                }}>
                  OE
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'white' }}>Ochala Excell</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.42)', marginTop: 2 }}>Founder &amp; CEO, Zupta</div>
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {[
                { n: '9', label: 'Content categories', icon: '📚' },
                { n: '2×', label: 'New articles per week', icon: '✍️' },
                { n: '18K', label: 'Monthly readers', icon: '👥' },
                { n: '94%', label: 'Found articles useful', icon: '⭐' },
              ].map((s, i) => (
                <div key={i} style={{
                  padding: '20px 18px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 18,
                }}>
                  <div style={{ fontSize: 20, marginBottom: 10 }}>{s.icon}</div>
                  <div style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: 28, fontWeight: 800, color: 'white',
                    letterSpacing: '-1px', lineHeight: 1, marginBottom: 6,
                  }}>
                    {s.n}
                  </div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.42)', lineHeight: 1.55 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Hot Topics ── */}
        <div style={{ marginBottom: 44, animation: 'fade-up 0.7s var(--ease-out) 0.15s both' }}>
          <h3 style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 11, fontWeight: 700, color: 'var(--muted)',
            textTransform: 'uppercase', letterSpacing: '2px', marginBottom: 18,
          }}>
            Trending Topics
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {[
              { tag: '#JollofRice', reads: '2.1k reads' },
              { tag: '#VendorStories', reads: '1.8k reads' },
              { tag: '#FoodTechNG', reads: '1.5k reads' },
              { tag: '#LunchQueue', reads: '1.3k reads' },
              { tag: '#NigerianFood', reads: '1.1k reads' },
              { tag: '#StartupLife', reads: '980 reads' },
              { tag: '#HealthyEating', reads: '870 reads' },
              { tag: '#FoodWaste', reads: '760 reads' },
              { tag: '#ZuptaApp', reads: '640 reads' },
              { tag: '#AbujaBites', reads: '530 reads' },
            ].map(({ tag, reads }, i) => (
              <div
                key={i}
                style={{
                  padding: '8px 16px', borderRadius: 99,
                  background: 'var(--surface)', border: '1px solid var(--line)',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8,
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = 'var(--ink)'
                  el.style.borderColor = 'var(--ink)'
                  el.querySelectorAll('span').forEach(s => { (s as HTMLElement).style.color = 'white' })
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = 'var(--surface)'
                  el.style.borderColor = 'var(--line)'
                  el.querySelectorAll('span').forEach(s => { (s as HTMLElement).style.color = '' })
                }}
              >
                <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', transition: 'color 0.2s' }}>{tag}</span>
                <span style={{ fontSize: 11, color: 'var(--muted)', transition: 'color 0.2s' }}>{reads}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Insights strip ── */}
        <div style={{ animation: 'fade-up 0.7s var(--ease-out) 0.2s both' }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div className="tag">Quick Insights</div>
            <h3 style={{
              fontFamily: 'Poppins, sans-serif', fontSize: 26, fontWeight: 700,
              color: 'var(--ink)', letterSpacing: '-0.5px',
            }}>
              Food-tech numbers worth knowing
            </h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
            {[
              { stat: '₦2.5T', label: "Nigeria's street food market size annually", icon: '📈' },
              { stat: '74%', label: 'Of Lagos workers eat out for lunch every weekday', icon: '🏙️' },
              { stat: '22 min', label: 'Average time wasted queuing for food in Abuja', icon: '⏱️' },
              { stat: '3×', label: 'Vendors on Zupta grow revenue within 6 months', icon: '🚀' },
            ].map((item, i) => (
              <div key={i} className="insight-card">
                <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                <div style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: 26, fontWeight: 700, color: 'var(--amber)',
                  letterSpacing: '-0.5px', marginBottom: 7, lineHeight: 1,
                }}>
                  {item.stat}
                </div>
                <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── Article detail modal ── */}
      {selectedPost && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 2000,
            background: 'rgba(9,7,26,0.75)', backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
            overflowY: 'auto', padding: '40px 20px',
            animation: 'fade-in 0.25s ease',
          }}
          onClick={e => { if (e.target === e.currentTarget) setSelectedPost(null) }}
        >
          <div style={{
            background: 'white', borderRadius: 28, maxWidth: 760, width: '100%',
            overflow: 'hidden', animation: 'fade-up 0.35s var(--ease-out) both',
            boxShadow: '0 40px 100px rgba(9,7,26,0.4)',
          }}>
            {/* Hero image */}
            <div style={{ position: 'relative', height: 320, background: selectedPost.bg, overflow: 'hidden' }}>
              <img
                src={selectedPost.img}
                alt={selectedPost.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.75 }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(9,7,26,0.2), rgba(9,7,26,0.6))' }} />
              <button
                onClick={() => setSelectedPost(null)}
                style={{
                  position: 'absolute', top: 20, right: 20,
                  background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  color: 'white', width: 40, height: 40, borderRadius: '50%',
                  fontSize: 18, cursor: 'pointer', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                }}
              >
                ✕
              </button>
              <div style={{ position: 'absolute', bottom: 24, left: 32 }}>
                <span style={{
                  background: 'var(--amber)', color: 'white',
                  fontSize: 10.5, fontWeight: 700, padding: '4px 12px', borderRadius: 99,
                  letterSpacing: '0.5px', textTransform: 'uppercase',
                }}>
                  {selectedPost.cat}
                </span>
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: '36px 40px 48px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 18, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 12.5, color: 'var(--muted)' }}>{selectedPost.date}</span>
                <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--muted)', display: 'inline-block' }} />
                <span style={{ fontSize: 12.5, color: 'var(--muted)' }}>{selectedPost.readTime}</span>
              </div>

              <h2 style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(22px, 2.8vw, 32px)', fontWeight: 800,
                color: 'var(--ink)', lineHeight: 1.2, marginBottom: 20,
                letterSpacing: '-0.5px',
              }}>
                {selectedPost.title}
              </h2>

              {/* Author row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32, paddingBottom: 28, borderBottom: '1px solid var(--line)' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: selectedPost.authorColor, color: 'white',
                  fontSize: 14, fontWeight: 700,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Poppins, sans-serif', flexShrink: 0,
                }}>
                  {selectedPost.authorInitials}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>{selectedPost.author}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 1 }}>Zupta Editorial · {selectedPost.date}</div>
                </div>
              </div>

              {/* Article body */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
                {(selectedPost.fullContent ?? [selectedPost.excerpt]).map((para, i) => (
                  <p key={i} style={{
                    fontSize: 16, lineHeight: 1.85, color: 'var(--body)',
                    fontWeight: i === 0 ? 500 : 400,
                  }}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Footer */}
              <div style={{ marginTop: 40, paddingTop: 28, borderTop: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {['#ZuptaStories', `#${selectedPost.cat.replace(/\s+/g, '')}`, '#Nigeria'].map((tag, i) => (
                    <span key={i} style={{ fontSize: 12.5, color: 'var(--amber)', background: 'rgba(232,146,10,0.09)', padding: '4px 12px', borderRadius: 99, fontWeight: 600 }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedPost(null)}
                  style={{
                    background: 'var(--ink)', color: 'white', border: 'none',
                    borderRadius: 99, padding: '10px 24px',
                    fontSize: 13.5, fontWeight: 600, cursor: 'pointer',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  ← Back to Stories
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      </div>{/* end padding wrapper */}
    </section>
  )
}

/* ── FAQ ────────────────────────────────────────────────────────────── */
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="section" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 0 }} className="reveal">
          <div className="tag">Common Questions</div>
          <h2 className="section-title">
            Frequently asked <span className="highlight">questions</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Everything you need to know about Zupta. Can&apos;t find an answer?{' '}
            <a href="mailto:hello@zupta.com" style={{ color: 'var(--amber)', textDecoration: 'none', fontWeight: 600 }}>
              Chat with us →
            </a>
          </p>
        </div>

        <div style={{ maxWidth: 740, margin: '64px auto 0' }} className="reveal">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`faq-item${openIndex === i ? ' open' : ''}`}
            >
              <div className="faq-q" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                <span style={{ lineHeight: 1.5 }}>{item.q}</span>
                <div className="faq-icon">+</div>
              </div>
              <div className="faq-a">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── NEWSLETTER ─────────────────────────────────────────────────────── */
export function Newsletter() {
  const [email, setEmail]         = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (!email || !email.includes('@')) return
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="newsletter" className="newsletter-section section">
      {/* Dot pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='1' fill='%23ffffff' fill-opacity='0.04'/%3E%3C/svg%3E\")",
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center' }} className="reveal">
          <div className="tag" style={{ background: 'rgba(255,255,255,0.08)', borderLeft: 'none', color: 'rgba(255,255,255,0.7)' }}>
            Stay in the Loop
          </div>

          <h2 style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(26px, 3.4vw, 44px)', fontWeight: 800,
            color: 'white', lineHeight: 1.1, marginBottom: 14,
            letterSpacing: '-1.5px',
          }}>
            Get the best food deals
            <br />
            <span className="gradient-text">delivered to your inbox</span>
          </h2>

          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', marginBottom: 40, lineHeight: 1.75 }}>
            Weekly vendor spotlights, exclusive discount codes and new feature updates.
            <br />
            No spam. Ever.
          </p>

          {submitted ? (
            <div style={{
              fontSize: 18, color: 'white', fontWeight: 600, marginBottom: 16,
              animation: 'fade-up 0.5s var(--ease-out) both',
            }}>
              You&apos;re subscribed! Check your inbox for a welcome gift.
            </div>
          ) : (
            <div className="newsletter-form">
              <input
                className="newsletter-input"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              />
              <button
                style={{
                  background: 'var(--amber)', color: 'white', border: 'none',
                  borderRadius: 99, padding: '12px 24px',
                  fontFamily: 'Inter, sans-serif', fontSize: 13.5, fontWeight: 600,
                  cursor: 'pointer', transition: 'var(--t)', whiteSpace: 'nowrap', flexShrink: 0,
                }}
                onClick={handleSubmit}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--amber-h)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--amber)' }}
              >
                Subscribe →
              </button>
            </div>
          )}

          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginBottom: 36 }}>
            Join 8,000+ subscribers · Unsubscribe any time · No spam
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 28, flexWrap: 'wrap' }}>
            {[
              ['🎁', 'Weekly vendor deals'],
              ['📱', 'App update previews'],
              ['⭐', 'New vendor alerts'],
              ['🎉', 'Exclusive promo codes'],
            ].map(([icon, label], i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                fontSize: 13, color: 'rgba(255,255,255,0.48)',
              }}>
                <span style={{ fontSize: 14 }}>{icon}</span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── CTA BANNER ─────────────────────────────────────────────────────── */
export function CTABanner({ onOrderClick }: { onOrderClick: () => void }) {
  return (
    <section style={{ background: 'var(--amber)', padding: '88px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='24' cy='24' r='2' fill='%23ffffff' fill-opacity='0.06'/%3E%3C/svg%3E\")",
        pointerEvents: 'none',
      }} />

      {/* Large decorative text */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(60px, 10vw, 130px)',
        fontWeight: 700, color: 'rgba(255,255,255,0.05)',
        whiteSpace: 'nowrap', letterSpacing: '-4px',
        pointerEvents: 'none', userSelect: 'none',
      }}>
        ZUPTA
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <div className="reveal">
          <h2 style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(30px, 4.2vw, 56px)',
            fontWeight: 900, color: 'white', lineHeight: 1.06,
            letterSpacing: '-2px', marginBottom: 16,
          }}>
            Ready to skip the queue
            <br />forever?
          </h2>

          <p style={{
            fontSize: 17, color: 'rgba(255,255,255,0.78)', marginBottom: 44,
            maxWidth: 500, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.75,
          }}>
            Join 12,000+ Nigerians who&apos;ve already taken back their lunchtime.
            Download the app and pre-order your first meal in under 2 minutes.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              className="btn btn-white"
              style={{ fontSize: 15.5, padding: '16px 38px' }}
              onClick={onOrderClick}
            >
              Get Started Free →
            </button>
            <button
              className="btn btn-ghost"
              style={{ fontSize: 15.5, padding: '16px 30px', borderColor: 'rgba(255,255,255,0.3)' }}
              onClick={() => document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' })}
            >
              ▶ Watch Demo
            </button>
          </div>

          <p style={{ marginTop: 22, fontSize: 12.5, color: 'rgba(255,255,255,0.65)' }}>
            No credit card required · Free forever plan available · iOS &amp; Android
          </p>
        </div>
      </div>
    </section>
  )
}

/* ── FOOTER ─────────────────────────────────────────────────────────── */
export function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', color: 'white', padding: '80px 0 32px' }}>
      <div className="container">
        <div
          className="footer-grid"
          style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 64 }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <div className="nav-logo-mark">Z</div>
              <span style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 22, fontWeight: 800, color: 'white', letterSpacing: '-0.5px',
              }}>
                Zupta
              </span>
            </div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.42)', lineHeight: 1.85, margin: '0 0 18px', maxWidth: 280 }}>
              Zupta is a smart pre-order platform connecting customers with local food vendors for affordable, fast and reliable meal pickup across Nigeria.
            </p>
            <p style={{ fontSize: 12.5, color: 'var(--amber)', fontWeight: 500, fontStyle: 'italic', marginBottom: 22, opacity: 0.85 }}>
              &ldquo;Pre-order. Skip the wait. Enjoy more.&rdquo;
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {['𝕏', 'in', 'f', '📷'].map((s, i) => (
                <div key={i} className="footer-social">{s}</div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <div style={{
                fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.55)',
                textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 22,
              }}>
                {title}
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      style={{
                        fontSize: 13.5, color: 'rgba(255,255,255,0.42)',
                        textDecoration: 'none', transition: 'color 0.2s ease',
                        display: 'inline-block',
                      }}
                      onMouseEnter={e => { (e.target as HTMLElement).style.color = 'white' }}
                      onMouseLeave={e => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.42)' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.07)',
          paddingTop: 28,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 16,
        }}>
          <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.3)' }}>
            © 2026 Zupta Technology Ltd. All rights reserved. ·{' '}
            <a href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Privacy</a> ·{' '}
            <a href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Terms</a>
          </p>
          <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>
            Made with 🧡 for Nigeria
          </div>
        </div>
      </div>
    </footer>
  )
}
