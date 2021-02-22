import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {
  follow,
  unFollow,
  toggleFollowingProgress,
  requestUsers,
} from "../../Redux/users-reducer";
import Preloader from '../Common/Preloader/Preloader';
import { compose } from 'redux';
import { getUsers, getPageSize, getCurrentPage, getTotalUsersCount, getIsFetching, getFollowingInProgress } from "../../Redux/users-selectors";
import Paginator from '../Common/Paginator/Paginator';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.pageSize, this.props.currentPag);
  };

  onPageChanged = (pageNumber) => {
    this.props.getUsers(this.props.pageSize, pageNumber)
  }

  render() {
    return (
      <>
        { this.props.isFetching ? <Preloader /> : null}
        < Users totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          users={this.props.users}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          follow={this.props.follow}
          unFollow={this.props.unFollow}
          followingInProgress={this.props.followingInProgress}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
        />
      </>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    totalUsersCount: getTotalUsersCount(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => { dispatch(followAC(userId)) },
//     unfollow: (userId) => { dispatch(unFollowAC(userId)) },
//     setUsers: (users) => { dispatch(setUsersAC(users)) },
//     setTotalUsersCount: (totalUsersCount) => { dispatch(setTotalUsersCountAC(totalUsersCount)) },
//     setCurrentPage: (currentPage) => { dispatch(setCurrentPageAC(currentPage)) },
//     toggleIsFetching: (isFetching) => { dispatch(toggleIsFetchingAC(isFetching)) }
//   };
// };


export default compose(
  connect(mapStateToProps, { follow, unFollow, toggleFollowingProgress, getUsers: requestUsers }),

)(UsersContainer)
