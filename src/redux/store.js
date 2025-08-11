import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import weatherSlice from "./features/weatherSlice";
import uploadSlice from "./features/uploadSlice";
import productSlice from "./features/ProductSlice";
import cartSlice from "./features/CartSlice";
import purchasedSlice from "./features/PurchasedSlice";
export default configureStore({
    reducer: {
        user: userSlice,
        weather: weatherSlice,
        upload: uploadSlice,
        product: productSlice,
        cart: cartSlice,
        purchased: purchasedSlice,
    },
});
