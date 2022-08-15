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
