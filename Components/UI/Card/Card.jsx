import classes from "./Card.module.scss";
import Image from "next/image";
import classNames from "classnames";
import { BsHeartFill, BsHeart, BsStar, BsStarFill } from "react-icons/bs";

const Card = ({
    title,
    price,
    description,
    image,
    rate,
    star,
    onStar,
    heart,
    onHeart,
    id,
}) => {
    const newTitle = title.substring(0, 18);
    const newDescription = description.substring(0, 50);
    return (
        <div
            className={classNames({
                [classes.container]: true,
                "  mt-4": true,
            })}
        >
            <div
                className={classNames({
                    [classes.gallaryImage]: true,
                    " col-12 pt-4 position-relative": true,
                })}
            >
                <div
                    onClick={() => onHeart(id)}
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
                <div className="col-12 text-center mx-auto">
                    <Image
                        src={image}
                        alt="image"
                        width={150}
                        height={150}
                        objectFit="contain"
                    />
                </div>
            </div>
            <div
                className={classNames({
                    [classes.cardInfo]: true,
                    "col-12 card-info mt-3": true,
                })}
            >
                <div
                    className={classNames({
                        [classes.title]: true,
                        "col-10": true,
                    })}
                >
                    <h6>{newTitle}</h6>
                </div>
                <div
                    className={classNames({
                        [classes.description]: true,
                        "col-12 mt-4": true,
                    })}
                >
                    {newDescription + " ..."}
                </div>
                <div
                    className={classNames({
                        [classes.totalInfo]: true,
                        " d-flex ": true,
                    })}
                >
                    <div
                        className={classNames({
                            [classes.price]: true,
                            "col-6 text-start": true,
                        })}
                    >
                        <h6>${price}</h6>
                    </div>
                    <div
                        className={classNames({
                            [classes.mainStar]: true,
                            "col-6": true,
                        })}
                    >
                        {star ? (
                            <div
                                onClick={() => {
                                    onStar(id);
                                }}
                            >
                                <span className={classes.starIcon}>
                                    <BsStarFill />
                                </span>
                            </div>
                        ) : (
                            <div onClick={() => onStar(id)}>
                                <span className={classes.starIcon}>
                                    <BsStar />
                                </span>
                            </div>
                        )}

                        <h6>{rate}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Card;
