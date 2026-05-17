import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Roles from './components/Roles'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Home() {
  return (
    <div className="smooth-scroll">
      <Hero />
      <About />
      <Roles />
      <Testimonials />
      <Contact />
    </div>
  )
}

function ScrollToSection() {
  const { pathname } = useLocation()
  useEffect(() => {
    const id = pathname.replace('/', '') || 'home'
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return <Home />
}

export default function App() {
  return (
    <div className="text-gray-800 bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<ScrollToSection />} />
      </Routes>
      <Footer />
    </div>
  )
}
