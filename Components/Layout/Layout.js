import { Fragment, useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import classes from "./Layout.module.scss";

const Layout = ({ children }) => {

    const [theme, setTheme] = useState("light");
    const switchThemeHandler = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };
    return (
        <Fragment>
            <div className={theme}>
                <div className="col-12 p-0 m-0 background text">
                    <Header switchTheme={switchThemeHandler} theme={theme} />
                    <div className="col-12">
                        <main className={classes.Main}>{children}</main>
                    </div>
                    <Footer />
                </div>
            </div>
        </Fragment>
    );
};
export default Layout;
