import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './Components/Sidebar';
import StepOne from './Components/StepOne';
import StepTwo from './Components/StepTwo';
import StepThree from './Components/StepThree';
import StepFour from './Components/StepFour';

const App = () => {
  // State to track current step
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <Router>
      <div className="flex min-h-screen justify-center bg-blue-50 p-8">
        {/* Pass currentStep dynamically to Sidebar */}
        <Sidebar currentStep={currentStep} />
        <div className="w-2/3 bg-white p-8 rounded-r-lg shadow-md">
          <Routes>
            <Route path="/" element={<StepOne setCurrentStep={setCurrentStep} />} />
            <Route path="/step2" element={<StepTwo setCurrentStep={setCurrentStep} />} />
            <Route path="/step3" element={<StepThree setCurrentStep={setCurrentStep} />} />
            <Route path="/step4" element={<StepFour setCurrentStep={setCurrentStep} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

