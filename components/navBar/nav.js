import { SiLinkedin, SiGithub } from 'react-icons/si'

const NavBar = () => {
  return (
    <>
      <div className='flex flex-wrap py-4 px-8  w-full'>

        <div className='w-full flex justify-end items-center space-x-4 transform text-2xl'>
          <div className='flex justify-around w-1/12	'>
          <a
            href='https://www.linkedin.com/in/jose-bautista-a323b6217/'
            className='flex justify-center transition duration-500 transform scale-150 text-blue-600 hover:bg-white'
            target='_blank'
          >
            <SiLinkedin className=''></SiLinkedin>
          </a>

          <a
            href='https://github.com/Josebautista10'
            className='flex justify-center transform scale-150 text-white hover:text-yellow-200 transition duration-500'
            target='_blank'
          >
            <SiGithub></SiGithub>
          </a>

          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
