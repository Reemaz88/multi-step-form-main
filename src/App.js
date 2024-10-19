import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './Components/Sidebar';
import StepOne from './Components/StepOne';
import StepTwo from './Components/StepTwo';
import StepThree from './Components/StepThree';
import StepFour from './Components/StepFour';
import StepFive from './Components/StepFive';
import './App.css';

const App = () => {
  // State to track current step
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <Router>
      <div className='flex min-h-screen justify-center bg-customBlue p-8 '>
        {/* Wrapper div with fixed width, height, and margin-top */}
        <div className='flex w-[58.5rem] h-[37.5rem] bg-white rounded-xl shadow-md mt-20 z-10'>
          {/* Sidebar on the left */}
          <div className='w-1/3 p-4 bg-white bg-opacity-0 rounded-l-lg h-full z-1'>
            <Sidebar currentStep={currentStep} />
          </div>

          {/* Content (routes) on the right */}
          <div className='w-2/3 p-8 h-full '>
            <Routes>
              <Route
                exact
                path='*'
                element={<StepOne setCurrentStep={setCurrentStep} />}
              />
              <Route
                path='/step2'
                element={<StepTwo setCurrentStep={setCurrentStep} />}
              />
              <Route
                path='/step3'
                element={<StepThree setCurrentStep={setCurrentStep} />}
              />
              <Route
                path='/step4'
                element={<StepFour setCurrentStep={setCurrentStep} />}
              />
              <Route path='/step5' element={<StepFive />} />{' '}
              {/* New route for Step 5 */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
