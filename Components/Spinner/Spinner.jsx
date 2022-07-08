import classes from "./Spinner.module.scss";
import classNames from 'classnames';
const Spinner = () => {
    return (
        <div
            className={classNames({
                [classes.Container]: true,
                "col-12": true,
            })}
        >
            <div className={classes.loader}>Loading...</div>
        </div>
    );
};

export default Spinner;
