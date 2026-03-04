const steps = ["Ownership", "Contact", "Property Category","Review & Confirm", ];

export default function Sidebar({ step }: any) {
  return (
    <div className="space-y-10">
      <h2 className="text-2xl font-display font-semibold text-gray-900">
        Partner With <span className="text-red-600">4Diwar</span> 
      </h2>

      <div className="space-y-6">
        {steps.map((label, index) => {
          const stepNumber = index + 1;
          const isActive = step === stepNumber;
          const isDone = step > stepNumber;

          return (
            <div key={index} className="flex items-center gap-4">

              <div
                className={`h-9 w-9 flex items-center justify-center rounded-full text-sm font-semibold
                ${
                  isActive
                    ? "bg-black text-white"
                    : isDone
                    ? "bg-gray-900 text-white"
                    : "border border-gray-300 text-gray-500"
                }`}
              >
                {stepNumber}
              </div>

              <span
                className={`text-sm font-medium ${
                  isActive
                    ? "text-black"
                    : isDone
                    ? "text-gray-900"
                    : "text-gray-500"
                }`}
              >
                {label}
              </span>

            </div>
          );
        })}
      </div>
    </div>
  );
}