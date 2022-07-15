import { BsFillCartFill } from "react-icons/bs";
import classes from "./Cart.module.scss";
import classNames from "classnames";
const Cart = () => {
    const cartData = [{}, {}, {}];
    const cartAmount = cartData.length;

    return (
       <>
         <main
            className={classNames({
                [classes.Cart]: true,
                "col-12 col-lg-4 mx-auto": true,
            })}
        >reza
        </main>
        <main
            className={classNames({
                [classes.Cart_2]: true,
                "col-12 col-lg-4 mx-auto my-4": true,
            })}
        >mahdi
        </main>
       </>
    );
};

export default Cart;
