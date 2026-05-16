import React from 'react'
import logo from '../assets/logo.jpeg'

export default function Footer(){
  return (
    <footer className="bg-primary-900 text-white mt-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start justify-between gap-6">
        <div className="flex items-center gap-4">
          <img src={logo} alt="logo" className="w-12 h-12 object-cover rounded-xl bg-white" />
          <div>
            <div className="font-semibold text-lg">TalenTiT Hospitality</div>
            <div className="text-sm text-white/80">Training · HR Outsourcing · Talent Acquisition</div>
          </div>
        </div>

        <div className="text-sm text-white/80">
          <div>Phone: +971-552244365</div>
          <div>Email: info@talentitconsultants.com</div>
        </div>

        <div className="text-sm text-white/80">
          <div>Business Centre, Sharjah Publishing City Free Zone</div>
        </div>
      </div>
      <div className="text-center text-white/65 text-sm py-4 bg-primary-950/20">© {new Date().getFullYear()} TalenTiT Hospitality. All rights reserved.</div>
    </footer>
  )
}
