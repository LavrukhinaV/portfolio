import styles from './About.module.scss'

import { useTranslation } from "react-i18next";

function About() {

  const { t } = useTranslation();

  return (
    <section className={styles['section-about']} id='about'>
      <article className={styles.about}>
        <div className={styles.container}>
          <div className={styles.name}>
            <h2 className={styles.firstName}>{t("about.first-name")}</h2>
            <h2 className={styles.surname}>{t("about.surname")}</h2>
          </div>
          <h3 className={styles.profession}>{t("about.profession")}</h3>
        </div>
         <p className={styles.info}>{t("about.info")}</p>
         <p className={styles.paragraph}>{t("about.paragraph")}</p>
         <ul className={styles.table}>
          <li className={styles.cell}>
            <h3 className={styles.heading}>{t("about.bornIn")}</h3>
            <p className={styles.text}>{t("about.placeOfBirth")}</p>
          </li>
          <li className={styles.cell}>
            <h3 className={styles.heading}>{t("about.experience")}</h3>
            <p className={styles.text}>{t("about.experienceTime")}</p>
          </li>
          <li className={styles.cell}>
            <h3 className={styles.heading}>{t("about.dateOfBirth")}</h3>
            <p className={styles.text}>{t("about.date")}</p>
          </li>
         </ul>
      </article>
    </section>
  )
};

export default About;