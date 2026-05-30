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

function Home() {
  return (
    <div className="smooth-scroll">
      <Hero />
      <About />
      <Training />
      <Hiring />
      <Services />
      <Roles />
      <Testimonials />
      <Contact />
    </div>
  )
}

function ScrollToSection() {
  const { pathname } = useLocation()
  useEffect(() => {
    // compute id from path; use last segment (e.g. '/training/soft-skills' -> 'soft-skills')
    const parts = pathname.split('/').filter(Boolean)
    const id = parts.length ? parts[parts.length - 1] : 'home'
    // small delay to ensure elements are mounted
    const t = setTimeout(() => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }, 50)
    return () => clearTimeout(t)
  }, [pathname])
  return <Home />
}

export default function App() {
  return (
    <div className="text-gray-800 bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Section routes render the Home and scroll to the section (hybrid behavior) */}
        <Route path="/about" element={<ScrollToSection />} />
        <Route path="/training" element={<ScrollToSection />} />
        <Route path="/hiring" element={<ScrollToSection />} />
        <Route path="/services" element={<ScrollToSection />} />
        <Route path="/roles" element={<ScrollToSection />} />
        <Route path="/testimonials" element={<ScrollToSection />} />
        <Route path="/contact" element={<ScrollToSection />} />

        {/* Training subpage routes should scroll to the corresponding section (hybrid behavior) */}
        {/* legacy sub-routes removed — training content consolidated on /training */}
      </Routes>
      <Footer />
    </div>
  )
}
