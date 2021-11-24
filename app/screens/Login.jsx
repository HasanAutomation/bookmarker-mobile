import React, { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import ErrorMessage from '../components/ErrorMessage';

import AppForm from '../components/Form/AppForm';
import AppInputField from '../components/Form/AppInputField';
import AppSubmitButton from '../components/Form/AppSubmitButton';
import Screen from '../components/Screen';
import colors from '../config/colors';
import { AuthContext } from '../context/AuthContext';
import authApi from '../utils/api/auth';
import authStorage from '../utils/storage';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function Login() {
  const authContext = useContext(AuthContext);
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = async values => {
    const res = await authApi.login(values);
    if (!res.ok) return setLoginError(true);
    setLoginError(false);
    authStorage.storeToken(res.data.accessToken);
    authContext.setUser(res.data.data);
  };

  return (
    <Screen style={styles.screen}>
      <AppForm
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        initialValues={{ email: '', password: '' }}
      >
        <ErrorMessage error='Invalid email or password' visible={loginError} />
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

const styles = StyleSheet.create({
  screen: {
    paddingTop: 100,
    padding: 10,
    backgroundColor: colors.white,
  },
});

export default Login;
