import {app, ipcMain} from 'electron';
import dotenv from 'dotenv';
import {PATHS} from './constants/local-files';
import {IPC} from './constants/ipc';
import {createInitialWindow} from './utils/app-windows';
import {start} from './main-starter';

app.on('ready', () => {
  // load from .env
  dotenv.config();

  // setup ipc handler
  ipcMain.on(IPC.login, (e, keys) => {
    start(keys);
  });

  const initialWindow = createInitialWindow();
  initialWindow.loadURL(PATHS.initialTemplate);
});
