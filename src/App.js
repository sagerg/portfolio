import React, { useEffect, useState } from "react";
import Home from "./pages/Home";

import { generateARandomName } from "../src/utils/nameGenerator";

import "./assets/app.css"

const App = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const name = generateARandomName();
    setUser(name);
  }, []);

  return (
    <>
      <Home 
        user={user}
      />
    </>
  );
};

export default App;