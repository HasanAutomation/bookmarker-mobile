import React from 'react';
import * as Yup from 'yup';

import AppForm from '../components/Form/AppForm';
import AppInputField from '../components/Form/AppInputField';
import AppSubmitButton from '../components/Form/AppSubmitButton';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function Login() {
  const handleSubmit = values => {};

  return (
    <Screen
      style={{
        paddingTop: 100,
        padding: 10,
        backgroundColor: '#fff',
      }}
    >
      <AppForm
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        initialValues={{ email: '', password: '' }}
      >
        <AppInputField icon='email' name='email' placeholder='Email' />
        <AppInputField
          icon='lock'
          name='password'
          placeholder='Password'
          secureTextEntry
        />
        <AppSubmitButton />
      </AppForm>
    </Screen>
  );
}

export default Login;
