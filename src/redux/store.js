import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import weatherSlice from "./features/weatherSlice";
import uploadSlice from "./features/uploadSlice";
import productSlice from "./features/ProductSlice";
import cartSlice from "./features/CartSlice";
import purchasedSlice from "./features/PurchasedSlice";
import formSlice from "./features/formSlice";
import locationSlice from "./features/locationSlice";
export default configureStore({
  reducer: {
    user: userSlice,
    weather: weatherSlice,
    upload: uploadSlice,
    product: productSlice,
    cart: cartSlice,
    purchased: purchasedSlice,
    stepper: formSlice,
    location: locationSlice,
  },
});
