import {app, ipcMain} from 'electron';
import dotenv from 'dotenv';
import {PATHS} from './constants/local-files';
import {IPC} from './constants/ipc';
import {createInitialWindow} from './utils/app-windows';

app.on('ready', () => {
  // load from .env
  dotenv.config();
  
  // setup ipc handler
  ipcMain.on(IPC.login, (e, keys) => {
    console.log(keys);
    console.log('hello');
  });

  console.log(process.env.CALLBACK_URL);
  const initialWindow = createInitialWindow();
  initialWindow.loadURL(PATHS.initialTemplate);
});
