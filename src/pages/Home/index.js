import React, { useState, useContext } from "react";
import Loader from "../../components/ui/Loader";
import Terminal from "../../components/ui/Terminal";
import WindowsWrapper from "../../components/ui/WindowsWrapper";

import { UserContext } from "../../context/UserContext";

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const user = useContext(UserContext);

  return (
    <div data-testid="home-test" className="home">
      {!isLoading ?
        <WindowsWrapper>
          <Terminal user={user} />
        </WindowsWrapper>
        :
        <Loader user={user} setLoading={setLoading} />
      }
    </div>
  );
};

export default Home;