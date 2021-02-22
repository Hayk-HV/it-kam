import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, getUserStatus, updateUserStatus } from "../../Redux/profile-reducer";
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import withAuthRedirect from "../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = this.props.userId;
      if (!userId) {
        this.props.history.push('/login')
      }
    }
    //7292
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId)
  }

  render() {

    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus} />
    )
  }
};

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    userId: state.auth.userId,
  }
};

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)