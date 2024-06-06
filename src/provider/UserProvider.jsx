import React, { createContext, useState } from "react";

const UserContext = createContext(null);

function UserProvider() {
  const initialState = JSON.parse(localStorage.getItem("user"));

  const [user, setuser] = useState(initialState);

  console.log("user", user);
  return <UserContext.Provider value={user}>provider</UserContext.Provider>;
}

export default UserProvider;
