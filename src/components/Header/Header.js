import './Header.css';
import logo from '../../images/logo.png';

import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();

  const language = localStorage.getItem('i18nextLng')

  const buttonEngClassName = () => {
    if (language === "en") {
      return "change-lang change-lang_active"
    } else return "change-lang"
  }

  const buttonRuClassName = () => {
    if (language === "ru") {
      return "change-lang change-lang_active"
    } else return "change-lang"
  }
  

  console.log("buttonClassName", buttonRuClassName())

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  const navLinks = ["About", "Portfolio", "Contacts"];

  const renderNavLink = (content) => {
    const key = `navLinks.${content}`

    const scrollToElement = `.section_${content.toLowerCase()}`

    const handleClickNav = () => {
      document.querySelector(scrollToElement).scrollIntoView({ behavior: "smooth" })
    }

    return (
      <li key={content} className="header__item">
        <button 
          onClick={handleClickNav}
          className="header__link"
        >{t(key)}</button>
      </li>
    )
  }

  return (
    <header className="header">
      <div className="header__container">
        <img className="logo" src={logo} alt="Лого сайта"/>
        <nav>
          <ul className="header_links" >
            {navLinks.map(nav => renderNavLink(nav))}
          </ul>
        </nav>
        <button id="en" className={buttonEngClassName()} onClick={() => changeLanguage('en')}>ENG</button>
        <button id="ru" className={buttonRuClassName()} onClick={() => changeLanguage('ru')}>RU</button>
      </div>
    </header>
  )
}

export default Header;