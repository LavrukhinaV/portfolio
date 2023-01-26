import styles from './Header.module.scss';
import logo from '../../assets/images/logo.png';

import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();

  const language = localStorage.getItem('i18nextLng')

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  const navLinks = ["About", "Portfolio", "Contacts"];

  const renderNavLink = (content) => {
    const key = `navLinks.${content}`

    const scrollToElement = `${content.toLowerCase()}`

    const handleClickNav = () => {
      document.getElementById(scrollToElement).scrollIntoView({ behavior: "smooth" })
    }

    return (
      <li key={content}>
        <button 
          onClick={handleClickNav}
          className={styles.link}
        >{t(key)}</button>
      </li>
    )
  }

  const handleClickLogo = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img className={styles.logo} src={logo} alt="Лого сайта" onClick={handleClickLogo}/>
        <nav>
          <ul className={styles.links}>
            {navLinks.map(nav => renderNavLink(nav))}
          </ul>
        </nav>
        <ul className={styles.buttons}>
          <button id="en" className={`${styles.button} ${language === "en" && styles.buttonActive}`} onClick={() => changeLanguage('en')}>ENG</button>
          <button id="ru" className={`${styles.button} ${language === "ru" && styles.buttonActive}`} onClick={() => changeLanguage('ru')}>RU</button>
        </ul>
      </div>
    </header>
  )
}

export default Header;