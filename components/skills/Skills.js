import React from 'react'
import SkillsCard from './SkillsCard'
import {AiFillHtml5} from 'react-icons/ai'

function Skills() {
  const frontEndArr = ["Html5", "CSS3", "JavaScript", "React", "BootStrap", "Chakra Ui"]
  const backEndArr = ["SQL", "Node.js"]
  const toolsArr = ["Git", "Vscode", "Figma", "Heroku", "Netlify"]
  return (
    <div className='flex flex-col '>
      <h1 className='flex text-white py-3 text-3xl justify-center items-center'>Skills</h1>
      <section className='flex flex-row justify-around'>
        <div className='border-2 border-white w-1/4'>
          <SkillsCard title={"Front end"} Skills = {frontEndArr}></SkillsCard>
        </div>
        <div className='border-2 border-white w-1/4 '>
          <SkillsCard title={"Back end"} Skills = {backEndArr}></SkillsCard>
        </div>
        <div className='border-2 border-white w-1/4'>
          <SkillsCard title={"Tools"} Skills = {toolsArr}></SkillsCard>
        </div>
      </section>
    </div>
  )
}

export default Skills
