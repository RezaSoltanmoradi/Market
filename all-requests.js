import axios from "axios";
import { Axios } from "./helper/axios";

export const getAllProducts = async () => {
    const request = await Axios.get("/products");
    return request.data;
};

export const getProductById = async (productId) => {
    const request = await Axios.get(`/products/${productId}`);
    return request.data;
};

export const getAllCategories = async () => {
    const request = await Axios.get("/products/categories");

    return request.data;
};

export const getCategoryById = async (categoryId) => {
    const convertId = categoryId?.replace(/-/g, " ");
    const request = await Axios.get(`/products/category/${convertId}`);
    return request.data;
};
    