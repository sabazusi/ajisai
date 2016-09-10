import React from 'react';

export default class Login extends React.Component {
  static propTypes = {
    verifiedUsers         : React.PropTypes.array,
    onClickConfirmAccounts: React.PropTypes.func
  };

  static defaultProps = {
    verifiedUsers: []
  };

  constructor(props) {
    super(props);
  }

  getStatusLabel() {
    const verifiedUsers = this.props.verifiedUsers;
    return verifiedUsers.length > 0 ?
      verifiedUsers.map((user) => {
        return (
          <div key={user.id} className="verifiedUser">
            <img
              src={user.profile_image_url}
              className="userImage"
            />
            {user.screen_name}
          </div>
        );
      }) : 'logining...';
  }

  getConfirmButton() {
    return this.props.verifiedUsers.length > 0 ?
      (
        <div className="buttonContainer">
          <button
            className="okButton"
            onClick={::this.props.onClickConfirmAccounts}
          >
            OK
          </button>
        </div>
      ) : null;
  }

  render() {
    return (
      <div className="Login">
        Ajisai
        <div className="container">
          {this.getStatusLabel()}
          {this.getConfirmButton()}
        </div>
      </div>
    );
  }
}
