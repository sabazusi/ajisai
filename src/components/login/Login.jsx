import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        Ajisai Login
        status: {this.props.isLoggedIn ? 'welcome' : 'login'}
      </div>
    );
  }
}
