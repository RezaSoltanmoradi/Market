import Card from "../UI/Card/Card";

const Product = ({
    id,
    title,
    price,
    rate,
    description,
    image,
    star,
    onStar,
    heart,
    onHeart,
}) => {
    return (
        <div className="col-10 mx-auto col-md-6 col-lg-3">
            <Card
                id={id}
                title={title}
                price={price}
                rate={rate}
                description={description}
                image={image}
                star={star}
                onStar={onStar}
                heart={heart}
                onHeart={onHeart}
            />
        </div>
    );
};

export default Product;
