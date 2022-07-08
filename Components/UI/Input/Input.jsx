import classes from "./Input.module.scss";
import classNames from "classnames";
const Input = ({ ChangeInput, inputValue,placeholder }) => {
    return (
        <input
            className={classNames({
                [classes.Input]: true,
                "col-12 py-2": true,
            })}
            placeholder={placeholder}
            onChange={ChangeInput}
            value={inputValue}
        />
    );
};

export default Input;
