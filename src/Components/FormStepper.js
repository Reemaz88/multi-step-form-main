import React from "react";

const FormStepper = ({ steps, currentStep }) => (
  <div className="stepper">
    {steps.map((step, index) => (
      <div key={index} className={`step ${currentStep === index ? "active" : ""}`}>
        {step.label}
      </div>
    ))}
  </div>
);

export default FormStepper;
