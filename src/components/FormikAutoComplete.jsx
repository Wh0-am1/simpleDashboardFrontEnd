import { Autocomplete, TextField } from "@mui/material";
import { useField } from "formik";
import React from "react";

export default function FormikAutoComplete({ label, options, ...props }) {
    const [field, meta, helpers] = useField(props);
    console.log(helpers);
    return (
        <Autocomplete
            disablePortal
            options={options}
            sx={{ width: 300 }}
            onChange={(e, val) => {
                helpers.setValue(val);
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    name="education"
                    {...(meta.touched && meta.error
                        ? { error: true, helperText: meta.error }
                        : {})}
                />
            )}
        />
    );
}
