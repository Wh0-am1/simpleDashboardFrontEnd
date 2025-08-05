import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import uploadAPI from "../../api/uploadAPI";

export const uploadThunk = createAsyncThunk(
    "upload/uploadThunk",
    async (payload, thunkAPI) => {
        return await uploadAPI(payload, thunkAPI);
    },
);

const uploadSlice = createSlice({
    name: "upload",
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(uploadThunk.fulfilled, (state, action) => {
            console.log("fullfilled");
        });
    },
});

export default uploadSlice.reducer;
