import React, { useEffect, useState, useRef } from "react";
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import {
    AppBar,
    Button,
    Frame,
    MenuList,
    MenuListItem,
    Separator,
    styleReset,
    Table,
    TableRow,
    TableHead,
    TableHeadCell,
    TableDataCell,
    TableBody,
    TextInput,
    Toolbar,
    Window,
    WindowContent,
    WindowHeader,
} from 'react95';
import Clock from 'react-live-clock';

/* Pick a theme of your choice */
import original from 'react95/dist/themes/original';

/* Original Windows95 font (optional) */
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

import "../../assets/windows.css";

// import windowsLogo from '../../assets/windowsLogo.jpg';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;

const WindowsWrapper = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [isDisabled, setDisabled] = useState(false);
  const [isTerminalOpen, setTerminalOpen] = useState(true);
  const [isFrameOpen, setFrameOpen] = useState(false);

  return (
    <div>
        <GlobalStyles />
        <ThemeProvider theme={original}>
            <div className="desktop">

                {isTerminalOpen &&(
                    <Window disabled={isDisabled} className='window'>
                        <WindowHeader className='window-title'>
                            <span>C:\WINDOWS\system32\cmd.exe</span>
                            <Button onClick={() => setTerminalOpen(false)}>
                                <span className='close-icon' />
                            </Button>
                        </WindowHeader>
                        <WindowContent>
                            {children}
                        </WindowContent>
                    </Window>
                )}

                <div className="icons-wrapper" style={{ float : "right" }}>
                    <div className="icons" role='img' aria-label='PC'>
                        <a href="#" onClick={() => setTerminalOpen(true)}>🖥️</a>
                    </div>
                    <div style={{ textAlign: "center" }}>cmd</div>
                    <div className="icons" role='img' aria-label='JOYSTICK'>
                       <a href="#" onClick={() => setFrameOpen(true)}>🕹️</a>
                    </div>
                    <div style={{ textAlign: "center" }}>Games</div>
                    <div className="icons" role='img' aria-label='GLOBE'>
                        <a href="https://youtu.be/dQw4w9WgXcQ?si=Ta9bpAuWtqVhpPGW" target="_blank">🌐</a>    
                    </div>
                    <div style={{ textAlign: "center" }}>Internet</div>
                    <div className="icons" role='img' aria-label='TRASH'>
                        <a href="#">🗑️</a>
                    </div>
                    <div style={{ textAlign: "center" }}>Trash</div>
                    <div className="icons" role='img' aria-label='FAX'>
                        <a href="#">📠</a>
                    </div>
                    <div style={{ textAlign: "center" }}>Fax</div>
                    <div className="icons" role='img' aria-label='CD'>
                        <a href="#">💽</a>
                    </div>
                    <div style={{ textAlign: "center" }}>DVD</div>
                    <div className="icons" role='img' aria-label='FOLDER'>
                        <a href="https://github.com/sagerg" target="_blank">📁</a>
                    </div>
                    <div style={{ textAlign: "center" }}>Projects</div>
                    <div className="icons" role='img' aria-label='FOLDER'>
                        <a href="#">📁</a>
                    </div>
                    <div style={{ textAlign: "center" }}>HWs</div>
                </div>

                {isFrameOpen && (
                    <Window style={{ width: 320, top: 10, left: 10 }}>
                        <WindowHeader className='window-title'>
                            Pokedex.exe
                            <Button onClick={() => setFrameOpen(false)} >
                                <span className='close-icon' />
                            </Button>
                        </WindowHeader>
                        <WindowContent>
                        <Table>
                            <TableHead>
                            <TableRow>
                                <TableHeadCell>Type</TableHeadCell>
                                <TableHeadCell>Name</TableHeadCell>
                                <TableHeadCell disabled>Level</TableHeadCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            <TableRow>
                                <TableDataCell style={{ textAlign: 'center' }}>
                                <span role='img' aria-label='LEAF'>
                                    🌿
                                </span>
                                </TableDataCell>
                                <TableDataCell>Bulbasaur</TableDataCell>
                                <TableDataCell>64</TableDataCell>
                            </TableRow>
                            <TableRow>
                                <TableDataCell style={{ textAlign: 'center' }}>
                                <span role='img' aria-label='fire'>
                                    🔥
                                </span>
                                </TableDataCell>
                                <TableDataCell>Charizard</TableDataCell>
                                <TableDataCell>209</TableDataCell>
                            </TableRow>
                            <TableRow>
                                <TableDataCell style={{ textAlign: 'center' }}>
                                <span role='img' aria-label='lightning'>
                                    ⚡
                                </span>
                                </TableDataCell>
                                <TableDataCell>Pikachu</TableDataCell>
                                <TableDataCell>82</TableDataCell>
                            </TableRow>
                            </TableBody>
                        </Table>
                        </WindowContent>
                    </Window>
                )}

                <div className="desktop-taskbar">
                    <AppBar position="inherit">
                        <Toolbar style={{ justifyContent: 'space-between' }}>
                            <div style={{ display: 'inline-block' }}>
                                <Button 
                                    style={{ fontWeight: 'bold' }}
                                    onClick={() => setOpen(!open)}
                                    active={open}
                                >
                                    {/* <img
                                        src={windowsLogo}
                                        alt='Windows'
                                        style={{ height: '20px', marginRight: 4 }}
                                    /> */}
                                    💻
                                    Start
                                </Button>
                                
                                {open && (
                                    <MenuList
                                    style={{
                                        position: 'absolute',
                                        left: '0',
                                        bottom: '100%'
                                    }}
                                    onClick={() => setOpen(false)}
                                    >
                                    <MenuListItem>
                                        <span role='img' aria-label='👤'>
                                        👤
                                        </span>
                                        <a href="https://www.linkedin.com/in/sagegarcia/" target="_blank">Profile</a>
                                    </MenuListItem>
                                    <MenuListItem>
                                        <span role='img' aria-label='📁'>
                                        📁
                                        </span>
                                        <a href="https://github.com/sagerg" target="_blank">Projects</a>
                                    </MenuListItem>
                                    <MenuListItem>
                                        <span role='img' aria-label='🌐'>
                                        🌐
                                        </span>
                                        <a href="https://youtu.be/dQw4w9WgXcQ?si=Ta9bpAuWtqVhpPGW" target="_blank">Internet</a>
                                    </MenuListItem>
                                    <Separator />
                                    <MenuListItem onClick={() => window.location.reload()}>
                                        <span role='img' aria-label='🔄'>
                                        🔄
                                        </span>
                                        <a href="#">Restart</a>
                                    </MenuListItem>
                                    <MenuListItem disabled>
                                        <span role='img' aria-label='🔙'>
                                        🔙
                                        </span>
                                        Logout
                                    </MenuListItem>
                                    </MenuList>
                                )}

                                <TextInput style={{ display: 'inline-block', marginLeft : "3px" }} placeholder='Search...' width={150} />
                            </div>
                            <Frame className="clock" variant='field'>
                                <span style={{ paddingRight : "5px" }}>🕰️</span>
                                <Clock format={'HH:mm:ss A'} ticking={true} timezone={'US/Pacific'} />
                            </Frame>
                        </Toolbar>
                    </AppBar>
                </div>
            </div>
        </ThemeProvider>
    </div>
  )
};

export default WindowsWrapper;