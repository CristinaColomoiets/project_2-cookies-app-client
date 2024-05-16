import heartOn from "./../../assets/hearton.svg"
import heartOff from "./../../assets/heartoff.svg"
import { useState } from 'react'
import './LikeButton.css'

const LikeButton = () => {

    const [doesLike, setDoesLike] = useState(false)

    const [counter, setCounter] = useState(0)

    const handleLike = () => {
        setDoesLike(!doesLike)
        !doesLike ? incrementCounter() : decrementCounter()

    }

    const decrementCounter = () => {
        setCounter(counter - 1)
    }


    const incrementCounter = () => {
        setCounter(counter + 1)
    }

    return (
        <div className="LikeButton">
            <img
                src={doesLike ? heartOn : heartOff}
                alt="Like button"
                onClick={handleLike}
                height={40}
                width={40}

            />


        </div>
    )
}

export default LikeButton