import React from 'react'
import { SiLinkedin, SiGithub } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import IconLink from './IconLink'

function NavBar() {
  return (
    <div>
      <div className='flex py-4 px-8  w-full'>
      <div className='flex justify-around w-2/12 text-3xl	text-white'>
        <h1>Jose Bautista</h1>
      </div>
        <div className='w-full flex justify-end'>
          
          <div className='flex justify-around w-2/12 text-2xl	'>
            <IconLink
              link={'https://www.linkedin.com/in/jose-bautista-a323b6217/'}
              className={
                'flex justify-center transition duration-500 transform scale-150 text-white hover:text-blue-600'
              }
              icon={<SiLinkedin></SiLinkedin>}
            />
            <IconLink
              link={'https://github.com/Josebautista10'}
              className={
                'flex justify-center transform scale-150 text-white hover:text-yellow-200 transition duration-500'
              }
              icon={<SiGithub></SiGithub>}
            />
            <IconLink
              link={'mailto:cooldj1020@gmail.com'}
              className={
                'flex justify-center transform scale-150 text-white hover:text-red-300 transition duration-500'
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
