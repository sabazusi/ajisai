import React from 'react';
import ReactDOM from 'react-dom';
import { ipcRenderer } from 'electron';
import Root from './components/Root';
import {IPC} from './constants/ipc';
import TwitterClient from './clients/twitter-client';
import {KEYS} from './constants/local-storage';
import LocalStorage from './utils/local-storage';

window.onload = () => {
  loginToTwitter();
  ReactDOM.render(<Root />, document.getElementById('root'));
};

const loginToTwitter = () => {
  const accessKeys = LocalStorage.get(KEYS.twitterAccessKeys, {});
  TwitterClient.initialize(
    process.env.CONSUMER_KEY,
    process.env.CONSUMER_SECRET,
    process.env.CALLBACK_URL,
    accessKeys.accessToken,
    accessKeys.accessTokenSecret
  );
};
