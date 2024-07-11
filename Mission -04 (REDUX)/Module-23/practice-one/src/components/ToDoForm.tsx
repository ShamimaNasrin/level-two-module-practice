import React, { FormEvent, useContext, useState } from "react";
import { TodoContext } from "../context/TodoProvider";

const ToDoForm = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [task, setTask] = useState("");

  console.log("state:", state);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const todo = {
      id: Math.random().toString(36).substring(2, 7),
      title: task,
      isComplete: false,
    };

    dispatch({ type: "addTodo", payload: todo });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Todo">Task</label>
        <input
          onBlur={(e) => setTask(e.target.value)}
          className="border border-purple-300 m-10"
          type="text"
          name="todo"
          id="todo"
        />

        <button className="border py-1 px-2 bg-purple-300" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;
