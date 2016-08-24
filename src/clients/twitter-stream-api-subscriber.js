export default class TwitterStreamAPISubscriber {
  constructor(client) {
    this.client = client;
  }
  getUserStream(callback, accessToken, accessTokenSecret) {
    this.client.getStream('user', {}, accessToken, accessTokenSecret, callback);
  }
}
