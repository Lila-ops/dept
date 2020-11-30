import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://contacts-81aa7.firebaseio.com/'
});

export default instance;