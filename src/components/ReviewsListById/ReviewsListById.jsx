import { Row, Spinner } from "react-bootstrap"
import ReviewCard from "../ReviewCard/ReviewCard"

const ReviewsListById = ({ reviews, isLoading }) => {

    return (
        <div className="ReviewsList" >


            <Row className="mt-5">

                {
                    isLoading
                        ?
                        <Spinner animation="border" />
                        :
                        reviews.map(elm => <ReviewCard key={elm.id} {...elm} />)
                }

            </Row>
        </div >

    )
}
export default ReviewsListById

