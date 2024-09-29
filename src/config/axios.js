import axios from 'axios'

const axiosFakeStore = axios.create({
    baseURL: 'https://fakestoreapi.com/'
    // baseURL: 'https://api.escuelajs.co/api/v1'
});

const axiosBackend = axios.create({
    baseURL: 'http://localhost:5273',
    withCredentials: true
});

export { axiosFakeStore, axiosBackend };