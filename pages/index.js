import Head from "next/head";
import { useState, useEffect } from "react";
import { getAllProducts } from "../all-requests";
import Carousell from "../Components/Carousell/Carousell";

export default function Home() {
    const [loadedProducts, setLoadedProducts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const allProducts = await getAllProducts();
            setLoadedProducts(allProducts);
        };
        fetchData();
    }, []);

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
            <div className=" col-12 row mx-0 px-0">
                <div className="col-12 mt-5 mx-0 px-0">
                    <Carousell products={loadedProducts} />
                </div>
            </div>
        </div>
    );
}
// export const getServerSideProps = async () => {
//     const allProducts = await getAllProducts();
//     return {
//         props: {
//             products: allProducts,
//         },
//     };
// };
