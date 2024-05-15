import { Container } from "react-bootstrap"
import CookiesList from "../../components/CookiesList/CookiesList"


const HomePage = () => {
    return (
        <div className="HomePage">
            <Container>
                <h1>Listado de cookies</h1>
                <hr />
                <CookiesList />

            </Container>
        </div>
    )
}
export default HomePage