import classNames from "classnames";
import classes from "./Button.module.scss";
const Button = ({ children, clicked, btnType, }) => {
    return (
        <button
            onClick={clicked}
            type={btnType || "button"}
            className={classNames({
                [classes.btn]: true,
                "col-12 py-2": true,
            })}
        >
            {children}  
        </button>
    );
};
export default Button;
