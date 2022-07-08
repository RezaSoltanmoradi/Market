import { useEffect, useState } from "react";
import Product from "../Product/Product";
const Products = ({ products }) => {
    const [starFill, setStarFill] = useState(false);
    const [heartFill, setHeartFill] = useState(false);
    const [newProducts, setNewProducts] = useState([]);
    useEffect(() => {
        if(!products){
            return;
        }
        console.log( {products});
        setNewProducts(
            products.map((pro) => ({
                id: pro.id,
                title: pro.title,
                price: pro.price,
                description: pro.description,
                image: pro.image,
                rate: pro.rating.rate,
                star: starFill,
                heart: heartFill,
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
            {newProducts &&
                newProducts.map((product) => (
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
                ))}
        </section>
    );
};

export default Products;
