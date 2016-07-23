import {app, ipcMain} from 'electron';
import dotenv from 'dotenv';
import {PATHS} from './constants/local-files';
import {IPC} from './constants/ipc';
import {createInitialWindow} from './utils/app-windows';
import {start} from './main-starter';
import Authenticator from './authenticator';

app.on('ready', () => {
  // load from .env
  dotenv.config();

  // setup ipc handler
  ipcMain.on(IPC.login, (e, keys) => {
    new Authenticator().start(keys)
      .then(verifiedKeys => {
        console.log('start app');
      });
  });

  const initialWindow = createInitialWindow();
  initialWindow.loadURL(PATHS.initialTemplate);
});
