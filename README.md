# Multi-step Form Project

## Project Overview

This project is based on the **Multi-step Form** coding challenge from [Frontend Mentor](https://www.frontendmentor.io). The goal of this challenge was to build out a responsive, multi-step form that closely matches the provided design.

The form allows users to fill out their information in multiple steps, select a plan, add optional features, and see a summary of their selection before confirmation.

## Technologies Used

- **React (version 18)**: The app is built using React to efficiently manage component-based UI and state.
- **Tailwind CSS**: For styling the form elements and layout, providing a clean and responsive design.
- **Redux**: Used for global state management, especially to maintain state across different form steps without prop drilling.
- **Formik & Yup**: Used for form handling and validation. Yup provides schema-based validation, ensuring the fields are filled correctly before moving to the next step.
- **React Router**: For routing between form steps without reloading the page, giving a smooth, single-page application experience.

## Key Features

- **Multi-step Form Navigation**: Users can navigate through each step of the form, progressing from one section to another, and also go back to previous steps to make changes.
- **Plan Selection and Add-ons**: Users can choose between monthly and yearly plans, with add-ons that adjust their prices based on the selected plan.
- **Form Validation**: Each form step has validation to ensure that all required fields are filled out before proceeding to the next step.
- **Responsive Design**: The design is fully responsive and adjusts based on the screen size, ensuring an optimal layout for mobile and desktop users.
- **Global State Management**: Redux is used to store the selections across different form steps, allowing easy access to form data throughout the application.
- **Dynamic Pricing**: Step 3 dynamically displays prices for add-ons based on the selected plan in Step 2 (monthly or yearly).

## Project Structure

```plaintext
src/
│
├── components/
│   ├── Sidebar.js        # Sidebar component with form step navigation
│   ├── Step1.js          # Form for user information
│   ├── Step2.js          # Plan selection (monthly/yearly)
│   ├── Step3.js          # Add-ons selection
│   ├── Step4.js          # Summary of selections and confirmation
│   ├── Step5.js          # Thank you screen after confirmation
│
├── redux/
│   ├── store.js          # Redux store configuration
│   ├── formSlice.js      # Redux slice for managing form data and state
│
├── styles/
│   ├── tailwind.css      # Custom Tailwind CSS configuration for the project
│
├── App.js                # Main component with form routing logic
├── index.js              # Entry point for the React application
└── ...


## How to Run the Project

1. **Clone the repository:**
  ```bash
  git clone https://github.com/your-repo-name/multi-step-form.git

2. **Navigate to the project directory:**
  cd multi-step-form

3. **Install the dependencies:**
  npm install

4. **Start the development server:**
npm start

The app will be running at http://localhost:3000.


## How it Works

### Step-by-step Form

- **Step 1:** The user inputs their personal information (name, email, phone number).
- **Step 2:** The user selects a plan (monthly or yearly) and sees the price accordingly.
- **Step 3:** The user selects optional add-ons, with the pricing adjusted based on the plan.
- **Step 4:** The user can review all their choices and confirm the subscription.
- **Step 5:** After confirmation, the user is shown a thank-you message.

### State Management with Redux

- The form's data (such as user info, plan selection, and add-ons) is stored globally using Redux.
- This allows different steps to access the same data without the need to pass props between components.
- The form's state persists even when the user navigates back to previous steps.

### Form Validation

- Form validation is handled using Formik and Yup.
- Each field is validated on submission of a step. For example, the email is validated to ensure it follows the correct format, and required fields cannot be left empty.

## Deployment

To deploy the project for production:

1. **Build the project:**
    ```bash
    npm run build
    ```

2. Deploy the `build/` folder to your hosting service of choice (e.g., Vercel, Netlify, or GitHub Pages).

## Learnings and Improvements

This project helped reinforce the use of React for creating dynamic UIs and Redux for managing global state. Using Formik and Yup for form validation ensured a better user experience by preventing invalid data from being submitted.

### Future Improvements

- Allowing the user to save and return to the form at a later time.
- Improving the UI with more animations or transitions to enhance the user experience.

## Credits

The design and assets were provided by Frontend Mentor.
