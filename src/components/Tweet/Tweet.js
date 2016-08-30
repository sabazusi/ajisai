import React from 'react';

export default class extends React.Component {
  render() {
    const {
      screenName,
      text
    } = this.props;
    console.log('hai');

    return (
      <div>
        {screenName}: {text}
      </div>
    );
  }
}
