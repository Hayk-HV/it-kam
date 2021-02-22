import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
      <div className={s.posts}>
        
        <div className={s.item}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU' alt='avatar' />
          {props.message}
         </div>
         <div>
           <span>Like </span> {props.likesCount}
         </div>
      </div>
  )
}

export default Post;