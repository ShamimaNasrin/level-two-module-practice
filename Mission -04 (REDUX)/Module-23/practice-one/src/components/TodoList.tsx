import React, { useContext } from "react";
import { TodoContext } from "../context/TodoProvider";

type TTodo = {
  id: string;
  title: string;
  isComplete: boolean;
};

const ToDoList = () => {
  const { state, dispatch } = useContext(TodoContext);

  console.log("state:", state);
  return (
    <div>
      {state.map((item: TTodo) => (
        <p
          className={`cursor-pointer ${item.isComplete ? "line-through" : ""}`}
          onClick={() => dispatch({ type: "taskComplete", payload: item.id })}
        >
          {item.title}
        </p>
      ))}
    </div>
  );
};

export default ToDoList;
