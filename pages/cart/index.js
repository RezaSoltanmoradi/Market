import { Fragment } from "react";
import Cart from "../../Components/Cart/Cart";
const CartPage = () => {
    return (
        <div className="container">
            <h2 className="alert alert-primary m-3 p-3 text-center">
                <Cart />
            </h2>
        </div>
    );
};
export default CartPage;
