import { useEffect, useState } from "react";

const useCarousale = ({ length }) => {
    const [count, setCount] = useState(0);
    const [rightClickable, setRightClickable] = useState(true);
    const [leftClickable, setLeftClickable] = useState(true);
    const [changeSlide, setChangeSlide] = useState(false);
    const rightMovingHandler = () => {
        if (count === 3) {
            setRightClickable(false);
            return;
        }
        setCount((prevPro) => prevPro + 1);

        if (count >= 0) {
            setLeftClickable(true);
        }
    };
    const leftMovingHandler = () => {
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
        setChangeSlide(true);
        switch (count) {
            case 3:
                setRightClickable(false);
                break;
            case 1:
                setLeftClickable(true);
                break;
            case 0:
                setRightClickable(true);
                setLeftClickable(false);
                break;
        }

        const next = (count + 1) % length;
        setTimeout(() => {
            setChangeSlide(false);
        }, 800);
        const timer = setTimeout(() => {
            setCount(next);
        }, 5000);
        return () => clearTimeout(timer);
    }, [count]);

    return {
        count,
        rightClickable,
        leftClickable,
        rightMovingHandler,
        leftMovingHandler,
        changeSlide,
    };
};
export default useCarousale;
