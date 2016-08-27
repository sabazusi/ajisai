class LocalStorage {
  get(key, defaultValue = undefined) {
    const value = localStorage.getItem(this._createAjisaiKeyName(key));
    if (value === undefined || value === null) {
      return defaultValue;
    } else {
      return JSON.parse(value);
    }
  }
  set(key, value) {
    if (key && value != undefined) {
      localStorage.setItem(this._createAjisaiKeyName(key), JSON.stringify(value));
    }
  }
  _createAjisaiKeyName(key) {
    return `ajisai.${key}`;
  }
}

export default new LocalStorage();
