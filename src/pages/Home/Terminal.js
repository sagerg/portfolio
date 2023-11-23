import React , { useEffect, useState, useRef } from "react";
import "../../assets/terminal.css"
import data from "../../data/data.json";
import Cursor from "../../components/ui/Cursor"

const Terminal = ({ 
  terminalHistory, 
  setTerminalHistory,
  user,
  isLoading
}) => {
  const [input, setInput] = useState("");
  const inputRef = useRef();
  const preCursorText = (
    <>
      <span className="highlighted-text">
        {user}
      </span>
      <span>
        {"@Sages-MacBook-Pro ~ % "}
      </span>
    </>
  );
  const commands = data.commands;

  const handleInputOnChange = (e) => {
    let cmd = e.target.value;
    setInput(cmd);
  };

  const generateOutputComponent = (commands, trimmedInput) => {
    let component = undefined;
    switch (trimmedInput) {
      case "help":
        component = (
          <>
            {"Available commands: "}
            <br />
            {"    "}
            {commands.slice(0, commands.length-1).map((command) => {
              return (<span><b>{command}</b>, </span>)
            })}
            {<b>{commands[commands.length-1]}</b>}
          </>
        );
        break;
      default:
        component = <>{`zsh: command not found: ${trimmedInput}`}</>;
    }
    return component;
  };

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      let newHistory = [...terminalHistory];
      newHistory = [...newHistory, <>{preCursorText}{input}</>];
      const trimmedInput = input.trim();
      if (trimmedInput !== "") {
        let output = <></>;
        if (commands.includes(trimmedInput)) {
          if (trimmedInput === "clear") {
            newHistory = [];
          } else {
            output = generateOutputComponent(commands, trimmedInput);
          }
        } else {
          output = <>{`zsh: command not found: ${trimmedInput}`}</>;
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
          <span>
            {preCursorText}
          </span>
          <input
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