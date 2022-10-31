import './Footer.css';
import logo from "../../images/logo2.png";
import instagramLogo from "../../images/instagram-logo.png";
import telegramLogo from "../../images/telegram-logo.png";


function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" alt="logo" src={logo}></img>
      <a className="footer__link" href="https://github.com/LavrukhinaV" target="blank">GitHub</a>
      <p className="footer__copyright">&copy; Made by Lavrukhina Viktoriia 2022</p>
        <nav className="footer__links">
          <ul className="footer__link-list">
            <li className="footer__link-item">
              <a className="footer__social-network" href="https://t.me/lavrukhina96" target="blank" rel="noreferrer">
                <img className="footer__link-logo" alt ="Telegram" src={telegramLogo}/>
              </a>
            </li>
            <li className="footer__link-item">
              <a className="footer__social-network" href="https://instagram.com/viikula" target="blank">
                <img className="footer__link-logo" alt="Instagram" src={instagramLogo}/>
              </a>
            </li>
          </ul>
        </nav>
    </footer>
  );
}

export default Footer;