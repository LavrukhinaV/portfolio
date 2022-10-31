import './Header.css'
import logo from '../../images/logo.png';

function Header() {

  return (
    <header className="header">
      <img className="logo" src={logo} alt="Лого сайта"/>
      <div className="header__container">
        <p className="header__link">Home</p>
        <p className="header__link">About</p>
        <p className="header__link">Contact</p>
      </div>
      <p className="change-lang">ENG</p>
    </header>
  )
}

export default Header;