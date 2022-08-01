import classes from "./Carousell-Items.module.scss";
import Image from "next/image";
import classNames from "classnames";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useState } from "react";
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
        const [heart, setHeart]= useState(false);
    return (
        <SkeletonTheme baseColor="#ededed" highlightColor="white">
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
                        onClick={() => setHeart(!heart)}
                        className={classNames({
                            [classes.HeartFill]: heart,
                            [classes.Heart]: !heart,
                            "offset-10": true,
                        })}
                    >
                        {heart ? (
                            <span>
                                <BsHeartFill />
                            </span>
                        ) : (
                            <span>
                                <BsHeart />
                            </span>
                        )}
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
                                <Skeleton width={250} height={250} />
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
                        <h4>
                            {title?.substring(0, 25) || (
                                <Skeleton width={250} height={25} />
                            )}
                        </h4>
                    </div>
                    <div
                        className={classNames({
                            [classes.description]: true,
                            "col-10 mx-4 offset-4 ": true,
                        })}
                    >
                        <p>
                            {description?.substring(0, 150) || (
                                <Skeleton count={2} width={300} />
                            )}
                        </p>
                    </div>
                    <div
                        className={classNames({
                            [classes.totalInfo]: true,
                            "col-12 d-flex": true,
                        })}
                    >
                        <div
                            className={classNames({
                                [classes.price]: true,
                                "col-6 text-start ": true,
                            })}
                        >
                            <h6> $ {price || <Skeleton width={50} />}</h6>
                        </div>
                        <div
                            className={classNames({
                                [classes.mainStar]: true,
                                "col-6 ": true,
                            })}
                        >
                            <h4>{rating?.rate || <Skeleton width={50} />}</h4>

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
