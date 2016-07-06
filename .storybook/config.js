import { configure } from '@kadira/storybook';
configure(() => {
  require('../stories/tweet');
  require('../stories/login');
  require('../stories/setting');
}, module);
