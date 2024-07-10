import React, { useState } from "react";

const UserWithUseState = () => {
  const [user, setUser] = useState({
    name: "",
    age: "0",
    hobbies: [],
  });
  return (
    <>
      <form>
        <input
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          className="border border-purple-300 m-10"
          type="text"
          name="name"
          id="name"
          placeholder="name"
        />
        <input
          onChange={(e) => setUser({ ...user, age: e.target.value })}
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

export default UserWithUseState;
