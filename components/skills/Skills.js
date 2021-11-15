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
    'TailwindCSS',
    'SQL',
    'Node.js',
    'Git',
    'Vscode',
    'Figma',
    'Heroku',
    'Netlify'
  ]
  return (
    <div className="flex justify-center m-2 ">
      <div className='border-2 border-white w-1/4 rounded-2xl '>
        <SkillsCard title={'Skills'} Skills={skillsArr}></SkillsCard>
      </div>
    </div>
  )
}

export default Skills
