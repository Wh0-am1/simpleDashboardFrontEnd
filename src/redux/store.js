import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/users/userSlice";
import weatherSlice from "./features/weather/weatherSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    weather: weatherSlice,
  },
});
