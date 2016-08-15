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

  //// test -start
  const savedUsers = LocalStorage.get(KEYS.verifiedAccounts, []);

  Promise.all(savedUsers.map((userKeys) => verifyUser(userKeys)))
    .then((verifyResult) => {
      const verifiedUsers = verifyResult.filter((userInfo) => Number.isInteger(userInfo.id));
      if (verifiedUsers.length > 0) {
        if (verifiedUsers.length != savedUsers.length) {
          const updatedSavedUsers = savedUsers.filter((userKeys) => {
            return verifiedUsers.find((elm) => elm.id === userKeys.id) != undefined;
          });
          LocalStorage.set(KEYS.verifiedAccounts, updatedSavedUsers);
        }
        ReactDOM.render(
          <Login
            verifiedUsers={verifiedUsers}
            onClickConfirmAccounts={onClickConfirmAccounts}
          />, document.getElementById('root'));
      } else {
        // No verified accounts
        getVerifiedAccount()
          .then((verifiedUser) => {
            LocalStorage.set(KEYS.verifiedAccounts, [{
              id               : verifiedUser.id,
              accessToken      : verifiedUser.accessToken,
              accessTokenSecret: verifiedUser.accessTokenSecret
            }]);
            ReactDOM.render(
              <Login
                verifiedUsers={[verifiedUser]}
                onClickConfirmAccounts={onClickConfirmAccounts}
              />,
            document.getElementById('root'));
          })
          .catch((e) => {
            alert('不明なエラーが発生しました。アプリケーションを再起動してください。');
          });
      }
    });
  //// test -end
  ReactDOM.render(<Login />, document.getElementById('root'));
};

const verifyUser = (userKeys) => {
  return TwitterClient.verify(userKeys.accessToken, userKeys.accessTokenSecret)
    .then((response) => {
      return Object.assign(response, {
        accessToken      : userKeys.accessToken,
        accessTokenSecret: userKeys.accessTokenSecret
      });
    })
    .catch((e) => {
      return {};
    });
};

const getSavedWindowSize = () => {
  return LocalStorage.get(KEYS.windowSize, {});
}

const onClickConfirmAccounts = () => {
  ipcRenderer.send(IPC.loginSucceeded, getSavedWindowSize());
};

const getVerifiedAccount = () => {
  return new Promise((resolve, reject) => {
    TwitterClient.getRequestToken()
      .then((tokens) => {
        ipcRenderer.on(IPC.authenticated, (e, oauthVerifier) => {
          TwitterClient.getAccessToken(
            tokens.requestToken,
            tokens.requestTokenSecret,
            oauthVerifier)
          .then((result) => {
            verifyUser(result)
              .then((verifiedUser) => {
                resolve(verifiedUser);
              })
              .catch((e) => {throw e;});
          })
          .catch((e) => reject(e));
        });
        ipcRenderer.send(IPC.openAuthWindow, TwitterClient.getAuthUrl(tokens.requestToken));
      })
      .catch((e) => reject(e));
  });
};
