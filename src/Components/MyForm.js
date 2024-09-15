import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const MyForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  return (
    <Formik
      initialValues={{ name: '', email: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('Form data', values);
      }}
    >
      {() => (
        <Form className="p-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <Field name="name" type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
            <ErrorMessage name="name" component="div" className="text-red-600" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <Field name="email" type="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
            <ErrorMessage name="email" component="div" className="text-red-600" />
          </div>
          <button type="submit" className="relative h-12 w-32 bg-blue-500 text-white rounded-md">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
