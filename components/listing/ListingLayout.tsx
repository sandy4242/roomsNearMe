"use client";

import Sidebar from "./Sidebar";

export default function ListingLayout({
  step,
  setStep,
  children,
  canContinue = true,
}: any) {
  return (
    <div className="h-screen flex bg-gray-50">

      {/* Sidebar (Fixed) */}
      <div className="hidden md:flex w-72 bg-white border-r border-gray-200 p-10 flex-col fixed h-full">
        <Sidebar step={step} />
      </div>

      {/* Right Content Area */}
      <div className="flex-1 flex flex-col md:ml-72">

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-10 md:px-20 py-14 pb-32">
          {children}
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 md:left-72 right-0 bg-white border-t border-gray-200 px-10 py-5 flex justify-between items-center">
          
          <button
            onClick={() => step > 1 && setStep(step - 1)}
            disabled={step === 1}
            className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition disabled:opacity-40"
          >
            Back
          </button>

          <button
            onClick={() => setStep(step + 1)}
            disabled={!canContinue}
            className="px-8 py-3 rounded-lg bg-black text-white font-semibold hover:bg-gray-800 transition disabled:bg-gray-300 disabled:text-gray-500"
          >
            Continue
          </button>

        </div>

      </div>
    </div>
  );
}