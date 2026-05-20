import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo.jpeg'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [trainingOpen, setTrainingOpen] = useState(false)

  const NavItem = ({ to, children, onClick }) => (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) => `text-sm font-medium px-2.5 py-2 rounded-full transition-all duration-200 ${isActive ? 'text-accent-700 bg-white' : 'text-white/95 hover:bg-white/15 hover:text-white'}`}
    >
      {children}
    </NavLink>
  )

  return (
    <header className="sticky top-0 w-full z-50 bg-amber-700 text-white border-b border-accent-400 shadow-md backdrop-blur">
      <div className="max-w-6xl mx-auto px-5 py-4 min-h-20 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="TalenTiT logo" className="w-12 h-12 object-cover rounded-xl shadow-sm ring-1 ring-slate-200 bg-white" />
            <div>
              <div className="font-semibold text-lg leading-none text-white">TalenTiT</div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-white/80 mt-1">Training & HR consultants</div>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center whitespace-nowrap gap-2" aria-label="Primary navigation">
          <NavItem to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</NavItem>
          <NavItem to="/about">Who we are ?</NavItem>

          <div className="relative">
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={trainingOpen}
              onClick={() => setTrainingOpen(v => !v)}
              className="text-sm font-medium text-white/95 px-3 py-2.5 rounded-full hover:bg-white/15 hover:text-white transition-all duration-200 inline-flex items-center gap-2"
            >
              Training Services
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {trainingOpen && (
              <div className="absolute right-0 top-full z-50 pt-3 w-64">
                <div className="rounded-2xl bg-white border border-slate-200 shadow-xl py-2 ring-1 ring-slate-900/5">
                  <NavLink to="/training/soft-skills" onClick={() => setTrainingOpen(false)} className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary-900">Soft Skills Training</NavLink>
                  <NavLink to="/training/leadership" onClick={() => setTrainingOpen(false)} className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary-900">Leadership Training</NavLink>
                  <NavLink to="/training" onClick={() => setTrainingOpen(false)} className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary-900">All Training Services</NavLink>
                </div>
              </div>
            )}
          </div>

          <NavItem to="/hiring">Hiring & Selection</NavItem>
          <NavItem to="/roles">Open Roles</NavItem>
          <NavItem to="/contact">Contact Us</NavItem>
        </nav>

        <div className="md:hidden">
          <button aria-label="Toggle menu" onClick={() => { setOpen(v => !v); setTrainingOpen(false) }} className="p-2 rounded-md text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-accent-500 text-white shadow-lg border-t border-accent-400">
          <div className="px-6 py-4 flex flex-col gap-2">
            <Link to="/" onClick={() => setOpen(false)} className="py-2 text-white/95 hover:text-white">Home</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="py-2 text-white/95 hover:text-white">Who we are ?</Link>

            <div className="py-2">
              <button type="button" onClick={() => setTrainingOpen(v => !v)} className="w-full text-left text-white/95 py-2">Training Services</button>
              {trainingOpen && (
                <div className="pl-4">
                  <Link to="/training/soft-skills" onClick={() => { setOpen(false); setTrainingOpen(false) }} className="block py-2 text-white/80">Soft Skills Training</Link>
                  <Link to="/training/leadership" onClick={() => { setOpen(false); setTrainingOpen(false) }} className="block py-2 text-white/80">Leadership Training</Link>
                  <Link to="/training" onClick={() => { setOpen(false); setTrainingOpen(false) }} className="block py-2 text-white/80">All Training Services</Link>
                </div>
              )}
            </div>

            <Link to="/hiring" onClick={() => setOpen(false)} className="py-2 text-white/95 hover:text-white">Hiring & Selection</Link>
            <Link to="/roles" onClick={() => setOpen(false)} className="py-2 text-white/95 hover:text-white">Open Roles</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-1 inline-flex justify-center text-sm font-semibold text-accent-700 px-4 py-2 rounded-full bg-white hover:bg-orange-50 transition-colors">Contact Us</Link>
          </div>
        </div>
      )}
    </header>
  )
}
