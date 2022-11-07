import './About.css'

import { useTranslation } from "react-i18next";

function About() {

  const { t } = useTranslation();

  return (
    <section className="section section_about">
      <article className="about">
        <div className="about__container">
          <div className="about__name">
            <h2 className="about__first-name">{t("about.first-name")}</h2>
            <h2 className="about__surname">{t("about.surname")}</h2>
          </div>
          <h3 className="about__profession">{t("about.profession")}</h3>
        </div>
         <p className="about__info">{t("about.info")}</p>
         <p className="about__paragraph">{t("about.paragraph")}</p>
         <ul className="table">
          <li className="table__cell">
            <h3 className="table__heading">{t("about.bornIn")}</h3>
            <p className="table__text">{t("about.placeOfBirth")}</p>
          </li>
          <li className="table__cell">
            <h3 className="table__heading">{t("about.experience")}</h3>
            <p className="table__text">{t("about.experienceTime")}</p>
          </li>
          <li className="table__cell">
            <h3 className="table__heading">{t("about.dateOfBirth")}</h3>
            <p className="table__text">{t("about.date")}</p>
          </li>
         </ul>
      </article>
    </section>
  )
};

export default About;