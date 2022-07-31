import SingleProduct from '../../Components/SingleProduct/SingleProduct';
import {getAllProducts, getProductById} from '../../all-requests';

const productDetail = ({singleProduct}) => {
    return (
        <SingleProduct product={singleProduct}/>
    );
};
export default productDetail;

export const getStaticPaths = async () => {
    const allProducts = await getAllProducts();
    const productParams = allProducts.map((product) => ({
        params: { productId: product.id.toString() },
    }));

    return {
        paths: productParams,
        fallback: "blocking",
    };
};

export const getStaticProps = async (context) => {
    const productId = context.params.productId;
    const productById = await getProductById(productId);
    if(!productById || productById.length===0){
        return {
            notFound: true,
        };
    }
    return {
        props: {
            singleProduct: productById,
        },
    };
};