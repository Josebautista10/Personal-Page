import React from 'react'

function SkillsCardList(props) {
  console.log(props.Skills)
  const skillListItem = props.Skills.map((skill) => (
    <li className='border-white ml-2 mb-1' key={skill}>{skill}</li>
  ))
  return (
    <>
      {skillListItem}
    </>
  )
}

export default SkillsCardList
