import { Fragment, useState } from "react";
import classes from "./MenuList.module.scss";
import MenuItem from "./MenuItem";
import classNames from "classnames";
import { BsCart, BsCartCheck } from "react-icons/bs";
import { BsX, BsList } from "react-icons/bs";
import Backdrop from "../UI/Backdrop/Backdrop";

const MenuList = () => {
    const [openMenubar, setOpenMenubar] = useState(false);
    const cartData = [{}, {}, {}];
    
    return (
        <Fragment>
            <div
                className={classNames({
                    "col-12 col-xl-10 mx-0 px-0 row": true,
                })}
            >
                {openMenubar && (
                    <Backdrop
                        closeModal={() => setOpenMenubar(false)}
                        showModal={openMenubar}
                    />
                )}
                <nav className="col-12 my-0 pb-0 d-none d-lg-flex align-items-center">
                    <ul
                        className={classNames({
                            [classes.MenuList]: true,
                            "col-12 justify-content-center text-center align-items-center my-0 py-0 ": true,
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



                <nav className="col-12 my-0 pb-0 d-flex d-lg-none   ">
                    <span
                        className={classes.Icon}
                        onClick={() => setOpenMenubar(true)}
                    >
                        <BsList />
                    </span>
                </nav>



                <nav
                    className={classNames({
                        [classes.ListContainer]: true,
                        [classes.OpenMenuList]: openMenubar,
                        [classes.CloseMenuList]: !openMenubar,
                        "col-5 my-0 py-0 d-lg-none": true,
                    })}
                >
                    <ul
                        className={classNames({
                            [classes.sideMenuList]: true,
                            "my-3 px-3": true,
                        })}
                    >
                        <li className="text-end d-flex justify-content-end">
                            <span
                                className={classes.Icon}
                                onClick={() => setOpenMenubar(false)}
                            >
                                <BsX />
                            </span>
                        </li>
                        <MenuItem link="/cart" clicked={()=>setOpenMenubar(false)}>
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
                        <MenuItem link="/" clicked={()=>setOpenMenubar(false)}> Home</MenuItem>

                        <MenuItem link="/products" clicked={()=>setOpenMenubar(false)}>
                            Products
                            <span className=" text-danger pb-2"> *</span>
                        </MenuItem>
                        <MenuItem link="/favorite" clicked={()=>setOpenMenubar(false)}> Favorite</MenuItem>
                        <MenuItem link="/about" clicked={()=>setOpenMenubar(false)}> About</MenuItem>
                    </ul>
                </nav>
            </div>
        </Fragment>
    );
};

export default MenuList;
