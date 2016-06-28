import { configure } from '@kadira/storybook';
configure(() => {
  require('../stories/tweet');
  require('../stories/login');
}, module);
