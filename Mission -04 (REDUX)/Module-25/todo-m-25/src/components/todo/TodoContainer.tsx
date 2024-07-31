import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div>
        <button>Add todo</button>
        <button>Filter</button>
      </div>
      <div className="bg-slate-600 w-full h-full rounded-xl p-5 space-y-3">
        {/* <div className="bg-white p-5 flex justify-center items-center rounded-md text-2xl font-bold">
          {" "}
          <p>There is no pending task</p>{" "}
        </div> */}
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </div>
  );
};

export default TodoContainer;
