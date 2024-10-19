import React from 'react';
import iconThanks from '../assets/images/icon-thank-you.svg'
import '../App.css'; // Import the App.css file here


const StepFive = () => {
  return (
    <div className="flex items-center justify-center mt-28 step-five"> 
      <div className="text-center">        
        <img src={iconThanks} alt="Confirmation" className="mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank you!</h2>
        <p className="text-customLightGray mb-6">
          Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default StepFive;
