import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Input, CreateField } from "../Common/FormControls/FormControls";
import { required } from "../../utils/validators/validators";
import { connect } from 'react-redux';
import { login } from "../../Redux/auth-reducer";
import { Redirect } from "react-router-dom";
import style from '../Common/FormControls/FormControls.module.css'

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {CreateField('Enter your Email', 'email', [required], Input, { type: 'text' })}
      {CreateField('Enter your password', 'password', [required], Input, { type: 'password' })}
      {CreateField(null, 'rememberMe', null, Input, { type: 'checkbox' }, 'remember me')}

      {/* <div>
        <Field name='email' validate={[required]} component={Input} type='text' placeholder='Enter your Email' />
      </div>
      <div>
        <Field name='password' validate={[required]} component={Input} type='password' placeholder='Enter your password' />
      </div>
      <div>
        <Field name='rememberMe' component={Input} type='checkbox' />
      </div> */}
      <div className={error ? style.formSummaryError : ""}>
        {error}
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to='/profile' />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, { login })(Login);