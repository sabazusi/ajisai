import {app, ipcMain} from 'electron';
import dotenv from 'dotenv';
import {PATHS} from './constants/local-files';
import {IPC} from './constants/ipc';
import {createInitialWindow, createMainWindow} from './utils/app-windows';
import {start} from './main-starter';
import Authenticator from './authenticator';
import TwitterClient from './clients/twitter-client';

app.on('ready', () => {
  // load from .env
  dotenv.config();

  TwitterClient.initialize(
    process.env.CONSUMER_KEY,
    process.env.CONSUMER_SECRET,
    process.env.CALLBACK_URL
  );

  const initialWindow = createInitialWindow();

  // setup ipc handler
  ipcMain.on(IPC.login, (e, keys) => {
    new Authenticator().start(keys)
      .then(verifiedKeys => {
        setTimeout(() => {
          initialWindow.hide();
          const mainWindow = createMainWindow({});
          mainWindow.loadURL(PATHS.mainTemplate);
        }, 1000);
      });
  });

  ipcMain.on(IPC.mainPageLoaded, () => {
    console.log('onLoaded');
  });

  initialWindow.loadURL(PATHS.initialTemplate);
});
