import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return (
      <Preloader />
    )
  };

  return (
    <div>
      {/* <div>
        <img className={s.img} src='https://retreatmi.com/files/destinations-logo/5e5224aa3718e.jpg' alt='Beach' />
      </div> */}

      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt="profilePhoto" />
        <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
      </div>
    </div>
  )
}

export default ProfileInfo;