import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Login from '../src/components/Login';

storiesOf('Login', module)
  .add('login screen', () => (
    <Login />
  ));
