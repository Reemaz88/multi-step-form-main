import React from "react";

const Sidebar = ({ currentStep }) => {
  const steps = [
    { step: 1, label: 'Your Info' },
    { step: 2, label: 'Select Plan' },
    { step: 3, label: 'Add-ons' },
    { step: 4, label: 'Summary' },
  ];

  return (
    <div className="bg-custom-bg bg-cover bg-center text-white p-6 rounded-lg">
      {steps.map(({ step, label }) => (
        <div key={step} className="flex items-center mb-6">
          <div className={`w-8 h-8 ${currentStep === step ? 'bg-blue-300' : 'bg-blue-900'} rounded-full flex items-center justify-center text-white`}>
            {step}
          </div>
          <p className={`ml-4 uppercase font-semibold ${currentStep === step ? 'text-blue-900' : 'text-white'}`}>
            {label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
