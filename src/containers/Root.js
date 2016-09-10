import {connect} from 'react-redux';
import React from 'react';
import TwitterClient from '../clients/twitter-client';
import * as Actions from '../actions';
import TweetList from '../components/TweetList';

class Root extends React.Component {
  componentDidMount() {
    this.startSubscribe();
  }

  startSubscribe() {
    const {
      getTweets,
      getUserStreamTweet,
      users
    } = this.props;

    users.map((user) => {
      TwitterClient.getHomeTimeline(
        user.accessToken,
        user.accessTokenSecret
      ).then((data) => {
        getTweets(user, data);
      });

      TwitterClient.getUserStream(
        user.accessToken,
        user.accessTokenSecret, (error, parsed, message, response) => {
          if (!error && parsed.text) getUserStreamTweet(user, parsed);
        });
    })
  }

  render() {
    const rawTweets = this.props.tweets;
    const firstUserId = Object.keys(rawTweets)[0];
    const tweets = firstUserId ? rawTweets[firstUserId] : [];
    return (
      <TweetList
        tweets={tweets}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tweets: state.tweets.tweets
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTweets: (user, tweets) => {
      dispatch(Actions.getTweets(user.id, tweets));
    },
    getUserStreamTweet: (user, tweet) => {
      dispatch(Actions.getUserStreamTweet(user.id, tweet));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
