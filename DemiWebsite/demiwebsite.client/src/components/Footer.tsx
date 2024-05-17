import { useState } from 'react';
import '../styles/Footer.css';
import '../styles/Shared.css';


function Footer() {


    return (
        <footer>
            <div className="footer-icons">
                <a href="instagram.com"><i className="ri-instagram-fill"></i></a>
                <a href="twitter.com"><i className="ri-twitter-line"></i></a>
            </div>
            <ul>
                <li><a>Use of the site</a></li>
                <li><a>Privacy policy</a></li>
                <li><a>Inquiry</a></li>
            </ul>
        </footer>
    )
}



export default Footer;