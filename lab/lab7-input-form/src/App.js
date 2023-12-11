import React, { useState } from "react";
import AddUser from "./Component/AddUser";
import UsersList from "./Component/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (fullName, age) => {
    setUsersList((prevList) => {
      return [
        ...prevList,
        {
          id: Math.random().toString(),
          fullName: fullName,
          age: age,
        },
      ];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
