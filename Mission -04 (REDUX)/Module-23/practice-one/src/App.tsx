import UserWithUseReducer from "./components/UserWithUseReducer";
// import UserWithUseState from "./components/UserWithUseState";

function App() {
  return (
    <>
      <div>
        {" "}
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        {/* <UserWithUseState></UserWithUseState> */}
        <UserWithUseReducer></UserWithUseReducer>
      </div>
    </>
  );
}

export default App;
