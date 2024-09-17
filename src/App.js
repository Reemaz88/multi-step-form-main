import React, { useState } from "react";
import StepOne from "./Components/StepOne";
import StepTwo from "./Components/StepTwo";
import StepThree from "./Components/StepThree";
import StepFour from "./Components/StepFour";
// import FormStepper from "./Components/FormStepper";
import { Formik, Form } from "formik";
import validationSchema from "./schemas/validationSchema";
import initialValues from "./formData";

const steps = [
  { component: StepOne, label: "Personal Info" },
  { component: StepTwo, label: "Plan Selection" },
  { component: StepThree, label: "Add-ons" },
  { component: StepFour, label: "Summary" },
];

function App() {
  const [step, setStep] = useState(0);

  const handleNext = (values) => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const CurrentStep = steps[step].component;

  return (
    <div className="app-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema[step]}
        onSubmit={handleNext}
      >
        {({ values }) => (
          <Form>
            <CurrentStep />
            <div className="buttons">
              {step > 0 && <button onClick={handleBack}>Back</button>}
              <button type="submit">{step === steps.length - 1 ? "Submit" : "Next"}</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;

// <FormStepper steps={steps} currentStep={step} />
