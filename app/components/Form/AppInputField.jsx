import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput';
import ErrorMessage from '../ErrorMessage';

function AppInputField({ name, style, ...rest }) {
  const { handleChange, errors, touched, setFieldTouched } = useFormikContext();
  return (
    <>
      <AppTextInput
        style={style}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...rest}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

export default AppInputField;
