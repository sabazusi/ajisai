import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Login from '../src/components/login/Login.jsx';

storiesOf('Login', module)
  .add('login screen', () => (
    <Login />
  ));
