import {app} from 'electron';
import {createInitialWindow} from './utils/app-windows';

app.on('ready', () => {
  console.log('HELLO');
  const window = createInitialWindow();
});
