import React,{useState} from 'react';
import './promotions.scss';
import promotion from '../../images/desktop/promotion.jpg';
import Button from '../button/Button';
import ModalWindow from '../../components/modalwindow/ModalWindow'


function Promotions(props){
  const[showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(prev => !prev);
  }
  return(
    <section className='promotion'>
      <div className='promotion__container'>
      <div className='promotion__text-box'>
        <h2 className='promotion__title'>акционные<br/> предложения</h2>
        <div className='promotion__row'></div>
        <p className='promotion__text'>При заказе свадебного оформления предоставляется<br/> скидка на букет невесты и бутоньерку в размере 30%</p>
        <Button onClick={openModal}>заказать оформление</Button>
        <ModalWindow showModal={showModal} setShowModal={setShowModal}/>
      </div>
      <div className='promotion__img'>
        <img className='promotion-img' src={promotion} alt="promotion"/>
      </div>
      </div>
    </section>
  )
}

export default Promotions;