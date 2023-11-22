import React from "react";
import Home from "./pages/Home";
import "./assets/app.css"
import { generateARandomeName } from "../src/utils/nameGenerator";

const App = () => {
  const name = generateARandomeName();

  return (
    <>
      <Home 
        name={name}
      />
    </>
  );
};

export default App;