import CarousellItems from "./Carousell-Items";
import useCarousel from "../../hooks/use-carousel";
const Carousell = ({ products }) => {
    const length= 4;
    const { count, rightClickable, leftClickable,changeSlide, leftMovingHandler, rightMovingHandler } =
        useCarousel({ length });
    return (
        <section className=" col-10 mx-auto col-md-8 mt-0 pt-0 text-center">
            <CarousellItems
                products={products}
                count={count}
                rigthClick={rightClickable}
                leftClick={leftClickable}
                changeSlide={changeSlide}
                prevCard={leftMovingHandler}
                nextCard={rightMovingHandler}
                length={length}
            />
        </section>
    );
};
export default Carousell;
