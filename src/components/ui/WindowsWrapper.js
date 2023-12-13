import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import {
    AppBar,
    Button,
    MenuList,
    MenuListItem,
    Separator,
    styleReset,
    TextInput,
    Toolbar,
    Tooltip,
    Window,
    WindowContent,
    WindowHeader,
} from 'react95';

/* Pick a theme of your choice */
import original from 'react95/dist/themes/original';

/* Original Windows95 font (optional) */
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

import "../../assets/windows.css";

import windowsLogo from '../../assets/windowsLogo.jpg';

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

  return (
    <div>
    <GlobalStyles />
      <ThemeProvider theme={original}>
            <div className="desktop">
                <Window className='window'>
                    <WindowHeader className='window-title'>
                        <span>C:\WINDOWS\system32\cmd.exe</span>
                        <Button>
                            <span className='close-icon' />
                        </Button>
                    </WindowHeader>
                    <WindowContent>
                        {children}
                    </WindowContent>
                </Window>
                <div className="desktop-taskbar">
                    <AppBar position="inherit">
                        <Toolbar style={{ justifyContent: 'space-between' }}>
                            <div style={{ display: 'inline-block' }}>
                                <Button 
                                    style={{ fontWeight: 'bold' }}
                                    onClick={() => setOpen(!open)}
                                    active={open}
                                >
                                    <img
                                        src={windowsLogo}
                                        alt='Windows'
                                        style={{ height: '20px', marginRight: 4 }}
                                    />
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
                                        <span role='img' aria-label='👨‍💻'>
                                        👨‍💻
                                        </span>
                                        Profile
                                    </MenuListItem>
                                    <MenuListItem>
                                        <span role='img' aria-label='📁'>
                                        📁
                                        </span>
                                        Documents
                                    </MenuListItem>
                                    <MenuListItem>
                                        <span role='img' aria-label='🌎'>
                                        🌎
                                        </span>
                                        <a href="https://unsplash.com/@mitifotos" target="_blank">Internet</a>
                                    </MenuListItem>
                                    <Separator />
                                    <MenuListItem disabled>
                                        <span role='img' aria-label='🔙'>
                                        🔙
                                        </span>
                                        Logout
                                    </MenuListItem>
                                    </MenuList>
                                )}                            </div>
                            <TextInput placeholder='Search...' width={150} />
                        </Toolbar>
                    </AppBar>
                </div>                
            </div>
      </ThemeProvider>
    </div>
  )
};

export default WindowsWrapper;