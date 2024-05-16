import { Container, Navbar, Nav} from "react-bootstrap"
import { Link } from "react-router-dom"
import cookieLogoImg from "../../assets/cookie-navbar2.png"
import CookiesSearch from "../../components/CookiesSearch/CookiesSearch"
import './Navbar.css'


const Navigation = () => {
    return (

        <Navbar expand="md" className="bg-custom-nav">
            <Container>
                <Link to="/" href="/">
                    <img
                        src={cookieLogoImg}
                        height="35"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Link>

                <br />
                <Navbar className="bg-custom-nav">
                    <Container>
                        <Navbar.Brand className="name-logo-navbar">Cookies Diary</Navbar.Brand>
                    </Container>
                </Navbar>
                <br />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="link" to={`/cookie/add-cookie`}>
                            <Nav.Link className="txt-navbar" href="#link" as='span'>Add a new cookie</Nav.Link>
                        </Link>

                        <Link className="link" to={`/reviews/all-reviews`}>
                            <Nav.Link className="txt-navbar" href="#link" as='span'>Reviews</Nav.Link>
                        </Link>

                        <Nav.Link className="txt-navbar" href="#link">Cookies Community</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CookiesSearch />
            </Container>
        </Navbar>

    )
}
export default Navigation