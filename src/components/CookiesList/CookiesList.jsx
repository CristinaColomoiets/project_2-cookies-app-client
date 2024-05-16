import { Col, Row, Spinner } from "react-bootstrap"
import CookieCard from "../CookieCard/CookieCard"


const CookiesList = ({ isLoading, cookies }) => {




    return (
        <div className="CookiesList" >
            {
                isLoading ?
                    <Spinner animation="border" />

                    :
                    <Row className="mt-5">
                        {
                            cookies.map((eachCookie) => {
                                return (
                                    <Col md={{ span: 3 }} key={eachCookie.id}>
                                        <CookieCard {...eachCookie} />
                                    </Col>
                                )
                            })
                        }
                    </Row>

            }
        </div >

    )
}
export default CookiesList

