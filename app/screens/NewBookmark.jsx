import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import AppForm from '../components/Form/AppForm';
import AppInputField from '../components/Form/AppInputField';
import AppSubmitButton from '../components/Form/AppSubmitButton';
import Screen from '../components/Screen';
import colors from '../config/colors';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label('Title'),
  link: Yup.string().required().url().label('Link'),
});

function NewBookmark() {
  const handleSubmit = values => {};

  return (
    <Screen style={styles.screen}>
      <AppForm
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        initialValues={{ title: '', link: '' }}
      >
        <AppInputField icon='email' name='title' placeholder='Title' />
        <AppInputField icon='lock' name='link' placeholder='Link' />
        <AppSubmitButton />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 20,
    padding: 10,
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default NewBookmark;
