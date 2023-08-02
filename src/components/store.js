import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store=configureStore({
    reducer: {
        //put slices in this store
        cart: cartSlice
    }
});


export default store;

