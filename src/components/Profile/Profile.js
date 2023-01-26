import styles from'./Profile.module.scss'
import avatar from '../../assets/images/avatar.JPG';

import { useTranslation } from "react-i18next";

function Profile() {

  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <article className={styles.profile}>
        <div className={styles.container}>
          <img className={styles.avatar} alt="avatar" src={avatar}/>
        </div>
        <h1 className={styles.name}>{t("profile.name")}</h1>
        <h2 className={styles.profession}>{t("profile.profession")}</h2>
        <a className={styles.connection} href="https://t.me/lavrukhina96" target="blank">
          <p className={styles.question}>{t("profile.question")}</p>
          <p className={styles.link}>{t("profile.link")}</p>
        </a>
      </article>
    </section>
)};

export default Profile;