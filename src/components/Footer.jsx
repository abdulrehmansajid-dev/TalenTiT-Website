import React from 'react'
import logo from '../assets/logo.jpeg'

export default function Footer(){
  return (
    <footer className="bg-slate-950 text-white mt-14 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-4">
            <img src={logo} alt="logo" className="w-12 h-12 object-cover rounded-xl bg-white" />
            <div>
              <div className="font-semibold text-lg">TalenTiT Hospitality</div>
              <div className="text-sm text-white/70">Training · HR Outsourcing · Talent Acquisition</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/70 leading-7">“Expert Hoteliers; 
Transforming Future Hoteliers”</p>
        </div>

        <div className="text-sm text-white/85 leading-7">
          <div className="font-semibold text-white mb-2">Contact</div>
          <div>Phone: +971-552244365</div>
          <div>Email: info@talentithospitality.com</div>
          <div>Website: www.talentithospitality.com</div>
        </div>

        <div className="text-sm text-white/85 leading-7">
          <div className="font-semibold text-white mb-2">Address</div>
          <div>Business Centre, Sharjah Publishing City Free Zone</div>
          <div>Sharjah, United Arab Emirates</div>
        </div>
      </div>

      <div className="text-center text-white/70 text-sm py-4 border-t border-white/10 bg-slate-900/40">© {new Date().getFullYear()} TalenTiT Hospitality. All rights reserved.</div>
    </footer>
  )
}
