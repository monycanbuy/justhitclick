import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "./featured/redux/customerSlice";

export const store = configureStore({
    reducer: {
      customer: customerSlice,
    },
  });