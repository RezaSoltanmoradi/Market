import React from "react";
import classes from "./Spinner.module.scss";
const Spinner = () => {
    return (
        <div className={classes.container}>
            <div className={classes.loading}>
                <div className={classes.circle}></div>
                <div className={classes.circle}></div>
                <div className={classes.circle}></div>
                <div className={classes.circle}></div>
            </div>
        </div>
    );
};
export default Spinner;
