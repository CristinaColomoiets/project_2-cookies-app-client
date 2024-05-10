import { Container } from "react-bootstrap"
import CookiesList from "../../components/CookiesList/CookiesList"
import Navigation from "../../components/Navbar/Navbar"

const HomePage = () => {
    return (
        <div className="HomePage">
            <Navigation />
            <Container>
                <h1>Listado de cookies</h1>
                <hr />
                <CookiesList />
            </Container>
        </div>
    )
}
export default HomePage