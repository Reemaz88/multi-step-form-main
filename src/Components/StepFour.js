import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const StepFour = ({ setCurrentStep }) => {
  const navigate = useNavigate();

  // Get the plan, billing cycle, and addons data from Redux
  const { plan, duration } = useSelector((state) => state.form.plan);
  const addons = useSelector((state) => state.form.addons);

  // Determine if it's yearly billing
  const isYearly = duration === "yearly";

  // Plan prices based on the billing cycle
  const planPrices = {
    arcade: isYearly ? "$90/yr" : "$9/mo",
    advanced: isYearly ? "$120/yr" : "$12/mo",
    pro: isYearly ? "$150/yr" : "$15/mo",
  };

  // Add-ons prices based on the billing cycle
  const addonPrices = {
    onlineService: isYearly ? "+$10/yr" : "+$1/mo",
    largerStorage: isYearly ? "+$20/yr" : "+$2/mo",
    customizableProfile: isYearly ? "+$20/yr" : "+$2/mo",
  };

  // Calculate total price
  const planPrice = parseFloat(planPrices[plan].replace(/[^0-9]/g, "")) || 0;
  const addonsTotal = Object.keys(addons).reduce((total, key) => {
    return addons[key] ? total + parseFloat(addonPrices[key].replace(/[^0-9]/g, "")) : total;
  }, 0);
  const total = planPrice + addonsTotal;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Finishing up</h2>
      <p className="text-gray-500 mb-6">Double-check everything before confirming.</p>

      <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
        {/* Plan Details */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-4">
          <div>
            <p className="font-semibold text-gray-900 capitalize">{plan} ({duration})</p>
            <button
              className="text-blue-600 text-sm underline"
              onClick={() => {
                setCurrentStep(2);
                navigate("/step2");
              }}
            >
              Change
            </button>
          </div>
          <p className="font-semibold text-gray-900">{planPrices[plan]}</p>
        </div>

        {/* Add-ons Details */}
        {addons.onlineService && (
          <div className="flex justify-between items-center mb-3">
            <p className="text-gray-500">Online service</p>
            <p className="text-gray-900">{addonPrices.onlineService}</p>
          </div>
        )}
        {addons.largerStorage && (
          <div className="flex justify-between items-center mb-3">
            <p className="text-gray-500">Larger storage</p>
            <p className="text-gray-900">{addonPrices.largerStorage}</p>
          </div>
        )}
        {addons.customizableProfile && (
          <div className="flex justify-between items-center mb-3">
            <p className="text-gray-500">Customizable profile</p>
            <p className="text-gray-900">{addonPrices.customizableProfile}</p>
          </div>
        )}

        {/* Total Price */}
        <div className="flex justify-between items-center border-t border-gray-300 pt-4 mt-4">
          <p className="font-semibold text-gray-500">Total (per {isYearly ? "year" : "month"})</p>
          <p className="font-bold text-lg text-blue-600">${total}/{isYearly ? "yr" : "mo"}</p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => {
            setCurrentStep(3);
            navigate("/step3");
          }}
          className="text-gray-500"
        >
          Go Back
        </button>
        <button
          type="button"
          className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700"
          onClick={() => {
            // Handle confirmation logic here (e.g., submit data to a server)
            console.log("Confirmed!");
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default StepFour;
