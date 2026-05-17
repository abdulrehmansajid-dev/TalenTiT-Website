import React from 'react'
import logo from '../assets/logo.jpeg'

export default function Footer(){
  return (
    <footer className="bg-primary-950 text-white mt-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        <div className="flex items-center gap-4">
          <img src={logo} alt="logo" className="w-12 h-12 object-cover rounded-xl bg-white" />
          <div>
            <div className="font-semibold text-lg">TalenTiT Hospitality</div>
            <div className="text-sm text-white/80">Training · HR Outsourcing · Talent Acquisition</div>
          </div>
        </div>

        <div className="text-sm text-white/88">
          <div className="font-semibold text-white mb-2">Contact</div>
          <div>Phone: +971-552244365</div>
          <div>Email: info@talentitconsultants.com</div>
        </div>

        <div className="text-sm text-white/88">
          <div className="font-semibold text-white mb-2">Location</div>
          <div>Business Centre, Sharjah Publishing City Free Zone</div>
        </div>
      </div>
      <div className="text-center text-white/75 text-sm py-4 border-t border-white/10">© {new Date().getFullYear()} TalenTiT Hospitality. All rights reserved.</div>
    </footer>
  )
}
