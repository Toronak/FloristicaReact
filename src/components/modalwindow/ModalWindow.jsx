import React from 'react';
import './modalwindow.scss';
import modalImg from '../../images/desktop/modal-img.png';

function ModalWindow({showModal, setShowModal}){
  return (
    <>
    {showModal ? (
    <div className="modal__wrapper">
      <div className="modal">
        <div className="modal__img-box">
          <img src={modalImg} alt="flover" />
        </div>
        <div className="modal__body-box">
          <div className="modal__body-close" >
            <span></span>
          </div>
          <h2 className="modal__body-title">Оставьте свой номер и мы вам перезвоним!</h2>
          <form action="">
            <label>
              <input type="text" placeholder="Имя" />
            </label>
            <label>
              <input type="tel" placeholder="Телефон" />
            </label>
            <button className="modal__body-btn"  onClick={() => setShowModal(prev => !prev)}>позвоните мне</button>
          </form>
        </div>
      </div>
    </div>
    ) : null}
    </>
  )
}
export default ModalWindow;