import {connect} from 'react-redux';
import React from 'react';
import TwitterClient from '../clients/twitter-client';
import * as Actions from '../actions';

class Root extends React.Component {
  componentDidMount() {
    this.startSubscribe();
  }

  startSubscribe() {
    const {
      getTweets,
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
          if (!error && parsed.text) getTweets(user, parsed);
        });
    })
  }

  render() {
    const tweets = this.props.tweets;
    const firstUserId = Object.keys(tweets)[0];
    const tweetsDOM = firstUserId ? tweets[firstUserId].map((tweet) => (<div>{tweet.user.screen_name} : {tweet.text}</div>))
      : null;
    return tweetsDOM ? (<div>{tweetsDOM}</div>) : (
      <div>loading....</div>
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
