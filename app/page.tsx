'use client'
import { useState, useCallback } from 'react'

import Navbar        from '@/components/Navbar'
import ScrollEffects from '@/components/ui/ScrollEffects'
import OrderModal    from '@/components/ui/OrderModal'
import Toast         from '@/components/ui/Toast'
import VendorMarquee from '@/components/ui/VendorMarquee'

import Hero          from '@/components/sections/Hero'
import {
  Stats, HowItWorks, Features, AppShowcase, Vendors,
} from '@/components/sections/Sections1'
import {
  Testimonials, Pricing, Trust, Locations,
  Blog, FAQ, Newsletter, CTABanner, Footer,
} from '@/components/sections/Sections2'

export default function Home() {
  const [modalOpen,  setModalOpen]  = useState(false)
  const [toastMsg,   setToastMsg]   = useState('')
  const [toastVisible, setToastVisible] = useState(false)

  const openModal  = useCallback(() => setModalOpen(true), [])
  const closeModal = useCallback(() => setModalOpen(false), [])

  const showToast = useCallback((msg: string) => {
    setToastMsg(msg)
    setToastVisible(true)
    setTimeout(() => setToastVisible(false), 4000)
  }, [])

  const handleOrder = useCallback(() => {
    setModalOpen(false)
    showToast('✅ Order placed! We\'ll have it ready when you arrive.')
  }, [showToast])

  return (
    <>
      {/* Global effects */}
      <ScrollEffects />
      <Toast message={toastMsg} visible={toastVisible} />

      {/* Modal */}
      <OrderModal isOpen={modalOpen} onClose={closeModal} onSubmit={handleOrder} />

      {/* Navbar */}
      <Navbar onOrderClick={openModal} />

      {/* Page */}
      <main>
        <Hero onOrderClick={openModal} />
        <Stats />
        <HowItWorks />
        <Features />
        <AppShowcase onOrderClick={openModal} />
        <VendorMarquee />
        <Vendors onOrderClick={openModal} />
        <Testimonials />
        <Pricing onOrderClick={openModal} />
        <Trust />
        <Locations />
        <Blog />
        <FAQ />
        <Newsletter />
        <CTABanner onOrderClick={openModal} />
      </main>

      <Footer />
    </>
  )
}
