import "../styles/globals.scss";
// add bootstrap for styling
import "bootstrap/dist/css/bootstrap.min.css";
// add sceleton for loading
import "react-loading-skeleton/dist/skeleton.css";
import Router from "next/router";
import { useState } from "react";
import Layout from "../Components/Layout/Layout.js";
import Spinner from "../Components/Spinner/Spinner";
import { ProductContextProvider } from "../context";

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(false);
    Router.events.on("routeChangeStart", () => setLoading(true));
    Router.events.on("routeChangeComplete", () => setLoading(false));
    Router.events.on("routeChangeError", () => setLoading(false));
    if (loading) {
        return <Spinner />;
    }
    return (
        <ProductContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ProductContextProvider>
    );
}

export default MyApp;
