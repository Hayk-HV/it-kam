import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

const withSuspense = (Component) => {
  let NewComponent = (props) => {
    return <Suspense fallback={<div>Загрузка...</div>}>
      <Component {...props} />
    </Suspense>
  }
  return NewComponent
}

export default withSuspense;