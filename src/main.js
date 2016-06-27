import {app} from 'electron';
import {createLoginWindow} from './utils/app-windows';

app.on('ready', () => {
  console.log('HELLO');
  const window = createLoginWindow();
});
