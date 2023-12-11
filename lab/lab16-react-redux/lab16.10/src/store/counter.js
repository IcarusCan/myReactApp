import { createSlice } from "@reduxjs/toolkit";

const initState = {
  value: 0,
  showCounter: true,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    increase: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    toggle: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});

export const { increment, increase, decrement, toggle } = counterSlice.actions;

export default counterSlice.reducer;
