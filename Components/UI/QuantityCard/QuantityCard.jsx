import classes from "./QuantityCard.module.scss";
import classNames from "classnames";
const QuantityCard = ({ children, filterName }) => {
    return (
        <main
            className={classNames({
                [classes.Qouantity]: true,
                "col-6 col-lg-4 text-center background ": true,
            })}
        >
            {filterName && <h6 className={classes.filterName}>{filterName}</h6>}
            <div className={classes.QuantityCard}>{children}</div>
        </main>
    );
};

export default QuantityCard;
