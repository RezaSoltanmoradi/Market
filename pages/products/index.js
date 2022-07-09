import { getAllCategories, getAllProducts } from "../../all-requests";
import { useState, useEffect } from "react";
import Products from "../../Components/Products/Products";
import Sidebar from "../../Components/SideBar/SideBar";
const ProductsPage = ({ categories }) => {
    const [products, setProducts] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const allProducts = await getAllProducts();
            setProducts(allProducts);
        };
        fetchData();
    }, []);
    return (
        <div className=" row mx-auto">
            <div className="col-12 col-md-3 pt-4 mx-0 px-0 h-100">
                <Sidebar categories={categories} />
            </div>
            <div className="col-12 col-md-8">
                <Products products={products} />
            </div>
        </div>
    );
};
export const getStaticProps = async () => {
    // const allProducts = await getAllProducts();
    const allCategories = await getAllCategories();
    return {
        props: {
            categories: allCategories,
            // products: allProducts,
        },
    };
};
export default ProductsPage;
