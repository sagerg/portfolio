import React, { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import PulseLoader from "react-spinners/PulseLoader";
import Delayed from "./Delayed";
import data from "../../data/data.json";
import Cursor from "./Cursor";

import "../../assets/loader.css";
import "../../assets/terminal.css"

const Loader = ({ user, isLoading, setLoading }) => {
  const multiplier = 200;
  const dateIdentifier = "**";
  const userIdentifier = "%%";
  const bootSequence = data.bootSequence;
  const loadDuration = multiplier * bootSequence.length;

  const [hasLoaderStalled, setLoaderStalled] = useState(false);

  const handleTapOnMobile = () => {
    setLoading(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaderStalled(true);
    }, loadDuration);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (hasLoaderStalled) {
      const onKeyDown = (e) => {
        if(e.key === 'Enter'){
          setLoading(false);
        }
      }
      window.addEventListener('keydown', onKeyDown)
      return () => window.removeEventListener('keydown', onKeyDown);
    }
   },[hasLoaderStalled]);

  return (
    <div>
      {isLoading &&
        <div className="loader">
          <PacmanLoader
            color={"yellow"}
            size={10}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          {bootSequence.map((text, i) => {
            if (text === "") {
              return (
                <Delayed key={i} waitBeforeShow={multiplier * i}>
                  <br/>
                </Delayed>
              );
            } else if (text.includes(dateIdentifier)) {
              return (
                <Delayed key={i} waitBeforeShow={multiplier * i}>
                  <p>
                    <span>{text}</span>
                    <span className="highlighted-text">{(new Date()).toUTCString()}</span>
                  </p>
                </Delayed>
              );
            } else if (text.includes(userIdentifier)) {
              return (
                <Delayed key={i} waitBeforeShow={multiplier * i}>
                  <p>
                    <span>{text}</span>
                    <span className="highlighted-text">{user}</span>
                  </p>
                </Delayed>
              );
            } else {
              return (
                <Delayed key={i} waitBeforeShow={multiplier * i}>
                  <p>{text}</p>
                </Delayed>
              );
            }
          })}
          <Delayed waitBeforeShow={loadDuration}>
            <span>{"PRESS "}</span>
            <span style={{ color : "yellowgreen" }}>{"ENTER"}</span>
            <span>{" TO CONTINUE"}</span>
            <Cursor />
            <br /><br />
            <p onClick={handleTapOnMobile}>
              <a 
                href="#"
                style={{ textDecoration : "none", color : "#fff" }}
              >
                {"(Or tap here if you're on a mobile device 📱)"}
              </a>
            </p>
            <br />
          </Delayed>
          <PulseLoader
            color={"yellow"}
            size={10}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      }
    </div>
  );
};

export default Loader;