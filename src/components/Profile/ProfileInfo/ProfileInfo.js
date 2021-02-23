import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import photo from '../../../assets/images/user.png'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return (
      <Preloader />
    )
  };

  const onMainPhotoSelected = (e) => {
    props.savePhoto(e.target.files[0])
  }

  return (
    <div>
      {/* <div>
        <img className={s.img} src='https://retreatmi.com/files/destinations-logo/5e5224aa3718e.jpg' alt='Beach' />
      </div> */}

      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large || photo} alt="profilePhoto" className={s.mainPhoto} />
        <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
        <input type='file' onChange={onMainPhotoSelected} />
      </div>
    </div>
  )
}

export default ProfileInfo;