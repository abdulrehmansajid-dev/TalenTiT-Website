import React, { useState } from 'react'
import logo from '../assets/logo.jpeg'

export default function Navbar() {
  const links = [
    { to: '#home', label: 'Home' },
    { to: '#about', label: 'About' },
    { to: '#roles', label: 'Open Roles' },
    { to: '#testimonials', label: 'Testimonials' }
  ]

  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 w-full z-50 bg-white/95 text-slate-900 border-b border-slate-200 shadow-sm backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="TalenTiT logo" className="w-11 h-11 object-cover rounded-xl shadow-sm ring-1 ring-slate-200 bg-white" />
          <div>
            <div className="font-semibold text-lg leading-none text-primary-950">TalenTiT</div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-slate-500 mt-1">Training & HR consultants</div>
          </div>
        </div>

        <nav className="hidden md:flex gap-2 items-center" aria-label="Primary navigation">
          {links.map(l => (
            <a key={l.label} href={l.to} className="text-sm font-medium text-slate-700 px-4 py-2 rounded-full hover:bg-primary-50 hover:text-primary-800 transition-all duration-200">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="text-sm font-semibold text-white px-4 py-2 rounded-full bg-primary-900 hover:bg-primary-800 transition-colors">Contact</a>
        </nav>

        <div className="md:hidden">
          <button aria-label="Toggle menu" onClick={() => setOpen(v => !v)} className="p-2 rounded-md text-slate-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white text-slate-900 shadow-lg border-t border-slate-200">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.label} href={l.to} onClick={() => setOpen(false)} className="py-2 text-slate-700 hover:text-primary-800 transition-colors duration-200">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-1 inline-flex justify-center text-sm font-semibold text-white px-4 py-2 rounded-full bg-primary-900 hover:bg-primary-800 transition-colors">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
