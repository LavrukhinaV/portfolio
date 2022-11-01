import './Header.css'
import logo from '../../images/logo.png';

function Header() {
  const navLinks = ["About", "Portfolio", "Contacts"];

  const renderNavLink = (content) => {
    const scrollToElement = `.section_${content.toLowerCase()}`

    const handleClickNav = () => {
      document.querySelector(scrollToElement).scrollIntoView({ behavior: "smooth" })
    }

    return (
        <li key={content} className="header__item">
          <button 
            onClick={handleClickNav}
            className="header__link"
          >{content}</button>
        </li>
    )
  }

  return (
    <header className="header">
      <div className="header__container">
        <img className="logo" src={logo} alt="Лого сайта"/>
        <nav>
          <ul className="header_links">
            {navLinks.map(nav => renderNavLink(nav))}
          </ul>
        </nav>
        <p className="change-lang">ENG</p>
      </div>
    </header>
  )
}

export default Header;