import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    auth: false,
    token: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.auth = action.payload.auth;
      state.token = action.payload.token;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
