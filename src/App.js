import React, { useState } from 'react';

import Header from './components/Header';
import ImageGallery from './components/ImageGallery';
import Footer from './components/Footer';

import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState("");

  const openModal = (index) => {
      setModalImg(`./images/0${index+1}.png`);
      setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <div className="App">
      { showModal && 
        <div className="modal modal_active">
          <div className="modal_content">
              <img src={modalImg} id="modal_img" alt="modal example"/>
          </div>
          <span id="bt_close" onClick={() => closeModal()}>&times;</span>
      </div>}

      <Header />
      <ImageGallery openModal={openModal} />
      <Footer />
    </div>
  );
}

export default App;
