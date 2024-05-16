import { Container, Row, Col, Button } from "react-bootstrap";
import CookiesList from "../../components/CookiesList/CookiesList";
import axios from "axios";
import { useState, useEffect } from "react";
import "../HomePage/HomePage.css"

const HomePage = () => {
    const API_URL = import.meta.env.VITE_API_URL;

    const [cookies, setCookies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAllCookies();
    }, []);

    const getAllCookies = () => {
        setIsLoading(true);
        axios
            .get(`${API_URL}/cookie`)
            .then(({ data }) => {
                setIsLoading(false);
                setCookies(data);
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
            });
    };

    const getKidsCookies = () => {
        setIsLoading(true);
        axios
            .get(`${API_URL}/cookie?forKids=true`)
            .then(({ data }) => {
                setIsLoading(false);
                setCookies(data.filter(cookie => cookie.forKids));
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
            });
    };

    const getCeliacCookies = () => {
        setIsLoading(true);
        axios
            .get(`${API_URL}/cookie`)
            .then(({ data }) => {
                setIsLoading(false);
                setCookies(data.filter(cookie => cookie.celiac));
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
            });
    };

    const getBestDippingCookies = () => {
        setIsLoading(true);
        axios
            .get(`${API_URL}/cookie`)
            .then(({ data }) => {
                setIsLoading(false);
                setCookies(data.filter(cookie => Number(cookie.dippingRating) >= 5));
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
            });
    };


    return (
        <div className="HomePage">

            <div class="d-flex justify-content-around " >

                <Button className="filterButtons" as='span' variant="outline-success" onClick={getAllCookies}>All cookies</Button>


                <Button className="filterButtons" as='span' variant="outline-success" onClick={getKidsCookies}>For Kids</Button>


                <Button className="filterButtons" as='span' variant="outline-success" onClick={getCeliacCookies}>For celiac</Button>


                <Button className="filterButtons" as='span' variant="outline-success" onClick={getBestDippingCookies}>Best dipping</Button>

            </div>

            <Container>
                <Row>
                    <Col md={{ span: 3 }}>
                        <Button as='span' variant="outline-success" onClick={getAllCookies}>All cookies</Button>
                    </Col>

                    <Col md={{ span: 3 }}>
                        <Button as='span' variant="outline-success" onClick={getKidsCookies}>For Kids</Button>
                    </Col>

                    <Col md={{ span: 3 }}>
                        <Button as='span' variant="outline-success" onClick={getCeliacCookies}>For celiac</Button>
                    </Col>

                    <Col md={{ span: 3 }}>
                        <Button as='span' variant="outline-success">Best dipping</Button>
                        {/* onClick={getBestDippingCookies} */}
                    </Col>
                </Row>
                <CookiesList isLoading={isLoading} cookies={cookies} />
            </Container>
        </div>
    );
};

export default HomePage;
