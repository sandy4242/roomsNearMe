"use client";

export default function StepContact({ formData, setFormData, errors }: any) {

  const update = (key: string, value: any) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <div className="max-w-3xl">

      <h1 className="text-4xl font-display font-semibold mb-4 text-gray-900">
  <span className="underline decoration-red-600 decoration-4 underline-offset-5">
    Contact Details
  </span>
</h1>

      <p className="text-gray-600 text-lg mb-12">
        Our team will reach out to verify your property.
      </p>

      <div className="space-y-6">

        {/* Full Name */}
        <div>
          <input
            type="text"
            placeholder="Full Name"
            value={formData.full_name || ""}
            onChange={(e) => update("full_name", e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-black outline-none"
          />

          {errors?.full_name && (
            <p className="text-red-500 text-sm mt-2">
              {errors.full_name}
            </p>
          )}
        </div>


        {/* Phone */}
        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone || ""}
            onChange={(e) => update("phone", e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-black outline-none"
          />

          {errors?.phone && (
            <p className="text-red-500 text-sm mt-2">
              {errors.phone}
            </p>
          )}
        </div>


        {/* WhatsApp */}
        <div>
          <input
            type="tel"
            placeholder="WhatsApp Number"
            value={formData.whatsapp || ""}
            onChange={(e) => update("whatsapp", e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-black outline-none"
          />

          {errors?.whatsapp && (
            <p className="text-red-500 text-sm mt-2">
              {errors.whatsapp}
            </p>
          )}
        </div>

      </div>
    </div>
  );
}