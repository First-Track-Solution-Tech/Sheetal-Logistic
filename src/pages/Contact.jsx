import React from 'react'
import { assets } from '../assets/assets'
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin,} from "lucide-react"

const Contact = () => {
  return (
    <>
    <section className='relative w-full h-[70vh] min-h-[450px]'>
        <img src={assets.contact_hero} alt='ABOUT US' className='absolute inset-0 w-full h-full object-cover'/>
        <div className="absolute inset-0 bg-black/40"></div>
         <div className="absolute inset-0 flex items-center justify-center">
    <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wide">
      Contact Us
    </h1>
  </div>
    </section>
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">
            Get In Touch!!
          </h2>

          <form className="space-y-4">
            <input className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Your Name" />
            <input className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Email Address" />
            <input className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Phone Number" />
            <input className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Subject" />
            <textarea rows="4" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Your Message"></textarea>

            <button className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-medium">
              Send Message
            </button>
          </form>
        </div>

        <div className="bg-gradient-to-br from-[#e8f1ff] via-[#e6fbf6] to-[#ffffff] p-8 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            Contact Information
          </h3>
          <p className="text-slate-600 mb-6">
            Feel free to reach out to us!
          </p>

          <div className="space-y-4 text-slate-700">
            <div className="flex gap-3">
              <MapPin className="text-blue-600" size={20} />
              <p>ABC City, XYZ Country</p>
            </div>
            <div className="flex gap-3">
              <Phone className="text-blue-600" size={20} />
              <p>+91-1234567890</p>
            </div>
            
            <div className="flex gap-3">
              <Mail className="text-blue-600" size={20} />
              <p>info@quickcourier.in</p>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <Facebook className="text-blue-600 hover:scale-110 transition cursor-pointer" />
            <Instagram className="text-pink-500 hover:scale-110 transition cursor-pointer" />
            <Twitter className="text-sky-500 hover:scale-110 transition cursor-pointer" />
            <Linkedin className="text-blue-700 hover:scale-110 transition cursor-pointer" />
          </div>
        </div>

      </div>
    </section>
    
    </>
  )
}

export default Contact