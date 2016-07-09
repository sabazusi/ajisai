import {app} from 'electron';
import {PATHS} from './constants/local-files';
import {createInitialWindow} from './utils/app-windows';

app.on('ready', () => {
  console.log('HELLO');
  const initialWindow = createInitialWindow();
  console.log(PATHS);
  //initialWindow.loadUrl();
});
