import React , { useEffect, useState, useRef } from "react";
import "../../assets/terminal.css"
import data from "../../data/data.json";

const Terminal = ({ 
  terminalHistory, 
  setTerminalHistory,
  name
}) => {
  const [input, setInput] = useState("");
  const inputRef = useRef();

  const preCursorText = (
    <>
      <span className="pre-cursor-text">
        {name}
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

  const generateOutputComponent = (commandList, trimmedInput) => {
    let component = undefined;
    switch (trimmedInput) {
      case "help":
        component = (
          <>
            {"Available commands: "}
            <br />
            {"    "}
            {commandList.slice(0, commandList.length-1).map((command) => {
              return (<span><b>{command}</b>, </span>)
            })}
            {<b>{commandList[commandList.length-1]}</b>}
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
        let output = undefined;
        const commandList = Object.keys(commands);
        if (commandList.includes(trimmedInput)) {
          output = generateOutputComponent(commandList, trimmedInput);
        } else {
          output = <>{`zsh: command not found: ${trimmedInput}`}</>;
        }
        newHistory = [...newHistory, output];
      }
      setTerminalHistory(newHistory);
      setInput("");
    }
  };

  useEffect(() => inputRef.current.focus(), []);

  return (
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
        value={input}
        onChange={handleInputOnChange}
        onKeyDown={handleOnKeyDown}
      />
    </div>
  );
};

export default Terminal;