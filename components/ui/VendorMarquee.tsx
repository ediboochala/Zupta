import { VENDOR_NAMES } from '@/lib/data'

export default function VendorMarquee() {
  const items = [...VENDOR_NAMES, ...VENDOR_NAMES, ...VENDOR_NAMES]
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {items.map((name, i) => (
          <div key={i} className="marquee-item">
            <div className="marquee-dot" />
            {name}
          </div>
        ))}
      </div>
    </div>
  )
}
