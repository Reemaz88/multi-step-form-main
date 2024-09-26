import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatePlan } from "../formSlice"; // Import the correct action
import arcadeIcon from "../assets/images/icon-arcade.svg";
import AdvancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";

// Validation schema for Step Two
const validationSchema = Yup.object({
  plan: Yup.string().required("Please select a plan"),
});

const StepTwo = ({ setCurrentStep }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get current plan and billing data from Redux
  const { plan, billing } = useSelector((state) => state.form.plan);

  // Determine the current billing cycle (monthly or yearly)
  const [isYearly, setIsYearly] = useState(billing === "yearly");

  // Toggle function to switch billing between monthly and yearly
  const toggleBilling = () => setIsYearly(!isYearly);

  return (
    <div className="flex">
      <div className="p-8 bg-white w-2/3 rounded-r-lg shadow-md">
        <Formik
          initialValues={{ plan: plan || "" }} // Use Redux state for initial values
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // Dispatch Redux action to update plan data
            dispatch(updatePlan({ ...values, billing: isYearly ? "yearly" : "monthly" }));
            setCurrentStep(3); // Move to Step 3
            navigate("/step3");
          }}
        >
          {({ setFieldValue, values }) => (
            <Form>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Select your plan</h2>
              <p className="text-gray-500 mb-6">You have the option of monthly or yearly billing.</p>

              {/* Plan Selection Field */}
              <div className="mb-6 grid grid-cols-3 gap-4">
                {/* Arcade Plan */}
                <div
                  className={`p-4 border rounded-lg cursor-pointer hover:border-blue-500 ${
                    values.plan === "arcade" ? "border-blue-500" : "border-gray-300"
                  }`}
                  onClick={() => setFieldValue("plan", "arcade")}
                >
                  <img src={arcadeIcon} alt="Arcade" className="mb-3" />
                  <p className="font-semibold">Arcade</p>
                  <p className="text-gray-500">{isYearly ? "$90/yr" : "$9/mo"}</p>
                  {isYearly && <p className="text-blue-500">2 months free</p>}
                </div>

                {/* Advanced Plan */}
                <div
                  className={`p-4 border rounded-lg cursor-pointer hover:border-blue-500 ${
                    values.plan === "advanced" ? "border-blue-500" : "border-gray-300"
                  }`}
                  onClick={() => setFieldValue("plan", "advanced")}
                >
                  <img src={AdvancedIcon} alt="Advanced" className="mb-3" />
                  <p className="font-semibold">Advanced</p>
                  <p className="text-gray-500">{isYearly ? "$120/yr" : "$12/mo"}</p>
                  {isYearly && <p className="text-blue-500">2 months free</p>}
                </div>

                {/* Pro Plan */}
                <div
                  className={`p-4 border rounded-lg cursor-pointer hover:border-blue-500 ${
                    values.plan === "pro" ? "border-blue-500" : "border-gray-300"
                  }`}
                  onClick={() => setFieldValue("plan", "pro")}
                >
                  <img src={proIcon} alt="Pro" className="mb-3" />
                  <p className="font-semibold">Pro</p>
                  <p className="text-gray-500">{isYearly ? "$150/yr" : "$15/mo"}</p>
                  {isYearly && <p className="text-blue-500">2 months free</p>}
                </div>
              </div>

              {/* Toggle Button for Monthly/Yearly */}
              <div className="flex justify-center items-center mt-6 mb-6">
                <label className="mr-3">Monthly</label>
                <div
                  className={`relative inline-block w-16 h-8 rounded-full ${isYearly ? "bg-blue-500" : "bg-gray-300"} cursor-pointer`}
                  onClick={toggleBilling}
                >
                  <div
                    className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 ${
                      isYearly ? "translate-x-8" : ""
                    }`}
                  />
                </div>
                <label className="ml-3">Yearly</label>
              </div>

              {/* Go Back and Next Step Buttons */}
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => {
                    setCurrentStep(1); // Just set the current step to 1 without resetting values
                    navigate("/"); // Navigate back to Step One
                  }}
                  className="text-gray-500"
                >
                  Go Back
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700"
                >
                  Next Step
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default StepTwo;
