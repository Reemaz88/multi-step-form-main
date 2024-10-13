import React from "react";
import bgImageDesktop from '../assets/images/bg-sidebar-desktop.svg';
// import bgImageMobile from '../assets/images/bg-sidebar-mobile.svg';
import '../App.css'; // Import the App.css file here

const Sidebar = ({ currentStep }) => {
  const steps = [
    { step: 1, label: 'Your Info' },
    { step: 2, label: 'Select Plan' },
    { step: 3, label: 'Add-ons' },
    { step: 4, label: 'Summary' },
  ];

  return (
    <div className="bg-custom-bg bg-cover h-full bg-center text-white p-6 rounded-lg" style={{ backgroundImage: `url(${bgImageDesktop})`  }}>
      {steps.map(({ step, label }) => (
        <div key={step} className="flex items-center mb-6 steps">
          {/* Circle with Step number */}
          <div className={`w-8 h-8  text-xs flex-shrink-0 ${currentStep === step ? 'bg-blue-300 border-none text-black' : 'bg-transparent border-white text-white'} border rounded-full flex items-center justify-center`}>            {step}
          </div>
          {/* Step number and label */}
          <div className="ml-4">
            <p className="text-xs uppercase tracking-wide font-normal text-gray-400">
              Step {step}
            </p>
            <p className={`text-sm uppercase font-normal text-white}`}>
              {label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;


