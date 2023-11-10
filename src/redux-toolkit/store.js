import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice/authSlice";


const store = configureStore({
    reducer:{
        authSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;