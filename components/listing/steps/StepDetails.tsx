"use client";

export default function StepDetails({ formData, setFormData }: any) {
  const updateField = (key: string, value: any) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-display font-semibold text-gray-900 mb-4">
        Basic Details
      </h1>

      <p className="text-gray-600 mb-10 text-lg">
        Add essential information about your property.
      </p>

      <div className="space-y-8">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Property Title
          </label>
          <input
            type="text"
            value={formData.title || ""}
            onChange={(e) => updateField("title", e.target.value)}
            placeholder="2BHK Apartment in Gangtok"
            className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 
text-gray-900 placeholder-gray-400 
focus:ring-2 focus:ring-black focus:border-black outline-none"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <p className="text-xs text-gray-400 mt-2 text-right">
  {formData.description?.length || 0}/500
</p>
          <textarea maxLength={500}
            rows={5}
            value={formData.description || ""}
            onChange={(e) => updateField("description", e.target.value)}
            placeholder="Describe your property..."
            className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 
text-gray-900 placeholder-gray-400 
focus:ring-2 focus:ring-black focus:border-black outline-none"
          />
        </div>

        {/* Listing Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Listing Type
          </label>

          <div className="flex gap-6">
            {["rent", "sale"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => updateField("listing_type", type)}
                className={`px-6 py-3 rounded-xl border transition ${
                  formData.listing_type === type
                    ? "bg-black text-white border-black"
                    : "border-gray-300 text-gray-700 hover:border-black"
                }`}
              >
                {type === "rent" ? "For Rent" : "For Sale"}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Fields */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Bathrooms */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bathrooms
            </label>
            <input
              type="number"
              min="0"
              value={formData.bathrooms || ""}
              onChange={(e) =>
                updateField("bathrooms", parseInt(e.target.value))
              }
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 
text-gray-900 placeholder-gray-400
focus:ring-2 focus:ring-black focus:border-black outline-none"
            />
          </div>

          {/* Area */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Area (sq ft)
            </label>
            <input
              type="number"
              min="0"
              value={formData.area || ""}
              onChange={(e) => updateField("area", parseFloat(e.target.value))}
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 
text-gray-900 placeholder-gray-400
focus:ring-2 focus:ring-black focus:border-black outline-none"
            />
          </div>

          {/* Max Guests */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Max Guests
            </label>
            <input
              type="number"
              min="1"
              value={formData.max_guests || ""}
              onChange={(e) =>
                updateField("max_guests", parseInt(e.target.value))
              }
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 
text-gray-900 placeholder-gray-400
focus:ring-2 focus:ring-black focus:border-black outline-none"
            />
          </div>
        </div>

        {/* Furnished Toggle */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Furnished
          </label>

          <div className="flex gap-6">
            {[true, false].map((value) => (
              <button
                key={value.toString()}
                type="button"
                onClick={() => updateField("furnished", value)}
                className={`px-6 py-3 rounded-xl border transition ${
                  formData.furnished === value
                    ? "bg-black text-white border-black"
                    : "border-gray-300 text-gray-700 hover:border-black"
                }`}
              >
                {value ? "Yes" : "No"}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
