import twitterAPI from 'node-twitter-api';
import {createAuthenticationWindow} from '../utils/app-windows';

class TwitterClient {
  constructor() {
    this.client = null;
  }

  initialize(consumerKey, consumerSecret, callback, accessToken, accessTokenSecret) {
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
            resolve(data);
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
          resolve({accessToken, accessTokenSecret});
        } else {
          reject();
        }
      });
    });
  }

  getTimeline(screenName, accessToken, accessTokenSecret) {
    this.getClient().getTimeline(
      'user_timeline',
      {
        screen_name: screenName
      },
      accessToken,
      accessTokenSecret,
      (error, data) => {
        console.log(data);
      }
    );
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
