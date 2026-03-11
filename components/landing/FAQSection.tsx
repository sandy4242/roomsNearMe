"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do I search for properties on 4Diwar?",
    answer:
      "Use the search bar on the homepage to filter properties by location, type, and price range.",
  },
  {
    question: "Are the listings verified?",
    answer:
      "Yes. Every property listed on 4Diwar is reviewed and verified before being published.",
  },
  {
    question: "Is there any brokerage fee?",
    answer:
      "No. 4Diwar connects you directly with property owners with zero brokerage charges.",
  },
  {
    question: "Can I schedule a property visit?",
    answer:
      "Yes. You can contact the property owner directly and schedule visits at your convenience.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20">

        {/* Left Side */}
        <div>
          <span className="text-sm uppercase tracking-widest text-gray-500">
            FAQ
          </span>

          <h2 className="text-4xl md:text-5xl font-display mt-6 leading-tight text-gray-700">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 mt-6 max-w-md">
            Everything you need to know before finding your perfect space.
          </p>
        </div>

        {/* Right Side */}
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-6"
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-lg font-medium text-gray-800">
                  {faq.question}
                </span>

                <span className="text-2xl font-bold text-gray-500">
                  {active === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`mt-4 text-gray-600 leading-relaxed transition-all duration-300 ${
                  active === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}