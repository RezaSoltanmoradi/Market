import classes from "./MenuItem.module.scss";
import Link from "next/link";
import { Fragment } from "react";
import { useRouter } from "next/router";
import classNames from "classnames";
const MenuItem = ({ children, link }) => {
    const router = useRouter();

    const validPath =
        link.includes("/products") && router.asPath.includes(link);

    return (
        <Fragment>
            <li
                className={classNames({
                    [classes.MenuItem]: true,
                    [classes.active]: router.asPath === link || validPath,
                    "w-100 h-100 px-0 mx-auto": true,
                })}
            >
                <Link href={link}>
                    <a>{children}</a>
                </Link>
            </li>
        </Fragment>
    );
};

export default MenuItem;
