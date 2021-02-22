import React from 'react';
import style from './FormControls.module.css'
import { Field } from "redux-form";

// export const Textarea = ({ input, meta: { touched, error }, children, ...props }) => {
//   const hasError = touched && error
//   return (
//     <div className={style.formControl + " " + (hasError ? style.error : "")}>
//       <div>
//         <textarea {...input} {...props} />
//       </div>
//       {hasError && <span>{error}</span>}
//     </div>
//   )
// };

// export const Input = ({ input, meta: { touched, error }, ...props }) => {
//   const hasError = touched && error
//   return (
//     <div className={style.formControl + " " + (hasError ? style.error : "")}>
//       <div>
//         <input {...input} {...props} />
//       </div>
//       {hasError && <span>{error}</span>}
//     </div>
//   )
// }

const FormControl = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={style.formControl + " " + (hasError ? style.error : "")}>
      <div>
        {props.children}
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
};

export const Textarea = (props) => {
  const { input, meta, children, ...restProps } = props;
  return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
};

export const Input = (props) => {
  const { input, meta, children, ...restProps } = props;
  return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}


export const CreateField = (placeholder, name, validate, component, props = {}, text = "") => {
  return (
    <div>
      <Field name={name}
        validate={validate}
        component={component}
        type='text'
        placeholder={placeholder}
        {...props}
      /> {text}
    </div>)
}