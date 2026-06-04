import React, { useEffect, useRef, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import navLogo from '../assets/navLogo.png'

const trainingLinks = [
  {
    label: 'Leadership Development',
    to: '/training#leadership',
    description: 'Managers & future leaders',
  },
  {
    label: 'Employee Development',
    to: '/training#employees',
    description: 'Frontline & service teams',
  },
  {
    label: 'Sales Excellence',
    to: '/training#sales',
    description: 'Sales & client conversion',
  },
  {
    label: 'Certification Programs',
    to: '/training#certifications',
    description: 'NLP & coaching certifications',
  },
  {
    label: 'Coaching & Transformation',
    to: '/training#coaching',
    description: 'Mindset & personal growth',
  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [trainingOpen, setTrainingOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()

  const isTrainingActive = location.pathname === '/training'

  useEffect(() => {
    setOpen(false)
    setTrainingOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setTrainingOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const closeMobileMenu = () => {
    setOpen(false)
    setTrainingOpen(false)
  }

  const NavItem = ({ to, children, onClick }) => (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-200 ${
          isActive
            ? 'bg-white text-orange-600 shadow-md shadow-black/10'
            : 'text-white/90 hover:bg-white/10 hover:text-orange-400'
        }`
      }
    >
      {children}
    </NavLink>
  )

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/95 text-white border-b border-white/10 shadow-lg shadow-slate-950/20 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-5 py-3.5 flex items-center justify-between gap-4">
        <Link to="/" className="inline-flex items-center shrink-0">
          <img
            src={navLogo}
            alt="TalenTiT logo"
            className="block h-12 w-auto object-contain bg-transparent origin-left transform scale-[4.0] -ml-3.5 pt-[2px] shrink-0"
          />
        </Link>

        <nav className="hidden md:flex items-center whitespace-nowrap gap-2" aria-label="Primary navigation">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">Who We Are</NavItem>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={trainingOpen}
              onClick={() => setTrainingOpen((value) => !value)}
              className={`text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-200 inline-flex items-center gap-2 ${
                isTrainingActive
                  ? 'bg-white text-orange-600 shadow-md shadow-black/10'
                  : 'text-white/90 hover:bg-white/10 hover:text-orange-400'
              }`}
            >
              Training
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform duration-200 ${trainingOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {trainingOpen && (
              <div className="absolute right-0 top-full z-50 pt-3 w-[345px]">
                <div className="overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-2xl shadow-slate-950/20 ring-1 ring-slate-900/5">
                  <div className="px-4 py-3 bg-slate-950 text-white">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-orange-400 font-semibold">
                      Training & Coaching
                    </p>
                    <p className="mt-1 text-xs text-slate-300">
                      Explore our development catalogue.
                    </p>
                  </div>

                  <div className="p-2">
                    {trainingLinks.map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        onClick={() => setTrainingOpen(false)}
                        className="group block rounded-xl px-3.5 py-2.5 transition-all duration-200 hover:bg-orange-50"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="text-sm font-semibold text-slate-900 group-hover:text-orange-600">
                              {item.label}
                            </p>
                            <p className="mt-0.5 text-xs text-slate-500">
                              {item.description}
                            </p>
                          </div>

                          <span className="text-slate-300 group-hover:text-orange-500 transition-colors">
                            →
                          </span>
                        </div>
                      </NavLink>
                    ))}
                  </div>

                  <div className="border-t border-slate-100 px-4 py-3 bg-slate-50">
                    <Link
                      to="/training"
                      onClick={() => setTrainingOpen(false)}
                      className="inline-flex w-full justify-center rounded-full bg-orange-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-orange-700 transition-all duration-200"
                    >
                      View Full Catalogue
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <NavItem to="/hiring">Hiring & Selection</NavItem>
          <NavItem to="/gallery">Gallery</NavItem>
          <NavItem to="/contact">Contact Us</NavItem>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => {
            setOpen((value) => !value)
            setTrainingOpen(false)
          }}
          className="md:hidden p-2 rounded-xl text-white hover:bg-white/10 hover:text-orange-400 transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-slate-950 text-white border-t border-white/10 shadow-xl">
          <div className="px-6 py-5 flex flex-col gap-1">
            <Link to="/" onClick={closeMobileMenu} className="py-2.5 text-white/90 hover:text-orange-400">
              Home
            </Link>

            <Link to="/about" onClick={closeMobileMenu} className="py-2.5 text-white/90 hover:text-orange-400">
              Who We Are
            </Link>

            <div className="py-2">
              <button
                type="button"
                onClick={() => setTrainingOpen((value) => !value)}
                className="w-full flex items-center justify-between text-left text-white/90 py-2.5 hover:text-orange-400"
              >
                <span>Training</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transition-transform duration-200 ${trainingOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {trainingOpen && (
                <div className="mt-2 space-y-1 rounded-2xl bg-white/5 border border-white/10 p-2">
                  {trainingLinks.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={closeMobileMenu}
                      className="block rounded-xl px-3 py-2.5 text-sm text-white/75 hover:bg-white/10 hover:text-orange-400"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/hiring" onClick={closeMobileMenu} className="py-2.5 text-white/90 hover:text-orange-400">
              Hiring & Selection
            </Link>

            <Link to="/gallery" onClick={closeMobileMenu} className="py-2.5 text-white/90 hover:text-orange-400">
              Gallery
            </Link>

            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="mt-3 inline-flex justify-center rounded-full bg-orange-600 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}