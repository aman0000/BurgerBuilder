import axios from 'axios';

const instance = axios.create({
    baseURL: "https://burger-maindb.firebaseio.com/"
});

export default instance;