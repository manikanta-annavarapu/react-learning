import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    // login
    setUserSession: (state, action) => action.payload,
    // logout
    clearUserSession: (state) => null,
  },
});

export const { setUserSession, clearUserSession } = userSlice.actions;
export default userSlice.reducer;
