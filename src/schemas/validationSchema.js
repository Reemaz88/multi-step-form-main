import * as Yup from "yup";

const validationSchema = [
  Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone is required"),
  }),
  Yup.object({
    type: Yup.string().required("Please select a plan"),
  }),
  Yup.object({
    addOns: Yup.array().min(1, "Please select at least one add-on"),
  }),
  Yup.object(),
];

export default validationSchema;
