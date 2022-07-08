import { BsFillCartFill } from "react-icons/bs";
import classes from "./Cart.module.scss";
import classNames from 'classnames';
const Cart = () => {
    const cartData=[];
    const cartAmount=cartData.length;
    return (
        <main className={classNames({
            [classes.Cart]:true,
            'col-3 col-lg-4 mx-auto':true,
        })}>
            <span>
            <BsFillCartFill />
            </span>
            <span  className={classNames({
                  [classes.successBadge]:cartAmount>0,
                  [classes.dangerBadge]:cartAmount===0,
            })}>
            <p className='text-white w-100 text-center'>{cartAmount}</p>
            </span>
        </main>
    );
};

export default Cart;
