export default class TwitterStreamAPISubscriber {
  constructor(client) {
    this.client = client;
  }
  getUserStream(accessToken, accessTokenSecret, callback) {
    this.client.getStream('user', {}, accessToken, accessTokenSecret, callback);
  }
}
