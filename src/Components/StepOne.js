import React from "react";
import { Field, ErrorMessage } from "formik";

const StepOne = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Sidebar */}
      <div className="bg-blue-700 text-white p-8 rounded-lg flex flex-col justify-between">
        <div>
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-blue-300 text-blue-900 rounded-full flex items-center justify-center mr-4">
              1
            </div>
            <p className="uppercase tracking-wide font-semibold">Your Info</p>
          </div>
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 border border-white text-white rounded-full flex items-center justify-center mr-4">
              2
            </div>
            <p className="uppercase tracking-wide font-semibold">Select Plan</p>
          </div>
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 border border-white text-white rounded-full flex items-center justify-center mr-4">
              3
            </div>
            <p className="uppercase tracking-wide font-semibold">Add-ons</p>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 border border-white text-white rounded-full flex items-center justify-center mr-4">
              4
            </div>
            <p className="uppercase tracking-wide font-semibold">Summary</p>
          </div>
        </div>
        <div className="mt-8">
          {/* Place additional design elements here if needed */}
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Personal info</h2>
        <p className="text-gray-500 mb-8">
          Please provide your name, email address, and phone number.
        </p>

        {/* Name Field */}
        <div className="mb-6">
          <label className="text-sm font-semibold text-gray-700 mb-1 block" htmlFor="name">
            Name
          </label>
          <Field
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="name"
            name="personalInfo.name"
            placeholder="e.g. Vanessa Mint"
            type="text"
          />
          <ErrorMessage
            name="personalInfo.name"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label className="text-sm font-semibold text-gray-700 mb-1 block" htmlFor="email">
            Email Address
          </label>
          <Field
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="email"
            name="personalInfo.email"
            placeholder="e.g. vanessamint@example.com"
            type="email"
          />
          <ErrorMessage
            name="personalInfo.email"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        {/* Phone Number Field */}
        <div className="mb-6">
          <label className="text-sm font-semibold text-gray-700 mb-1 block" htmlFor="phone">
            Phone Number
          </label>
          <Field
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="phone"
            name="personalInfo.phone"
            placeholder="e.g. +1 234 567 890"
            type="text"
          />
          <ErrorMessage
            name="personalInfo.phone"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        {/* Next Step Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
