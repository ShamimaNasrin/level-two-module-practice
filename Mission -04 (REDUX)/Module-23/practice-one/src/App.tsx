import ToDoForm from "./components/ToDoForm";
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
      </div>
    </TodoProvider>
  );
}

export default App;
