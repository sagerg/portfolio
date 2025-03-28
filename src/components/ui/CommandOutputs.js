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

export const IntroText = ({ user = undefined }) => {
  // const speaker1 = data.introSpiel.fromSpeaker1.split("");
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
                  {/* <div style={{ color : "yellowgreen" }}>{"BongoCat.txt says:"}</div>
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
                  </Delayed> */}
                  <div>{`Welcome back, ${user.split(" ")[0]}! You currently have Guest permissions on Sage's desktop.`}</div>
                  <span>{"Type "}</span>
                  <span style={{ color : "cyan" }}>{"help"}</span>
                  <span>{" to get started"}</span>
                </>
              ),
              // <div style={{ marginRight : "5px" }}>
              //   {
              //     getRandomItemFrom(
              //       [
              //         data.bongoCat.pawsDown,
              //         data.bongoCat.pawsUp
              //       ]
              //     ).map((line, i) => {
              //       return (
              //         <Delayed key={i} waitBeforeShow={100 * i}>
              //           <div>{line}</div>
              //         </Delayed>
              //       )
              //     })
              //   }
              // </div>
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
    <div>
      <div>{`'${input}' is not recognized as an internal or external command,`}</div>
      <div>operable program or batch file.</div>
    </div>
  );
};

export const HelpText = ({ user = undefined }) => {
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
                {`Hey ${user.split(" ")[0]}, here are some cmds that you can use:`}
                <br/><br/>
              </div>,
              <></>
            ],
            [
              <div>{"'help'"}</div>,
              <div>{data.helpText.help}</div>
            ],
            [
              <div>{"'about'"}</div>,
              <div>{data.helpText.about}</div>
            ],
            [
              <div>{"'projects'"}</div>,
              <div>{data.helpText.projects}</div>
            ],
            [
              <div>{"'socials'"}</div>,
              <div>{data.helpText.socials}</div>
            ],
            [
              <div>{"'cls'"}</div>,
              <div>Clear the screen</div>
            ],
            [
              <div>{"'whoami'"}</div>,
              <div>Retrieve user name and group info</div>
            ],
            [
              <div>{"'echo'"}</div>,
              <div>Display text, for example 'echo message'</div>
            ],
            [
              <div>{"'reboot'"}</div>,
              <div>Reboot the computer</div>
            ],
            [
              <div>{"'chdir'"}</div>,
              <div>Display the drive and folder that you are in</div>
            ],
            [
              <div>{"'dir'"}</div>,
              <div>List files and folders inside the folder that you are in</div>
            ],
          ]
        }
      />
      <br/>
      {/* <span>{"Other commands: "}</span>
      <span>
        {"\t"}
        {data.commands.map((command, i) => {
          return (
            (!(["help", "about", "projects", "socials"].includes(command)))
            ? <span key={i}>{command}{' '}</span>
            : null
          )
        })}
      </span> */}
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
          {"I've been a part of some amazing organizations in the past like "}
          <Link url={"https://twitter.com/siklab_org"}>
            {"Siklab"}
          </Link>{", "}
          <Link url={"https://www.instagram.com/uxsocietyph/"}>
            {"User Experience Society"}
          </Link>{", and "}
          <Link url={"https://www.instagram.com/hackumbc/"}>
            {"hackUMBC"}
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
      {/* <Grid 
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
      /> */}
      <Delayed waitBeforeShow={multiplier * 0}>
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
            {"For a complete list of projects, visit my "}
            <Link url={"https://github.com/sagerg"}>
              {"GitHub"}
            </Link>
          </div>
          <br/>
          <div>
            <div>
              {"This "}
              <Link url={"https://github.com/sagerg/portfolio"}>
                {"website"}
              </Link>
              {" made with React, Jest, GitHub actions, and GitHub pages"}
            </div>
            <div>
              {"A "}
              <Link url={"https://github.com/ZhihongPang/Pokemon530"}>
                {"Pokemon GO Clone"}
              </Link>
              {" made with Django, DRF, PostgreSQL, and Heroku"}
            </div>
            <div>
              {"A "}
              <Link url="https://github.com/sagerg/connect-four-design">
                {"Connect Four Game"}
              </Link>
              {" made with PyGame and Minimax with Alpha-beta pruning"}
            </div>
            <div>
              {"A "}
              <Link url="https://github.com/sagerg/path-finding">
                {"Path Finding Script"}
              </Link>
              {" that uses Depth-first search to find a path in a maze"}
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
        <span style={{ color : "cyan" }}>{"socials"}</span>
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
              <div key={i}>
                <Link url={urlValue}>
                  {socialMediaKey}
                </Link>
              </div>
            );
        })}
      </Delayed>
      {/* <br/>
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
      </Delayed> */}
    </div>
  );
};