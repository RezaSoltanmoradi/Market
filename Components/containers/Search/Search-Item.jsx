import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import classes from "./Search-Item.module.scss";
import React from "react";
const SearchItem = ({ children, link, clicked, inputValue, image }) => {
    const regex = new RegExp(inputValue, "g");
    let newChildren = null;
    if (inputValue) {
        newChildren = children
            .toLowerCase()
            .replace(regex, (x) => <span> ${x} </span>);
    }
    return (
        <li className={classes.SearchItem}>
            <div className=" col-2 d-flex align-items-center">
                <Image
                    src={image}
                    objectFit="contain"
                    height={40}
                    width={40}
                    alt="product image"
                />
            </div>
            <div className="col-10 mx-2">
                <Link href={link}>
                    <a onClick={clicked}>{children}</a>
                </Link>
            </div>
        </li>
    );
};

export default SearchItem;
