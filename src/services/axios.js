import axios from 'axios';

const axiosConfig = axios.create();

// TODO: TROCAR URLS!!!S
axiosConfig.defaults.baseURL = 'https://api.igordokai.com.br/';

export default axiosConfig;

// 'https://api.igordokai.com.br'
// 'http://127.0.0.1:8801/'
