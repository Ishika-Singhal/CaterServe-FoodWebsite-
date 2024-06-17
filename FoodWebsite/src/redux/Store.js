import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartslice";

const rootReducer = {
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;