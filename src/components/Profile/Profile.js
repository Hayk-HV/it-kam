import React from 'react';
import s from './Profile.module.css';
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo savePhoto={props.savePhoto} profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
      <MyPostContainer />
    </div>
  )
}

export default Profile;