import { Col, Container, Row } from "react-bootstrap"
import './AboutPage.css'
import imgCris from '../../assets/cris-img-about.jpg'
import imgDiego from '../../assets/diego-img-about.png'


const AboutPage = () =>{
    return(
        <Container className="container-about">
            <h1>Hey there, we are Diego and Cristina's team!</h1>
            <Row>
                <Col md={{span: 4}}>
                    <img className="img-team" src={imgCris} alt="image Developer Cristina" />
                </Col>
                <Col md={{span: 4}}>
                    <p>We are two Frontend Developers who carried out a second project at Ironhack.
                       This project is made in React, with technologies such as react bootstrap and Git.
                       We practice what we have learned and apply in this project using React components, connecting them and building our first website made in React.
                    </p>
                    <p>We love cookies, they were our emotional support throughout the Bootecamps =))).
                        That's why we were clear about the theme of our project..
                        So we invite you to enjoy with us.
                    </p>
                </Col>
                <Col md={{span: 4}}>
                    <img className="img-team" src={imgDiego} alt="image Developer Diego" />
                </Col>
            </Row>
        </Container>
    )
}

export default AboutPage