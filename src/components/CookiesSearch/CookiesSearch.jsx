import axios from 'axios'
import {Form, Button, Card, Image, ListGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {useState} from 'react'
import './CookiesSearch.css'


const CookiesSearch = ()=>{

    const API_URL = "http://localhost:5000"

    const [cookiesData, setCookiesData] = useState([])
    const [cookieQuery, setCookieQuery] = useState('')

    const handleFilterChange = (event)=>{
        const {value} = event.target;
        setCookieQuery(value)
        filterCookies(value)
    }

    const filterCookies = (nameQuery) =>{
        axios.get(`${API_URL}/cookie/?name_like=${nameQuery}`)
        .then(({data})=> setCookiesData(data))
        .catch((error)=>console.log(error))
    }

    return (
        <div className="containerSearch">
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="search.."
                    className="input-search"
                    aria-label="Search"
                    onChange = {handleFilterChange}
                    value={cookieQuery}
                />
                <Button className="btn-search">Search</Button>
            </Form>
            <ListGroup style={{position: 'absolute', zIndex: 10}}>
                {
                    cookiesData.map((elm)=>{
                        return(
                            <ListGroup.Item>
                                <Link key={elm.id}>
                                    <Image src={elm.imageUrl}/>
                                    <p>{elm.name}</p>
                                </Link>
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
        </div>
    )
}
export default CookiesSearch