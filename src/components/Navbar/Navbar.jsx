import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import cookieLogoImg from "../../assets/cookie-navbar2.png"

const Navigation = () => {
    return (

        <Navbar expand="md" className="bg-body-tertiary" data-bs-theme="white">
            <Container>
                <Link to="/Home">
                    <Navbar.Brand as="span" href="#home">
                        <img
                            src={cookieLogoImg}
                            width="20"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />

                    </Navbar.Brand>
                </Link>

                <br />
                <Navbar className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand>My cookies diary</Navbar.Brand>
                    </Container>
                </Navbar>
                <br />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#link">Add a new cookie</Nav.Link>
                        <Nav.Link href="#link">Reviews</Nav.Link>
                        <Nav.Link href="#link">Cookies Community</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
export default Navigation