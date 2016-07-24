export default class Authenticator {
  start(accessKeys) {
    return accessKeys ? this.checkKeys(accessKeys) : this.getAccessToken();
  }

  checkKeys(accessKeys) {
    return new Promise((resolve, reject) => {
      resolve({});
    });
  }

  getAccessToken() {
    return new Promise((resolve, reject) => {
      resolve({});
    });
  }
}
