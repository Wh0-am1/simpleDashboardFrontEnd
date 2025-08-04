import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import weatherSlice from "./features/weatherSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    weather: weatherSlice,
  },
});
