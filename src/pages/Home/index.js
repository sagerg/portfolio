import React, { useState, useContext } from "react";
import Loader from "../../components/ui/Loader";
import Terminal from "./Terminal";

import { UserContext } from "../../context/UserContext";

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const user = useContext(UserContext);

  return (
    <div data-testid="home-test" className="home">
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
    </div>
  );
};

export default Home;