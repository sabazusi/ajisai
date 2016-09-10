import * as ActionType from '../../constants/ActionType';

const initialState = {
  tweets: {}
};

export default (state = initialState, action) => {
  let targetUserTweets;
  const tweets = Object.assign({}, state.tweets);

  switch(action.type) {
    case ActionType.GET_TWEETS:
      targetUserTweets =
        tweets[action.userId] || [];
      targetUserTweets = targetUserTweets.concat(action.tweets);

      tweets[action.userId] = targetUserTweets;
      return Object.assign({}, state, {
        tweets
      });

    case ActionType.GET_USERSTREAM_TWEET:
      targetUserTweets =
        tweets[action.userId] || [];
      targetUserTweets.unshift(action.tweet);
      tweets[action.userId] = targetUserTweets;
      return Object.assign({}, state, {
        tweets
      });

    default:
      return state;
  }
};
