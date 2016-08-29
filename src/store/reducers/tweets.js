import * as ActionType from '../../constants/ActionType';

const initialState = {
  tweets: {}
};

export default (state = initialState, action) => {
  switch(action.type) {
    case ActionType.GET_TWEETS:
      const tweets = Object.assign({}, state.tweets);
      let targetUserTweets =
        tweets[action.userId] || [];
      targetUserTweets = targetUserTweets.concat(action.tweets);

      tweets[action.userId] = targetUserTweets;
      return Object.assign({}, state, {
        tweets
      });

    default:
      return state;
  }
};
