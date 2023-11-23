import React from "react";
import Home from "./pages/Home";
import "./assets/app.css"
import { generateARandomeName } from "../src/utils/nameGenerator";

const App = () => {
  const user = generateARandomeName();

  return (
    <>
      <Home 
        user={user}
      />
    </>
  );
};

export default App;