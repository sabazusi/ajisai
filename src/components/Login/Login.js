import React from 'react';

export default class Login extends React.Component {
  static propTypes = {
    verifiedUsers         : React.PropTypes.array,
    onClickConfirmAccounts: React.PropTypes.func
  };

  static defaultProps = {
    verifiedUsers         : []
  };

  constructor(props) {
    super(props);
  }

  getStatusLabel() {
    const verifiedUsers = this.props.verifiedUsers;
    return verifiedUsers.length > 0 ?
      verifiedUsers.map((user) => {
        return (
          <div key={user.id}>
            <img src={user.profile_image_url} width={50} height={50} />
            {user.screen_name}
          </div>
        );
      }) : 'logining...';
  }

  getConfirmButton() {
    return this.props.verifiedUsers.length > 0 ?
      (
        <button
          onClick={::this.props.onClickConfirmAccounts}
        >
          OK
        </button>
      ) : null;
  }

  render() {
    return (
      <div className="login">
        Ajisai Login
        status: {this.getStatusLabel()}
        {this.getConfirmButton()}
      </div>
    );
  }
}
