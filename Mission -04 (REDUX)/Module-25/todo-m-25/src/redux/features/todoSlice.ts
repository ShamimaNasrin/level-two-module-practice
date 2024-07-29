import { createSlice } from "@reduxjs/toolkit";

type TodoType = {
  todos: string[];
};

const initialState: TodoType = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

// export const {} = todoSlice.actions;

export default todoSlice.reducer;
