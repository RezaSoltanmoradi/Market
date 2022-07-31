import classes from "./SinlgeProduct.module.scss";
import classNames from "classnames";
import {
    BsHeartFill,
    BsHeart,
    BsStar,
    BsStarFill,
    BsCaretRightFill,
} from "react-icons/bs";
import Image from "next/image";
import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/router";
import { useState } from "react";
const SingleProduct = ({ product }) => {
    const { title, description, price, rating, category, image } = product;
    const router = useRouter();
    const rate = Math.round(Number(rating.rate));

    const [heart, setHeart] = useState(false);
    return (
        <main className="col-12 row mx-0 px-0">
            <div
                className={classNames({
                    "col-12 col-lg-6": true,
                    [classes.imageContainer]: true,
                })}
            >
                <div className="col-12 d-flex justify-content-between flex-column">
                    <div
                        className={classNames({
                            [classes.goBack]: true,
                            "col-4 offset-1 mt-2": true,
                        })}
                    >
                        <span>
                            <BsArrowLeft />
                        </span>
                        <button
                            onClick={() => router.back()}
                            style={{ border: "none" }}
                        >
                            Go Back
                        </button>
                    </div>
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
                    <div className="col-12 d-flex justify-content-center mt-5">
                        <div className={classes.Image}>
                            <Image
                                src={image}
                                alt="image"
                                objectFit="contain"
                                layout="fill"
                            />
                        </div>
                    </div>
                </div>
                <div className={classes.Border}></div>
            </div>

            <div
                className={classNames({
                    " h-100 col-12 col-lg-6 pt-5": true,
                    [classes.detailContainer]: true,
                })}
            >
                <nav className="col-12 col-lg-9 offset-lg-1">
                    <ul>
                        <li>
                            products
                            <span>
                                <BsCaretRightFill />
                            </span>
                        </li>
                        <li>
                            {category}
                            <span>
                                <BsCaretRightFill />
                            </span>
                        </li>
                        <li className={classes.exactCategory}>
                            {title.toLowerCase().substring(0, 15)}
                        </li>
                    </ul>
                </nav>
                <main className="col-12 px-5">
                    <h4 className="mt-4">{title.substring(0, 30)}</h4>

                    <div
                        className={classNames({
                            [classes.mainStar]: true,
                            "col-12": true,
                        })}
                    >
                        <div>
                            {Array(rate)
                                .fill([])
                                .map((star, index) => (
                                    <span
                                        className={classes.starIcon}
                                        key={star + index}
                                    >
                                        <BsStarFill />
                                    </span>
                                ))}
                            {Array(5 - rate)
                                .fill([])
                                .map((star, index) => (
                                    <span
                                        className={classes.starIcon}
                                        key={star + index}
                                    >
                                        <BsStar />
                                    </span>
                                ))}
                            <span>{rating.rate} / 5.0</span>
                        </div>
                    </div>
                    <h3 className="mt-3">${price}</h3>
                    <p className="mt-3">
                        {description.substring(0, 200).toLowerCase()}
                    </p>
                </main>
            </div>
        </main>
    );
};

export default SingleProduct;