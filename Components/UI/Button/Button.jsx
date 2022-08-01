import classNames from "classnames";
import classes from "./Button.module.scss";
const Button = ({ children, clicked, btnType,bgColor, color }) => {
    return (
        <button
            onClick={clicked}
            type={btnType || "button"}
            className={classNames({
                [classes.Button]: true,
                "col-12 col-md-7 col-lg-5": true,
            })}
            style={{background:bgColor , color:color}}
        >
            {children}  
        </button>
    );
};
export default Button;
