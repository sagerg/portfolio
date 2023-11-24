import React from "react";
import Link from "./Link";
import Delayed from "./Delayed";
import Grid from "./Grid";

export const Prompt = ({ user, input = undefined }) => {
  return (
    <>
      <span className="highlighted-text">
        {user}
      </span>
      <span>
        {"@Sages-MacBook-Pro ~ % "}
      </span>
      <span>{input}</span>
    </>
  )
};

export const IntroText = () => {
  const bongoCatPawsDown = (
    `
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣷⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⣀⣶⣿⣿⣿⣿⣿⣿⣷⣶⣶⣶⣦⣀⡀⠀⢀⣴⣇⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀
    ⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀
    ⠀⠀⠀⣴⣿⣿⣿⣿⠛⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣄⠀⠀⠀
    ⠀⠀⣾⣿⣿⣿⣿⣿⣶⣿⣯⣭⣬⣉⣽⣿⣿⣄⣼⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀
    ⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄
    ⢸⣿⣿⣿⣿⠟⠋⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠁⣿⣿⣿⣿⡿⠛⠉⠉⠉⠉⠁
    ⠘⠛⠛⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠛⠛⠃⠀⠀⠀⠀⠀⠀⠀
    `
  );
  const bongoCatPawsUp = (
    `
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣶⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣦⣄⣀⡀⣠⣾⡇⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀
    ⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⢿⣿⣿⡇⠀⠀⠀⠀
    ⠀⣶⣿⣦⣜⣿⣿⣿⡟⠻⣿⣿⣿⣿⣿⣿⣿⡿⢿⡏⣴⣺⣦⣙⣿⣷⣄⠀⠀⠀
    ⠀⣯⡇⣻⣿⣿⣿⣿⣷⣾⣿⣬⣥⣭⣽⣿⣿⣧⣼⡇⣯⣇⣹⣿⣿⣿⣿⣧⠀⠀
    ⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠸⣿⣿⣿⣿⣿⣿⣿⣷⠀
    `
  );
  const bongoCatAsciiSrc = "https://copypastatext.com/bongo-cat-ascii/";
  const spiel = (
    `
    Oh, hi there ... Looks like something on the client side broke ... (｡•́︿•̀｡)՞
    That's what I get for pushing to prod on a Friday night
    Guess you'll have to use this terminal for now
    Luckily, you're already here

    You say you got here through the browser? Weird...
    Go ahead and take a look around for now while I fix the client!
    `
  );
  const multiplier = 20;

  return (
    <div>
      <Grid 
        data={
          [
            [
              (
                <>
                  {spiel.split("").map((character, i) => {
                    return (
                      <Delayed key={i} waitBeforeShow={multiplier * i}>
                        {character}
                      </Delayed>
                    );
                  })}
                  <br />
                  <Delayed waitBeforeShow={multiplier * spiel.split("").length}>
                    <>
                    <b>
                      <span>{"Type "}</span>
                      <Link>{"help"}</Link>
                      <span>{" to get started. "}</span>
                    </b>
                    <span>{"I'll be here if you need anything ... ٩(◕‿◕)۶"}</span>
                    </>
                  </Delayed>
                </>
              ),
              <>
                {bongoCatPawsDown}
                <Link url={bongoCatAsciiSrc}>{"Source"}</Link>
              </>
            ]
          ]
        }
      />
    </div>
  );
};

export const LoginText = () => {
  return (
    <>
      <span>{"Last login: "}</span>
      <span style={{ color : "cyan "}}>{(new Date()).toUTCString()}</span>
      <span>{" on console"}</span>
    </>
  );
};

export const NotFoundText = ({ input = undefined }) => {
  return (
    <>{`zsh: command not found: ${input}`}</>
  );
};

export const HelpText = () => {
  return (
    <>
      <div>
        {
          `
          [help]

          Usage:

          npm install               install all the dependencies in your project
          npm install <foo>   add the <foo> dependency to your project
          npm test                  run this project's tests
          npm run <foo>       run the script named <foo>
          `
        }
      </div>
    </>
  );
};