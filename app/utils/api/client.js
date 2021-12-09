import { create } from 'apisauce';
import storage from '../storage';
import cache from '../../utility/cache';
import settings from '../../config/settings';

const apisauceInstance = create({
  baseURL: settings.baseURL,
});

const get = apisauceInstance.get;

apisauceInstance.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);
  if (response.ok) {
    //  store data
    cache.store(url, response.data.data);
    return response;
  }

  const dataInCache = await cache.get(url);
  const formattedDataObject = { data: dataInCache.value };
  return dataInCache ? { ok: true, data: formattedDataObject } : response;
};

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
