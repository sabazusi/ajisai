import {ipcRenderer} from 'electron';
import {IPC} from './constants/ipc';

window.onload = () => {
  ipcRenderer.send(IPC.login);
}
