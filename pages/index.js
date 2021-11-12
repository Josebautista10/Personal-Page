import Intro from '../components/navBar/intro.js'
import NavBar from '../components/navBar/nav.js'
import Skills from '../components/navBar/skills.js'

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
