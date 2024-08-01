import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice";

export const store = configureStore({
  reducer: {
    todoList: todoReducer,
  },
  // devTools: false, // disable redux dev tool for production
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
