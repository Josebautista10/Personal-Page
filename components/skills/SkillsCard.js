import React from 'react'
import SkillsCardList from './SkillsCardList'

function SkillsCard(props) {
  const {title, Skills} = props
  console.log(Skills);
  return (
    <>
      <h1 className='flex text-white py-3 text-3xl justify-center'>{title}</h1>
          <ul className='text-white '>
          <SkillsCardList Skills={Skills}></SkillsCardList>
          </ul>
    </>
  )
}

export default SkillsCard
