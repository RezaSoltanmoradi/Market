import { useEffect, useState } from "react";
import { getAllCategories, getCategoryById} from "../../all-requests";
import Products from "../../Components/Products/Products";
import Sidebar from "../../Components/SideBar/SideBar";
import Spinner from "../../Components/Spinner/Spinner";

const SingleCategory = ({ categories, singleCategory }) => {
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setProducts(singleCategory)
        if(products){
         setLoading(false)
        }
        console.log("singlecategory:", singleCategory);
    }, [singleCategory]);
    return (
        <div className="col-12 row mx-auto">
            <div className="col-12 col-md-3 pt-4 mx-0 px-0 h-100">
                <Sidebar categories={categories} />
            </div>
            {loading && <Spinner />}
            <div className="col-12 col-md-8">
                {singleCategory.length > 0 && (
                    <Products products={products} />
                )}
            </div>
        </div>
    );
};

export const getStaticPaths = async () => {
    const allCategories = await getAllCategories();

    const categoryParams = allCategories.map((categ) => ({
        params: { categoryId: categ },
    }));
    return {
        paths: categoryParams,
        fallback: "blocking",
    };
};

export const getStaticProps = async (context) => {
    const allCategories = await getAllCategories();
    const categoryId = context.params.categoryId;
    const categoryById = await getCategoryById(categoryId);
    if(!categoryById || categoryById.length===0){
        return {
            notFound: true,
        };
    }
    return {
        props: {
            categories: allCategories,
            singleCategory: categoryById,
        },
    };
};
export default SingleCategory;
