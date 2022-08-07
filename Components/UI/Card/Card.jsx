import classes from "./Card.module.scss";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import classNames from "classnames";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { BsHeartFill, BsHeart, BsStarFill } from "react-icons/bs";
import { useRouter } from "next/router";
const Card = ({
    title,
    price,
    description,
    image,
    rate,
    heart,
    onHeart,
    id,
}) => {
    const router = useRouter();

    return (
        <SkeletonTheme baseColor="#ededed" highlightColor="white">
            <div
                onClick={() => router.push(`/product/${id}`)}
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
                    <div className={classes.imageContainer}>
                        <div className={classes.Image}>
                            {image ? (
                                <Image
                                    src={image}
                                    alt="image"
                                    objectFit="contain"
                                    layout="fill"
                                />
                            ) : (
                                <Skeleton width={150} height={150} />
                            )}
                        </div>
                        <div className={classes.imageOverlay}>
                            <span className="text">
                                <BsSearch />
                            </span>
                        </div>
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
                        <h6>
                            {title?.substring(0, 18) || (
                                <Skeleton width={100} height={25} />
                            )}
                        </h6>
                    </div>
                    <div
                        className={classNames({
                            [classes.description]: true,
                            "col-12 mt-4": true,
                        })}
                    >
                        {description?.substring(0, 48).toLowerCase() || (
                            <Skeleton count={2} width={140} />
                        )}
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
                                "col-6 text-start": true,
                            })}
                        >
                            <h6>${price || <Skeleton width={30} />}</h6>
                        </div>
                        <div
                            className={classNames({
                                [classes.mainStar]: true,
                                "col-6": true,
                            })}
                        >
                            <span className={classes.starIcon}>
                                <BsStarFill />
                            </span>

                            <h6>{rate || <Skeleton width={30} />}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    );
};
export default Card;
