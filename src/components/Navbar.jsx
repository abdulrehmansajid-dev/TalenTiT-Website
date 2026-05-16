import React, { useState } from 'react'
import logo from '../assets/logo.jpeg'

export default function Navbar() {
  const links = [
    { to: '#home', label: 'Home' },
    { to: '#about', label: 'About' },
    { to: '#roles', label: 'Open Roles' },
    { to: '#testimonials', label: 'Testimonials' },
    { to: '#contact', label: 'Contact' }
  ]

  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 w-full z-50 bg-primary-950/95 text-white shadow-2xl border-b border-accent-500/20 backdrop-blur-md">
      <div className="h-1 bg-gradient-to-r from-accent-500 via-accent-300 to-primary-700" />
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="TalenTiT logo" className="w-11 h-11 object-cover rounded-xl shadow-sm ring-2 ring-white/15 bg-white" />
          <div>
            <div className="font-semibold text-lg leading-none text-white">TalenTiT</div>
            <div className="text-[11px] tracking-[0.24em] uppercase text-white/55 mt-1">Hospitality</div>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 items-center" aria-label="Primary navigation">
          {links.map(l => (
            <a key={l.label} href={l.to} className="text-sm font-medium text-white px-3 py-2 rounded-full bg-white/5 hover:bg-white/12 hover:text-accent-300 transition-all duration-200 border border-white/5">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <button aria-label="Toggle menu" onClick={() => setOpen(v => !v)} className="p-2 rounded-md text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary-950 text-white shadow-lg border-t border-accent-500/20">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.label} href={l.to} onClick={() => setOpen(false)} className="py-2 text-white/90 hover:text-accent-300 transition-colors duration-200">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
