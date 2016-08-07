import React from 'react';
import ReactDOM from 'react-dom';
import { ipcRenderer } from 'electron';
import Root from './components/Root';
import {IPC} from './constants/ipc';

window.onload = () => {
  ReactDOM.render(<Root onLoaded={onLoaded} />, document.getElementById('root'));
};

const onLoaded = () => {
  ipcRenderer.send(IPC.mainPageLoaded);
};
