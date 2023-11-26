import React from "react";
import Link from "./Link";
import Delayed from "./Delayed";
import Grid from "./Grid";

import { pickARandomBongoCat } from "../../utils/bongoCatFrameRandomPicker"

import data from "../../data/data.json";

export const Prompt = ({ user, input = undefined }) => {
  return (
    <>
      <span data-testid="prompt-test" className="highlighted-text">
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
    ⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠸⣿⣿⣿⣿⣿⣿⣿⣷
    ⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷
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
                      <span>{"Type "}</span>
                      <span style={{ color : "cyan" }}>{"help"}</span>
                      <span>{" to get started"}</span>
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
      <span data-testid="login-date-test" style={{ color : "cyan "}}>{(new Date()).toUTCString()}</span>
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
              <div>{" show all commands allowed for this user"}</div>
            ],
            [
              <div>{"about"}</div>,
              <div>{" give a brief description of my owner"}</div>
            ],
            [
              <div>{"projects"}</div>,
              <div>{" what kind of projects? can I eat them? -Bongo"}</div>
            ],
            [
              <div>{"social_media"}</div>,
              <div>{" list my owner's instagram and stuff"}</div>
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
    Hi, welcome to my page - I think you already met my (virtual) cat Bongo
    My name is Sage ... ヾ(＾∇＾)
    I graduated with a bachelor's degree in computer science in 2022
    And I started working as a software engineer right after ... (⁰ ◕〜◕ ⁰)
    I work on the frontent, backend, and stuff in between the two (CICD, KTLO, etc)
    `
  );
  const multiplier = 40;

  return (
    <div>
      <div>
        <span style={{ color : "cyan" }}>{"about"}</span>
        <br/><br/>
      </div>
      <div style={{ color : "yellowgreen" }}>{"Sage says:"}</div>
      <div>
        {spiel.split("").map((character, i) => {
          return (
            <Delayed key={i} waitBeforeShow={multiplier * i}>
              {character}
            </Delayed>
          );
        })}
      </div>
      <Delayed waitBeforeShow={multiplier * spiel.split("").length}>
        <div>
          {"I've worked with organizations like "}
          <div>
          <Link url={"https://twitter.com/siklab_org"}>
            {"Siklab"}
          </Link>
          </div>
          <div>
          <Link url={"https://www.instagram.com/uxsocietyph/"}>
            {"User Experience Society"}
          </Link>
          </div>
          <div>
          <Link url={"https://www.instagram.com/hackumbc/"}>
            {"hackUMBC"}
          </Link>
          </div>
          {"Usually to do some development work or help out in creative ventures ٩(◕‿◕)۶"}
        </div>
      </Delayed>
    </div>
  );
};

export const ProjectsText = () => {
  const bongoCatSpiel = (
    `
    He doesn't have time for projects ?? (╯°□°）╯
    We need to get the frontend up and running !!
    `
  );
  const sageSpiel = (
    `
    Sorry, Bongo is getting heated because we're breaking SLA due to this downtime

    Hmmm ...
    I don't have any super cool open source stuff published (yet)
    I do have some personal projects that I've made over the years ... (ᴗᵔᴥᵔ)
    Mostly written in JavaScript, React, Python, or C++
    `
  );
  const multiplier = 40;

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
      <Delayed waitBeforeShow={multiplier * bongoCatSpiel.split("").length}>
        <div style={{ color : "yellowgreen" }}>{"Sage says:"}</div>
        {sageSpiel.split("").map((character, i) => {
          return (
            <Delayed key={i} waitBeforeShow={multiplier * i}>
              {character}
            </Delayed>
          );
        })}
        <Delayed waitBeforeShow={multiplier * sageSpiel.split("").length}>
          <div>
            {"You can check them out on my "}
            <Link url={"https://github.com/sagerg"}>
              {"GitHub"}
            </Link>
          </div>
        </Delayed>
      </Delayed>
    </div>
  );
};

export const SocialMediaText = () => {
  const bongoCatSpiel = (
    `
    Wait ... Can you guys follow my instagram too. I just made it ◕︵◕
    `
  );
  const sageSpiel = (
    `
    Oh man I can't really use social media while on the job ...
    But since you're curious - I'll list the ones I use the most ... ꒰ · ◡ · ꒱
    `
  );
  const multiplier = 40;
  const socialMediaAccounts = data.socialMediaAccounts;

  return (
    <div>
      <div>
        <span style={{ color : "cyan" }}>{"social_media"}</span>
        <br/><br/>
      </div>
      <div style={{ color : "yellowgreen" }}>{"Sage says:"}</div>
      {sageSpiel.split("").map((character, i) => {
        return (
          <Delayed key={i} waitBeforeShow={multiplier * i}>
            {character}
          </Delayed>
        );
      })}
      <Delayed waitBeforeShow={multiplier * sageSpiel.split("").length}>
        {Object
          .entries(socialMediaAccounts)
          .map(([socialMediaKey, urlValue], i) => {
            return (
              <div>
                <Link url={urlValue}>
                  {socialMediaKey}
                </Link>
              </div>
            );
        })}
      </Delayed>
      <br/>
      <Delayed waitBeforeShow={multiplier * (sageSpiel.split("").length + 1)}>
        <div style={{ color : "yellowgreen" }}>{"BongoCat.txt says:"}</div>
        {bongoCatSpiel.split("").map((character, i) => {
          return (
            <Delayed key={i} waitBeforeShow={multiplier * i}>
              {character}
            </Delayed>
          );
        })}
      </Delayed>
    </div>
  );
};