import React from 'react';
import './catalog.scss';
import Card from '../card/Card';
import card1 from '../../images/desktop/bg-card1.jpg';
import card2 from '../../images/desktop/bg-card2.jpg';
import card3 from '../../images/desktop/bg-card3.png';
import card4 from '../../images/desktop/bg-card4.png';


const arr = [
  {id: 1, bg: card1, title: 'букет невесты и свадебное оформление', link: '1'},
  {id: 2, bg: card2, title: 'букеты на торжества', link: '2'},
  {id: 3, bg: card3, title: 'композиции', link: '3'},
  {id: 4, bg: card4, title: 'оформление мероприятий', link: '4'},
]

function Catalog(){
  return(
    
    <section className='catalog'>
      <div className='catalog__container'>
        <h2 className='catalog__title'>Каталог услуг</h2>
        <div className='catalog__row'></div>
        <div className='catalog__sub-title'>каталог услуг</div>
        <div className='catalog__card-box'>
          {arr.map(card => <Card key={card.id} {...card} />)}
        </div>
      </div>
    </section>
  )
}
export default Catalog;