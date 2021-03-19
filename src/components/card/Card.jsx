import React from 'react';
import './card.scss';
import Button from '../button/Button';

function Card({ title, id, link, bg }){
  return(
    <div className='card-wrapper'>
      <div className='card' style={{ background: `url(${bg})` }} >
      <div className='card__number'>{id}</div>
      <div>
        <h4 className='card__title'>{title}</h4>
        <Button link={link}>смотреть работы</Button>
      </div>
      </div>
    </div>
  )
}

// 'url(' + bg + ')'
export default Card;