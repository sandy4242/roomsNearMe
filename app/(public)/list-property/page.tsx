"use client";

import { useState } from "react";
import ListingLayout from "@/components/listing/ListingLayout";
import StepType from "@/components/listing/steps/StepType";
import StepDetails from "@/components/listing/steps/StepDetails";
import StepRooms from "@/components/listing/steps/StepRooms";

export default function ListPropertyPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<any>({});

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepType formData={formData} setFormData={setFormData} />;
      case 2:
        return <StepDetails formData={formData} setFormData={setFormData} />;
      default:
        return <StepRooms formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <ListingLayout
      step={step}
      setStep={setStep}
    >
      {renderStep()}
    </ListingLayout>
  );
}