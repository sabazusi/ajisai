import TwitterClient from './clients/twitter-client';

export default class Authenticator {
  checkKeys(keys) {
    return new Promise((resolve, reject) => {
      if (!keys) reject();
      TwitterClient.verify(
        keys.accessToken,
        keys.accessTokenSecret)
      .then(() => resolve())
      .catch((e) => {
        reject();
      });
    });
  }
}
