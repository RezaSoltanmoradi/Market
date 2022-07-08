import { useEffect, useState } from "react";

const useCarousale = ({ number }) => {
    const [count, setCount] = useState(0);
    const [rightClickable, setRightClickable] = useState(true);
    const [leftClickable, setLeftClickable] = useState(true);

    const rightMoving = () => {
        if (count === 3) {
            setRightClickable(false);
            return;
        }
        setCount((prevPro) => prevPro + 1);

        if (count >= 0) {
            setLeftClickable(true);
        }
    };
    const leftMoving = () => {
        if (count === 0) {
            setLeftClickable(false);
            return;
        }
        setCount((prevPro) => prevPro - 1);
        if (count <= 3) {
            setRightClickable(true);
        }
    };
    useEffect(() => {
       
        const next = (count + 1) % number;
        const timer = setTimeout(() => setCount(next), 3000);
        return () => clearTimeout(timer);
    }, [count]);

    return {
        count,
        rightClickable,
        leftClickable,
        rightMoving,
        leftMoving,
    };
};
export default useCarousale;
