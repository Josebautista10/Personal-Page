import React from 'react'

function Intro() {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-center flex-col items-center'>
        <img src='images/me.png' className='w-1/5 rounded-3xl'/>
        <h1 className='text-white py-3 text-3xl'> Hey! I'm Jose Bautista</h1>
        <h2 className='text-white py-3 text-3xl'>
          A Junior front-end developer who loves to learn and build apps with
          JavaScript
        </h2>
      </div>
      <section className='flex justify-center flex-row space-x-32' >
      <div >
        <h1 className='text-white py-3 text-2xl'>How I became a Juniour dev</h1>
      </div>
      <div>
        <h1 className='text-white py-3 text-2xl'>Project management</h1>
      </div>
      </section>
    </div>
  )
}

export default Intro
