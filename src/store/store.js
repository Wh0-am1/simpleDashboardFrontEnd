import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../GlobalStateSlice/user/userSlice";

export default configureStore({
  reducer: {
    user: userSlice,
  },
});
