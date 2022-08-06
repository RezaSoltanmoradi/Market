import QuantityCard from "../../UI/QuantityCard/QuantityCard";
import classes from "./ProductQuantity.module.scss";
import { BsCheckLg, BsCart3, BsHeart, BsHeartFill } from "react-icons/bs";
import { useState, useEffect, Fragment } from "react";
import Select from "react-select";

import Button from "../../UI/Button/Button";

const ProductQouantity = ({ addToCart, addToFavorite }) => {
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(0);
    const [color, setColor] = useState("light");
    const [size, setSize] = useState("small");
    const [heart, setHeart] = useState(false);
    const options = [
        { value: "small", label: "small" },
        { value: "medium", label: "medium" },
        { value: "large", label: "large" },
    ];
    console.log(size);
    const addToCartChandler = () => {
        addToCart({ quantity, color, size });
    };
    const addToFavoriteHandler = () => {
        addToFavorite({ quantity, color, size });
        setHeart(!heart);
    };
    useEffect(() => {
        setLoading(false);
    }, []);
    if (loading) return;
    return (
        <Fragment>
            <div className={classes.ProductQouantity}>
                <QuantityCard filterName="Color">
                    <div
                        className={classes.dark}
                        onClick={() => setColor("dark")}
                    >
                        {color === "dark" && <BsCheckLg />}
                    </div>
                    <div
                        className={classes.light}
                        onClick={() => setColor("light")}
                    >
                        {color === "light" && <BsCheckLg />}
                    </div>
                    <div
                        className={classes.danger}
                        onClick={() => setColor("danger")}
                    >
                        {color === "danger" && <BsCheckLg />}
                    </div>
                </QuantityCard>
                <QuantityCard
                    filterName="Size"
                    style={{ position: "relative" }}
                >
                    <Select
                        className={classes.menubar}
                        options={options}
                        defaultValue={size}
                        onChange={(option) => setSize(option.value)}
                    />
                </QuantityCard>
                <QuantityCard filterName="Quantity">
                    <button
                        onClick={() => {
                            if (quantity > 0) {
                                setQuantity(quantity - 1);
                            }
                        }}
                    >
                        -
                    </button>
                    <p>{quantity}</p>
                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </QuantityCard>
            </div>
            <div className={classes.AddCartButton}>
                <Button
                    clicked={addToCartChandler}
                    bgColor="#1b998b"
                    color="white"
                >
                    <span>
                        <BsCart3 />
                    </span>
                    <p>Add to Cart</p>
                </Button>
                <Button
                    clicked={addToFavoriteHandler}
                    bgColor="white"
                    color="black"
                >
                    <span>{heart ? <BsHeartFill /> : <BsHeart />}</span>
                    <p>Save to Favorite</p>
                </Button>
            </div>
        </Fragment>
    );
};

export default ProductQouantity;
