import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import classes from "./CategoryItem.module.scss";
const CategoryItem = ({ children, link, id }) => {
    const router = useRouter();
    return (
        <Fragment>
          
            <li
                className={classNames({
                    [classes.CategoryItems]: true,
                    [classes.active]: `${router.asPath}` === link,
                    " h-100": true,
                })}
            >
                <Link href={link}>
                    <a>{children}</a>
                </Link>
            </li>
            <hr className="my-0 py-0 text-info col-10 text-start d-felx d-lg-none" />
        </Fragment>
    );
};

export default CategoryItem;
