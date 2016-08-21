import {connect} from 'react-redux';
import React from 'react';
import TwitterClient from '../clients/twitter-client';
import * as Actions from '../actions';

class Root extends React.Component {
  componentDidMount() {
    this.startSubscribe();
  }

  startSubscribe() {
  }

  render() {
    return (
      <div>loading....</div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTweets: (user, tweets) => {
      dispatch(Actions.getTweets(user, tweets));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
