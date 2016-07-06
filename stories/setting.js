import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import SettingPanel from '../src/components/SettingPanel';

storiesOf('SettingPanel', module)
  .add('panel', () => (
    <SettingPanel />
  ));
