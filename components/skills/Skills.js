import React from 'react'
import SkillsCard from './SkillsCard'

function Skills() {
  const skillsArr = [
    'Html5',
    'CSS3',
    'JavaScript',
    'React',
    'BootStrap',
    'Chakra Ui',
    'SQL',
    'Node.js',
    'Git',
    'Vscode',
    'Figma',
    'Heroku',
    'Netlify'
  ]
  return (
    <div className='border-2 border-white w-1/4'>
      <SkillsCard title={'Skills'} Skills={skillsArr}></SkillsCard>
    </div>
  )
}

export default Skills
