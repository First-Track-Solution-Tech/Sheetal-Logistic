import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Mehta",
    role: "E-commerce Seller",
    image: null,
    review:
      "Quick Courier has completely streamlined our deliveries. On-time pickups and accurate tracking every time.",
    rating: 5,
  },
  {
    id: 2,
    name: "Ananya Sharma",
    role: "Small Business Owner",
    image: null,
    review:
      "Affordable pricing and excellent customer support. I can finally focus on my business growth.",
    rating: 5,
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Logistics Manager",
    image: null,
    review:
      "Real-time tracking and professional handling make Quick Courier our trusted delivery partner.",
    rating: 4,
  },
];

const Customer = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-800">
            What Our Customers Say
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Trusted by businesses and individuals for fast, secure, and reliable
            deliveries.
          </p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#F6FAF9] rounded-2xl p-8
                         hover:-translate-y-2 transition
                         shadow-sm hover:shadow-md"
            >
              
              <div className="flex items-center gap-4 mb-4">
               
                <div className="w-14 h-14 rounded-full bg-gray-200
                                flex items-center justify-center text-gray-500">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    item.name.charAt(0)
                  )}
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>

              
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                “{item.review}”
              </p>

              
              <div className="flex gap-1">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} size={16}  className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customer;
