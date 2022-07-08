import axios from "axios";
const baseUrl = 'https://fakestoreapi.com';
export const Axios = axios.create({
    baseURL: baseUrl,
});
