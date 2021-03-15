import React from 'react';
import Navbar from '../navbar/Navbar';
import SocialIcons from '../social-icons/SocialIcons';
import './footer.scss';

function Footer(){
  return(
    <div className='footer'>
      <hr className='footer__row'/>
      <Navbar />
      <SocialIcons/>
    </div>
  )
};

export default Footer;
