import React from 'react';
import './header.scss';
import Button from '../button/Button';
import SocialIcons from '../social-icons/SocialIcons';
import logo from '../../images/desktop/logo.png';
import gradient from '../../images/desktop/header-gragient.png';
import row from '../../images/desktop/header-row.svg';

function Header() {
  return (
    <header className='header'>
      <div className='header__top-box'>
        <a href='/'><img className='header__logo' src={logo} alt="logo" /></a>
        <div className='header__menu'>
          <div className='header__menu-box'>
            <span className='header__menu-row'></span>
          </div>
          <p className='header__menu-text'>меню</p>
        </div>
      </div>
      <div className='header__center-box'>
        <h1 className='header__title'>флористика<br /> с душком</h1>
        <Button>смотреть работы</Button>
      </div>
      <div className='header__bot-box'>
        <SocialIcons />
        <svg className='header__mouse' width="38" height="56" viewBox="0 0 38 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1.20913" y="0.35" width="35.5817" height="55.3" rx="17.7908" fill="#240000" fillOpacity="0.3" stroke="white" strokeWidth="0.7" />
          <path d="M19 9.4649L19 18.9297" stroke="white" strokeWidth="0.7" />
        </svg>
        <div className='header__catalog'>
          <p className='header__catalog-text'>смотреть каталог</p>
          <img  className='header__catalog-img' src={row} alt="row" />
        </div>
      </div>
      <img className='header__gradient' src={gradient} alt='gradient'></img>
    </header>
  )
}

export default Header;