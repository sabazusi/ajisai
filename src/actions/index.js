import * as ActionType from '../constants/ActionType';

export const getTweets = (user, tweets) => {
  return {
    type: ActionType.GET_TWEETS,
    user,
    tweets
  }
};
