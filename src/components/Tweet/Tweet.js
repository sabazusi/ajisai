import React from 'react';

export default class extends React.Component {
  render() {
    const {
      screenName,
      text
    } = this.props;

    return (
      <div className="Tweet">
        <span className="screenName">{screenName}</span>: {text}
      </div>
    );
  }
}
