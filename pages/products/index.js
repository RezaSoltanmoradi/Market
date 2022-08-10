import { getAllCategories, getAllProducts } from "../../all-requests";
import { useState, useEffect } from "react";
import Products from "../../Components/Products/Products";
import Sidebar from "../../Components/SideBar/SideBar";
import Spinner from "../../Components/Spinner/Spinner";
import NotFound from "../../Components/NotFound/NotFound";

const ProductsPage = () => {
    const [products, setProducts] = useState(null);
    const [categories, setCategories] = useState(null);
    const [filterByCategory, setFilterByCategory] = useState(null);
    const [filterByPrice, setFilterByPrice] = useState(null);
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
        const allProducts =
            !filterByCategory || filterByCategory?.length === 0
                ? [...products]
                : [...filterByCategory];
        const foundProducts = allProducts?.filter(
            (product) => product.price >= min && product.price <= max
        );
        setFilterByPrice(foundProducts);
    };

    const handleFilterByCategory = (categories) => {
        const allProducts = [...products];
        setFilterByPrice(null);
        const foundCategories = categories?.map((category) => {
            return allProducts?.filter(
                (product) => product.category === category.category
            );
        });
        setFilterByCategory(foundCategories.flat());
    };

    if (loading) {
        return;
    }
    let finallProducts;
    if (filterByPrice?.length === 0) {
        finallProducts = <NotFound />;
    } else if (
        (!filterByCategory || filterByCategory?.length === 0) &&
        !filterByPrice
    ) {
        finallProducts = <Products products={products} cont={20} />;
    } else if (filterByCategory && filterByPrice) {
        finallProducts = <Products products={filterByPrice} cont={20} />;
    } else if (filterByPrice) {
        finallProducts = <Products products={filterByPrice} cont={20} />;
    } else if (filterByCategory) {
        finallProducts = <Products products={filterByCategory} cont={20} />;
    }

    return (
        <div>
            <div className=" row mx-auto mb-5">
                <div className="col-12 col-lg-3 pt-4 mx-0 px-0 ">
                    <Sidebar
                        categories={categories}
                        filterByPrice={handleFilterByPrice}
                        filterByCategory={handleFilterByCategory}
                    />
                </div>
                <div className="col-12 col-lg-8">{finallProducts}</div>
            </div>
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
