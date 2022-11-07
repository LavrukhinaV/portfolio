import './Contacts.css'
import gitHubLogo from "../../images/logo-github.png";
import telegramLogo from "../../images/logo-telegram.png";
import instagramLogo from "../../images/logo-instagram.png";
import emailLogo from "../../images/logo-email.png";

import { useTranslation } from "react-i18next";

function Contacts() {

  const { t } = useTranslation();

  return (
    <section className="section section_contacts">
      <article className="contacts">
        <h2 className="contacts__title">{t("contacts.title")}</h2>
        <p className="contacts__subtitle">{t("contacts.question")}</p>
        <p className="contacts__subtitle">{t("contacts.welcome")}</p>
        <a className="contacts__link" href="https://t.me/lavrukhina96" target="blank">
          <button className="contacts__button">{t("contacts.button")}</button>
        </a>
        <nav className="contacts__links">
          <ul className="contacts__link-list">
            <li className="contacts__link-item">
              <a className="contacts__social-network" href="mailto:tomenko_viktoriya@mail.ru" target="blank">
                <img className="contacts__link-logo" alt="Instagram" src={emailLogo}/>
              </a>
            </li>
            <li className="contacts__link-item">
              <a className="contacts__social-network" href="https://github.com/LavrukhinaV" target="blank">
                <img className="contacts__link-logo" alt="Instagram" src={gitHubLogo}/>
              </a>
            </li>
            <li className="contacts__link-item">
              <a className="contacts__social-network" href="https://t.me/lavrukhina96" target="blank" rel="noreferrer">
                <img className="contacts__link-logo" alt ="Telegram" src={telegramLogo}/>
              </a>
            </li>
            <li className="contacts__link-item">
              <a className="contacts__social-network" href="https://instagram.com/viikula" target="blank">
                <img className="contacts__link-logo" alt="Instagram" src={instagramLogo}/>
              </a>
            </li>
          </ul>
        </nav>
      </article>
    </section>
)};

export default Contacts;