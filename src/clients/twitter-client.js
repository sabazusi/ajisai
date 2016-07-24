import twitterAPI from 'node-twitter-api';

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

  getClient() {
    if (this.client) {
      return this.client;
    } else {
      throw new Error('Twitter Client has not initialized.');
    }
  }
}

export default new TwitterClient();
