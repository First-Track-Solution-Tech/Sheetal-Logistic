import React from "react";

const partners = [
  { id: 1, name: "Company One", logo: null },
  { id: 2, name: "Company Two", logo: null },
  { id: 3, name: "Company Three", logo: null },
  { id: 4, name: "Company Four", logo: null },
  { id: 5, name: "Company Five", logo: null },
];


const scrollingPartners = [...partners, ...partners];

const Trusted_partners = () => {
  return (
    <section className="py-16 bg-[#F6FAF9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Trusted by Our Partners
          </h2>
          <p className="text-gray-500 mt-2">
            Companies that trust Quick Courier for reliable delivery
          </p>
        </div>

        
        <div className="relative">
          <div className="flex gap-6 animate-partner-scroll w-max">
            {scrollingPartners.map((partner, index) => (
              <div
                key={index}
                className="min-w-[220px] bg-white rounded-xl shadow-sm
                           border border-gray-100 p-6 flex flex-col
                           items-center justify-center hover:shadow-md
                           transition"
              >
                
                <div className="w-20 h-20 bg-gray-100 rounded-lg
                                flex items-center justify-center text-gray-400">
                  Logo
                </div>

                
                <h4 className="mt-4 font-semibold text-gray-700">
                  {partner.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted_partners;
