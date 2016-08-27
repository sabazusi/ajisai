import keyMirror from 'keymirror';

export const IPC = keyMirror({
  loginSucceeded: null,
  loginFailed   : null,
  authenticated : null,
  openAuthWindow: null
});
