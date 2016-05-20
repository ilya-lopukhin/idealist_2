import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import IndexPage from '../../components/IndexPage/IndexPage.jsx';

import * as TaskActions from '../../actions/TaskActions';

class IdealistApp extends Component {

  static propTypes = {
    friendList: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  render () {
    return (
      <div className="idealistApp">
        <IndexPage />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasklist: state.tasklist
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TaskActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(IdealistApp);