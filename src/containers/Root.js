import {connect} from 'react-redux';
import React from 'react';

class Root extends React.Component {
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
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
