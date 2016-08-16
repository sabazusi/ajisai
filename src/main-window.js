import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ipcRenderer} from 'electron';
import {createStore} from 'redux';
import Root from './containers/Root';
import {IPC} from './constants/ipc';
import TwitterClient from './clients/twitter-client';
import {KEYS} from './constants/local-storage';
import LocalStorage from './utils/local-storage';

window.onload = () => {
  loginToTwitter();
  const store = createStore(()=>{}, []);
  ReactDOM.render(
    <Provider store={store}>
      <Root />
    </Provider>
    , document.getElementById('root'));
};

const loginToTwitter = () => {
  TwitterClient.initialize(
    process.env.CONSUMER_KEY,
    process.env.CONSUMER_SECRET,
    process.env.CALLBACK_URL
  );
};
