"use client";

const steps = [
  "Property Type",
  "Basic Details",
  "Rooms & Beds",
  "Location",
  "Pricing",
  "Images",
  "Review & Publish",
];

export default function Sidebar({ step }: any) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-display font-semibold mb-8 text-gray-900">
        Create Listing
      </h2>

      {steps.map((title, index) => {
        const stepNumber = index + 1;
        const isActive = step === stepNumber;
        const isCompleted = step > stepNumber;

        return (
          <div key={index} className="flex items-center space-x-4">
            
            <div
              className={`h-9 w-9 flex items-center justify-center rounded-full text-sm font-semibold transition
                ${
                  isActive
                    ? "bg-black text-white"
                    : isCompleted
                    ? "bg-green-600 text-white"
                    : "border border-gray-300 text-gray-500"
                }`}
            >
              {stepNumber}
            </div>

            <span
              className={`text-sm font-medium ${
                isActive
                  ? "text-black"
                  : isCompleted
                  ? "text-green-600"
                  : "text-gray-500"
              }`}
            >
              {title}
            </span>
          </div>
        );
      })}
    </div>
  );
}