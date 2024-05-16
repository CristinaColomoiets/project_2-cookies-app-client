import { Row, Spinner } from "react-bootstrap"
import ReviewCard from "../ReviewCard/ReviewCard"

const ReviewsListById = ({ reviews, isLoading }) => {

    return (
        <div className="ReviewsList" >

            {
                isLoading
                    ?
                    <Spinner animation="border" />
                    :
                    reviews.map(elm => <ReviewCard class="shadow-lg p-3 mb-5 bg-white rounded" key={elm.id} {...elm} />)
            }

        </div >

    )
}
export default ReviewsListById

