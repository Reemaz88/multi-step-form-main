/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.js",
    "./src/Components/StepOne.js",
    "./src/Components/Sidebar.js",
    "./src/Components/StepTwo.js",
    "./src/Components/StepThree.js",
    "./src/Components/StepFour.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/src/assets/images/bg-sidebar-desktop.svg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

