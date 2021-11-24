import { create } from 'apisauce';
import storage from '../storage';

const apisauceInstance = create({
  baseURL: 'https://bookmark-web-api.herokuapp.com/api/v1',
});

apisauceInstance.axiosInstance.interceptors.request.use(
  async config => {
    const token = await storage.getToken();
    if (token) {
      config.headers = {
        authorization: `Bearer ${token}`,
      };
    }

    return config;
  },
  err => Promise.reject(err)
);

export default apisauceInstance;
