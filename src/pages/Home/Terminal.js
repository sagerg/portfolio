import React , { useEffect, useState, useRef } from "react";
import Cursor from "../../components/ui/Cursor"
import { 
  Prompt,
  IntroText,
  LoginText,
  NotFoundText,
  HelpText
} from "../../components/ui/CommandOutputs";

import "../../assets/terminal.css"

import data from "../../data/data.json";

const Terminal = ({ user, isLoading, setLoading }) => {
  const [terminalHistory, setTerminalHistory] = useState([]);
  const [input, setInput] = useState("");
  const inputRef = useRef();
  const commands = data.commands;

  const handleInputOnChange = (e) => {
    let cmd = e.target.value;
    setInput(cmd);
  };

  const generateOutputComponent = (trimmedInput) => {
    let component = undefined;
    switch (trimmedInput) {
      case "help":
        component = <HelpText/>;
        break;
      default:
        component = <NotFoundText input={trimmedInput}/>;
    }
    return component;
  };

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      let newHistory = [...terminalHistory];
      newHistory = [...newHistory, <Prompt user={user} input={input}/>];
      const trimmedInput = input.trim();
      if (trimmedInput !== "") {
        let output = <></>;
        if (commands.includes(trimmedInput)) {
          switch (trimmedInput) {

            /* commands that handles actions go here */

            case "clear":
              newHistory = [];
              break;
            case "reboot":
            case "restart":
              window.location.reload();
              break;

            /* commands that print something go here */

            default:
              output = generateOutputComponent(trimmedInput);
          }
        } else {
          output = <NotFoundText input={trimmedInput}/>;
        }
        newHistory = [...newHistory, output];
      }
      setTerminalHistory(newHistory);
      setInput("");
    }
  };

  const getTextWidth = (text) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = getComputedStyle(document.body).font;
    return context.measureText(text).width;
  };

  useEffect(() => {
    if (!isLoading) {
      inputRef.current.focus();
    }
  }, [isLoading]);

  useEffect(() => {
    setTerminalHistory([<LoginText/>, <IntroText/>]);
  }, []);

  return (
    <div>
      {!isLoading &&
        <div 
          className="terminal-wrapper"
          onClick={() => inputRef.current.focus()}
        >
          <div className="terminal">
            {terminalHistory.map((text, index) => (
              <div key={index}>
                {text}
              </div>
            ))}
          </div>
          <Prompt user={user}/>
          <input
            autoFocus
            ref={inputRef}
            className="terminal-input" 
            type="text"
            style={{"width" : getTextWidth(input)}}
            value={input}
            onChange={handleInputOnChange}
            onKeyDown={handleOnKeyDown}
          />
          <Cursor />
        </div>
      }
    </div>
  );
};

export default Terminal;