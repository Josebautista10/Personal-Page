import React, { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
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
    <div className="group bg-white hover:bg-green-500 rounded-lg text-black hover:shadow-lg focus:outline-none transition duration-700">

      <button className=' rounded-lg p-1 hover:text-white transition duration-700 focus:outline-none' onClick={toggleModal}>View Certificates</button>
    </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel='My dialog'
        portalClassName="modal"
        closeTimeoutMS={500}
      >
        <div className='flex justify-end'>
          <AiFillCloseCircle
            onClick={toggleModal}
            className='hover:text-red-700 transition duration-700 text-white text-4xl mr-2 mt-2 cursor-pointer'
          ></AiFillCloseCircle>
        </div>
        <section className='bg-green-400 h-full flex-col flex'>
        <div className='flex justify-center text-3xl text-white' >My Certificates</div>
        <hr/>
        <div className=' h-full flex items-center justify-around flex-col'>
          <div className='flex-col  text-white w-1/4 rounded-md certificate'>
            <p className='flex justify-center text-2xl'>LightHouse Labs Diploma</p>
            <img className=' flex justify-center rounded-md' src='images/certificate/LHL-diploma.png' />
          </div>
          <div className='flex flex-wrap justify-around'>
            <Certificate
              image={'images/certificate/Css.png'}
              title={'FreeCodeCamp Web Development'}
            />
            <Certificate
              image={'images/certificate/JavaScript.png'}
              title={'FreeCodeCamp JavaScript'}
            />
            <Certificate
              image={'images/certificate/wesbos.png'}
              title={'Wes Bos Beginner JavaScript'}
            />
            <Certificate
              image={'images/certificate/epicReact.png'}
              title={'Epic React Fundamentals'}
            />
          </div>
        </div>
        </section>
      </Modal>
    </div>
  )
}

export default CertificationsModal
