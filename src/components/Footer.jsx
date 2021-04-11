import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-link">
        <div className="footer-link-logo">
          <Link to="/">
            <img
              style={{ width: `49.87px`, height: `49.87px` }}
              src={ Logo }
              alt="logo"
            />
          </Link>
        </div>
        <div className="footer-link-common">
          <div className="footer-link-common-type">Products</div>
          <div className="footer-link-common-title">
            <Link to="/">HEADPHONES</Link>
            <Link to="/">EARPHONES</Link>
            <Link to="/">SPEAKERS</Link>
            <Link to="/">ACCESSORIES</Link>
            <Link to="/">COLLABORATIONS</Link>
            <Link to="/">BEATSAUDIO</Link>
            <Link to="/">SPECIAL OFFERS</Link>
          </div>
        </div>
        <div className="footer-link-common">
          <div className="footer-link-common-type">Support</div>
          <div className="footer-link-common-title">          
            <Link to="/">PRODUCT HELP</Link>
            <Link to="/">SERVICE & WARRANTY</Link>
            <Link to="/">REGISTER YOUR BEATS</Link>
            <Link to="/">UPDATE YOUR BEATS</Link>
            <Link to="/">AUTHORIZED SERVICE PROVIDERS</Link>
            <Link to="/">CONTACT SUPPORT</Link>
            <Link to="/">INTERNATIONAL NUMBERS</Link>
          </div>
        </div>
        <div className="footer-link-common">
          <div className="footer-link-common-type">Company</div>
          <div className="footer-link-common-title">          
            <Link to="/">PRODUCT HELP</Link>
            <Link to="/">NEWS AND EVENTS</Link>
            <Link to="/">PROMOTION TERMS</Link>
            <Link to="/">PRIVACY POLICY</Link>
            <Link to="/">TRADEMARK</Link>
            <Link to="/">TERMS OF USE</Link>
            <Link to="/">COOKIES</Link>
          </div>
        </div>
        <div className="footer-link-common">
          <div className="footer-link-common-type">Follow Us</div>
          <div className="footer-link-common-title">
            <Link to="/">No Icon</Link>            
          </div>
        </div>        
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2020 Apple Inc. - All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;