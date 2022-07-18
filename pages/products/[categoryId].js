import { useEffect, useState } from "react";
import { getAllCategories, getCategoryById } from "../../all-requests";
import Products from "../../Components/Products/Products";
import Sidebar from "../../Components/SideBar/SideBar";
import { useRouter } from "next/router";
import NotFound from "../../Components/NotFound/NotFound";

const SingleCategory = () => {
    const [products, setProducts] = useState(null);
    const [categories, setCategories] = useState(null);
    const [filterProducts, setFilterProducts] = useState(null);
    const router = useRouter();
    const categoryId = router.query.categoryId;

    useEffect(() => {
        setProducts(null);
        setFilterProducts(null);
        const fetchData = async () => {
            const allCategories = await getAllCategories();
            const categoryById = await getCategoryById(categoryId);
            setProducts(categoryById);
            setCategories(allCategories);
        };
        fetchData();
    }, [categoryId]);

    const handleFilterByPrice = (min, max) => {
        const allProducts = [...products];
        const foundProducts = allProducts?.filter(
            (product) => product.price >= min && product.price <= max
        );
        setFilterProducts(foundProducts);
    };
    let finallProducts;
    if (filterProducts?.length === 0) {
        finallProducts = <NotFound />;
    } else {
        finallProducts = (
            <Products
                products={!filterProducts ? products : filterProducts}
                cont={4}
            />
        );
    }
    return (
        <div className="col-12 row mx-auto ">
            <div className="col-12 col-lg-3 pt-4 mx-0 px-0 h-100">
                <Sidebar
                    products={products}
                    categories={categories}
                    filterByPrice={handleFilterByPrice}
                />
            </div>

            <div className="col-12 col-lg-8">{finallProducts}</div>
        </div>
    );
};

// export const getStaticPaths = async () => {
//     const allCategories = await getAllCategories();

//     const categoryParams = allCategories.map((categ) => ({
//         params: { categoryId: categ },
//     }));
//     return {
//         paths: categoryParams,
//         fallback: "blocking",
//     };
// };

// export const getStaticProps = async (context) => {
//     const allCategories = await getAllCategories();
//     const categoryId = context.params.categoryId;
//     const categoryById = await getCategoryById(categoryId);
//     if(!categoryById || categoryById.length===0){
//         return {
//             notFound: true,
//         };
//     }
//     return {
//         props: {
//             categories: allCategories,
//             singleCategory: categoryById,
//         },
//     };
// };
export default SingleCategory;
