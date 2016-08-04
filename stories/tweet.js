import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Tweet from '../src/components/Tweet';

storiesOf('Tweet', module)
  .add('only text', () => (
    <Tweet />
  ));
