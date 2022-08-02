import { Fragment } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import classes from "./Layout.module.scss";
const Layout = ({ children }) => {
    return (
        <Fragment>
            <div className="col-12 p-0 m-0">
                <Header />
                <div className="col-12">
                    <main className={classes.Main}>{children}</main>
                </div>
                <Footer />
            </div>
        </Fragment>
    );
};
export default Layout;
