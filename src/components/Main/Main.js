import './Main.css'
import Profile from '../Profile/Profile'
import Techs from '../Techs/Techs'
import AboutMe from '../AboutMe/AboutMe'
import Portfolio from '../Portfolio/Portfolio'

function Main() {
  return (
    <main className="content">
      <Profile/>
      <Techs/>
      <AboutMe/>
      <Portfolio/>
  </main>
  );
}

export default Main;