import './Profile.css'
import avatar from '../../images/avatar.JPG';

import { useTranslation } from "react-i18next";

function Profile() {

  const { t } = useTranslation();

  return (
    <section className="section section_profile">
      <article className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" alt="avatar" src={avatar}/>
        </div>
        <h1 className="profile__name">{t("profile.name")}</h1>
        <h2 className="profile__profession">{t("profile.profession")}</h2>
        <a className="profile__connection" href="https://t.me/lavrukhina96" target="blank">
          <p className="profile__question">{t("profile.question")}</p>
          <p className="profile__link">{t("profile.link")}</p>
        </a>
      </article>
    </section>
)};

export default Profile;