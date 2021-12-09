import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from 'dayjs';

const prefix = 'cache';
const expiryInMinutes = 5;

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (err) {
    console.log(err);
  }
};

const isItemExpired = timestamp => {
  const now = dayjs();
  const storedTime = dayjs(timestamp);
  return now.diff(storedTime, 'minute') > expiryInMinutes;
};

const get = async key => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    if (!value) return null;
    const item = JSON.parse(value);

    if (isItemExpired(item.timestamp)) {
      // Command Query Separation (CQS)
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item;
  } catch (err) {
    console.log(err);
  }
};

export default { store, get };
