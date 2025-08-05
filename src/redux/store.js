import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import weatherSlice from "./features/weatherSlice";
import uploadSlice from "./features/uploadSlice";

export default configureStore({
    reducer: {
        user: userSlice,
        weather: weatherSlice,
        upload: uploadSlice,
    },
});
