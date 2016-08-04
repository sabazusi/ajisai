import TwitterClient from './clients/twitter-client';

export default class Authenticator {
  start(accessKeys) {
    return accessKeys ? this.checkKeys(accessKeys) : this.getAccessToken();
  }

  checkKeys(keys) {
    return TwitterClient.verify(
      keys.accessToken,
      keys.accessTokenSecret
    ).then((accessToken, accessTokenSecret) => {
      return {
        accessToken,
        accessTokenSecret
      };
    })
    .catch(() => {
      return this.getAccessToken();
    });
  }

  getAccessToken() {
    return TwitterClient.getAccessToken()
      .then((accessToken, accessTokenSecret) => {
        return {
          accessToken,
          accessTokenSecret
        };
      })
  }
}
