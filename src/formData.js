import React, { useState } from 'react';
import StepOne from './StepOne'; // Assuming StepOne is your component for Step 1
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import { useNavigate } from 'react-router-dom';

const FormData = () => {
  const [currentStep, setCurrentStep] = useState(1);  // Manage which step the user is on
  const [formData, setFormData] = useState({
    plan: '',           // e.g., 'Arcade' or 'Pro'
    onlineService: false, // Boolean for add-ons
    largerStorage: false, // Boolean for add-ons
  });

  const navigate = useNavigate();

  // Function to handle step changes (you can also add navigation logic)
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    navigate(`/step${currentStep + 1}`);
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
    navigate(`/step${currentStep - 1}`);
  };

  return (
    <div>
      {/* Render the steps conditionally */}
      {currentStep === 1 && (
        <StepOne formData={formData} setFormData={setFormData} nextStep={nextStep} />
      )}
      {currentStep === 2 && (
        <StepTwo formData={formData} setFormData={setFormData} nextStep={nextStep} previousStep={previousStep} />
      )}
      {currentStep === 3 && (
        <StepThree formData={formData} setFormData={setFormData} nextStep={nextStep} previousStep={previousStep} />
      )}
      {currentStep === 4 && (
        <StepFour formData={formData} setCurrentStep={setCurrentStep} />
      )}
    </div>
  );
};

export default FormData;
