import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./slices/currencySlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    // data : reducer
    currency: currencyReducer,
    user: userReducer,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
// ReturnType is the type inference.
export type RootState = ReturnType<typeof store.getState>;
