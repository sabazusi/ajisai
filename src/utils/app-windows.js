import {BrowserWindow} from 'electron';

export const createInitialWindow = () => {
  return new BrowserWindow({
    width    : 150,
    height   : 100,
    resizable: false,
    show     : true
  });
};


export const createAuthenticationWindow = () => {
  return new BrowserWindow({
    width             : 400,
    height            : 500,
    frame             : false,
    resizable         : false,
    'node-integration': false,
    'always-on-top'   : true
  });
};


export const createMainWindow = (size) => {
  return new BrowserWindow({
    width    : size.width || 300,
    height   : size.height || 500,
    resizable: true,
    show     : true
  });
};
