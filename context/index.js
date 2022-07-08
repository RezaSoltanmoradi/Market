import { createContext, useEffect, useState } from "react";
import axios from 'axios';
export const productContext = createContext({
    products: [],
    handleRequest: () => {},    
});
export const ProductContextProvider = (props) => {
  
    const [products, setProducts] = useState([]);
    const handleRequest = async() => {
       await axios
            .get("https://fakestoreapi.com/products")
            .then((res) => {
                setProducts(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        handleRequest();
    },[]);
    return (
        <productContext.Provider
            value={{
                handleRequest,
                products: products,
                setProducts,
            }}
        >
            {props.children}
        </productContext.Provider>
    );
};
