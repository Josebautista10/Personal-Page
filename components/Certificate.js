import React from 'react'

function Certificate(props) {
  return (
    <div className="flex-column bg-blue-600 w-1/5">
      <img className=" flex justify-center"src={props.image} />
      <p className='flex justify-center'>
        {props.title}
      </p>
    </div>
  )
}

export default Certificate
