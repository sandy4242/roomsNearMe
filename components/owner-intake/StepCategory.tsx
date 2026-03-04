"use client";

export default function StepCategory({ formData, setFormData }: any) {
  const categories = [
    "PG",
    "Rental Rooms",
    "Apartment",
    "Commercial Space",
  ];

  return (
    <div className="max-w-3xl">

      <h1 className="text-4xl font-display font-semibold mb-4 text-gray-900">
        <span className="text-red-600">Property</span> Category
      </h1>

      <p className="text-gray-600 text-lg mb-12">
        Select the type of property you want to list.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((cat) => {
          const isSelected = formData.property_category === cat;

          return (
            <div
              key={cat}
              onClick={() =>
                setFormData({ ...formData, property_category: cat })
              }
              className={`p-8 rounded-2xl border cursor-pointer transition
                ${
                  isSelected
                    ? "border-black shadow-xl bg-white"
                    : "border-gray-200 bg-white hover:shadow-md"
                }`}
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {cat}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}