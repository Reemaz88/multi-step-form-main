import React from 'react';
import { useNavigate } from 'react-router-dom';


const StepFour = ({ setCurrentStep }) => {
  const navigate = useNavigate(); // Initialize navigate
  return (
    <div className="flex">

      {/* Summary Section */}
      <div className="w-3/4 bg-white p-8 rounded-t-lg shadow-md">
        <h2 className="text-xl font-bold text-blue-800">Finishing up</h2>
        <p className="text-gray-500 mb-6">Double-check everything looks OK before confirming.</p>

        {/* Plan Details */}
        <div className="bg-blue-50 p-4 rounded-t-lg ">
          <div className="flex justify-between">
            <span className="text-blue-700 font-bold">Arcade (Monthly)</span>
          </div>
          <span className="text-gray-600">$9/mo</span>
        </div>
        <div className="space-y-2 bg-blue-50 p-4 rounded-b-lg mb-4 ">
          <div className="flex justify-between">
            <span className="text-gray-700">Online service</span>
            <span className="text-blue-700">+$1/mo</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Larger storage</span>
            <span className="text-blue-700">+$2/mo</span>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between font-bold text-xl mt-6">
          <span>Total (per month)</span>
          <span className="text-blue-700">+$12/mo</span>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-8">
        <button
        type="button"
        onClick={() => {
          setCurrentStep(3);
          navigate("/step3"); // Navigate to the previous step
        }}
        className="text-gray-500"
      >
        Go Back
      </button>
          <button className="bg-blue-700 text-white px-6 py-2 rounded-lg">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
