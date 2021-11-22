import { Formik } from 'formik';
import React from 'react';

function AppForm({ validationSchema, initialValues, onSubmit, children }) {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;
