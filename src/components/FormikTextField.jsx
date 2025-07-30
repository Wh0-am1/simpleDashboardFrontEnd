import { TextField } from "@mui/material";
import { useField } from "formik";
import React from "react";

export default function FormikTextField({ label, type = "text", ...props }) {
  const [field, meta] = useField(props);
  return (
    <TextField
      label={label}
      {...(meta.touched && meta.error
        ? { error: true, helperText: meta.error }
        : {})}
      {...field}
      type={type}
      {...props}
    />
  );
}
