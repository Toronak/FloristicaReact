import React from 'react';
import './catalog.scss';
import Card from '../card/Card';

function Catalog(){
  return(
    <section className='catalog'>
      <div className='catalog__container'>
        <h2 className='catalog__title'>Каталог услуг</h2>
        <div className='catalog__row'></div>
        <div className='catalog__sub-title'>каталог услуг</div>
        <div className='catalog__card-box'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </section>
  )
}
export default Catalog;