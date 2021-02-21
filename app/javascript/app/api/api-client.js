import axios from 'axios';

const apiClient = axios.create();

apiClient.interceptors.response.use(({ data }) => ({ data }));

export default apiClient;
