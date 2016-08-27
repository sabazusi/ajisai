import React from 'react';
import TwitterClient from '../../clients/twitter-client';

export default class Root extends React.Component {
  componentDidMount() {
    if (Reflect.has(this.props, 'onLoaded')) {
      this.props.onLoaded();
    }
  }

  render() {
    return (
      <div>now loading...</div>
    );
  }
}
