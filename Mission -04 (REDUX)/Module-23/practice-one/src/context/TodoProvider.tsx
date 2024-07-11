import React, { ReactNode, createContext } from "react";

export const TodoContext = createContext(undefined); // use undefined to avoid ts warning

type TodoProviderProps = {
  children: ReactNode;
};

const TodoProvider = ({ children }: TodoProviderProps) => {
  const values = {
    todoTilte: "This is a Todo title!!",
  };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
