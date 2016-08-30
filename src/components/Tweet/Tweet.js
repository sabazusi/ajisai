import React from 'react';

export default class extends React.Component {
  render() {
    const {
      screenName,
      text
    } = this.props;

    return (
      <div>
        {screenName}: {text}
      </div>
    );
  }
}
