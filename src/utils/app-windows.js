import {BrowserWindow} from 'electron';

export const createInitialWindow = () => {
  return new BrowserWindow({
    width    : 150,
    height   : 100,
    resizable: false,
    show     : false
  });
};
