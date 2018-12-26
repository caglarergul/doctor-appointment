import axios from 'axios';

const api = axios.create({
    baseURL: 'https://doctor-app-api.herokuapp.com/'
});

export default api;