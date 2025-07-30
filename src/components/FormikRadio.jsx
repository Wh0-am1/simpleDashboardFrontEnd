import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useField } from "formik";
import React from "react";

export default function FormikRadio({ title, payload, ...props }) {
  const [field, meta] = useField(props);
  return (
    <FormControl error={meta.touched && meta.error ? true : false}>
      <FormLabel id="demo-row-radio-buttons-group-label">{title}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        {...field}
      >
        {payload.map((e, i) => (
          <FormControlLabel
            value={e.value}
            control={<Radio />}
            label={e.label}
            key={i}
          />
        ))}
      </RadioGroup>
      {meta.touched && meta.error && (
        <FormHelperText>{meta.error}</FormHelperText>
      )}{" "}
    </FormControl>
  );
}
