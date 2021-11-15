import React from 'react'

function SkillsCardList(props) {
  console.log(props.Skills)
  const skillListItem = props.Skills.map((skill) => (
    <li className='border-b border-white'>{skill}</li>
  ))
  return (
    <>
      {skillListItem}
    </>
  )
}

export default SkillsCardList
