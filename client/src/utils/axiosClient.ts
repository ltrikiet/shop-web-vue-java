import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:9060/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosClient.interceptors.request.use(function (config) {
  const userToken = sessionStorage.getItem('userToken');
  if (userToken?.length) {
    config.headers.Authorization = `Bearer ${userToken}`;
  }

  return config;
});

export default axiosClient;
