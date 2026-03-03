"use client";

import { Home, BedDouble, Building2 } from "lucide-react";

export default function StepType({ formData, setFormData }: any) {
  const types = [
    {
      label: "Homes",
      value: "home",
      description: "Apartments, villas, houses",
      icon: Home,
    },
    {
      label: "PGs",
      value: "pgs",
      description: "Hostels, shared stays",
      icon: BedDouble,
    },
    {
      label: "Hotels",
      value: "hotel",
      description: "Hotels & serviced rooms",
      icon: Building2,
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-display font-semibold text-gray-900 mb-4">
        Choose Property Type
      </h1>

      <p className="text-gray-600 mb-10 text-lg">
        Select the category that best describes your property.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {types.map((type) => {
          const Icon = type.icon;
          const isSelected = formData.propertyType === type.value;

          return (
            <div
              key={type.value}
              onClick={() =>
                setFormData({ ...formData, propertyType: type.value })
              }
              className={`p-10 rounded-2xl border cursor-pointer transition-all duration-300 group
                ${
                  isSelected
                    ? "border-black shadow-xl bg-white scale-[1.02]"
                    : "border-gray-200 bg-white hover:shadow-md hover:border-black"
                }
              `}
            >
              {/* Icon */}
              <div
                className={`h-14 w-14 flex items-center justify-center rounded-xl mb-6 transition
                  ${
                    isSelected
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-700 group-hover:bg-black group-hover:text-white"
                  }
                `}
              >
                <Icon size={26} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {type.label}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm">
                {type.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}