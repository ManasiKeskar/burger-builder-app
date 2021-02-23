import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fir-burger-builder-8bf5f-default-rtdb.firebaseio.com/'
});

export default instance;