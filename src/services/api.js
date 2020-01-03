import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/trosdan/rocketshoes-web',
});

export default api;
