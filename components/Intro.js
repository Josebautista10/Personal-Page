import React, { useState, useEffect } from 'react';
import CertificationsModal from './CertificationsModal'

function Intro() {
  const [width, setWidth] = useState(null);
  
  useEffect(() => {
    setWidth(window.innerWidth)
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

console.log(width)
  const showModal = () => {
    return width >= 600
  }
  
  return (
    <div className='flex flex-col'>
      <div className='flex justify-center flex-col items-center animate-fade'>
        <img src='images/me.png' className='w-1/5 rounded-3xl floating ' />
        <h2 className='text-white py-3   sm:text-lg md:text-xl lg:text-2xl	 mt-3'>
          I'm a Junior Front-end Developer who loves to learn and build apps with
          JavaScript
        </h2>
        {showModal() && <CertificationsModal/> }
      </div>
      
      <section className='flex flex-row justify-around '>
        <div className='flex flex-col justify-center items-center w-1/2' >
          <h1 className='text-white py-3 sm:text-lg md:text-xl lg:text-2xl flex flex-col justify-center items-center'>
            How I became a Junior dev
          </h1>g
          <a className="contents " target="_blank" href='https://medium.com/@cooldj1020/journey-on-becoming-a-junior-software-developer-6bbab139b7f9'>
            <img
              src='images/article.jpeg'
              className='w-7/12 rounded-3xl card'
            />
          </a>
          <p className="text-white py-3 sm:text-base md:text-lg lg:text-xl">This is an article I wrote becoming a Junior dev</p>
        </div>
        <div className='flex flex-col justify-center items-center w-1/2'>
          <h1 className='text-white py-3 sm:text-lg md:text-xl lg:text-2xl'>WorkLand </h1>
          <a className="contents" target="_blank" href='https://github.com/Josebautista10/WorkLand'>
            <img
              src='images/workland.png'
              className='w-6/12 rounded-3xl card'
            />
          </a>
          <p className="text-white py-3 sm:text-base md:text-lg lg:text-xl ">Gamified project management app that was built by a team of three </p>
        </div>
      </section>
    </div>
  )
}

export default Intro
