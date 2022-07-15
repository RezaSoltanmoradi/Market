import { getAllCategories, getAllProducts } from "../../all-requests";
import { useState, useEffect } from "react";
import Products from "../../Components/Products/Products";
import Sidebar from "../../Components/SideBar/SideBar";
import Spinner from "../../Components/Spinner/Spinner";
import NotFound from "../../Components/NotFound/NotFound";
const ProductsPage = () => {
    const [products, setProducts] = useState(null);
    const [categories, setCategories] = useState(null);
    const [filterProducts, setFilterProducts] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
        const fetchData = async () => {
            const allProducts = await getAllProducts();
            const allCategories = await getAllCategories();
            setProducts(allProducts);
            setCategories(allCategories);
        };
        fetchData();
    }, []);
    const handleFilterByPrice = (min, max) => {
        const allProducts = [...products];
        const foundProducts = allProducts?.filter(
            (product) => product.price >= min && product.price <= max
        );
        setFilterProducts(foundProducts);
    };
    const handleFilterByCategory = (categories) => {
        const allProducts = [...products];

        const foundCategories = categories?.map((category) => {
            return allProducts?.filter(
                (product) => product.category === category.category
            );
        });
        setFilterProducts(foundCategories.flat());
    };

    if (loading) {
        return <Spinner />;
    }
    let finallProducts;
    if (filterProducts?.length === 0) {
        finallProducts = <NotFound />;
    } else {
        finallProducts = (
            <Products
                products={filterProducts ? filterProducts : products}
                cont={20}
            />
        );
    }
    return (
        <div className=" row mx-auto">
            <div className="col-12 col-lg-3 pt-4 mx-0 px-0 h-100">
                <Sidebar
                    categories={categories}
                    filterByPrice={handleFilterByPrice}
                    filterByCategory={handleFilterByCategory}
                />
            </div>
            <div className="col-12 col-lg-8">{finallProducts}</div>
        </div>
    );
};
// export const getStaticProps = async () => {
//     // const allProducts = await getAllProducts();
//     const allCategories = await getAllCategories();
//     return {
//         props: {
//             categories: allCategories,
//             // products: allProducts,
//         },
//     };
// };
export default ProductsPage;
