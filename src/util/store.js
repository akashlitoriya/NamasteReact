import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import hamburgerSlice from "./hamburgerSlice";

const store = configureStore({
    reducer: {
        cart : cartSlice,
        hamburger: hamburgerSlice
    }
});

export default store;