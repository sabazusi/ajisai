import * as ActionType from '../constants/ActionType';

export const getTweets = (userId, tweets) => {
  return {
    type: ActionType.GET_TWEETS,
    userId,
    tweets
  }
};

export const getUserStreamTweet = (userId, tweet) => {
  return {
    type: ActionType.GET_USERSTREAM_TWEET,
    userId,
    tweet
  }
};
