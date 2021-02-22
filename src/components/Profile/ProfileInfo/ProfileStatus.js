import React, { useEffect, useState } from 'react';

const ProfileStatus = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status)

  const activateEditMode = () => {
    setEditMode(true)
  };

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateUserStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  // componentDidUpdate(prevProps, PrevStatus) {
  //   if (prevProps.status !== this.props.status) {
  //     this.setState({
  //       status: this.props.status
  //     })
  //   }
  // }
  return (
    <div>
      <div>
        {
          !editMode &&
          <span onDoubleClick={() => activateEditMode()}>{props.status || '-----'}</span>
        }
      </div>
      <div>
        {
          editMode &&
          <input onChange={onStatusChange} autoFocus={true} onBlur={() => deactivateEditMode()} value={status} />
        }
      </div>
    </div>
  )
};

export default ProfileStatus;