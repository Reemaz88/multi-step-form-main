import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  name: Yup.string().required("This field is required"),
  email: Yup.string().email("Invalid email address").required("This field is required"),
  phone: Yup.string().required("This field is required"),
});

const StepOne = ({ setCurrentStep }) => {
  const navigate = useNavigate();

  return (
    <div className="flex">
      <div className="p-8 bg-white w-2/3 rounded-r-lg shadow-md">
        <Formik
          initialValues={{ name: "", email: "", phone: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
            setCurrentStep(2); // Set the current step to 2
            navigate("/step2"); // Navigate to Step 2
          }}
        >
          {() => (
            <Form>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Personal info</h2>
              <p className="text-gray-500 mb-6">Please provide your name, email address, and phone number.</p>

              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
                <Field name="name" type="text" placeholder="e.g. Vanessa Mint" className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                <ErrorMessage component="div" name="name" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Address</label>
                <Field name="email" type="email" placeholder="e.g. vanessamint@example.com" className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                <ErrorMessage component="div" name="email" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Phone Number</label>
                <Field name="phone" type="text" placeholder="e.g. +1 234 567 890" className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                <ErrorMessage component="div" name="phone" className="text-red-500 text-sm mt-1" />
              </div>

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

export default StepOne;
