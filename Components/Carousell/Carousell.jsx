import { useState, useEffect } from "react";
import CarousellItems from "./Carousell-Items";
import useCarousel from "../../hooks/use-carousel";
const Carousell = ({ products }) => {
    const sliceProcut=products.slice(0,4)
    
    const { count, rightClickable, leftClickable, rightMoving, leftMoving } =
    useCarousel({number:sliceProcut.length});
    return (
        <section className=" col-10 mx-auto col-md-8 mt-0 pt-0 text-center">
            <CarousellItems
                product={sliceProcut[count]}
                rigthClick={rightClickable}
                leftClick={leftClickable}
                prevCard={leftMoving}
                nextCard={rightMoving}
                
            />
        </section>
    );
};
export default Carousell;
