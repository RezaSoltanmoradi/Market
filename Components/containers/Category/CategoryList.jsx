import CategoryItem from "./CategoryItem";
import classes from "./CategoryList.module.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { ConvertTitleToSlug } from "./../../../helper/utils";
const Categories = ({ categories }) => {
    return (
        <nav className={classes.Category}>
            <h4 className="mx-5"> Category</h4>
            <ul>
                {!categories && (
                    <SkeletonTheme baseColor="#ccc" highlightColor="#c5d86d">
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
