import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import classes from "./FilterrByCategory.module.scss";
import classNames from "classnames";
const FilterByCategory = ({ categories, filterByCategory }) => {
    const [updatedCategory, setUpdatedCategory] = useState(null);

    useEffect(() => {
        let loadedCategories = [];
        if (categories) {
            for (let key in categories) {
                loadedCategories.push({
                    id: key,
                    category: categories[key],
                    checked: false,
                });
            }
        }
        setUpdatedCategory(loadedCategories);
    }, [categories]);
    const onChangeInput = (eventId) => {
        const allCategories = [...updatedCategory];
        const foundIndexCategory = allCategories.findIndex(
            (cat) => cat.id === eventId
        );
        allCategories[foundIndexCategory].checked =
            !allCategories[foundIndexCategory].checked;
        setUpdatedCategory(allCategories);
        const filterCategory = updatedCategory?.filter(
            (cat) => cat.checked === true
        );

        filterByCategory(filterCategory);
    };

    return (
        <SkeletonTheme baseColor="#ededed" highlightColor="white">
            <div
                className={classNames({
                    "mx-5 mt-2": true,
                    [classes.FilterByCategory]: true,
                })}
            >
                <form className="form-check d-flex flex-column justify-content-around align-itmes-center">
                    {updatedCategory?.map((item, index) => (
                        <label
                            key={item.id}
                            id={item.id}
                            className="form-check-label"
                        >
                            <input
                                className="form-check-input"
                                type="checkbox"
                                checked={item.checked}
                                onChange={() => onChangeInput(item.id)}
                            />
                            {item.category}
                        </label>
                    ))}
                    {!categories && (
                        <form className="form-check mt-2">
                            <input
                                type="checkbox"
                                className="form-check-input"
                            />
                            <Skeleton
                                height={20}
                                width={150}
                                style={{ margin: ".3rem 1rem" }}
                            />
                            <input
                                type="checkbox"
                                className="form-check-input"
                            />
                            <Skeleton
                                height={20}
                                width={150}
                                style={{ margin: ".3rem 1rem" }}
                            />
                            <input
                                type="checkbox"
                                className="form-check-input"
                            />
                            <Skeleton
                                height={20}
                                width={150}
                                style={{ margin: ".3rem 1rem" }}
                            />
                            <input
                                type="checkbox"
                                className="form-check-input"
                            />
                            <Skeleton
                                height={20}
                                width={150}
                                style={{ margin: ".3rem 1rem" }}
                            />
                        </form>
                    )}
                </form>
            </div>
        </SkeletonTheme>
    );
};
export default FilterByCategory;
