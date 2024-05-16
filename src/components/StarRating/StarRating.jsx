import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './StarRating.css';

const StarRating = ({ setRating }) => {

    const [rating, setRatingState] = useState(0);

    const [hover, setHover] = useState(null);

    const handleClick = (currentRate) => {
        setRatingState(currentRate);
        setRating(currentRate);
    };

    return (
        <div>
            {[...Array(5)].map((star, index) => {
                const currentRate = index + 1;
                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="dippingRating"
                            value={currentRate}
                            onClick={() => handleClick(currentRate)}
                            style={{ display: 'none' }}
                        />
                        <FaStar
                            className="StarRating"
                            size={30}
                            color={currentRate <= (hover || rating) ? "green" : "grey"}
                            onMouseEnter={() => setHover(currentRate)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
        </div>
    );
};

export default StarRating;
