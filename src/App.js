import React from 'react';
import Footer from './components/footer/Footer';
import Promotions from './components/promotions/Promotions';
import Catalog from './components/catalog/Catalog';
import Header from './components/header/Header';
import ModalWindow from './components/modalwindow/ModalWindow';

function App() {
  return (
    <>
    <Header/>
    <Catalog/>
    <Promotions/>
    <Footer/>
    </>
  );
}

export default App;
