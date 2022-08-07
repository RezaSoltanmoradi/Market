import { useEffect, useState } from "react";
import Product from "../Product/Product";
const Products = ({ products, cont }) => {
    const initialProducts = Array(cont).fill({});

    const [newProducts, setNewProducts] = useState(null);
    useEffect(() => {
        setNewProducts(
            products?.map((pro) => ({
                id: pro.id,
                title: pro.title,
                price: pro.price,
                description: pro.description,
                image: pro.image,
                rate: pro.rating.rate,
                heart: false,
            }))
        );
    }, [products]);

    const handleHeartFill = (id) => {
        const allProducts = [...newProducts];
        const foundProductIndex = newProducts.findIndex(
            (product) => product.id === id
        );
        allProducts[foundProductIndex].heart =
            !allProducts[foundProductIndex].heart;
        setNewProducts(allProducts);
    };
    let productsCard;

    if (!newProducts) {
        productsCard = initialProducts.map((product) => (
            <Product
                id={product.id}
                key={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                image={product.image}
                rate={product.rate}
                heart={product.heart}
                onHeart={handleHeartFill}
            />
        ));
    } else {
        productsCard = newProducts?.map((product) => (
            <Product
                id={product.id}
                key={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                image={product.image}
                rate={product.rate}
                heart={product.heart}
                onHeart={handleHeartFill}
            />
        ));
    }
    return (
        <section className="col-12 row mx-auto">
            {productsCard}
        </section>
    );
};

export default Products;
