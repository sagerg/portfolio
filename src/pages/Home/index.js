import React, { useState, useEffect } from "react";
import Loader from "../../components/ui/Loader";
import Terminal from "./Terminal";

const Home = ({ user }) => {
  const [terminalHistory, setTerminalHistory] = useState([]);
  const [isLoading, setLoading] = useState(true);

  return (
    <>
      <Loader 
        user={user}
        isLoading={isLoading}
        setLoading={setLoading}
      />
      <Terminal 
        terminalHistory={terminalHistory}
        setTerminalHistory={setTerminalHistory}
        user={user}
        isLoading={isLoading}
      />
    </>
  );
};

export default Home;