import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Header.css';
import { ReactComponent as BurgerIcon } from '../assets/burger.svg';
import Logo from '../assets/logo.png';
import SearchIcon from '../assets/search.png';
import ProfileIcon from '../assets/profile.png';
import BuyIcon from '../assets/buy.png';

const Header = ({ isPC }) => {
  return (
    <header>
      <div
        className="nav"
        style={{ paddingLeft: isPC ? `93px` : `27px`, paddingRight: isPC ? `93px` : `27px` }}
      >
        <div className="logo-wrapper">
          <Link to="/">
            <img
              style={{ width: `49.87px`, height: `49.87px` }}
              src={ Logo }
              alt="logo"
            />
          </Link>
        </div>
        { 
          isPC &&
          <>
            <div className="menu-wrapper">
              <div className="menu-item">
                <Link to="/headphones">HEADPHONES</Link>
              </div>
              <div className="menu-item">
                <Link to="/earphones">EARPHONES</Link>
              </div>
              <div className="menu-item">
                <Link to="/speakers">SPEAKERS</Link>
              </div>
              <div className="menu-item">
                <Link to="/explore">EXPLORE</Link>
              </div>
            </div>
            <div className="quick-icon">
              <div style={{ display: `inline-block`, position: `relative`, right: `94px` }}>
                <Link to="/">
                  <img
                    style={{ width: `25px`, height: `25px` }}
                    src={ SearchIcon }
                    alt="searchIcon"            
                  />
                </Link>
              </div>
              <div style={{ display: `inline-block`, position: `relative`, right: `47px` }}>
                <Link to="/">
                  <img
                    style={{ width: `27px`, height: `27px` }}
                    src={ ProfileIcon }
                    alt="profileIcon"            
                  />
                </Link>
              </div>
              <div style={{ display: `inline-block`, position: `relative`, right: `0px` }}>
                <Link to="/">
                  <img
                    style={{ width: `27px`, height: `25px` }}
                    src={ BuyIcon }
                    alt="buyIcon"            
                  />
                </Link>
              </div>
            </div>
          </> 
        }
        {
          !isPC &&
          <>
            <div className="mobile-menu">
              <BurgerIcon />
            </div>          
          </>
        }
      </div>
    </header>
  )
}

Header.propTypes = {
  isPC: PropTypes.bool.isRequired,
}

export default Header;