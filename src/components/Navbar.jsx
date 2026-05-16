import React, { useState } from 'react'

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
    <header className="fixed w-full bg-white/75 backdrop-blur z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-primary-500" aria-hidden></div>
          <div className="font-semibold text-lg">TalenTiT</div>
        </div>

        <nav className="hidden md:flex gap-6 items-center" aria-label="Primary navigation">
          {links.map(l => (
            <a key={l.label} href={l.to} className="text-sm text-gray-700 hover:text-primary-500">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <button aria-label="Toggle menu" onClick={() => setOpen(v => !v)} className="p-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.label} href={l.to} onClick={() => setOpen(false)} className="py-2 text-gray-700 hover:text-primary-500">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
