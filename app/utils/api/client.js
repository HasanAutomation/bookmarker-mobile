import { create } from 'apisauce';

const apisauceInstance = create({
  baseURL: 'https://bookmark-web-api.herokuapp.com/api/v1',
});

apisauceInstance.axiosInstance.interceptors.request.use(
  config => {
    config.headers = {
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTdkNWJmY2U4NWEwMmVlYzkyNzIwMzIiLCJpYXQiOjE2Mzc1NzQ0NDAsImV4cCI6MTY0MDE2NjQ0MH0.iL5HcefAZHVL5MEMm_rQyhIvRaKgogxup5jlcOZSkFs`,
    };
    return config;
  },
  err => Promise.reject(err)
);

export default apisauceInstance;
