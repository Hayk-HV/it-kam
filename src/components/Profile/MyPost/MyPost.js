import React from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../Common/FormControls/FormControls";

const maxLength = maxLengthCreator(30)

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name='newPostText'
        validate={[required, maxLength]}
        component={Textarea}
        type='text'
        placeholder='Enter new post' />
      <button>Add Post</button>
    </form>
  )
};

const AddNewPostReduxForm = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)

const MyPost = (props) => {

  const postsElements = props.posts.map(m => {
    return <Post message={m.message} likesCount={m.likesCount} />
  });

  const onAddPost = (formData) => {
    props.addPost(formData.newPostText)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My Post </h3>
      <AddNewPostReduxForm onSubmit={onAddPost} />
      {postsElements}
    </div>
  )
}

export default MyPost;