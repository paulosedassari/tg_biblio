import axios from 'axios';

const api = axios.create({
    baseUrl: "http://192.168.5.9:8080/usuario/"
})

export default api;
