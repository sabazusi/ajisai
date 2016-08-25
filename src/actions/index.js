import * as ActionType from '../constants/ActionType';

export const getTweets = (userId, tweets) => {
  return {
    type: ActionType.GET_TWEETS,
    userId,
    tweets
  }
};
