import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

// Validation schema for Step Two (e.g., Select Plan)
const validationSchema = Yup.object({
  plan: Yup.string().required("Please select a plan"),
});

const StepTwo = ({ setCurrentStep }) => {
  const navigate = useNavigate();

  return (
    <div className="flex">
      <div className="p-8 bg-white w-2/3 rounded-r-lg shadow-md">
        <Formik
          initialValues={{ plan: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
            setCurrentStep(3); // Set the current step to 3
            navigate("/step3"); // Navigate to Step Three
          }}
        >
          {() => (
            <Form>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Select Plan</h2>
              <p className="text-gray-500 mb-6">
                Please select your plan from the options below.
              </p>

              {/* Plan Selection Field */}
              <div className="mb-6">
                <label htmlFor="plan" className="block text-sm font-semibold text-gray-700">
                  Plan
                </label>
                <Field as="select" name="plan" className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option value="">Select your plan</option>
                  <option value="basic">Basic Plan</option>
                  <option value="premium">Premium Plan</option>
                </Field>
                <ErrorMessage component="div" name="plan" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Next Step Button */}
              <div className="flex justify-end">
                <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
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
