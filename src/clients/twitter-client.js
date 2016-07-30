import twitterAPI from 'node-twitter-api';
import {createAuthenticationWindow} from '../utils/app-windows';

class TwitterClient {
  constructor() {
    this.client = null;
  }

  initialize(consumerKey, consumerSecret, callback) {
    this.client = new twitterAPI({
      consumerKey,
      consumerSecret,
      callback
    });
  }

  verify(accessToken, accessTokenSecret) {
    return new Promise((resolve, reject) => {
      this.getClient()
        .verifyCredentials(accessToken, accessTokenSecret, (error, data, res) => {
          if (error) {
            reject("initialize failed");
          } else {
            resolve();
          }
        })
    });
  }

  getAccessToken() {
    return new Promise((resolve, reject) => {
      this.getClient().getRequestToken((error, requestToken, requestTokenSecret) => {
        const authWindow = createAuthenticationWindow();
        authWindow.webContents.on('will-navigate', (event, url) => {
          const urlResult = url.match(/\?oauth_token=([^&]*)&oauth_verifier=([^&]*)/);
          if (urlResult) {
            this.getClient().getAccessToken(requestToken, requestTokenSecret, matched[2], (error, accessToken, accessTokenSecret) => {
              if (!error) {
                resolve(accessToken, accessTokenSecret);
              }
            });
          }
        });

        let url = `${this.getClient().getAuthUrl(requestToken)}&force_login=true`;
        authWindow.loadURL(url);
      });
    });
  }

  getClient() {
    if (this.client) {
      return this.client;
    } else {
      throw new Error('Twitter Client has not initialized.');
    }
  }
}

export default new TwitterClient();
