import React from 'react'
import { assets } from '../assets/assets'
import Ourservices from '../components/Ourservices'
import { Truck, Globe, Handshake } from "lucide-react";
import Whyquick from '../components/Whyquick';



const About = () => {
  return (
    <>
    <section className='relative w-full h-[70vh] min-h-[450px] mt-2'>
        <img src={assets.about_hero} alt='ABOUT US' className='absolute inset-0 w-full h-full object-cover'/>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
    <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wide">
      About Us
    </h1>
  </div>
    </section>
    <section className='py-8 max-w-5xl mx-auto px-4'>
        <p className='text-gray-700 text-lg text-center'>
<strong>Quick Courier</strong> is a modern and reliable courier service built to simplify the way shipments are sent, tracked, and delivered. We provide fast, secure, and efficient logistics solutions for individuals and businesses, ensuring every package is handled with care from pickup to final delivery. With a strong focus on timely service, transparent tracking, and customer satisfaction, Quick Courier makes shipping stress-free and dependable, whether it’s a local delivery or a long-distance shipment.
        </p>
    </section>
    <section className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4">
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      
      <div className="bg-blue-50 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-600">
          <Truck className="text-white" size={26} />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Our Purpose
        </h3>
        <p className="text-gray-600 leading-relaxed">
          We exist to make shipping simple and stress-free by ensuring every
          parcel reaches its destination safely, on time, and without
          complications.
        </p>
      </div>

      
      <div className="bg-green-50 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-600">
          <Globe className="text-white" size={26} />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Our Direction
        </h3>
        <p className="text-gray-600 leading-relaxed">
          We aim to become a trusted logistics partner by connecting people and
          businesses through dependable delivery services across regions.
        </p>
      </div>

     
      <div className="bg-yellow-50 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-yellow-500">
          <Handshake className="text-white" size={26} />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          What We Stand For
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Trust, responsibility, and customer care guide everything we do —
          because every delivery represents a promise we intend to keep.
        </p>
      </div>

    </div>
  </div>
</section>
<Ourservices/>
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">

    <div className="text-center max-w-2xl mx-auto mb-12">
      <h2 className="text-3xl font-bold text-gray-800">
        Meet Our Team
      </h2>
      <p className="mt-4 text-gray-600">
        The people who work behind the scenes to keep your shipments moving.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      
      
      <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
        <img
          src={assets.team1}
          alt="Team member"
          className="w-28 h-28 mx-auto rounded-full object-cover"
        />
        <h3 className="mt-4 text-lg font-semibold text-gray-800">
          Amit Verma
        </h3>
        <p className="text-sm text-emerald-600 font-medium">
          Operations Manager
        </p>
        <p className="mt-2 text-sm text-gray-600">
          Ensures smooth coordination and on-time deliveries across all routes.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
        <img
          src={assets.team2}
          alt="Team member"
          className="w-28 h-28 mx-auto rounded-full object-cover"
        />
        <h3 className="mt-4 text-lg font-semibold text-gray-800">
          Neha Sharma
        </h3>
        <p className="text-sm text-emerald-600 font-medium">
          Customer Support Lead
        </p>
        <p className="mt-2 text-sm text-gray-600">
          Focused on resolving customer queries with care and clarity.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
        <img
          src={assets.team3}
          alt="Team member"
          className="w-28 h-28 mx-auto rounded-full object-cover"
        />
        <h3 className="mt-4 text-lg font-semibold text-gray-800">
          Rahul Mehta
        </h3>
        <p className="text-sm text-emerald-600 font-medium">
          Logistics Supervisor
        </p>
        <p className="mt-2 text-sm text-gray-600">
          Oversees secure handling and efficient movement of shipments.
        </p>
      </div>

    </div>
  </div>
</section>
<Whyquick/>


    </>
  )
}

export default About





