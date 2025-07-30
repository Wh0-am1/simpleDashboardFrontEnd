import * as Yup from "yup";

export const formikFormSchema = Yup.object({
  userName: Yup.string()
    .required("firstName is required")
    .max(15, "maximum is 20"),
  email: Yup.string()
    .required("Email is required")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Email not valid"),
  education: Yup.string().required("Education is required"),
  phone: Yup.string()
    .required("Phone is required")
    .length(10, "Invalid Phone number"),
  address: Yup.string().required("Address is required"),
  dob: Yup.string().required("DOB is required"),
  gender: Yup.string().required("Gender is required"),
});
