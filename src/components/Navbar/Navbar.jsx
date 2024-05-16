import { Container, Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import cookieLogoImg from "../../assets/cookie-navbar2.png"
import CookiesSearch from "../../components/CookiesSearch/CookiesSearch"
import "./Navbar.css"

const Navigation = () => {
    return (

        <Navbar expand="md" className="bg-body-tertiary" data-bs-theme="dark">
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
                <Navbar className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand>Cookies Diary</Navbar.Brand>
                    </Container>
                </Navbar>
                <br />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={`/cookie/add-cookie`}>
                            <Nav.Link href="#link" as='span'>Add a new cookie</Nav.Link>
                        </Link>

                        <Link to={`/reviews/all-reviews`}>
                            <Nav.Link href="#link" as='span'>Reviews</Nav.Link>
                        </Link>

                        <Nav.Link href="#link">Cookies Community</Nav.Link>
                    </Nav>

                </Navbar.Collapse>

                <CookiesSearch />
            </Container>
        </Navbar>

    )
}
export default Navigation