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
    <header className="fixed w-full bg-primary-900 text-white z-50 shadow">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="TalenTiT logo" className="w-10 h-10 object-cover rounded-md shadow-sm" />
          <div className="font-semibold text-lg text-primary-900">TalenTiT</div>
        </div>

        <nav className="hidden md:flex gap-6 items-center" aria-label="Primary navigation">
          {links.map(l => (
            <a key={l.label} href={l.to} className="text-sm text-white/90 hover:text-accent-300">
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
        <div className="md:hidden bg-primary-900 text-white shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.label} href={l.to} onClick={() => setOpen(false)} className="py-2 text-white/90 hover:text-accent-300">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
