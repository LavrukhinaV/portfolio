import './Footer.css';
import logo from "../../images/logo2.png";


function Footer() {
  const handleClickLogo = () => {
    document.querySelector('.header').scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="footer">
      <div className="footer__content">
        <img className="footer__logo" alt="logo" src={logo} onClick={handleClickLogo}></img>
        <div className="footer__container">
          <a className="footer__link" href="https://github.com/LavrukhinaV" target="blank">GitHub</a>
          <p className="footer__copyright">&copy; Made by Lavrukhina Viktoriia 2022</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;