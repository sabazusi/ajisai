import keyMirror from 'keymirror';

export const KEYS = keyMirror({
  twitterAccessKeys: null,
  windowSize       : null,
  verifiedAccounts : null // {id, accessToken, accessTokenSecret}
});
