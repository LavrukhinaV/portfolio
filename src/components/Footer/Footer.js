import './Footer.css';
import logo from "../../images/logo2.png";

import { useTranslation } from "react-i18next";

function Footer() {

  const { t } = useTranslation();

  const handleClickLogo = () => {
    document.querySelector('.header').scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="footer">
      <div className="footer__content">
        <img className="footer__logo" alt="logo" src={logo} onClick={handleClickLogo}></img>
        <div className="footer__container">
          <a className="footer__link" href="https://github.com/LavrukhinaV" target="blank">GitHub</a>
          <p className="footer__copyright">&copy; {t("madeBy")}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;