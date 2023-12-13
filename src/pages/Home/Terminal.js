import React , { useEffect, useState, useRef } from "react";
import Cursor from "../../components/ui/Cursor"
import { 
  Prompt,
  IntroText,
  LoginText,
  NotFoundText,
  HelpText,
  AboutText,
  ProjectsText,
  SocialMediaText
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
        component = <HelpText user={user} />;
        break;
      case "about":
        component = <AboutText/>;
        break;
      case "projects":
        component = <ProjectsText/>;
        break;
      case "socials":
        component = <SocialMediaText/>;
        break;
      default:
        component = <NotFoundText input={trimmedInput}/>;
    }
    return component;
  };

  const handleTerminalInput = () => {
    let newHistory = [...terminalHistory];
    let args = [];

    newHistory = [...newHistory, <Prompt user={user} input={input}/>];
    
    input
      .trim()
      .split(" ")
      .map((arg, i) => {
        if (arg !== "") {
          args.push(arg);
        }
    });

    if (args.length > 0) {
      let output = (
        <></>
      );
      const firstArg = args[0];
      if (commands.includes(firstArg)) {
        switch (firstArg) {

          /* commands that handles actions go here */

          case "cls":
            newHistory = [];
            break;
          case "whoami":
            output = (
              <span className="highlighted-text">{user}</span>
            );
            break;
          case "cd":
          case "chdir":
            output = (
              <span>{`C:\\Users\\${user}`}</span>
            );
            break;
          case "dir":
            output = (
              <span>
                {`
                  Volume in drive C has no label.
                  Volume Serial Number is 6X9X-4X20

                  Directory of C:\\

                  11/15/1996\t\t02:50\tPM\t\t\t<DIR>\t\t\t\t\t.
                  11/18/1996\t\t02:50\tPM\t\t\t<DIR>\t\t\t\t\t..
                  05/23/1997\t\t01:38\tPM\t\t\t\t\t\t\t12\t\tBongoCat.txt
                  07/12/1997\t\t10:47\tPM\t\t\t\t\t\t\t34\t\ttest.ini
                `}
              </span>
            );
            break;
          case "echo":
            let echoed = "";
            args.map((arg, i) => {
              if (i !== 0 && arg !== "") {
                echoed += arg + " ";
              }
            });
            if (echoed === "") {
              
              /* mimic behavior of `echo` in macos/linux */

              echoed = " ";
            }
            output = (
              <span>{echoed}</span>
            );
            break;
          case "reboot":
          case "restart":
            window.location.reload();
            break;

          /* commands that print something go here */

          default:
            output = generateOutputComponent(firstArg);
        }
      } else {
        output = <NotFoundText input={firstArg}/>;
      }
      newHistory = [...newHistory, output];
    }
    setTerminalHistory(newHistory);
    setInput("");
  };

  const handleScrollToInput = () => {
    if (!isLoading && inputRef.current !== undefined) {
      setTimeout(() => inputRef.current.scrollIntoView(), 0);
    }
  };

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      handleTerminalInput();
      handleScrollToInput();
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
    setTerminalHistory([<LoginText/>, <IntroText user={user}/>]);
  }, []);

  return (
    <div data-testid="terminal-test">
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
          <div>
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
        </div>
      }
    </div>
  );
};

export default Terminal;