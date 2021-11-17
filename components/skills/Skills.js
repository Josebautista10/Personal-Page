import React,{useState} from 'react'
import BackToTop from '../BackToTop'
import SkillsCard from './SkillsCard'

function Skills() {
  const [skills,showSkills] = useState(false)
  const skillsArr = [
    'JavaScript',
    'React',
    'BootStrap',
    'Chakra Ui',
    'TailwindCSS',
    'SQL',
    'Node.js',
    'Git',
    'Figma',
    'Heroku',
    'Netlify',
    'Vercel'
  ]
  return (
    <>
    <div className="flex justify-center m-2 animated ">
    {/* want to trigger skills with back to top button */}
      {/* {skills ? <div className='border-2 border-white w-1/4 rounded-2xl pulse'>
        <SkillsCard title={'Skills'} Skills={skillsArr}></SkillsCard>
      </div> : <button onClick={() => showSkills(true)}>hello</button>} */}
      <div className='border-2 border-white w-1/4 rounded-2xl card'>
        <SkillsCard title={'Skills'} Skills={skillsArr}></SkillsCard>
      </div>
    </div>
    <BackToTop onClick={() => console.log('skills',skills)}/>
    </>
  )
}

export default Skills
