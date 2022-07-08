import classes from "./Carousell-Items.module.scss";
import Image from "next/image";
import classNames from "classnames";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
const CarrousellItems = ({
    product,
    nextCard,
    prevCard,
    rigthClick,
    leftClick,
}) => {
    console.log('product:', product)
    const { title, price, description, image , rating } = product;
    const newTitle=title.substring(0,25);
    const newDescription=description.substring(0,150);
    const {rate}=rating;
    return (
        <div
            className={classNames({
                [classes.container]: true,
                " col-12 col-lg-10 mt-0 pt-0 mx-auto row": true,
            })}
        >
            <div
                className={classNames({
                    [classes.gallaryImage]: true,
                    "mx-auto row col-12 pt-2  ": true,
                })}
            >
                <div
                    className={classNames({
                        [classes.mainHeart]: true,
                        "offset-10 offset-md-11": true,
                    })}
                >
                    <span className={classes.heart}>
                        <BsFillSuitHeartFill />
                    </span>
                </div>

                <div className="col-2  d-flex justify-content-center align-items-center">
                  
                <div
                        onClick={prevCard}
                        className={classNames({
                            [classes.scrollIcon]: true,
                            [classes.disable]: !leftClick,
                            " col-6 ": true,
                        })}
                    >
                        <BsArrowLeft />
                    </div>


                </div>

                <div className="d-md-none col-8">
                    <Image
                        src={image}
                        alt="image"
                        width={250}
                        objectFit="contain"
                        height={150}
                    />
                </div>
                <div className="d-none d-md-inline col-8">
                    <Image
                        src={image}
                        alt="image"
                        width={250}
                        height={250}
                        objectFit="contain"
                    />
                </div>

                <div className="col-2  d-flex justify-content-center align-items-center">
                <div
                        onClick={nextCard}
                        className={classNames({
                            [classes.scrollIcon]: true,
                            [classes.disable]: !rigthClick,
                            " col-6": true,
                        })}
                    >
                        <BsArrowRight />
                    </div>
                  
                </div>
            </div>
            <div
                className={classNames({
                    [classes.cardInfo]: true,
                    "col-12 card-info mx-auto": true,
                })}
            >
                <div
                    className={classNames({
                        [classes.title]: true,
                        "col-10 mx-4 text-start": true,
                    })}
                >
                    <h4>{newTitle}</h4>
                </div>
                <div
                    className={classNames({
                        [classes.description]: true,
                        "col-10 mx-4 offset-4 ": true,
                    })}
                >
                    {newDescription}
                </div>
                <div
                    className={classNames({
                        [classes.totalInfo]: true,
                        " d-flex mx-4": true,
                    })}
                >
                    <div
                        className={classNames({
                            [classes.price]: true,
                            "col-6 text-start ": true,
                        })}
                    >
                        <h6>${price}</h6>
                    </div>
                    <div
                        className={classNames({
                            [classes.mainStar]: true,
                            "col-6 ": true,
                        })}
                    >
                        <h4>{rate}</h4>
                        <span className={classes.starIcon}>
                            <FaStar />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CarrousellItems;
