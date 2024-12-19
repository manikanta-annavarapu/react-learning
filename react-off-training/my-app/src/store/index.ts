import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./slices/currencySlice";
import userReducer from "./slices/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const rootReducer = combineReducers({
  currency: currencyReducer,
  user: userReducer,
});
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
// ReturnType is the type inference.
export type RootState = ReturnType<typeof store.getState>;
