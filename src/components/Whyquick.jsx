import React from 'react'
import { Truck, UsersRound, ShieldCheck } from 'lucide-react';
const features = [
  {
    title: "On-Time Delivery",
    desc: "We prioritize timely pickups and dependable deliveries so your packages arrive exactly when expected.",
    icon: <Truck size={26} />,
    delay: 0.3
  },
  {
    title: "Easy Shipping Process",
    desc: "A smooth, simple flow from booking to delivery, with clear updates at every step.",
    icon: <Truck size={26} />,
    delay: 0.3
  },
  {
    title: "Safe & Secure Handling",
    desc: "Your shipments are handled with care, ensuring protection throughout the entire journey.",
    icon: <ShieldCheck size={26} />,
    delay: 0.3
  },
  {
    title: "Dedicated Support",
    desc: "Our friendly support team is always ready to assist you whenever you need help.",
    icon: <UsersRound size={26} />,
    delay: 0.3
  }
]

const Whyquick = () => {
  return (
    <section className="bg-gray-50 py-20 px-4">
    <div className='max-w-7xl mx-auto'>
<div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Quick Courier?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We simplify shipping with speed, security, and smart technology —
            so you can focus on what matters most.
          </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
         {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-2xl mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

    </div>
    </section>
  )
}

export default Whyquick