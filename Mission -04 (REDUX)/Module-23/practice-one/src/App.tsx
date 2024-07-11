import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/TodoList";
import TodoProvider from "./context/TodoProvider";
// import UserWithUseReducer from "./components/UserWithUseReducer";
// import UserWithUseState from "./components/UserWithUseState";

function App() {
  return (
    <TodoProvider>
      <div>
        {/* <UserWithUseState></UserWithUseState> */}
        {/* <UserWithUseReducer></UserWithUseReducer> */}
        <ToDoForm></ToDoForm>
        <ToDoList></ToDoList>
      </div>
    </TodoProvider>
  );
}

export default App;
