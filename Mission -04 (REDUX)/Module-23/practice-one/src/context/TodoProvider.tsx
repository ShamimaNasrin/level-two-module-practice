import React, { ReactNode, createContext, useReducer } from "react";

export const TodoContext = createContext<
  { state: TTodo[]; dispatch: React.Dispatch<TAction> } | undefined
>(undefined); // use undefined to avoid ts warning

type TTodo = {
  id: string;
  title: string;
  isComplete: boolean;
};

type TAction = {
  type: string;
  payload: TTodo | string;
};

const initialState: TTodo[] = [];

const reducer = (currentState: TTodo[], action: TAction) => {
  switch (action.type) {
    case "addTodo":
      return [...currentState, action.payload];
    case "taskComplete":
      return currentState.map((item: TTodo) =>
        item.id === action.payload
          ? { ...item, isComplete: !item.isComplete }
          : item
      );
    default:
      return currentState;
  }
};

type TodoProviderProps = {
  children: ReactNode;
};

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const values = {
    state,
    dispatch,
  };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
