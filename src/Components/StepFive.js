import React from 'react';
import iconThanks from '../assets/images/icon-thank-you.svg'

const StepFive = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank you!</h2>
        <p className="text-gray-500 mb-6">
          Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at <a href="mailto:support@loremgaming.com" className="text-blue-600 underline">support@loremgaming.com</a>.
        </p>
        {/* Icon can be placed here */}
        <img src={iconThanks} alt="Confirmation" className="mx-auto" />
      </div>
    </div>
  );
};

export default StepFive;
