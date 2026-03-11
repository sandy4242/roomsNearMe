"use client";

import { useState } from "react";

const tabs = [
  {
    title: "Verified Listings",
    heading: "Trust Begins with Transparency.",
    description:
      "Every property listed on 4Diwar undergoes a careful review process to ensure authenticity and accuracy.",
  },
  {
    title: "Direct Owner Contact",
    heading: "Connect Without Intermediaries.",
    description:
      "Communicate directly with property owners. No brokers. No hidden commissions.",
  },
  {
    title: "Transparent Process",
    heading: "Clarity at Every Step.",
    description:
      "Stay informed throughout your property journey with clear communication and complete visibility.",
  },
];

export default function WhySection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-24">

        {/* LEFT SIDE (Dynamic Content) */}
        <div>
          <span className="text-sm uppercase tracking-widest text-gray-500">
            About <span className="text-red-600">4Diwar</span>
          </span>

          <h2 className="text-4xl md:text-5xl font-display mt-6 leading-tight transition-all duration-500 text-gray-700">
            {tabs[active].heading}
          </h2>

          <p className="text-gray-600 mt-8 max-w-lg leading-relaxed transition-all duration-500">
            {tabs[active].description}
          </p>
        </div>

        {/* RIGHT SIDE (Tabs) */}
        <div className="space-y-6">

          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`w-full text-left p-8 rounded-2xl border transition-all duration-300 ${
                active === index
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-800 border-gray-200 hover:border-black"
              }`}
            >
              <h3 className="text-xl font-medium">
                {tab.title}
              </h3>
            </button>
          ))}

        </div>

      </div>
    </section>
  );
}