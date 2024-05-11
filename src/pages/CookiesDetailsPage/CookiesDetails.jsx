import axios from "axios"
import { useState, useEffect } from "react"
import { Col, Row, Container, ListGroup, Button } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"


const API_URL = "http://localhost:5000"

const CookiesDetailsPage = () => {

    const [cookie, setCookies] = useState({})

    const { cookieId } = useParams()

    useEffect(() => {
        loadCookie()
    }, [])

    const loadCookie = () => {
        axios
            .get(`${API_URL}/cookies/${cookieId}`)
            .then(({ data }) => setCookies(data))
            .catch(err => console.log(err))
    }

    return (

        <Container className="mt-5">
            <Row>
                <Col>
                    <Link to="/Home">
                        <Button as="span" variant="primary" size="sm">
                            Go Back
                        </Button>
                    </Link>
                </Col>
            </Row>
            <Row>

                <Col md={{ span: 6 }}>
                    <img src={cookie.image_url}></img>
                </Col>

                <Col md={{ span: 6 }}>
                    <ListGroup className="mt-0">
                        <h2>{cookie.name}</h2>
                        <h5>Brand : {cookie.brand}</h5>
                        <p>Origin Country : {cookie.origin_country}</p>
                        <p>Bought in : {cookie.buy_country}</p>
                        <p>Available in : {cookie.buy_supermarket}</p>
                        <p>Suitable for Celiac :
                            {
                                <strong> {cookie.celiac ? " Yes " : " No"}</strong>
                            }
                        </p>
                        <p>Ingredients : </p>
                        <ul>
                            {
                                cookie.ingredients?.map((elm) => <li key={elm}>{elm}</li>)
                            }
                        </ul>
                        <p>Allergens : </p>
                        <ol>
                            <li>{cookie.allergen?.cereal ? " Contains cereal " : " Not contains cereal"}</li>
                            <li>{cookie.allergen?.soy ? " Contains soy " : " Not contains soy"}</li>
                            <li>{cookie.allergen?.wheat ? " Contains wheat " : " Not contains wheat"}</li>
                            <li>{cookie.allergen?.milk ? " Contains milk " : " Not contains milk"}</li>
                        </ol>
                        <p>Nutrients : </p>
                        <ul>
                            <li>Kilocalories : {cookie.nutrients?.kcal}</li>
                            <li>Protein : {cookie.nutrients?.protein}</li>
                        </ul>

                    </ListGroup>
                </Col>
                <Col >
                </Col>
                <Col>
                    <Button variant="secondary" size="sm">
                        Edit cookie's details
                    </Button>
                </Col>

                <Col md={{ span: 12 }}>
                    <p>{cookie.description}</p>
                </Col>

                <Col md={{ span: 12 }}>
                    <h4>"Aqui van los comentarios jejej"</h4>
                </Col>

            </Row>

        </Container>

    )
}
export default CookiesDetailsPage