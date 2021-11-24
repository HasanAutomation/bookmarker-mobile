import * as SecureStore from 'expo-secure-store';

const authToken = 'TOKEN';

const storeToken = async token => {
  try {
    await SecureStore.setItemAsync(authToken, token);
  } catch (err) {
    console.log(err);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(authToken);
  } catch (err) {
    console.log(err);
  }
};

const deleteToken = async () => {
  try {
    await SecureStore.deleteItemAsync(authToken);
  } catch (err) {
    console.log(err);
  }
};

export default {
  deleteToken,
  storeToken,
  getToken,
};
