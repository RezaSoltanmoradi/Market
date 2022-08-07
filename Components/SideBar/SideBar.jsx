import classNames from "classnames";
import CategoryList from "../containers/Category/CategoryList";
import FilterByPrice from "../containers/FilterByPrice/FilterByPrice";
import FilterByCategory from "../containers/FilterByCategory/FilterByCategory";
// import { useState, useEffect } from "react";
import classes from "./SideBar.module.scss";

const Sidebar = ({ products, categories, filterByPrice, filterByCategory }) => {
  
    return (
        <div className="col-12 py-0 my-0 h-100">
            <main
                className={classNames({
                    [classes.Sidebar]: true,
                    "col-12 h-100 d-lg-flex px-0 mx-0": true,
                })}
            >
                <div className={classes.sidebarBorder}></div>

                <div className="col-12 mt-4">
                    <CategoryList categories={categories}/>
                </div>

                <div className="col-12">
                    <FilterByPrice
                        products={products}
                        categories={categories}
                        filterByPrice={filterByPrice}
                    />
                </div>
                {filterByCategory && (
                    <div className="col-12 my-2">
                        <FilterByCategory
                            products={products}
                            categories={categories}
                            filterByCategory={filterByCategory}
                        />
                    </div>
                )}
            </main>
        </div>
    );
};

export default Sidebar;
