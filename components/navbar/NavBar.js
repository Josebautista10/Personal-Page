import React from 'react'
import { SiLinkedin, SiGithub } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import IconLink from './IconLink'

function NavBar() {
  return (
    <div>
      <div className='flex py-4 px-8  w-full'>
        <div className='flex  lg:w-2/12 md:w-3/12 sm:w-3/12 xsm:w-4/12 2xsm:w-6/12 lg:text-3xl	md:text-2xl sm:text-lg text-white'>
          <h1>Jose Bautista</h1>
        </div>
        <div className='w-full flex justify-end'>
          <div className='flex justify-around  2xsm:w-5/12  xsm:w-3/12 sm:w-3/12 md:w-3/12 lg:w-2/12'>
            <IconLink
              link={'https://www.linkedin.com/in/jose-bautista-a323b6217/'}
              className={
                'flex justify-center transition duration-500 text-white hover:text-blue-600 xs:text-lg  sm:text-xl  md:text-2xl lg:text-3xl'
              }
              icon={<SiLinkedin></SiLinkedin>}
            />
            <IconLink
              link={'https://github.com/Josebautista10'}
              className={
                'flex justify-center text-white hover:text-yellow-200 transition duration-500 xs:text-lg  sm:text-xl  md:text-2xl lg:text-3xl'
              }
              icon={<SiGithub></SiGithub>}
            />
            <IconLink
              link={'mailto:cooldj1020@gmail.com'}
              className={
                'flex justify-center text-white hover:text-red-300 transition duration-500 xs:text-lg  sm:text-xl  md:text-2xl lg:text-3xl'
              }
              icon={<MdEmail />}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
