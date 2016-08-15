import {app, ipcMain} from 'electron';
import dotenv from 'dotenv';
import {PATHS} from './constants/local-files';
import {IPC} from './constants/ipc';
import {createInitialWindow, createMainWindow, createAuthenticationWindow} from './utils/app-windows';
import {start} from './main-starter';
import Authenticator from './authenticator';
import TwitterClient from './clients/twitter-client';

app.on('ready', () => {
  // load from .env
  dotenv.config();

  const initialWindow = createInitialWindow();

  // setup ipc handler
  ipcMain.on(IPC.loginSucceeded, (e, windowSize) => {
    initialWindow.hide();
    setTimeout(() => {
      const mainWindow = createMainWindow(windowSize);
      mainWindow.loadURL(PATHS.mainTemplate);
    }, 300);
  });
  ipcMain.on(IPC.openAuthWindow, (e, authUrl) => {
    const authWindow = createAuthenticationWindow();
    authWindow.webContents.on('will-navigate', (event, url) => {
      const urlMatchResult = url.match(/\?oauth_token=([^&]*)&oauth_verifier=([^&]*)/);
      event.preventDefault();
      if (urlMatchResult) {
        initialWindow.webContents.send(IPC.authenticated, urlMatchResult[2]);
        authWindow.close();
      }
    });
    authWindow.loadURL(authUrl);
  });

  // start app
  initialWindow.loadURL(PATHS.initialTemplate);
});
