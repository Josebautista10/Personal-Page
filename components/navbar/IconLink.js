import React from 'react'

function IconLink(props) {
  const {link, className,icon} = props
  
  return (
    <a
      href={link}
      className={className}
      target='_blank'
    >
      {icon}
    </a>
  )
}

export default IconLink
