"use client";

import { useState } from "react";
import IntakeLayout from "@/components/owner-intake/IntakeLayout";
import StepOwnership from "@/components/owner-intake/StepOwnership";
import StepContact from "@/components/owner-intake/StepContact";
import StepCategory from "@/components/owner-intake/StepCategory";
import StepReview from "@/components/owner-intake/StepReview";
import { useRouter } from "next/navigation";

export default function ListPropertyPage() {

  const router = useRouter();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<any>({});
  const [errors, setErrors] = useState<any>({});
   const [showSuccess, setShowSuccess] = useState(false);

  const renderStep = () => {
  switch (step) {
    case 1:
      return (
        <StepOwnership
          formData={formData}
          setFormData={setFormData}
          errors={errors}
        />
      );

    case 2:
      return (
        <StepContact
          formData={formData}
          setFormData={setFormData}
          errors={errors}
        />
      );

    case 3:
      return (
        <StepCategory
          formData={formData}
          setFormData={setFormData}
          errors={errors}
        />
      );

    case 4:
      return <StepReview formData={formData} />;

    default:
      return null;
  }
};
  const handleNext = () => {
   console.log("Step:", step);
  console.log("FormData:", formData);

  if (validateStep()) {
    console.log("Validation passed");
    setStep(step + 1);
  } else {
    console.log("Validation failed");
  }
};
  const validateStep = () => {
  const newErrors: any = {};

  if (step === 1) {
    if (!formData.owner_type) {
      newErrors.owner_type = "Please select ownership type";
    }
  }

  if (step === 2) {
    if (!formData.full_name?.trim()) {
      newErrors.full_name = "Full name is required";
    }

    if (!formData.phone || formData.phone.length < 10) {
      newErrors.phone = "Valid phone number required";
    }

    if (!formData.whatsapp || formData.whatsapp.length < 10) {
      newErrors.whatsapp = "Valid WhatsApp number required";
    }
  }

  if (step === 3) {
    if (!formData.property_category) {
      newErrors.property_category = "Please select a category";
    }
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};
const handleSubmit = () => {
    console.log("Form submitted:", formData);

    // show popup
    setShowSuccess(true);
  };

  const closePopup = () => {
    setShowSuccess(false);

    // redirect to landing page
    router.push("/");
  };

  return (
    <>
   <IntakeLayout
    step={step}
    setStep={setStep}
    handleNext={handleNext}
    handleSubmit={handleSubmit}

  >
    {renderStep()}
  </IntakeLayout>
  
  // SUCCESS POPUP
      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white p-10 rounded-2xl text-center w-[420px] shadow-xl">

            <img
              src="/Done.gif"
              width={150}
              height={150}
              alt="success"
              className="w-32 mx-auto mb-6"
            />

            {/* <h2 className="text-2xl text-black font-semibold mb-2">
              Successfully Submitted
            </h2> */}

            <p className="text-2xl text-black mb-6">
              Your <span className="text-red-600">Property</span> was submitted successfully.
            </p>

            <button
              onClick={closePopup}
              className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Close
            </button>

          </div>

        </div>
      )}
  </>
  );
}
