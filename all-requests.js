import axios from "axios";
// import { Axios } from "./helper/axios";

const baseUrl = "https://fakestoreapi.com";

export const getAllProducts = async () => {
    const request = await axios.get(`${baseUrl}/products`);
    return request.data;
};

export const getProductById = async (productId) => {
    const request = await axios.get(`${baseUrl}/products/${productId}`);
    return request.data;
};

export const getAllCategories = async () => {
    const request = await axios.get(`${baseUrl}/products/categories`);

    return request.data;
};

export const getCategoryById = async (categoryId) => {
    const convertId = categoryId?.replace(/-/g, " ");
    const request = await axios.get(
        `${baseUrl}/products/category/${convertId}`
    );
    return request.data;
};
