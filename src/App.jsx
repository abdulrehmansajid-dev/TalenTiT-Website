import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Roles from './components/Roles'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Training from './components/Training'
import Hiring from './components/Hiring'
import Services from './components/Services'
import Gallery from './components/Gallery'
import GalleryPreview from './components/GalleryPreview'
import SupportTeam from './components/SupportTeam'

function Home() {
  return (
    <div className="smooth-scroll">
      <Hero />
      <About />
      <Training />
      <Hiring />
      <Services />
      <GalleryPreview />
      <Roles />
      <Testimonials />
      <SupportTeam />
      <Contact />
    </div>
  )
}

const getSectionIdFromPath = (pathname) => {
  const parts = pathname.split('/').filter(Boolean)
  return parts.length ? parts[parts.length - 1] : 'home'
}

const scrollToElement = (id, fallbackToTop = true) => {
  const element = document.getElementById(id)

  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    return
  }

  if (fallbackToTop) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

function ScrollToSection() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const hashId = hash.replace('#', '')
    const pathId = getSectionIdFromPath(pathname)

    const timer = setTimeout(() => {
      // Training category hash links are handled inside Training.jsx after the tab state updates.
      if (pathname === '/training' && hashId) {
        scrollToElement('programme-categories')
        return
      }

      scrollToElement(hashId || pathId)
    }, hashId ? 140 : 70)

    return () => clearTimeout(timer)
  }, [pathname, hash])

  return <Home />
}

function RouteScrollManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    // Full standalone pages should always start from the top when opened from the navbar/cards.
    if (pathname === '/gallery') {
      const timer = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 60)

      return () => clearTimeout(timer)
    }

    return undefined
  }, [pathname])

  return null
}

export default function App() {
  return (
    <div className="text-gray-800 bg-white">
      <Navbar />
      <RouteScrollManager />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Section routes render the homepage and smoothly scroll to the correct section. */}
        <Route path="/about" element={<ScrollToSection />} />
        <Route path="/training" element={<ScrollToSection />} />
        <Route path="/hiring" element={<ScrollToSection />} />
        <Route path="/services" element={<ScrollToSection />} />
        <Route path="/roles" element={<ScrollToSection />} />
        <Route path="/testimonials" element={<ScrollToSection />} />
        <Route path="/contact" element={<ScrollToSection />} />

        {/* Standalone gallery page */}
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      <Footer />
    </div>
  )
}
