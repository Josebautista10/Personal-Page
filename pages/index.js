import Intro from '../components/Intro.js'
import NavBar from '../components/nav.js'
import Skills from '../components/navBar/skills/Skills.js'

const HomePage = () => {
  return (
    <>
        <NavBar />
        <Intro></Intro>
        <Skills/>
    </>
  )
}

export default HomePage
