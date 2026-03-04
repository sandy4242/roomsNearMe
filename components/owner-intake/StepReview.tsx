"use client";

export default function StepReview({ formData }: any) {
  return (
    <div className="max-w-3xl">

      <h1 className="text-4xl font-display font-semibold mb-4 text-gray-900">
        <span className="underline decoration-red-600 decoration-4 underline-offset-5">
             Review Your Details
        </span>
      </h1>

      <p className="text-gray-600 text-lg mb-12">
        Please confirm your information before submitting.
      </p>

      <div className="space-y-8">

        {/* Ownership */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h3 className="text-sm text-gray-500 mb-2">Ownership</h3>
          <p className="text-lg font-medium text-gray-900">
            {formData.owner_type === "owner"
              ? "Property Owner"
              : "Agent / Representative"}
          </p>
        </div>

        {/* Contact */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h3 className="text-sm text-gray-500 mb-2">Contact Details</h3>

          <div className="space-y-2 text-gray-900">
            <p><span className="font-medium">Name:</span> {formData.full_name}</p>
            <p><span className="font-medium">Phone:</span> {formData.phone}</p>
            <p><span className="font-medium">WhatsApp:</span> {formData.whatsapp}</p>
          </div>
        </div>

        {/* Category */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h3 className="text-sm text-gray-500 mb-2">Property Category</h3>
          <p className="text-lg font-medium text-gray-900">
            {formData.property_category}
          </p>
        </div>

      </div>

      {/* Confirmation Note */}
      <div className="mt-12 bg-gray-100 rounded-xl p-6">
        <p className="text-gray-700">
          Our team will contact you within 24 hours to verify your property.
        </p>
      </div>

    </div>
  );
}