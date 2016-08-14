import twitterAPI from 'node-twitter-api';
import {createAuthenticationWindow} from '../utils/app-windows';

class TwitterClient {
  constructor() {
    this.client = null;
    this.accessToken = '';
    this.accessTokenSecret = '';
  }

  initialize(consumerKey, consumerSecret, callback, accessToken, accessTokenSecret) {
    this.client = new twitterAPI({
      consumerKey,
      consumerSecret,
      callback
    });
    this.accessToken = accessToken || '';
    this.accessTokenSecret = accessTokenSecret || '';
  }

  verify(accessToken, accessTokenSecret) {
    return new Promise((resolve, reject) => {
      this.getClient()
        .verifyCredentials(accessToken, accessTokenSecret, (error, data, res) => {
          if (error) {
            reject("initialize failed");
          } else {
            this.accessToken = accessToken;
            this.accessTokenSecret = accessTokenSecret;
            resolve(res);
          }
        })
    });
  }

  getRequestToken() {
    return new Promise((resolve, reject) => {
      this.getClient().getRequestToken((error, requestToken, requestTokenSecret) => {
        if (error) reject();
        resolve({
          requestToken,
          requestTokenSecret
        });
      })
    });
  }

  getAuthUrl(requestToken) {
    return `${this.getClient().getAuthUrl(requestToken)}&force_login=true`;
  }

  getAccessToken(requestToken, requestTokenSecret, oauthVerifier) {
    return new Promise((resolve, reject) => {
      this.getClient().getAccessToken(requestToken, requestTokenSecret, oauthVerifier, (error, accessToken, accessTokenSecret) => {
        if (!error) {
          this.accessToken = accessToken;
          this.accessTokenSecret = accessTokenSecret;
          resolve({accessToken, accessTokenSecret});
        } else {
          reject();
        }
      });
    });
  }

  getTimeline() {
    this.getClient().getTimeline(
      'user_timeline',
      {
        screen_name: 'example'
      },
      this.accessToken,
      this.accessTokenSecret,
      (error, data) => {
        console.log(data);
      }
    );
  }

  getClient() {
    if (this.client) {
      return this.client;
    } else {
      console.log(this.accessToken);
      console.log(this.accessTokenSecret);
      throw new Error('Twitter Client has not initialized.');
    }
  }
}

export default new TwitterClient();
