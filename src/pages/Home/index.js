import React, { useState, useContext } from "react";
import Loader from "../../components/ui/Loader";
import Terminal from "./Terminal";
import WindowsWrapper from "../../components/ui/WindowsWrapper";

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
      {!isLoading &&
        <WindowsWrapper>
          <Terminal 
            user={user}
            isLoading={isLoading}
            setLoading={setLoading}
          />
        </WindowsWrapper>
      }
    </div>
  );
};

export default Home;