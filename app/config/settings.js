import Constants from 'expo-constants';

const settings = {
  dev: {
    baseURL: 'https://bookmark-web-api.herokuapp.com/api/v1',
  },
  staging: {
    baseURL: 'https://bookmark-web-api.herokuapp.com/api/v1',
  },
  prod: {
    baseURL: 'https://bookmark-web-api.herokuapp.com/api/v1',
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === 'staging') return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
