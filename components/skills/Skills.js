import React,{useState} from 'react'
import BackToTop from '../BackToTop'
import SkillsCard from './SkillsCard'

function Skills() {
  const [skills,showSkills] = useState(false)
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
    <>
    <div className="flex justify-center m-2 animated ">
      {skills ? <div className='border-2 border-white w-1/4 rounded-2xl pulse'>
        <SkillsCard title={'Skills'} Skills={skillsArr}></SkillsCard>
      </div> : <button onClick={() => showSkills(true)}>hello</button>}
    </div>
    {/* <BackToTop onClick={() => showSkills(false)}/> */}
    </>
  )
}

export default Skills
