import './Main.css'
import Profile from '../Profile/Profile'
import Techs from '../Techs/Techs'
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import Contacts from '../Contacts/Contacts'

function Main() {
  return (
    <main className="content">
      <Profile/>
      <Techs/>
      <About/>
      <Portfolio/>
      <Contacts/>
  </main>
  );
}

export default Main;