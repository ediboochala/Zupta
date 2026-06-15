'use client'
import { useEffect } from 'react'

interface OrderModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: () => void
}

export default function OrderModal({ isOpen, onClose, onSubmit }: OrderModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKey)
    } else {
      document.body.style.overflow = ''
    }
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>✕</button>
        {/* Header */}
        <div style={{ marginBottom: 28 }}>
          <div style={{
            width: 48, height: 48, background: 'rgba(232,146,10,0.1)',
            borderRadius: 14, display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: 26, marginBottom: 16,
          }}>
            🍽️
          </div>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 24, fontWeight: 800, color: 'var(--ink)', marginBottom: 8, letterSpacing: '-0.5px',
          }}>
            Pre-Order Your Meal
          </h2>
          <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>
            Secure your food now. We&apos;ll have it ready when you arrive.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 28 }}>
          <div>
            <label style={{ display: 'block', fontSize: 12.5, fontWeight: 600, color: 'var(--ink)', marginBottom: 7, letterSpacing: '0.2px' }}>
              Your Name
            </label>
            <input className="modal-input" type="text" placeholder="e.g. Chioma Okafor" />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: 12.5, fontWeight: 600, color: 'var(--ink)', marginBottom: 7 }}>
              Phone Number
            </label>
            <input className="modal-input" type="tel" placeholder="+234 800 000 0000" />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: 12.5, fontWeight: 600, color: 'var(--ink)', marginBottom: 7 }}>
              Pick a Vendor
            </label>
            <select className="modal-input" style={{
              appearance: 'none',
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%237C7A90' stroke-width='1.5'/%3E%3C/svg%3E\")",
              backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center',
            }}>
              <option>Mama Nkechi — Jollof Rice</option>
              <option>Tasty Pots — Ofada Rice</option>
              <option>Bolanle Meals — Ewa Agoyin</option>
              <option>Chef Bola — Amala &amp; Ewedu</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: 12.5, fontWeight: 600, color: 'var(--ink)', marginBottom: 7 }}>
              Pickup Time
            </label>
            <input className="modal-input" type="time" defaultValue="12:30" />
          </div>
        </div>

        <button
          className="btn btn-primary"
          style={{ width: '100%', justifyContent: 'center', fontSize: 15, padding: '15px 0' }}
          onClick={onSubmit}
        >
          Place My Pre-Order →
        </button>
      </div>
    </div>
  )
}
