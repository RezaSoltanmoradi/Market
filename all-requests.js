import axios from "axios";
import { useCallback } from "react";
import { Axios } from "./helper/axios";
const baseUrl = "https://fakestoreapi.com";

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
    const request = await Axios.get(`/products/category/${categoryId}`);
    return request.data;
};
