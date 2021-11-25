import React, { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/Ai'
// import "./styles.css";

import Modal from 'react-modal'
import Certificate from './Certificate'

function CertificationsModal() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleModal() {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <button onClick={toggleModal}>Open modal</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel='My dialog'
        className=''
      >
        <div className='flex justify-end'>
          <AiFillCloseCircle
            onClick={toggleModal}
            className='hover:text-red-600 transition duration-500 text-black text-4xl'
          ></AiFillCloseCircle>
        </div>
        <div className='flex justify-center text-3xl'>My certificates</div>
        <div className='bg-red-600 h-4/5 flex justify-center items-center '>
          <div className='flex flex-wrap'>
          <Certificate image={'images/portfolio.png'} title={'Wes Bos Beginner JavaScript'}/>
          <Certificate image={'images/portfolio.png'} title={'Wes Bos Beginner JavaScript'}/>
          <Certificate image={'images/portfolio.png'} title={'Wes Bos Beginner JavaScript'}/>
          <Certificate image={'images/portfolio.png'} title={'Wes Bos Beginner JavaScript'}/>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default CertificationsModal
