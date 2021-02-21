import axios from 'axios';

const apiClient = axios.create();

apiClient.interceptors.response.use(
  ({ data, status }) => ({ status, data }),
  ({ response: { status, data } }) => {
    console.warn(`Error ${status} => ${data}`);
    return Promise.reject({ status, data });
  },
);

export default apiClient;
