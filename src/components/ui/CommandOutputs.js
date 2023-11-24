import React from "react";
import Link from "./Link";
import Delayed from "./Delayed";
import Grid from "./Grid";

import { pickARandomBongoCat } from "../../utils/bongoCatFrameRandomPicker"

import data from "../../data/data.json";

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
    ⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠸⣿⣿⣿⣿⣿⣿⣿⣿⣷
    ⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠸⣿⣿⣿⣿⣿⣿⣿⣿⣷
    `
  );
  const bongoCatAsciiSrc = "https://copypastatext.com/bongo-cat-ascii/";
  const spiel = (
    `
    Oh, hi there ... Looks like something on the client side broke ... (｡•́︿•̀｡)՞
    That's what I get for pushing to prod on a Friday night
    Guess you'll have to use this terminal for now
    Lucky for you, I made this environment user-friendly
    Go ahead and take a look around for now while I fix some stuff ~ !
    `
  );
  const multiplier = 40;

  return (
    <div>
      <Grid 
        colWidth={"50%"}
        data={
          [
            [
              (
                <>
                  <br/>
                  <div style={{ color : "yellowgreen" }}>{"BongoCat.txt says:"}</div>
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
                        <span style={{ color : "cyan" }}>{"help"}</span>
                        <span>{" to get started. "}</span>
                      </b>
                      <span>{"I'll be here if you need anything ... ٩(◕‿◕)۶"}</span>
                    </>
                  </Delayed>
                </>
              ),
              <>
                {pickARandomBongoCat([bongoCatPawsDown, bongoCatPawsUp])}
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
    <div>
      <Grid
        data={
          [
            [
              <div>
                <span style={{ color : "cyan" }}>{"help"}</span>
                <br/><br/>
              </div>,
              <></>
            ],
            [
              <div>
                {"Usage:"}
                <br/><br/>
              </div>,
              <></>
            ],
            [
              <div>{"help"}</div>,
              <div>{"show all commands allowed for this user"}</div>
            ],
            [
              <div>{"about"}</div>,
              <div>{"show a brief description of my boss"}</div>
            ],
            [
              <div>{"projects"}</div>,
              <div>{"show some cool stuff"}</div>
            ],
            [
              <div>{"social_media"}</div>,
              <div>{"list social media accounts (if you ever want to connect ... just kidding ... unless 👉👈)"}</div>
            ]
          ]
        }
      />
      <br/>
      <div>{"Other commands:"}</div>
      <div>
        {
          `
          clear, whoami, echo, reboot, restart, pwd, ls
          `
        }
      </div>
    </div>
  );
};

export const AboutText = () => {
  const spiel = (
    `
    Hi, welcome to my page
    My name is Sage ... ヾ(＾∇＾)
    
    I've been a software engineer since 2022, which was when I graduated with my CS degree!

    I briefly worked at JPMorgan Chase as a software engineer intern
    This is where I learned a lot of the basics and got my first real work experience

    Shortly after graduation, I got hired as a software engineer at Oracle Cloud!
    It was a tough journey but my friends and I made it out to the other side
    
    - - OK

    Enough about work ...

    Here are non work related stuff about me:
    
    - I love working out (my SBD total was like 1,045 LBS at some point) 🏋️
    - I love hiking (my favorite hiking spot is Maple Pass Loop at the North Cascades, near Seattle)
    - I love to hydrate (this is false, I actually haven't drank water in days)
    - Oh yeah, I have a cat named Bongo ... He's lurking in a directory here somewhere (ー_ーゞ

    Oh time's up, I gotta go back to work now (◞‸◟ㆀ)
    Hopefully the website goes back online again soon so you can see my super awesome frontend

    See ya around ~
    `
  );
  const multiplier = 20;

  return (
    <div>
      <div>
        <span style={{ color : "cyan" }}>{"about"}</span>
        <br/><br/>
      </div>
      <div style={{ color : "yellowgreen" }}>{"Sage says:"}</div>
      {spiel.split("").map((character, i) => {
        return (
          <Delayed key={i} waitBeforeShow={multiplier * i}>
            {character}
          </Delayed>
        );
      })}
    </div>
  );
};

export const ProjectsText = () => {
  const bongoCatSpiel = (
    `
    He doesn't have time for projects ??
    We need to get the frontend up and running !!
    `
  );
  const sageSpiel = (
    `
    Sorry, Bongo is getting angry because we're breaking SLA due to this downtime

    Hmmm ...
    I don't have like super cool open source stuff made (yet)
    I do have some stuff in my GitHub that I think are pretty neat
    `
  );
  const delay = 5;
  const multiplier = 20;

  return (
    <div>
      <div>
        <span style={{ color : "cyan" }}>{"projects"}</span>
        <br/><br/>
      </div>
      <div style={{ color : "yellowgreen" }}>{"BongoCat.txt says:"}</div>
      <div>
        {bongoCatSpiel.split("").map((character, i) => {
          return (
            <Delayed key={i} waitBeforeShow={multiplier * i}>
              {character}
            </Delayed>
          );
        })}
      </div>
      <Delayed waitBeforeShow={(multiplier + delay) * bongoCatSpiel.length}>
        <div style={{ color : "yellowgreen" }}>{"Sage says:"}</div>
        {sageSpiel.split("").map((character, i) => {
          return (
            <Delayed key={i} waitBeforeShow={multiplier * i}>
              {character}
            </Delayed>
          );
        })}
        <Delayed waitBeforeShow={multiplier * sageSpiel.length}>
          <div>
            {"Check them out "}
            <Link url={"https://github.com/sagerg"}>
              {"here"}
            </Link>
          </div>
        </Delayed>
      </Delayed>
    </div>
  );
};

export const SocialMediaText = () => {
  const spiel = (
    `
    Hmmm ... I'm not usually the type to use social media frequently
    I'll just list the ones I think you use the most ... ꒰ · ◡ · ꒱
    `
  );
  const multiplier = 20;
  const socialMediaAccounts = data.socialMediaAccounts;

  return (
    <div>
      <div>
        <span style={{ color : "cyan" }}>{"social_media"}</span>
        <br/><br/>
      </div>
      <div style={{ color : "yellowgreen" }}>{"Sage says:"}</div>
      {spiel.split("").map((character, i) => {
        return (
          <Delayed key={i} waitBeforeShow={multiplier * i}>
            {character}
          </Delayed>
        );
      })}
      <Delayed waitBeforeShow={multiplier * spiel.length}>
        {Object
          .entries(socialMediaAccounts)
          .map(([socialMediaKey, urlValue], i) => {
            return (
              <div>
                <span>{"- "}</span>
                <Link url={urlValue}>
                  {socialMediaKey}
                </Link>
              </div>
            );
        })}
      </Delayed>
    </div>
  );
};