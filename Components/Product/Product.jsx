import Card from "../UI/Card/Card";

const Product = ({
    id,
    title,
    price,
    rate,
    description,
    image,
    heart,
    onHeart,
}) => {
    return (
        <div className=" col-10 offset-1 offset-sm-0 col-sm-6 col-lg-4 col-xl-3">
            <Card
                id={id}
                title={title}
                price={price}
                rate={rate}
                description={description}
                image={image}
                heart={heart}
                onHeart={onHeart}
            />
        </div>
    );
};

export default Product;
