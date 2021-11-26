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
        portalClassName="modal"
      >
        <div className='flex justify-end'>
          <AiFillCloseCircle
            onClick={toggleModal}
            className='hover:text-red-600 transition duration-500 text-black text-4xl'
          ></AiFillCloseCircle>
        </div>
        <section className='bg-red-600 h-full flex-col flex'>
        <div className='flex justify-center text-3xl'>My certificates</div>
        <div className='bg-red-600 h-full flex items-center justify-around flex-col'>
          <div className='flex-col bg-blue-600 w-1/3'>
            <img className=' flex justify-center' src='images/portfolio.png' />
            <p className='flex justify-center'>props.title</p>
          </div>
          <div className='flex flex-wrap justify-around'>
            <Certificate
              image={'images/portfolio.png'}
              title={'Wes Bos Beginner JavaScript'}
            />
            <Certificate
              image={'images/portfolio.png'}
              title={'Wes Bos Beginner JavaScript'}
            />
            <Certificate
              image={'images/portfolio.png'}
              title={'Wes Bos Beginner JavaScript'}
            />
            <Certificate
              image={'images/portfolio.png'}
              title={'Wes Bos Beginner JavaScript'}
            />
          </div>
        </div>
        </section>
      </Modal>
    </div>
  )
}

export default CertificationsModal
