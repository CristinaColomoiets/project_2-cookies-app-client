import heartOn from "./../../assets/hearton.svg";
import heartOff from "./../../assets/heartoff.svg";
import './LikeButton.css';

import { useState } from "react";

const LikeButton = ({ checked, setLike }) => {
    const [counter, setCounter] = useState(0);

    const handleLike = () => {
        setLike(!checked);
        !checked ? incrementCounter() : decrementCounter();
    };

    const decrementCounter = () => {
        setCounter(counter - 1);
    };

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    return (
        <div className="LikeButton">
            <img
                src={checked ? heartOn : heartOff}
                alt="Like button"
                onClick={handleLike}
                height={40}
                width={40}
            />
        </div>
    );
};

export default LikeButton;
