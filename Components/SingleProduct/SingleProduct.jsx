import classes from "./SinlgeProduct.module.scss";
import classNames from "classnames";
import {
    BsStar,
    BsStarFill,
    BsCaretRightFill,
    BsArrowLeft,
} from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/router";
import ProductQouantity from "../containers/ProductQuantity/ProductQuantity";
import Link from "next/link";
import { ConvertTitleToSlug } from "../../helper/utils";
const SingleProduct = ({ product }) => {
    const { title, description, price, rating, category, image } = product;
    const router = useRouter();
    const rate = Math.round(Number(rating.rate));

    const addToCartHandler = (productDetail) => {
        console.log({ productDetail });
        console.log("this product added to cart successfuly");
    };
    const addToFavoriteHandler = (productDetail) => {
        console.log({ productDetail });
        console.log("this product added to favorite successfuly");
    };
    return (
        <main
            className={classNames({
                "col-12 row mx-0 px-0": true,
                [classes.SingleProduct]: true,
            })}
        >
            <div
                className={classNames({
                    "col-12 col-lg-6": true,
                    [classes.imageContainer]: true,
                })}
            >
                <div className="col-12 d-flex justify-content-between flex-column">
                    <div className="mt-5 col-12 row text-center">
                        <div
                            className={classNames({
                                [classes.goBack]: true,
                                "col-6": true,
                            })}
                        >
                            <span>
                                <BsArrowLeft />
                            </span>
                            <button
                                onClick={() => router.back()}
                                style={{ border: "none" }}
                                className="text"
                            >
                                Go Back
                            </button>
                        </div>
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
                <div
                    className={classNames({
                        [classes.Border]: true,
                        "bg-content": true,
                    })}
                ></div>
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
                            <Link href="/products">
                                <a>products</a>
                            </Link>
                            <span>
                                <BsCaretRightFill />
                            </span>
                        </li>
                        <li>
                            <Link
                                href={`/products/${ConvertTitleToSlug(
                                    category
                                )}`}
                            >
                                <a>{category}</a>
                            </Link>
                            <span>
                                <BsCaretRightFill />
                            </span>
                        </li>
                        <li className={classes.exactCategory}>
                            {title.toLowerCase().substring(0, 15)}
                        </li>
                    </ul>
                </nav>
                <main className="col-12">
                    <h4 className="mt-4 px-5">{title.substring(0, 30)}</h4>

                    <div
                        className={classNames({
                            [classes.mainStar]: true,
                            "col-12 px-5": true,
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
                    <h4 className="mt-3 px-5">${price}</h4>
                    <p className="my-3 px-5  text">
                        {description.substring(0, 200).toLowerCase()}
                    </p>
                    <ProductQouantity
                        addToCart={addToCartHandler}
                        addToFavorite={addToFavoriteHandler}
                    />
                </main>
            </div>
        </main>
    );
};

export default SingleProduct;
