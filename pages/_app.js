import "../styles/globals.scss";
// add bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../Components/Layout/Layout.js";
import { ProductContextProvider } from "../context";

function MyApp({ Component, pageProps }) {
    return (
        <ProductContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ProductContextProvider>
    );
}

export default MyApp;
