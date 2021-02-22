import React from 'react';
import style from './users.module.css';
import userPhoto from '../../../src/assets/images/user.png';
import { NavLink } from "react-router-dom";
import Paginator from '../Common/Paginator/Paginator';

const User = ({ user, followingInProgress, unFollow, follow }) => {
  return (
    <div>
      <span>
        <div>
          <NavLink to={`/profile/${user.id}`}>
            <img className={style.userPhoto}
              src={user.photos.small !== null ? user.photos.small : userPhoto} alt='user' />
          </NavLink>
        </div>
        <div>
          {
            user.followed === true
              ? <button disabled={followingInProgress.some(id => id === user.id)}
                onClick={() => { unFollow(user.id) }
                }>Unfollow</button>
              : <button disabled={followingInProgress.some(id => id === user.id)}
                onClick={() => { follow(user.id) }
                }>Follow</button>
          }
        </div>
      </span>
      <span>
        <span>
          <div>{user.id}</div>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>user.location.country</div>
          <div>user.location.city</div>
        </span>
      </span>
    </div>
  )
}



export default User;