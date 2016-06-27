import {BrowserWindow} from 'electron';

export const createLoginWindow = () => {
  return new BrowserWindow({
    width    : 150,
    height   : 100,
    resizable: false
  });
};
