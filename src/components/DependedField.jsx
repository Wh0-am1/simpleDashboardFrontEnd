import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { LocationThunk } from "../redux/features/locationSlice";
import { useState } from "react";

export default function DependedField({
    disable,
    options,
    label,
    loading,
    action,
    body,
    url,
    loc,
    selected,
}) {
    const dispatch = useDispatch();
    const [test, setTest] = useState();
    const ChangeHandler = (e, value) => {
        dispatch(action(value));

        if (url) {
            const index = url.indexOf("/");
            dispatch(
                LocationThunk({
                    url,
                    body: { ...body, [loc]: value },
                    key: index == -1 ? url : url.slice(index + 1),
                }),
            );
        }
    };
    return (
        <Autocomplete
            options={options}
            loading={loading}
            disabled={disable}
            onChange={ChangeHandler}
            value={selected}
            renderInput={(params) => {
                return (
                    <TextField
                        label={label}
                        slotProps={{
                            input: {
                                endAdornment: loading ? (
                                    <CircularProgress size={24} />
                                ) : (
                                    params.InputProps.endAdornment
                                ),
                                inputRef: params.InputProps.ref,
                            },
                        }}
                        {...params}
                    />
                );
            }}
            fullWidth
        />
    );
}
