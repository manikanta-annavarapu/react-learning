import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./slices/currencySlice";

export const store = configureStore({
  reducer: {
    // data : reducer
    currency: currencyReducer,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
// ReturnType is the type inference.
export type RootState = ReturnType<typeof store.getState>;
