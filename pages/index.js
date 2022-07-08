import Head from "next/head";
import { useState, useEffect } from "react";
import Spinner from "../Components/Spinner/Spinner";

import { getAllCategories, getAllProducts } from "../all-requests";
import Carousell from "../Components/Carousell/Carousell";
export default function Home({ categories, products }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (categories && products) {
            setLoading(false);
        }
    }, [categories, products]);
    return (
        <div>
            <Head>
                <title>Market</title>
                <meta
                    name="description"
                    content="the Market was created by nextjs to sell products better than before"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className=" col-12 row">
                {loading && <Spinner />}

                <div className="col-12 mt-4">
                    <Carousell products={products} />
                </div>
            </div>
        </div>
    );
}
export const getStaticProps = async () => {
    const allProducts = await getAllProducts();
    const allCategories = await getAllCategories();
    return {
        props: {
            categories: allCategories,
            products: allProducts,
        },
    };
};
