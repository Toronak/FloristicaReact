import React from 'react';
import './navbar.scss';

function Navbar(){
  return(
    <>
      <nav className="navbar-box">
        <a className="navbar-box__item" href="">Cвадебная флористика</a>
        <a className="navbar-box__item" href="">Букеты на любые мероприятия</a>
        <a className="navbar-box__item" href="">Букеты невесты</a>
        <a className="navbar-box__item" href="">Композиции</a>
        <a className="navbar-box__item" href="">Оформление мероприятий</a>
      </nav>
    </>
  )
} 
export default Navbar;