import React from 'react';

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
