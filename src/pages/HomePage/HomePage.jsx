import { Container } from "react-bootstrap"
import CookiesList from "../../components/CookiesList/CookiesList"

const HomePage = () => {
    return (
        <div className="HomePage">
            <Container>
                <CookiesList />
            </Container>
        </div>
    )
}
export default HomePage