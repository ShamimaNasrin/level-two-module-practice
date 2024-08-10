// import { useAppSelector } from "@/redux/hook";
import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");
  // from local state
  // const { todos } = useAppSelector((state) => state.todoList);
  // from local server
  const { data: todos, isLoading, isError } = useGetTodosQuery(priority);
  // const { data: todos, isLoading, isError } = useGetTodosQuery(undefined, { pollingInterval: 10000 }); // handle cache loading way 1

  if (isLoading) {
    return <p>loading...</p>;
  }
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        {/* <Button>Filter</Button> */}
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] ">
        {/* <div className="bg-white p-5 flex justify-center items-center rounded-md text-2xl font-bold">
          {" "}
          <p>There is no pending task</p>{" "}
        </div> */}
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos?.data?.map((item, i) => (
            <TodoCard key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
