import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

// Validation schema for Step Three (e.g., Add-ons)
const validationSchema = Yup.object({
  addons: Yup.array().required("Please select at least one add-on"),
});

const StepThree = ({ setCurrentStep }) => {
  const navigate = useNavigate();

  return (
    <div className="flex">
      <div className="p-8 bg-white w-2/3 rounded-r-lg shadow-md">
        <Formik
          initialValues={{ addons: [] }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
            setCurrentStep(4); // Set the current step to 4
            navigate("/step4"); // Navigate to Step Four (Summary)
          }}
        >
          {() => (
            <Form>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Add-ons</h2>
              <p className="text-gray-500 mb-6">Please select the add-ons you'd like to include.</p>

              {/* Add-ons Field (Multiple Checkboxes) */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700">Add-ons</label>
                <div className="mt-2">
                  <label className="flex items-center">
                    <Field type="checkbox" name="addons" value="addon1" className="mr-2" />
                    Add-on 1
                  </label>
                  <label className="flex items-center">
                    <Field type="checkbox" name="addons" value="addon2" className="mr-2" />
                    Add-on 2
                  </label>
                </div>
                <ErrorMessage component="div" name="addons" className="text-red-500 text-sm mt-1" />
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

export default StepThree;
