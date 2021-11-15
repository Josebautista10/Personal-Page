import React from 'react'

function Intro() {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-center flex-col items-center'>
        <h1 className='text-white py-3 text-3xl'> Hey! I'm Jose Bautista</h1>
        <img src='images/me.png' className='w-1/5 rounded-3xl' />
        <h2 className='text-white py-3 text-3xl'>
          A Junior front-end developer who loves to learn and build apps with
          JavaScript
        </h2>
      </div>
      <section className='flex flex-row justify-around '>
        <div className='flex flex-col justify-center items-center w-1/2'>
          <h1 className='text-white py-3 text-2xl flex flex-col justify-center items-center'>
            How I became a Juniour dev
          </h1>
          <a className="contents" target="_blank" href='https://medium.com/@cooldj1020/journey-on-becoming-a-junior-software-developer-6bbab139b7f9'>
            <img
              src='images/article.jpeg'
              className='w-7/12 rounded-3xl '
            />
          </a>
          <p className="text-white py-3 ">This is an artcile I wrote on my journey on becoming a Juniour dev</p>
        </div>
        <div className='flex flex-col justify-center items-center w-1/2'>
          <h1 className='text-white py-3 text-2xl'>WorkLand </h1>
          <a className="contents" target="_blank" href='https://github.com/Josebautista10/WorkLand'>
            <img
              src='images/workland.png'
              className='w-6/12 rounded-3xl '
            />
          </a>
          <p className="text-white py-3 ">Gamified project management app that was built by a team of three </p>
        </div>
      </section>
    </div>
  )
}

export default Intro
