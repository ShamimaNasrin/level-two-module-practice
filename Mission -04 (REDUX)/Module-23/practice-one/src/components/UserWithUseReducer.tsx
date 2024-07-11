import React, { useReducer } from "react";
const initialState = {
  name: "",
  age: "",
  hobbies: [],
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: "myname" };
    default:
      break;
  }
};

const UserWithUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <form>
        <input
          onChange={(e) => dispatch({ type: e.target.value })}
          className="border border-purple-300 m-10"
          type="text"
          name="name"
          id="name"
          placeholder="name"
        />
        <input
          onChange={(e) => dispatch({ type: e.target.value })}
          className="border border-purple-300 m-10"
          type="number"
          name="age"
          id="age"
          placeholder="age"
        />
        <input
          onBlur={(e) =>
            setUser({ ...user, hobbies: [...user.hobbies, e.target.value] })
          }
          className="border border-purple-300 m-10"
          type="text"
          name="hobbies"
          id="hobbies"
          placeholder="hobby"
        />
      </form>
    </>
  );
};

export default UserWithUseReducer;
