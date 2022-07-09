import classes from "./Carousell-Items.module.scss";
import Image from "next/image";
import classNames from "classnames";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const CarrousellItems = ({
    products,
    count,
    nextCard,
    prevCard,
    rigthClick,
    leftClick,
}) => {
    const { title, description, rating, price, image } = products
        ? products[count]
        : {};
    return (
        <SkeletonTheme baseColor="#c5d86d" highlightColor="#ccc">
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
                    <div className="col-12 row">
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

                        <div
                            className={classNames({
                                "col-8": true,
                            })}
                        >
                            {image ? (
                                <Image
                                    src={image}
                                    alt="image"
                                    width={250}
                                    objectFit="contain"
                                    height={250}
                                />
                            ) : (
                                <Skeleton />
                            )}
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
                        <h4>{title?.substring(0, 25) || <Skeleton />}</h4>
                    </div>
                    <div
                        className={classNames({
                            [classes.description]: true,
                            "col-10 mx-4 offset-4 ": true,
                        })}
                    >
                        <p>{description?.substring(0, 150) || <Skeleton />}</p>
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
                            <h6> $ {price || <Skeleton />}</h6>
                        </div>
                        <div
                            className={classNames({
                                [classes.mainStar]: true,
                                "col-6 ": true,
                            })}
                        >
                            <h4>{rating?.rate || <Skeleton />}</h4>

                            <span className={classes.starIcon}>
                                <FaStar />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    );
};
export default CarrousellItems;
