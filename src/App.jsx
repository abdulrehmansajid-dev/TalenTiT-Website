import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Roles from './components/Roles'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import banner from './assets/banner.jpeg'

function Home() {
  return (
    <div className="smooth-scroll">
      <section className="bg-primary-950">
        <div className="max-w-6xl mx-auto px-6 pt-4 pb-2">
          <div className="rounded-[1.5rem] bg-primary-900 border border-white/10 shadow-2xl shadow-black/20 overflow-hidden">
            <img
              src={banner}
              alt="TalenTiT hospitality banner"
              className="w-full h-24 sm:h-28 md:h-32 lg:h-36 object-cover object-center bg-primary-900"
            />
          </div>
        </div>
      </section>
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
