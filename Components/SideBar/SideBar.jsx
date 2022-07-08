import { Fragment } from "react";
import classNames from "classnames";
import Categories from "../containers/Category/CategoryList";
import classes from "./SideBar.module.scss";
import Search from "../../Components/containers/Search/Search";
const Sidebar = ({categories}) => {
    return (
        <div className="col-12">
            <main
                className={classNames({
                    [classes.Sidebar]: true,
                    "col-12 h-100 d-none d-lg-flex px-0 mx-0": true,
                })}
            >
               
                <div className="col-12 mt-4">
                    <Categories categories={categories}/>
                </div>
                <div className={classes.sidebarBorder}></div>
            </main>
        </div>
    );
};

export default Sidebar;
