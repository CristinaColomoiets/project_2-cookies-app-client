import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'
import cookieLogoImg from "../../assets/cookie-navbar2.png"
import instagramImg from "../../assets/instagram.png"
import githubImg_1 from "../../assets/github_1.png"
import githubImg_2 from "../../assets/github_2.png"





function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })};

    return (
        <div className="footerContainer">
            <div className="left">
                <Link className='link'>about</Link>
                <Link to=''>
                    <img
                        src={cookieLogoImg}
                        height="25"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                        onClick={scrollToTop}
                    />
                </Link>
            </div>
            <div className="right">
                <div className="box-colaboration">
                    <p className='txt-name'>Diego Cerezo:</p>
                    <a href='https://github.com/89cherry'>
                        <img src={githubImg_1} alt="github-icon" height="25"/>
                    </a>
                </div>
                <div className="box-colaboration">
                    <p className='txt-name'>Cristina Kolomoiets:</p>
                    <a href='https://github.com/CristinaColomoiets'>
                        <img src={githubImg_2} alt="github-icon" height="25"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;