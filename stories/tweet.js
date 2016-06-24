import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Tweet from '../src/components/Tweet.jsx';

storiesOf('Tweet', module)
  .add('only text', () => (
    <Tweet />
  ));
