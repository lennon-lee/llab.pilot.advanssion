import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';
import Logo from '../assets/logo.png';

const Footer = ({ isPC }) => {
  let footerLink = "footer-link";
  let footerLinkLogo = "footer-link-logo";
  let footerLinkCommon = "footer-link-common";
  let footerLinkCommonTitle = "footer-link-common-title";
  let footerBottom = "footer-bottom";

  if (!isPC) {
    footerLink = "mobile-footer-link";
    footerLinkLogo = "mobile-footer-link-logo";
    footerLinkCommon = "mobile-footer-link-common";
    footerLinkCommonTitle = "mobile-footer-link-common-title";
    footerBottom = "mobile-footer-bottom";
  }
  return (
    <footer>
      <div className={ footerLink }>
        <div className={ footerLinkLogo }>
          <Link to="/">
            <img
              style={{ width: `49.87px`, height: `49.87px` }}
              src={ Logo }
              alt="logo"
            />
          </Link>
        </div>
        <div className={ footerLinkCommon }>
          <div className="footer-link-common-type">Products</div>
          <div className={`focus ${footerLinkCommonTitle}`}>
            <Link to="/">HEADPHONES</Link>
            <Link to="/">EARPHONES</Link>
            <Link to="/">SPEAKERS</Link>
            <Link to="/">ACCESSORIES</Link>
            <Link to="/">COLLABORATIONS</Link>
            <Link to="/">BEATSAUDIO</Link>
            <Link to="/">SPECIAL OFFERS</Link>
          </div>
        </div>        

        { !isPC && <div className="footer-line"></div> }

        <div className={ footerLinkCommon }>
          <div className="footer-link-common-type">Support</div>
          <div className={ footerLinkCommonTitle }>
            <Link to="/">PRODUCT HELP</Link>
            <Link to="/">SERVICE & WARRANTY</Link>
            <Link to="/">REGISTER YOUR BEATS</Link>
            <Link to="/">UPDATE YOUR BEATS</Link>
            <Link to="/">AUTHORIZED SERVICE PROVIDERS</Link>
            <Link to="/">CONTACT SUPPORT</Link>
            <Link to="/">INTERNATIONAL NUMBERS</Link>
          </div>
        </div>

        { !isPC && <div className="footer-line"></div> }

        <div className={ footerLinkCommon }>
          <div className="footer-link-common-type">Company</div>
          <div className={ footerLinkCommonTitle }>
            <Link to="/">PRODUCT HELP</Link>
            <Link to="/">NEWS AND EVENTS</Link>
            <Link to="/">PROMOTION TERMS</Link>
            <Link to="/">PRIVACY POLICY</Link>
            <Link to="/">TRADEMARK</Link>
            <Link to="/">TERMS OF USE</Link>
            <Link to="/">COOKIES</Link>
          </div>
        </div>

        { !isPC && <div className="footer-line"></div> }

        <div className={ footerLinkCommon }>
          <div className="footer-link-common-type">Follow Us</div>
          <div className={ footerLinkCommonTitle }>
            <Link to="/">No Icon</Link>            
          </div>
        </div>        
        <div className={ footerBottom }>
          Copyright © 2020 Apple Inc. - All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer;