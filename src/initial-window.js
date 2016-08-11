import React from 'react';
import ReactDOM from 'react-dom';
import {ipcRenderer} from 'electron';
import {IPC} from './constants/ipc';
import {KEYS} from './constants/local-storage';
import LocalStorage from './utils/local-storage';
import Login from './components/Login';
import TwitterClient from './clients/twitter-client';
import Authenticator from './authenticator';

window.onload = () => {
  TwitterClient.initialize(
    process.env.CONSUMER_KEY,
    process.env.CONSUMER_SECRET,
    process.env.CALLBACK_URL
  );

  const savedAccesKeys = LocalStorage.get(KEYS.twitterAccessKeys, {});
  const savedWindowSize = LocalStorage.get(KEYS.windowSize, {});

  new Authenticator().checkKeys()
    .then(() => {
      ipcRenderer.send(IPC.loginSucceeded, savedWindowSize);
    })
    .catch(() => {
      TwitterClient.getRequestToken()
        .then((tokens) => {
          ipcRenderer.on(IPC.authenticated, (e, oauthVerifier) => {
            TwitterClient.getAccessToken(
              tokens.requestToken,
              tokens.requestTokenSecret,
              oauthVerifier
            )
            .then((accessToken, accessTokenSecret) => {
              ipcRenderer.send(IPC.loginSucceeded, savedWindowSize);
            })
            .catch((e) => {
              throw e
            });
          });
          ipcRenderer.send(IPC.openAuthWindow, TwitterClient.getAuthUrl(tokens.requestToken));
        })
        .catch(() => alert('Something happened in Twitter.'));
    });

  ReactDOM.render(<Login />, document.getElementById('root'));
};
