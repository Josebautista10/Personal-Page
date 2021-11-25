import React from 'react'

function Certificate(props) {
  return (
    <div className="flex-column bg-blue-600 h-2/5 w-2/5">
      <img src={props.image} />
      <p className='flex justify-center items-center'>
        {props.title}
      </p>
    </div>
  )
}

export default Certificate
