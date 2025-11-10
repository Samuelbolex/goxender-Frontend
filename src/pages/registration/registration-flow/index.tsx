import { useState } from "react";
import Stepper from "./stepper";

const RegistrationFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Account Initialization",
    "Email Verification",
    "Customer Information",
    "User Verification Instruction",
    // Add more steps here as needed
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-5 py-6">
      {/* Stepper Header */}
      <div className="flex w-full items-center justify-between mb-6">
        <div className="flex w-full items-center space-x-4">
          {steps.map((_, index) => (
            <div key={index} className="w-full flex items-center">
              <div
                className={`flex flex-1 w-full h-1 rounded-full items-center justify-center ${
                  index <= currentStep
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              />
              {/* {index < steps.length - 1 && (
                <div
                  className={`w-12 h-1 mx-2 ${
                    index < currentStep ? "bg-blue-500" : "bg-gray-300"
                  }`}
                />
              )} */}
            </div>
          ))}
        </div>
      </div>

      {/* Current Step Content */}
      <div className="flex-1">
        <Stepper currentStep={currentStep} form={{}} />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        {currentStep > 0 && (
          <button
            onClick={prevStep}
            className="px-4 py-2 rounded bg-gray-500 text-white hover:bg-gray-600 cursor-pointer"
          >
            Previous
          </button>
        )}
        <button
          onClick={nextStep}
          disabled={currentStep === steps.length - 1}
          className={`px-4 py-2 rounded ${
            currentStep === steps.length - 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
          } ${currentStep === 0 ? "ml-auto" : ""}`}
        >
          {currentStep === 0 ? "Continue" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default RegistrationFlow;
