import React from "react";
import { Package, MapPin, Clock, Headset } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  {
    value: "50K+",
    label: "Deliveries Completed",
    icon: <Package size={28} />,
  },
  {
    value: "600+",
    label: "Cities Covered",
    icon: <MapPin size={28} />,
  },
  {
    value: "98%",
    label: "On-Time Delivery",
    icon: <Clock size={28} />,
  },
  {
    value: "24/7",
    label: "Customer Support",
    icon: <Headset size={28} />,
  },
];

const Stat = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
      <div className="max-w-7xl mx-auto px-6">

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold">
                {stat.value}
              </h3>
              <p className="text-sm text-white/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        
        <div className="mt-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Ship Smarter with Quick ?
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Connect With Us To Experience Fast And Trustable Deliveries
          </p>
          <Link to="/contact">
          <button className="mt-8 px-8 py-4 rounded-lg bg-white text-blue-600 font-semibold hover:bg-blue-50 transition">
            Connect with Us
          </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Stat;
