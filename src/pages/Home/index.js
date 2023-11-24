import React, { useState, useEffect } from "react";
import Loader from "../../components/ui/Loader";
import Terminal from "./Terminal";

const Home = ({ user }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <>
      <Loader 
        user={user}
        isLoading={isLoading}
        setLoading={setLoading}
      />
      <Terminal 
        user={user}
        isLoading={isLoading}
        setLoading={setLoading}
      />
    </>
  );
};

export default Home;