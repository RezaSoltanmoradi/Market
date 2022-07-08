import { Fragment } from "react";
import Header from "../Header/Header";
const Layout = ({ children }) => {
    return (
        <Fragment>
            <div className="col-12 p-0 m-0">
                <Header />
                <div className="col-12">
                    <main>{children}</main>
                </div>
            </div>
        </Fragment>
    );
};
export default Layout;
