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
      TwitterClient.getUserStream(
        user.accessToken,
        user.accessTokenSecret, (error, parsed, message, response) => {
          if (!error && parsed.text) getTweets(user, parsed);
        });
    })
  }

  render() {
    return (
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
