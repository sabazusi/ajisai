import {app, ipcMain} from 'electron';
import {PATHS} from './constants/local-files';
import {IPC} from './constants/ipc';
import {createInitialWindow} from './utils/app-windows';

app.on('ready', () => {
  // setup ipc handler
  ipcMain.on(IPC.login, () => {
    console.log('hello');
  });

  const initialWindow = createInitialWindow();
  initialWindow.loadURL(PATHS.initialTemplate);
});
