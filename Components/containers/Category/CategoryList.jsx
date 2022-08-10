import CategoryItem from "./CategoryItem";
import classes from "./CategoryList.module.scss";
import classNames from "classnames";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { ConvertTitleToSlug } from "./../../../helper/utils";
import { BsChevronDown, BsChevronUp, BsSliders } from "react-icons/bs";
import { useState, useEffect } from "react";


const CategoryList = ({ categories }) => {
    return (
        <nav className={classes.Category}>
            <h4 className="mx-5 ">
                Filters <BsSliders />
            </h4>
            <div className="mx-5 mt-4">
                <h4 className="mx-3 col-4 d-none d-lg-flex"> Category</h4>
            </div>
            <div className={classNames({
                [classes.menubar]:true,
                'col-12':true,
            })}>
                <h4 className=" col-4 d-flex d-lg-none justify-content-between align-items-center"> Category
                <span>
                <BsChevronDown/>
                </span>
                </h4>
                <ul className="col-12">
                    {!categories && (
                        <SkeletonTheme
                            baseColor="#ededed"
                            highlightColor="white"
                        >
                            <div className="mt-2">
                                <Skeleton
                                    count={4}
                                    height={25}
                                    width={150}
                                    style={{ margin: "1rem 2rem" }}
                                />
                            </div>
                        </SkeletonTheme>
                    )}
                    {categories?.map((categ, index) => (
                        <CategoryItem
                            id={index + categ}
                            key={index + categ}
                            link={`/products/${ConvertTitleToSlug(categ)}`}
                        >
                            {categ}
                        </CategoryItem>

                    ))}
                </ul>
            </div>
        </nav>
    );
};
export default CategoryList;
