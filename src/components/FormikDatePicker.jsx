import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useField } from "formik";
import dayjs from "dayjs";

export default function FormikDatePicker({ label, ...props }) {
  const [field, meta, helpers] = useField(props);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        onChange={(e) => helpers.setValue(dayjs(e).format("DD-MM-YYYY"))}
        slotProps={{
          textField: {
            ...(meta.touched && meta.error
              ? { error: true, helperText: meta.error }
              : {}),
            onBlur: () => helpers.setTouched(true),
            sx: {
              zIndex: 0,
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}
