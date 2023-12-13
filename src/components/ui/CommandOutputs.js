import React from "react";
import Link from "./Link";
import Delayed from "./Delayed";
import Grid from "./Grid";

import { getRandomItemFrom } from "../../utils/randomItemFactory";

import data from "../../data/data.json";

export const Prompt = ({ user, input = undefined }) => {
  return (
    <>
      <span>C:\Users\</span>
      <span data-testid="prompt-test" className="highlighted-text">
        {user}
      </span>
      {"> "}
      <span>{input}</span>
    </>
  )
};

export const IntroText = () => {
  const speaker1 = data.introSpiel.fromSpeaker1.split("");
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
                  {speaker1.map((character, i) => {
                    return (
                      <Delayed key={i} waitBeforeShow={multiplier * i}>
                        <span>{character}</span>
                      </Delayed>
                  )})}
                  <br /><br />
                  <Delayed waitBeforeShow={multiplier * speaker1.length}>
                    <>
                      <span>{"Type "}</span>
                      <span style={{ color : "cyan" }}>{"help"}</span>
                      <span>{" to get started"}</span>
                    </>
                  </Delayed>
                </>
              ),
              <div style={{ marginRight : "5px" }}>
                {
                  getRandomItemFrom(
                    [
                      data.bongoCat.pawsDown,
                      data.bongoCat.pawsUp
                    ]
                  ).map((line, i) => {
                    return (
                      <Delayed key={i} waitBeforeShow={100 * i}>
                        <div>{line}</div>
                      </Delayed>
                    )
                  })
                }
              </div>
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
              <div>{data.helpText.help}</div>
            ],
            [
              <div>{"about"}</div>,
              <div>{data.helpText.about}</div>
            ],
            [
              <div>{"projects"}</div>,
              <div>{data.helpText.projects}</div>
            ],
            [
              <div>{"social_media"}</div>,
              <div>{data.helpText.social_media}</div>
            ]
          ]
        }
      />
      <br/>
      <div>{"Other commands:"}</div>
      <div>
        {"\t"}
        {data.commands.map((command, i) => {
          return (
            (!(["help", "about", "projects", "social_media"].includes(command)))
            ? <span key={i}>{command}{' '}</span>
            : null
          )
        })}
      </div>
    </div>
  );
};

export const AboutText = () => {
  const speaker1 = data.aboutSpiel.fromSpeaker1.split("");
  const multiplier = 40;

  return (
    <div>
      <div>
        <span style={{ color : "cyan" }}>{"about"}</span>
        <br/><br/>
      </div>
      <div style={{ color : "yellowgreen" }}>{"Sage says:"}</div>
      <div>
        {speaker1.map((character, i) => {
          return (
            <Delayed key={i} waitBeforeShow={multiplier * i}>
              {character}
            </Delayed>
          );
        })}
      </div>
      <Delayed waitBeforeShow={multiplier * speaker1.length}>
        <div>
          {"I've volunteered in organizations like "}
          <Link url={"https://twitter.com/siklab_org"}>
            {"Siklab"}
          </Link>{", "}
          <Link url={"https://www.instagram.com/uxsocietyph/"}>
            {"User Experience Society, "}
          </Link>{", and "}
          <Link url={"https://www.instagram.com/hackumbc/"}>
            {"hackUMBC"}
          </Link>
          <br/>
          {"And I've written software for places like "}
          <Link url="https://www.jpmorganchase.com/">
            {"JPMorgan Chase & Co."}
          </Link>{" and "}
          <Link url="https://www.oracle.com/">
            {"Oracle"}
          </Link>
        </div>
      </Delayed>
    </div>
  );
};

export const ProjectsText = () => {
  const speaker1 = data.projectSpiel.fromSpeaker1.split("");
  const speaker2 = data.projectSpiel.fromSpeaker2.split("");
  const multiplier = 40;

  return (
    <div>
      <div>
        <span style={{ color : "cyan" }}>{"projects"}</span>
        <br/><br/>
      </div>
      <Grid 
        colWidth={"50%"}
        data={
          [
            [
              (
                <>
                  <br/>
                  <div style={{ color : "yellowgreen" }}>{"BongoCat.txt says:"}</div>
                  {speaker1.map((character, i) => {
                    return (
                      <Delayed key={i} waitBeforeShow={multiplier * i}>
                        {character}
                      </Delayed>
                    );
                  })}
                </>
              ),
              <>
                {
                  getRandomItemFrom(
                    [
                      data.bongoCat.pawsDown,
                      data.bongoCat.pawsUp
                    ]
                  ).map((line, i) => {
                    return (
                      <Delayed key={i} waitBeforeShow={100 * i}>
                        <div>{line}</div>
                      </Delayed>
                    )
                  })
                }
              </>
            ]
          ]
        }
      />
      <Delayed waitBeforeShow={multiplier * speaker1.length}>
        <div style={{ color : "yellowgreen" }}>{"Sage says:"}</div>
        {speaker2.map((character, i) => {
          return (
            <Delayed key={i} waitBeforeShow={multiplier * i}>
              {character}
            </Delayed>
          );
        })}
        <Delayed waitBeforeShow={multiplier * speaker2.length}>
          <div>
            {"You can check them out on my "}
            <Link url={"https://github.com/sagerg"}>
              {"GitHub"}
            </Link>
          </div>
          <br/>
          <div>
            {"Some of my most notable ones include: "}
            <div>
              <Link url={"https://github.com/ZhihongPang/Pokemon530"}>
                {"a Pokemon GO clone"}
              </Link>
              {" made with Django, PostgreSQL, and Heroku"}
            </div>
            <div>
              <Link url="https://github.com/sagerg/connect-four-design">
                {"a connect four program"}
              </Link>
              {" made with Python"}
            </div>
            <div>
              <Link url="https://github.com/sagerg/cmd-line-tools#password-manager">
                {"a password manager"}
              </Link>
              {" made with C++ to encrypt and manage passwords"}
            </div>
          </div>
        </Delayed>
      </Delayed>
    </div>
  );
};

export const SocialMediaText = () => {
  const speaker1 = data.socialSpiel.fromSpeaker1.split("");
  const speaker2 = data.socialSpiel.fromSpeaker2.split("");
  const socialMediaAccounts = data.socialMediaAccounts;
  const multiplier = 40;

  return (
    <div>
      <div>
        <span style={{ color : "cyan" }}>{"social_media"}</span>
        <br/><br/>
      </div>
      <div style={{ color : "yellowgreen" }}>{"Sage says:"}</div>
      {speaker1.map((character, i) => {
        return (
          <Delayed key={i} waitBeforeShow={multiplier * i}>
            {character}
          </Delayed>
        );
      })}
      <br/>
      <Delayed waitBeforeShow={multiplier * speaker1.length}>
        {Object
          .entries(socialMediaAccounts)
          .map(([socialMediaKey, urlValue], i) => {
            return (
              <span key={i}>
                <Link url={urlValue}>
                  {socialMediaKey}
                </Link>
                {" "}
              </span>
            );
        })}
      </Delayed>
      <br/>
      <Delayed waitBeforeShow={multiplier * (speaker1.length + 1)}>
        <Grid 
          colWidth={"50%"}
          data={
            [
              [
                (
                  <>
                    <br/>
                    <div style={{ color : "yellowgreen" }}>{"BongoCat.txt says:"}</div>
                    {speaker2.map((character, i) => {
                      return (
                        <Delayed key={i} waitBeforeShow={multiplier * i}>
                          {character}
                        </Delayed>
                      );
                    })}
                  </>
                ),
                <>
                  {
                    getRandomItemFrom(
                      [
                        data.bongoCat.pawsDown,
                        data.bongoCat.pawsUp
                      ]
                    ).map((line, i) => {
                      return (
                        <Delayed key={i} waitBeforeShow={100 * i}>
                          <div>{line}</div>
                        </Delayed>
                      )
                    })
                  }
                </>
              ]
            ]
          }
        />
      </Delayed>
    </div>
  );
};