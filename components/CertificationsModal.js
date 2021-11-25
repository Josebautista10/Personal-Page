import React, { useState } from "react";
// import "./styles.css";

import Modal from "react-modal";

function CertificationsModal() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div >
      <button onClick={toggleModal}>Open modal</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className=""
      >
        <div>My modal dialog.</div>
        <button onClick={toggleModal}>Close modal</button>
      </Modal>
    </div>
  );
}

export default CertificationsModal