import axios from 'axios';
import { Form, ListGroup, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './CookiesSearch.css';

const CookiesSearch = () => {
    const API_URL = "http://localhost:5000";

    const [cookiesData, setCookiesData] = useState([]);
    const [cookieQuery, setCookieQuery] = useState('');
    const [listCookiesFiltered, setListCookiesFiltered] = useState(false);

    useEffect(() => {
        if (cookieQuery) {
            filterCookies(cookieQuery);
        } else {
            setCookiesData([]);
        }
    }, [cookieQuery]);

    const handleFilterChange = (event) => {
        const { value } = event.target;
        setCookieQuery(value);
        setListCookiesFiltered(false);
    };

    const filterCookies = (nameQuery) => {
        axios
            .get(`${API_URL}/cookie/?name_like=${nameQuery}`)
            .then(({ data }) => setCookiesData(data))
            .catch((error) => console.error(error));
    };

    const handleSelectCookie = () => {
        setListCookiesFiltered(true);
        setCookieQuery('');
        setCookiesData([]);
    };

    return (
        <div className="containerSearch">
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="search.."
                    className="input-search"
                    aria-label="Search"
                    onChange={handleFilterChange}
                    value={cookieQuery}
                />
            </Form>
            {
                !listCookiesFiltered && cookiesData.length > 0 &&
                <ListGroup className='bg-list-group' style={{ position: 'absolute', zIndex: 10 }}>
                    {
                        cookiesData.map((elm, index) => (
                            <ListGroup.Item key={index} className='mini-card-cookie' onClick={handleSelectCookie}>
                                <Link className='link' to={`/cookie/${elm.id}`}>
                                    <Image className='mini-img-cookie-search' src={elm.imageUrl} />
                                    <p className='txt-mini-card'>{elm.name}</p>
                                </Link>
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
            }
        </div>
    );
};

export default CookiesSearch;
