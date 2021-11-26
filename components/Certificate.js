import React from 'react'

function Certificate(props) {
  return (
    <div className="flex flex-col justify-between  w-1/5	rounded-md text-white certificate">
      <p className='flex justify-center items-center flex-end '>
        {props.title}
      </p>
      <img className=" flex justify-center rounded-md"src={props.image} />

    </div>
  )
}

export default Certificate
