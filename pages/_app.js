import "../styles/globals.scss";
// add bootstrap for styling
import "bootstrap/dist/css/bootstrap.min.css";
// add sceleton for loading
import "react-loading-skeleton/dist/skeleton.css";
// add react-input-range styling
import "react-input-range/lib/css/index.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout.js";
import Spinner from "../Components/Spinner/Spinner";
import { Provider } from "react-redux";
import store from "../store/index";

function MyApp({ Component, pageProps }) {
    // const router = useRouter();
    // const [loading, setLoading] = useState(false);
    // const productsPath =
    //     router.pathname === "/products/[categoryId]" ||
    //     router.pathname === "/products";
    // const categoryPath= router.pathname === "/products/[categoryId]";
    // console.log({router})
    // useEffect(() => {
    //     const handleStartLoading = (url) => {
    //         if (productsPath && url !== categoryPath) {
    //             setLoading(true);
    //         } else {
    //             setLoading(false);
    //         }
    //     };
    //     const handleComplete = (url) => setLoading(false);

    //     router.events.on("routeChangeStart", handleStartLoading);
    //     router.events.on("routeChangeComplete", handleComplete);
    //     router.events.on("routeChangeError", handleComplete);

    // }, [router]);

    return (
        <Provider store={store}>
            <Layout>
                {/* {loading && <Spinner />} */}
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

export default MyApp;
