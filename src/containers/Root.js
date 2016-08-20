import {connect} from 'react-redux';
import React from 'react';
import TwitterClient from '../clients/twitter-client';
import * as Actions from '../actions';

class Root extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>abababa</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

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
