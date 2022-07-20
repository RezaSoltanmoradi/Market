import classNames from "classnames";
import Search from "../containers/Search/Search";
import classes from "./Header.module.scss";
import MenuList from "../Menu/MenuList";
const Header = () => {
    return (
        <div
            className={classNames({
                "col-12 d-flex justify-content-around row align-items-center sticky-top mx-0 px-0": true,
                [classes.Header]: true,
            })}
        >
            <div className="col-4 col-lg-6">
                <MenuList />
            </div>
            <div className="col-8 col-lg-6 my-0 py-0">
                <Search />
            </div>
        </div>
    );
};

export default Header;
