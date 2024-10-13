/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/index.js",
    "./src/Components/StepOne.js",
    "./src/Components/Sidebar.js",
    "./src/Components/StepTwo.js",
    "./src/Components/StepThree.js",
    "./src/Components/StepFour.js",
    "./src/Components/StepFive.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('')", // Adjust based on image location
      },
      colors: {
        customBlue: 'hsl(206, 94%, 97%)',
        customDarkBlue: 'hsl(213, 96%, 18%)',
        customPurplishBlue:'hsl(243, 100%, 62%)',
        customLightGray: 'hsl(229, 24%, 87%)',
        customCoolGray: 'hsl(231, 11%, 63%)',
        customLightBlue:'hsl(206, 94%, 87%)',
        customMagnolia: 'hsl(217, 100%, 97%)'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

