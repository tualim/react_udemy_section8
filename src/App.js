import React, { useState } from "react";
import AddUsers from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userList, setUserList] = useState([])

  const setUser = (userName, userAge) => {
    setUserList((prevUser) => {
      return [...prevUser, {name: userName, age: userAge, id: Math.random().toString()}]
    });
  }

  return (
    <div>
      <div>
        <AddUsers onAddUser={setUser}/>
      </div>
      <div>
        <UsersList users={userList}/>
      </div>
    </div>
  );
}

export default App;
