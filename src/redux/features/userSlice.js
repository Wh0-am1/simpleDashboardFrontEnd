import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    auth: false,
    token: "",
    userName: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.auth = action.payload.auth;
      state.token = action.payload.token;
      state.userName = action.payload.userName;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
