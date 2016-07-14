import {ipcRenderer} from 'electron';
import {IPC} from './constants/ipc';
import {KEYS} from './constants/local-storage';
import LocalStorage from './utils/local-storage';

window.onload = () => {
  ipcRenderer.send(IPC.login, {
    loginKeys : LocalStorage.get(KEYS.twitterAccessKeys, {}),
    windowSize: LocalStorage.get(KEYS.windowSize, {})
  });
}
