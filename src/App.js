import React, { useEffect, useState } from "react";
import Home from "./pages/Home";

import { UserContext } from "./context/UserContext";
import { generateARandomName } from "../src/utils/nameGenerator";

import "./assets/app.css"

const App = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const name = generateARandomName();
    setUser(name);
  }, []);

  return (
    <UserContext.Provider value={user}>
      <Home/>
    </UserContext.Provider>
  );
};

export default App;