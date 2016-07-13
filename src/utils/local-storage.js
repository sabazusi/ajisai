class LocalStorage {
  get(key, defaultValue = undefined) {
    const value = localStorage.getItem(key);
    if (value === undefined || value === null) {
      return defaultValue;
    } else {
      return value;
    }
  }
}

export default new LocalStorage();
