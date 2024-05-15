import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './StarRating.css';

const StarRating = ({ setRating }) => {
    const [hover, setHover] = useState(null);

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
                            onClick={() => setRating(currentRate)}
                            style={{ display: 'none' }}
                        />
                        <FaStar
                            className="StarRating"
                            size={30}
                            color={currentRate <= (hover || null) ? "blue" : "grey"}
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
