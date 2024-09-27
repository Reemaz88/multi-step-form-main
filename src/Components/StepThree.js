import React from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useDispatch, useSelector } from "react-redux";
import { updateAddOns } from "../formSlice"; // Correctly imported action

const StepThree = ({ setCurrentStep }) => {
  const navigate = useNavigate(); // Initialize navigate
  const dispatch = useDispatch();

  // Get current add-ons and billing cycle data from Redux
  const addons = useSelector((state) => state.form.addons) || {};
  const duration = useSelector((state) => state.form.plan.duration) || 'monthly'; // Default to 'monthly'

  // Destructure with defaults to avoid errors
  const { onlineService = false, largerStorage = false, customizableProfile = false } = addons;

  // Define add-on prices based on billing cycle
  const addonPrices = {
    onlineService: duration === "yearly" ? "+$10/yr" : "+$1/mo",
    largerStorage: duration === "yearly" ? "+$20/yr" : "+$2/mo",
    customizableProfile: duration === "yearly" ? "+$20/yr" : "+$2/mo",
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Pick add-ons</h2>
      <p className="text-gray-500 mb-6">Add-ons help enhance your gaming experience.</p>

      <Formik
        initialValues={{
          onlineService,
          largerStorage,
          customizableProfile,
        }}
        onSubmit={(values) => {
          // Dispatch Redux action to update add-ons data
          dispatch(updateAddOns(values)); // Use the correct action name
          setCurrentStep(4); // Proceed to next step
          navigate("/step4"); // Navigate to the next step
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            {/* Add-ons Options */}
            <div className="space-y-4 mb-6">
              {/* Online Service */}
              <div
                className={`flex items-center justify-between p-4 border rounded-lg ${
                  values.onlineService ? "border-blue-500 bg-blue-50" : "border-gray-300"
                } cursor-pointer`}
                onClick={() => setFieldValue("onlineService", !values.onlineService)}
              >
                <div className="flex items-center space-x-3">
                  <Field
                    type="checkbox"
                    name="onlineService"
                    checked={values.onlineService}
                    className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Online service</p>
                    <p className="text-gray-500">Access to multiplayer games</p>
                  </div>
                </div>
                <span className="text-blue-600">{addonPrices.onlineService}</span>
              </div>

              {/* Larger Storage */}
              <div
                className={`flex items-center justify-between p-4 border rounded-lg ${
                  values.largerStorage ? "border-blue-500 bg-blue-50" : "border-gray-300"
                } cursor-pointer`}
                onClick={() => setFieldValue("largerStorage", !values.largerStorage)}
              >
                <div className="flex items-center space-x-3">
                  <Field
                    type="checkbox"
                    name="largerStorage"
                    checked={values.largerStorage}
                    className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Larger storage</p>
                    <p className="text-gray-500">Extra 1TB of cloud save</p>
                  </div>
                </div>
                <span className="text-blue-600">{addonPrices.largerStorage}</span>
              </div>

              {/* Customizable Profile */}
              <div
                className={`flex items-center justify-between p-4 border rounded-lg ${
                  values.customizableProfile ? "border-blue-500 bg-blue-50" : "border-gray-300"
                } cursor-pointer`}
                onClick={() =>
                  setFieldValue("customizableProfile", !values.customizableProfile)
                }
              >
                <div className="flex items-center space-x-3">
                  <Field
                    type="checkbox"
                    name="customizableProfile"
                    checked={values.customizableProfile}
                    className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Customizable profile</p>
                    <p className="text-gray-500">Custom theme on your profile</p>
                  </div>
                </div>
                <span className="text-blue-600">{addonPrices.customizableProfile}</span>
              </div>
            </div>

            {/* Go Back and Next Step */}
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => {
                  setCurrentStep(2);
                  navigate("/step2"); // Navigate to the previous step
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
  );
};

export default StepThree;
