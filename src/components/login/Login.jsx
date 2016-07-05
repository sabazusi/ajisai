import React from 'react';
import styles from './login.style.css';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.login}>
        Ajisai Login
        status: {this.props.isLoggedIn ? 'welcome' : 'login'}
      </div>
    );
  }
}
