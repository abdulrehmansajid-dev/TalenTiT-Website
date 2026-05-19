import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo.jpeg'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [trainingOpen, setTrainingOpen] = useState(false)

  const NavItem = ({ to, children, onClick }) => (
    <NavLink to={to} onClick={onClick} className={({ isActive }) => `text-sm font-medium px-3 py-2 rounded-full transition-all duration-200 ${isActive ? 'text-primary-900 bg-primary-50' : 'text-slate-700 hover:bg-primary-50 hover:text-primary-800'}`}>
      {children}
    </NavLink>
  )

  return (
    <header className="sticky top-0 w-full z-50 bg-white/95 text-slate-900 border-b border-slate-200 shadow-sm backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="TalenTiT logo" className="w-11 h-11 object-cover rounded-xl shadow-sm ring-1 ring-slate-200 bg-white" />
            <div>
              <div className="font-semibold text-lg leading-none text-primary-950">TalenTiT</div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-slate-500 mt-1">Training & HR consultants</div>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center whitespace-nowrap gap-0" aria-label="Primary navigation">
          <NavItem to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</NavItem>
          <NavItem to="/about">Who we are ?</NavItem>

          <div className="relative" onMouseEnter={() => setTrainingOpen(true)} onMouseLeave={() => setTrainingOpen(false)}>
            <button onClick={() => setTrainingOpen(v => !v)} className="text-sm font-medium text-slate-700 px-3 py-2 hover:bg-primary-50 hover:text-primary-800 transition-all duration-200 inline-flex items-center gap-2">
              Training Services
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {trainingOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-lg shadow-lg py-2">
                <NavLink to="/training/soft-skills" onClick={() => setTrainingOpen(false)} className="block px-4 py-2 text-sm text-slate-700 hover:bg-primary-50">Soft Skills Training</NavLink>
                <NavLink to="/training/leadership" onClick={() => setTrainingOpen(false)} className="block px-4 py-2 text-sm text-slate-700 hover:bg-primary-50">Leadership Training</NavLink>
                <NavLink to="/training" onClick={() => setTrainingOpen(false)} className="block px-4 py-2 text-sm text-slate-700 hover:bg-primary-50">All Training Services</NavLink>
              </div>
            )}
          </div>

          <NavItem to="/hiring">Hiring & Selection</NavItem>
          <NavItem to="/roles">Open Roles</NavItem>
          <NavItem to="/contact">Contact Us</NavItem>

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
          <div className="px-6 py-4 flex flex-col gap-2">
            <Link to="/" onClick={() => setOpen(false)} className="py-2 text-slate-700 hover:text-primary-800">Home</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="py-2 text-slate-700 hover:text-primary-800">Who we are ?</Link>

            <div className="py-2">
              <button onClick={() => setTrainingOpen(v => !v)} className="w-full text-left text-slate-700 py-2">Training Services</button>
              {trainingOpen && (
                <div className="pl-4">
                  <Link to="/training/soft-skills" onClick={() => { setOpen(false); setTrainingOpen(false) }} className="block py-2 text-slate-600">Soft Skills Training</Link>
                  <Link to="/training/leadership" onClick={() => { setOpen(false); setTrainingOpen(false) }} className="block py-2 text-slate-600">Leadership Training</Link>
                  <Link to="/training" onClick={() => { setOpen(false); setTrainingOpen(false) }} className="block py-2 text-slate-600">All Training Services</Link>
                </div>
              )}
            </div>

            <Link to="/hiring" onClick={() => setOpen(false)} className="py-2 text-slate-700 hover:text-primary-800">Hiring & Selection</Link>
            <Link to="/roles" onClick={() => setOpen(false)} className="py-2 text-slate-700 hover:text-primary-800">Open Roles</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-1 inline-flex justify-center text-sm font-semibold text-white px-4 py-2 rounded-full bg-primary-900 hover:bg-primary-800 transition-colors">Contact Us</Link>
          </div>
        </div>
      )}
    </header>
  )
}
