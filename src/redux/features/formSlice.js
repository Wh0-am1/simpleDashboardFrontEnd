import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: "stepper",
    initialState: {
        name: "",
        email: "",
        city: "",
        street: "",
        zipCode: "",
        review: "",
    },
    reducers: {
        setValue: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { setValue } = formSlice.actions;
export default formSlice.reducer;
