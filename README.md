# 🍛 Zupta Website — Next.js

> **Pre-Order. Skip the Wait. Enjoy More.**

Full-featured marketing website for Zupta, built with **Next.js 14 (App Router)** + **TypeScript**. Zero external UI libraries — pure CSS custom properties and hand-crafted components.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

---

## 📁 Project Structure

```
zupta-nextjs/
├── app/
│   ├── globals.css          # All brand styles, tokens, animations
│   ├── layout.tsx           # Root layout + SEO metadata
│   └── page.tsx             # Main page (assembles all sections)
│
├── components/
│   ├── Navbar.tsx           # Fixed navbar with scroll effect + mobile menu
│   ├── sections/
│   │   ├── Hero.tsx         # Hero with phone mockup + floating badges
│   │   ├── Sections1.tsx    # Stats, HowItWorks, Features, AppShowcase, Vendors
│   │   └── Sections2.tsx    # Testimonials, Pricing, Trust, Locations, Blog,
│   │                        #   FAQ, Newsletter, CTABanner, Footer
│   └── ui/
│       ├── OrderModal.tsx   # Pre-order modal
│       ├── Toast.tsx        # Toast notification
│       ├── ScrollEffects.tsx # Cursor, progress bar, parallax, reveal, counters
│       ├── Ticker.tsx       # Orange news ticker at top
│       └── VendorMarquee.tsx # Scrolling vendor names banner
│
├── lib/
│   ├── data.ts              # All brand content (vendors, FAQs, testimonials…)
│   └── useReveal.ts         # Scroll reveal hook (optional)
│
├── public/                  # Static assets (add logo SVG, OG image here)
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## ✨ Features

| Feature | Details |
|---|---|
| **Custom cursor** | Orange dot + trailing ring, grows on interactive elements |
| **Scroll progress bar** | Orange gradient bar across top of page |
| **Parallax** | Hero orbs and phone drift on scroll |
| **Scroll reveal** | Fade/slide/scale animations on every section |
| **Counter animation** | Stats count up when scrolled into view |
| **Infinite testimonials** | Auto-scrolling carousel, pauses on hover |
| **Infinite marquees** | Vendor names + news ticker |
| **Phone mockups** | Fully coded HTML phone UI (no images needed) |
| **Pre-order modal** | Full form with vendor select + time picker |
| **Toast notifications** | Bounce-in confirmation messages |
| **FAQ accordion** | Smooth expand/collapse with React state |
| **Newsletter form** | Email validation + success state |
| **Mobile menu** | Full-screen overlay with smooth animation |
| **Back to top** | Appears after scrolling 400px |
| **Dark mode orbs** | Animated background blobs in hero |
| **Map pins** | Pulsing location pins on SVG map |

---

## 🎨 Brand Tokens

All brand values are in `app/globals.css` as CSS custom properties:

```css
--navy:   #1B1240   /* Primary background */
--purple: #3C1E6E   /* Secondary / accents */
--orange: #FF8A00   /* CTAs, highlights, logo */
--gold:   #FFC107   /* Ratings, warm accents */
--cream:  #FFF4E5   /* Section backgrounds */
```

---

## 📝 Customising Content

All copy, vendor data, testimonials, FAQ answers, pricing plans and blog posts live in **`lib/data.ts`**. No need to touch component files for content updates.

```ts
// lib/data.ts
export const VENDORS = [ ... ]
export const TESTIMONIALS = [ ... ]
export const FAQ_ITEMS = [ ... ]
export const PRICING_PLANS = [ ... ]
```

---

## 🌍 Adding Real Data / API

Replace the static arrays in `lib/data.ts` with `fetch()` calls in **Server Components** (`async` functions without `'use client'`):

```ts
// Example: fetch vendors from API
export async function getVendors() {
  const res = await fetch('https://api.zupta.com/vendors', { next: { revalidate: 60 } })
  return res.json()
}
```

---

## 🔌 Integrations To Add

| Need | Recommended |
|---|---|
| **Payments** | Paystack or Flutterwave |
| **Auth** | NextAuth.js |
| **Database** | Supabase or PlanetScale |
| **Email** | Resend or Mailchimp |
| **Analytics** | Vercel Analytics or PostHog |
| **CMS** | Sanity or Contentful (for blog) |
| **Maps** | Google Maps or Mapbox (replace SVG map) |

---

## 📦 Build & Deploy

```bash
# Production build
npm run build

# Preview production build locally
npm start

# Deploy to Vercel (recommended)
npx vercel
```

### Environment Variables (when adding real APIs)
Create `.env.local`:
```
NEXT_PUBLIC_PAYSTACK_KEY=pk_live_...
NEXT_PUBLIC_GOOGLE_MAPS_KEY=AIza...
DATABASE_URL=postgresql://...
```

---

## 📱 Browser Support

- Chrome 90+ ✅
- Firefox 88+ ✅
- Safari 14+ ✅
- Edge 90+ ✅
- Mobile (iOS Safari, Chrome Android) ✅

*Custom cursor is automatically hidden on touch devices.*

---

## 🤝 Developer Notes

- All components are typed with TypeScript
- `'use client'` is only used where browser APIs are needed (scroll, state, events)
- Server components are used by default for static sections
- CSS is a single global file for simplicity — migrate to CSS Modules or Tailwind as the project scales
- No external UI library dependencies — keeps bundle size minimal

---

**Built for Zupta Technology Ltd · Abuja, Nigeria · 2026**
