import classNames from "classnames";
import CategoryList from "../containers/Category/CategoryList";
import FilterByPrice from "../containers/FilterByPrice/FilterByPrice";
import FilterByCategory from "../containers/FilterByCategory/FilterByCategory";
// import { useState, useEffect } from "react";
import classes from "./SideBar.module.scss";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
const Sidebar = ({ products, categories, filterByPrice, filterByCategory }) => {
    return (
        <div className="col-12 py-0 my-0 h-100 ">
            <main
                className={classNames({
                    [classes.Sidebar]: true,
                    "col-12 d-lg-flex px-0 mx-0": true,
                })}
            >
                <div className={classNames({
                    [classes.sidebarBorder]:true,
                    'bg-content':true,
                })}></div>

                <div className="col-12 mt-4">
                    <CategoryList categories={categories} />
                </div>

                <div className="col-12">
                    <FilterByPrice
                        products={products}
                        categories={categories}
                        filterByPrice={filterByPrice}
                    />
                </div>
                {filterByCategory ? (
                    <div className="col-12 my-2 mb-0 pb-0">
                        <FilterByCategory
                            products={products}
                            categories={categories}
                            filterByCategory={filterByCategory}
                        />
                    </div>
                ) : (
                    <div
                        className={classNames({
                            [classes.ProductsLink]: true,
                            " mx-auto mt-2 ": true,
                        })}
                    >
                        <span>
                            <BsArrowLeft />
                        </span>

                        <Link href="/products">
                            <a className="text">All Products</a>
                        </Link>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Sidebar;
