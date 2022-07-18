import classNames from "classnames";
import Link from "next/link";
import classes from "./Search-Item.module.scss";
import React from "react";
const SearchItem = ({ children, link, clicked, inputValue }) => {
    const regex = new RegExp(inputValue, "g");
    let newChildren=null;

    if(inputValue){
        newChildren = children
           .toLowerCase()
           .replace(regex, (x) => <span> ${x} </span>);
    }

    return (
        <li className={classes.SearchItem}>
            <Link href={link}>
                <a onClick={clicked}>{children}</a>
            </Link>
        </li>
    );
};

export default SearchItem;