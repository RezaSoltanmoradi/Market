import { useEffect, useState } from "react";
import Product from "../Product/Product";
import productImage from "../../assets/images/chair.jpg";
const Products = ({ products }) => {
    let initialProducts = {
        id: null,
        title: null,
        price: null,
        description: null,
        image: null,
        rate: null,
        star: null,
        heart: null,
    };
    setTimeout(() => {
        initialProducts = {
            id: "p1",
            title: "hello",
            price: 5.5,
            description: "whats up?",
            image: productImage,
            rate: 3.3,
            star: false,
            heart: false,
        };
    }, 1000);

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
                star: false,
                heart: false,
            }))
        );
    }, [products]);

    const handleStarFill = (id) => {
        const allProducts = [...newProducts];
        const foundProductIndex = newProducts.findIndex(
            (product) => product.id === id
        );
        allProducts[foundProductIndex].star =
            !allProducts[foundProductIndex].star;
        setNewProducts(allProducts);
    };
    const handleHeartFill = (id) => {
        const allProducts = [...newProducts];
        const foundProductIndex = newProducts.findIndex(
            (product) => product.id === id
        );
        allProducts[foundProductIndex].heart =
            !allProducts[foundProductIndex].heart;
        setNewProducts(allProducts);
    };

    return (
        <section className="  mx-auto col-12 row">
            {/* { newProducts?.map((product) => (
                    <Product
                        id={product.id}
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                        image={product.image}
                        rate={product.rate}
                        star={product.star}
                        onStar={handleStarFill}
                        heart={product.heart}
                        onHeart={handleHeartFill}
                    />
                ))} */}

            <Product
                title={initialProducts.title}
                price={initialProducts.price}
                description={initialProducts.description}
                image={initialProducts.image}
                rate={initialProducts.rate}
                star={initialProducts.star}
                onStar={handleStarFill}
                heart={initialProducts.heart}
                onHeart={handleHeartFill}
            />
        </section>
    );
};

export default Products;
