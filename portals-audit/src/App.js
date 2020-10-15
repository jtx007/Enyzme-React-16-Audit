import React, {useState} from 'react';
import Modal from './Modal'
const App = () => {
  
  const [isModalOpen, setModalOpen] = useState(false)
  const toggleModal = () => setModalOpen(!isModalOpen)
  return (
    <>
      <button className="show-modal-button" onClick={toggleModal}>Show Modal</button>
      <Modal isOpen={isModalOpen}>
        <button onClick={toggleModal}>close modal</button>
      </Modal>
    </>
  );
}

export default App;
