import axios from 'axios';

const api = axios.create({
    baseURL: 'http://go-barber-rails.herokuapp.com/api',
});

export default api;
