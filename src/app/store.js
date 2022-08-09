import { configureStore } from "@reduxjs/toolkit";
import pepReducer from "../features/pep/pepSlice";

export const store = configureStore({
  reducer: {
    pep: pepReducer,
  },
});
