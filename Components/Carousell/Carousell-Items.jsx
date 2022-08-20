import classes from "./Carousell-Items.module.scss";
import Image from "next/image";
import classNames from "classnames";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useState, useEffect, useRef } from "react";
const CarrousellItems = ({
    products,
    count,
    nextCard,
    prevCard,
    changeSlide,
    rigthClick,
    leftClick,
    length,
}) => {
    console.log({changeSlide})
    const { title, description, rating, price, image } = products
        ? products[count]
        : {};
    const [heart, setHeart] = useState(false);
    const dotElRef = useRef([]);
    useEffect(() => {
        dotElRef.current.map((i, j) => {
            if (j == count)
                dotElRef.current[j].style.backgroundColor = "#1b998b";
            else dotElRef.current[j].style.backgroundColor = "#bbb";
        });
    }, [count]);

    return (
        <SkeletonTheme baseColor="#ededed" highlightColor="white">
            <div
                className={classNames({
                    [classes.container]: true,
                    " col-12 col-lg-10 mt-0 pt-0 mx-auto row box-shadow": true,
                })}
            >
                <div
                    className={classNames({
                        [classes.gallaryImage]: true,
                        "mx-auto row col-12 pt-2 mx-0 px-0": true,
                    })}
                >
                    <div
                        onClick={() => setHeart(!heart)}
                        className={classNames({
                            [classes.HeartFill]: heart,
                            [classes.Heart]: !heart,
                            "offset-10 offset-lg-11 background": true,
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
                    <div className="col-12 row mx-0 px-0">
                        <div className="col-2  d-flex justify-content-center align-items-center mx-0 px-0">
                            <div
                                onClick={prevCard}
                                className={classNames({
                                    [classes.scrollIcon]: true,
                                    [classes.disable]: !leftClick,
                                    " col-12 text": true,
                                })}
                            >
                                <BsArrowLeft />
                            </div>
                        </div>
                        <div
                            className={classNames({
                                [classes.slideShow]: true,
                                "col-8 mx-0 px-0": true,
                            })}
                            >
                                <div className={classNames({
                                    [classes.Image]:true,
                                    [classes.fixedSlide]:!changeSlide,
                                    [classes.changeSlide]:changeSlide,
                                })}>
                                    {image ? (
                                        <Image
                                            src={image}
                                            alt="image"
                                            objectFit="contain"
                                            layout="fill"
                                        />
                                    ) : (
                                        <Skeleton
                                            className={classes.skeleton}
                                        />
                                    )}
                                </div>
                            <div className="text-center">
                                {[...Array(length)].map((i, j) => (
                                    <span
                                        className={classes.dot}
                                        ref={(e) => (dotElRef.current[j] = e)}
                                        key={j}
                                    ></span>
                                ))}
                            </div>
                        </div>
                        <div className="col-2  d-flex justify-content-center align-items-center mx-0 px-0">
                            <div
                                onClick={nextCard}
                                className={classNames({
                                    [classes.scrollIcon]: true,
                                    [classes.disable]: !rigthClick,
                                    " col-12 text": true,
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
                        <p className="d-none d-lg-flex">
                            {description?.substring(0, 150) || (
                                <Skeleton count={2} width={300} />
                            )}
                        </p>
                        <p className="d-flex d-lg-none">
                            {description?.substring(0, 80) || (
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
