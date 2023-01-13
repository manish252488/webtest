import  axios from 'axios';
import config from './config';
const broker = axios.create({
    baseURL: config.apiUrl
});

export default broker;