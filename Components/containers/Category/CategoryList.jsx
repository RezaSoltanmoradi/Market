import Link from "next/link";
import CategoryItem from "./CategoryItem";
import classes from "./CategoryList.module.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Categories = ({ categories }) => {

    return (
        <nav className={classes.Category}>
            <h4 className="mx-5"> Category</h4>
            <ul>
                {categories.map((categ, index) => (
                    <CategoryItem
                        id={index + categ}
                        key={index + categ}
                        link={`/products/${categ}`}
                    >
                        {categ}
                    </CategoryItem>
                ))}
            </ul>
            <div className="mx-5">
                <h4> Filter by:</h4>
                <h4> Price</h4>
            </div>
            <div className={classes.FilterPrice}>
                <div className="progress">
                    <div
                        className="progress-bar text-dark progress-bar-striped bg-warning progress-bar-animated"
                        role="progressbar"
                        style={{ width: "30%" }}
                        aria-valuenow="10"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    >
                        10%
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Categories;
