import React from 'react';
import './card.scss';
import Button from '../button/Button';

function Card(){
  return(
    <div className='card'>
      <div className='card__number'>01</div>
      <div>
        <h4 className='card__title'>букет невесты и свадебное оформление</h4>
        <Button>смотреть работы</Button>
      </div>
    </div>
  )
}

export default Card;