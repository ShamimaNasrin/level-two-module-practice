import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type CounterType = {
  count: number;
};

const initialState: CounterType = { count: 0 };
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    decrementByValue: (state, action: PayloadAction<number>) => {
      state.count = state.count - action.payload; //if you use decrementByValue(5)
      // state.count = state.count - action.payload.value; //if you use decrementByValue({ value: 5 })
    },
  },
});

export const { increment, decrement, decrementByValue } = counterSlice.actions;

export default counterSlice.reducer;
