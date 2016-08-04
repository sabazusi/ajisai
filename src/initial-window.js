import React from 'react';
import ReactDOM from 'react-dom';
import {ipcRenderer} from 'electron';
import {IPC} from './constants/ipc';
import {KEYS} from './constants/local-storage';
import LocalStorage from './utils/local-storage';
import Login from './components/Login';

window.onload = () => {
  ipcRenderer.send(IPC.login, {
    loginKeys : LocalStorage.get(KEYS.twitterAccessKeys, {}),
    windowSize: LocalStorage.get(KEYS.windowSize, {})
  });
  ReactDOM.render(<Login />, document.getElementById('root'));
}
