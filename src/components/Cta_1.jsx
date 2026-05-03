import React from 'react'


const Cta_1 = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto rounded-2xl bg-gradient-to-r from-blue-600 to-emerald-500 p-10 text-white shadow-lg">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ship Smarter with Quick Courier
            </h2>
            <p className="text-white/90 max-w-xl">
              Fast, reliable, and secure delivery solutions for businesses and individuals.
              Track your shipments in real time or book a pickup in seconds.
            </p>
          </div>
  <div className="flex gap-4">
    <a href='/signin' className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Login
            </a>
            <a href='/track' className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Track Order
            </a>
            
          </div>

        </div>
      </div>
    </section>
  )
}

export default Cta_1