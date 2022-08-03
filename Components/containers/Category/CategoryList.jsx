import CategoryItem from "./CategoryItem";
import classes from "./CategoryList.module.scss";
import classNames from "classnames";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { ConvertTitleToSlug } from "./../../../helper/utils";
import { BsChevronDown, BsChevronUp, BsSliders } from "react-icons/bs";
import { useState } from "react";

const Categories = ({ categories, filterMethod }) => {
    const {showFilter, showFilterHandler}= filterMethod;
    const [showCategory, setShowCategory] = useState(false);
    return (
        <nav className={classes.Category}>
            <h4
                className="mx-5 "
                onClick={() => {
                    showFilterHandler(!showFilter);
                    setShowCategory(false);
                }}
            >
                {" "}
                Filters <BsSliders />
            </h4>
            {showFilter && (
                <div className="mx-5">
                    <h4
                        className="mx-3 mt-3 col-4"
                        onClick={() => setShowCategory(!showCategory)}
                    >
                        Category{" "}
                        {showCategory ? <BsChevronUp /> : <BsChevronDown />}
                    </h4>
                </div>
            )}
            <ul
                className={classNames({
                    [classes.showCategory]: showCategory,
                    [classes.hideCategory]: !showCategory,
                })}
            >
                {!categories && (
                    <SkeletonTheme baseColor="#ededed" highlightColor="white">
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
        </nav>
    );
};
export default Categories;
