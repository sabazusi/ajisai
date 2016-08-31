import { configure } from '@kadira/storybook';
import '../src/styles.css';
configure(() => {
  require('../stories/tweet');
  require('../stories/login');
  require('../stories/setting');
  require('../stories/sidetabs');
}, module);
