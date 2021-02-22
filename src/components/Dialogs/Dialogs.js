import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../Common/FormControls/FormControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";

const maxLength = maxLengthCreator(50)

const AssMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name='newMessageBody'
        validate={[required, maxLength]}
        component={Textarea}
        type='text'
        placeholder='Enter new message' />
      <button>Send</button>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AssMessageForm)

const Dialogs = (props) => {

  const state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} />));
  let messagesElements = state.messages.map(m => (
    <Message message={m.message} />
  ));

  const addNewMessage = (formData) => {
    props.sendMessage(formData.newMessageBody);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  )
}

export default Dialogs;