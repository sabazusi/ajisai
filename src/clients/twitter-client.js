import twitterAPI from 'node-twitter-api';
import {createAuthenticationWindow} from '../utils/app-windows';
import TwitterStreamAPISubscriber from './twitter-stream-api-subscriber';

class TwitterClient {
  constructor() {
    this.client = null;
    this.streamClient = null;
  }

  initialize(consumerKey, consumerSecret, callback, accessToken, accessTokenSecret) {
    this.client = new twitterAPI({
      consumerKey,
      consumerSecret,
      callback
    });
    this.streamClient = new TwitterStreamAPISubscriber(this.client);
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

  getHomeTimeline(accessToken, accessTokenSecret) {
    return new Promise((resolve, reject) => {
      this.getClient().getTimeline(
        'home_timeline',
        {count: 50},
        accessToken,
        accessTokenSecret,
        (error, data) => {
          if (error) reject(error);
          resolve(data)
        }
      );
    });
  }

  getClient() {
    if (this.client) {
      return this.client;
    } else {
      throw new Error('Twitter Client has not initialized.');
    }
  }

  getUserStream(accessToken, accessTokenSecret, callback) {
    return this.streamClient.getUserStream(accessToken, accessTokenSecret, callback);
  }
}

export default new TwitterClient();
