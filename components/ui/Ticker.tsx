import { TICKER_ITEMS } from '@/lib/data'

export default function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS]
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {items.map((item, i) => (
          <div key={i} className="ticker-item">
            <span className="ticker-dot">◆</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
