import React, { useContext } from "react";
import { TodoContext } from "../context/TodoProvider";

const ToDoForm = () => {
  const { todoTilte } = useContext(TodoContext);
  console.log("todoTilte:", todoTilte);
  return (
    <div>
      <h1>form component..!!</h1>
    </div>
  );
};

export default ToDoForm;
