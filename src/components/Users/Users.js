import React from 'react';
import style from './users.module.css';
import userPhoto from '../../../src/assets/images/user.png';
import { NavLink } from "react-router-dom";
import Paginator from '../Common/Paginator/Paginator';
import User from './User';

const Users = ({ currentPage, totalUsersCount, onPageChanged, pageSize, followingInProgress, unFollow, follow, ...props }) => {

  return (
    <div>
      <Paginator
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged} />

      {props.users.map(u => <User user={u}
        followingInProgress={followingInProgress}
        key={u.id}
        unFollow={unFollow}
        follow={follow} />
      )
      }
    </div >
  )
}

export default Users;