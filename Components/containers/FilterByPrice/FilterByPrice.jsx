import classes from "./FilterByPrice.module.scss";
import InputRange from "react-input-range";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const FilterByPrice = ({ products, filterByPrice, filterMethod }) => {
    const [value, setValue] = useState({ min: 0, max: 1000 });
    const [amount, setAmount] = useState({ minValue: 0, maxValue: 1000 });
    const {showFilter}= filterMethod; 
    const [showPrice, setShowPrice] = useState(false);
    useEffect(() => {
        if (products) {
            const myArry = products.sort(function (a, b) {
                return a.price - b.price;
            });

            setAmount({
                minValue: myArry[0]?.price - 5,
                maxValue: myArry[myArry.length - 1]?.price + 5,
            });
            setValue({
                min: myArry[0]?.price - 5,
                max: myArry[myArry.length - 1]?.price + 5,
            });
        }
    }, [products]);

    return (
        <nav className={classes.FilterByPrice}>
            {showFilter && 
            
            <div className="mx-5">
                <h4 className="mx-3" onClick={() => setShowPrice(!showPrice)}>
                    Price {showPrice ? <BsChevronUp /> : <BsChevronDown />}
                </h4>
            </div>
            }
            {showPrice && showFilter && (
                <div className="col-8 mx-auto mt-4">
                    <InputRange
                        step={1}
                        value={value}
                        minValue={amount.minValue}
                        maxValue={amount.maxValue}
                        onChange={(value) => {
                            filterByPrice(value.min, value.max);
                            setValue(value);
                        }}
                        formatLabel={(value) => `$ ${value}`}
                    />
                </div>
            )}
        </nav>
    );
};

export default FilterByPrice;
