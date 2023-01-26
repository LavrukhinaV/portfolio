import styles from './Footer.module.scss';
import logo from "../../assets/images/logo2.png";

import { useTranslation } from "react-i18next";

function Footer() {

  const { t } = useTranslation();

  const handleClickLogo = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <img className={styles.logo} alt="logo" src={logo} onClick={handleClickLogo}></img>
        <div className={styles.container}>
          <a className={styles.link} href="https://github.com/LavrukhinaV" target="blank">GitHub</a>
          <p className={styles.copyright}>&copy; {t("madeBy")}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;