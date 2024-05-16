import axios from 'axios'
import {Form, Button, Card, Image, ListGroup} from 'react-bootstrap';
import {Link, useParams} from 'react-router-dom'
import {useState} from 'react'
import './CookiesSearch.css'


const CookiesSearch = ()=>{

    const API_URL = "http://localhost:5000"

    const [cookiesData, setCookiesData] = useState([])
    const [cookieQuery, setCookieQuery] = useState('')
    const {cookieId} = useParams()

    const [listCookiesFiltered, setListCookiesFiltered] = useState(false)

    const handleFilterChange = (event)=>{
        const {value} = event.target;
        setCookieQuery(value)
        setListCookiesFiltered(false)
        filterCookies(value)
    }

    const filterCookies = (nameQuery) =>{
        axios
        .get(`${API_URL}/cookie/?name_like=${nameQuery}`)
        .then(({data})=> setCookiesData(data))
        .catch((error)=>console.log(error))
    }

    const handleSelectCookie = (boolean)=>{
        setListCookiesFiltered(boolean)
        setCookieQuery('')
        setCookiesData([])
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
            </Form>
            {
                !listCookiesFiltered ?
                <ListGroup className='bg-list-group' style={{position: 'absolute', zIndex: 10}}>
                    {
                        cookiesData.map((elm, index)=>{
                            return(
                                <ListGroup.Item key={index} className='mini-card-cookie' onClick={()=>handleSelectCookie(true)}>
                                    <Link className='link' to={`/cookie/${elm.id}`}>
                                        <Image className='mini-img-cookie-search' src={elm.imageUrl}/>
                                        <p className='txt-mini-card'>{elm.name}</p>
                                    </Link>
                                </ListGroup.Item>
                            )
                        })
                    }
                </ListGroup>
                
                :
                setListCookiesFiltered(true)
            }
        </div>
    )
}
export default CookiesSearch