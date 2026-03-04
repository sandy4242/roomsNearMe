"use client";

import { User, Briefcase } from "lucide-react";

export default function StepOwnership({ formData, setFormData }: any) {
  const options = [
    {
      label: "I am the Property Owner",
      value: "owner",
      icon: User,
      desc: "Direct ownership of the property.",
    },
    {
      label: "I represent the Owner",
      value: "agent",
      icon: Briefcase,
      desc: "Authorized agent or broker.",
    },
  ];

  return (
    <div className="max-w-3xl">

      <h1 className="text-4xl font-display font-semibold mb-4 text-gray-900">
        List With <span className="text-red-600">4Diwar</span> 
      </h1>

      <p className="text-gray-600 text-lg mb-12">
        We verify every property before publishing.
      </p>

      <div className="space-y-6">
        {options.map((opt) => {
          const Icon = opt.icon;
          const isSelected = formData.owner_type === opt.value;

          return (
            <div
              key={opt.value}
              onClick={() =>
                setFormData({ ...formData, owner_type: opt.value })
              }
              className={`p-8 rounded-2xl border cursor-pointer transition
                ${
                  isSelected
                    ? "border-black shadow-xl bg-white"
                    : "border-gray-200 bg-white hover:shadow-md"
                }`}
            >
              <div className="flex gap-5 items-start">

                <div
                  className={`h-12 w-12 rounded-xl flex items-center justify-center
                    ${
                      isSelected
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                >
                  <Icon size={22} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {opt.label}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    {opt.desc}
                  </p>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}