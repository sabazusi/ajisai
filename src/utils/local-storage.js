class LocalStorage {
  get(key, defaultValue = undefined) {
    const value = JSON.parse(localStorage.getItem(key));
    if (value === undefined || value === null) {
      return defaultValue;
    } else {
      return value;
    }
  }
  set(key, value) {
    if (key && value != undefined) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
}

export default new LocalStorage();
