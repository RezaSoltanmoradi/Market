import { Fragment, useState } from "react";
import classes from "./MenuList.module.scss";
import MenuItem from "./MenuItem";
import classNames from "classnames";
import { BsCart, BsCartCheck } from "react-icons/bs";
import { BsX, BsList } from "react-icons/bs";
import Backdrop from "../UI/Backdrop/Backdrop";

const MenuList = () => {
    const [openMenubar, setOpenMenubar] = useState(true);
    const cartData = [{}, {}, {}];
    return (
        <Fragment>
            <div className={classNames({
                "col-10 row":true,
            })}>
            <Backdrop closeModal={()=>setOpenMenubar(true)} showModal={!openMenubar}/>
                <nav className="col-12 my-0 pb-0 d-none d-lg-flex">
                    <ul
                        className={classNames({
                            [classes.MenuList]: true,
                            "col-12 d-none d-lg-flex my-0 py-0 ": true,
                        })}
                    >
                        <MenuItem link="/cart">
                            <div
                                className={classNames({
                                    [classes.Cart]: true,
                                    "col-4 mx-auto": true,
                                })}
                            >
                                <span>
                                    {cartData.length > 0 ? (
                                        <BsCartCheck />
                                    ) : (
                                        <BsCart />
                                    )}
                                </span>
                                <span
                                    className={classNames({
                                        [classes.successBadge]:
                                            cartData.length > 0,
                                        [classes.dangerBadge]:
                                            cartData.length === 0,
                                    })}
                                >
                                    <p className=" w-100 text-center">
                                        {cartData.length}
                                    </p>
                                </span>
                            </div>
                        </MenuItem>
                        <MenuItem link="/"> Home</MenuItem>

                        <MenuItem link="/products">
                            Products
                            <span className=" text-danger pb-2">*</span>
                        </MenuItem>
                        <MenuItem link="/favorite"> Favorite</MenuItem>
                        <MenuItem link="/about"> About</MenuItem>
                    </ul>
                </nav>

                <nav
                    className={classNames({
                        [classes.ListContainer]: true,
                        "col-5 my-0 py-0 d-lg-none text-start": true,
                    })}
                >
                    <span
                        className={classes.Icon}
                        onClick={() => setOpenMenubar(!openMenubar)}
                    >
                        {openMenubar ? <BsList /> : <BsX />}
                    </span>

                    <ul
                        className={classNames({
                            [classes.OpenMenuList]: !openMenubar,
                            [classes.CloseMenuList]: openMenubar,
                            "my-3 text-start": true,
                        })}
                    >
                        <MenuItem link="/cart">
                            <div
                                className={classNames({
                                    [classes.Cart]: true,
                                    "col-3": true,
                                })}
                            >
                                <span>
                                    {cartData.length > 0 ? (
                                        <BsCartCheck />
                                    ) : (
                                        <BsCart />
                                    )}
                                </span>
                                <span
                                    className={classNames({
                                        [classes.successBadge]:
                                            cartData.length > 0,
                                        [classes.dangerBadge]:
                                            cartData.length === 0,
                                    })}
                                >
                                    <p className=" w-100 text-center">
                                        {cartData.length}
                                    </p>
                                </span>
                            </div>
                        </MenuItem>
                        <MenuItem link="/"> Home</MenuItem>

                        <MenuItem link="/products">
                            Products
                            <span className=" text-danger pb-2"> *</span>
                        </MenuItem>
                        <MenuItem link="/favorite"> Favorite</MenuItem>
                        <MenuItem link="/about"> About</MenuItem>
                    </ul>
                </nav>
            </div>
        </Fragment>
    );
};

export default MenuList;
