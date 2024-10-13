import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatePersonalInfo } from "../formSlice"; // Import the correct action
import '../App.css'; // Import the App.css file here


const validationSchema = Yup.object({
  name: Yup.string().required("This field is required"),
  email: Yup.string().email("Invalid email address").required("This field is required"),
  phone: Yup.string().required("This field is required"),
});

const StepOne = ({ setCurrentStep }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const personalInfo = useSelector((state) => state.form.personalInfo); // Get current data from Redux

  return (
    <div className="flex step-one">
      <div className="p-8 bg-white w-full rounded-r-lg ">
        <Formik
          initialValues={personalInfo} // Use state from Redux for initial values
          validationSchema={validationSchema}
          onSubmit={(values) => {
            dispatch(updatePersonalInfo(values)); // Dispatch correct action with form values
            setCurrentStep(2);
            navigate("/step2");
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Personal info</h2>
              <p className="text-gray-500 mb-6">Please provide your name, email address, and phone number.</p>

              {/* Name Field */}
              <div className="mb-6">
                <div className="flex justify-between">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                    Name
                  </label>
                  <ErrorMessage component="div" name="name" className="text-red-500 text-sm" />
                </div>
                <Field
                  name="name"
                  type="text"
                  placeholder="e.g. Vanessa Mint"
                  className={`w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                    errors.name && touched.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
              </div>

              {/* Email Field */}
              <div className="mb-6">
                <div className="flex justify-between">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                    Email Address
                  </label>
                  <ErrorMessage component="div" name="email" className="text-red-500 text-sm" />
                </div>
                <Field
                  name="email"
                  type="email"
                  placeholder="e.g. vanessamint@example.com"
                  className={`w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                    errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
              </div>

              {/* Phone Field */}
              <div className="mb-6">
                <div className="flex justify-between">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                    Phone Number
                  </label>
                  <ErrorMessage component="div" name="phone" className="text-red-500 text-sm" />
                </div>
                <Field
                  name="phone"
                  type="text"
                  placeholder="e.g. +1 234 567 890"
                  className={`w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                    errors.phone && touched.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-customDarkBlue text-white py-3 px-6 rounded-lg hover:bg-customPurplishBlue focus:outline-none focus:ring-2 "
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

export default StepOne;
