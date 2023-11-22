import React, { useState } from "react";
import Terminal from "./Terminal";

const Home = ({name}) => {
  const [terminalHistory, setTerminalHistory] = useState([]);

  return (
    <Terminal 
      terminalHistory={terminalHistory}
      setTerminalHistory={setTerminalHistory}
      name={name}
    />
  );
};

export default Home;