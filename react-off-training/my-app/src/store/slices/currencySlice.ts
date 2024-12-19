import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
  name: "currency",
  initialState: "INR",
  reducers: {
    // reducer_actions : logic to update the data
    changeCurrency(state, action) {
      // state : current data inside the store
      // action : contains action related information
      // return the updated data to the store
      // payload : any data that needs to be sent to the store
      console.log("redux changeCurrency current state", state); //curent state
      return action.payload;
    },
  },
});

// actions are used by the components to make data changes inside the store
export const { changeCurrency } = currencySlice.actions;

// reducer is used by the store
export default currencySlice.reducer;

// one slice is one data. If you have multiple data, you can create multiple slices
