import * as Yup from "yup";

export const DynamicFormSchema = Yup.object({
  people: Yup.array().of(
    Yup.object({
      name: Yup.string().required("Name is required"),
      age: Yup.number()
        .typeError("Age must be a number")
        .required("Age is required")
        .positive("Age must be positive")
        .integer("Age must be an integer"),
    }),
  ),
});
