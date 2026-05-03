import React, { useState } from "react";

const faqs = [
  {
    question: "What services does Quick Courier offer?",
    answer:
      "Quick Courier provides reliable parcel delivery services including local pickups, city-to-city shipping, and nationwide courier solutions for businesses and individuals.",
  },
  {
    question: "How can I track my shipment?",
    answer:
      "Once your order is placed, you will receive a tracking ID. Visit our tracking page and enter the ID to get real-time shipment updates.",
  },
  {
    question: "What is the estimated delivery time?",
    answer:
      "Local deliveries are typically completed within 24–48 hours. Long-distance or interstate shipments usually take between 3–6 business days, depending on location.",
  },
  {
    question: "How do I schedule a pickup?",
    answer:
      "You can schedule a pickup by contacting our support team or placing a request through our website. Our courier partner will collect the package from your doorstep.",
  },
  {
    question: "How are shipping charges calculated?",
    answer:
      "Shipping costs depend on package weight, size, delivery distance, and service type. Exact pricing is shared transparently before shipment confirmation.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16">
      {/* Title */}
      <div className="max-w-5xl mx-auto px-4 text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Frequently Asked Questions
        </h1>
        <p className="mt-3 text-gray-500">
          Everything you need to know about Quick Courier services
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto px-4 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 bg-gray-100 hover:bg-gray-200 transition"
            >
              <span className="font-medium text-gray-800 text-left">
                {faq.question}
              </span>
              <span className="text-2xl text-gray-600">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 py-4 bg-white border-l-4 border-blue-600 text-gray-600">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
