import styles from './Contacts.module.scss'
import { useTranslation } from "react-i18next";
import { SOCIAL_NETWORKS } from '../../constant/constant';

function Contacts() {

  const { t } = useTranslation();

  return (
    <section className={styles['section-contacts']} id='contacts'>
      <article className={styles.contacts}>
        <h2 className={styles.title}>{t("contacts.title")}</h2>
        <p className={styles.subtitle}>{t("contacts.question")}</p>
        <p className={styles.subtitle}>{t("contacts.welcome")}</p>
        <a className={styles.link} href="https://t.me/lavrukhina96" target="blank">
          <button className={styles.button}>{t("contacts.button")}</button>
        </a>
        <nav>
          <ul className={styles.links}>
            {SOCIAL_NETWORKS.map((item, index) => 
             <li className={styles.socialNetwork} key={index}>
              <a href={item.link} target="blank">
                <img alt={item.name} src={item.image}/>
              </a>
            </li>
            )}
          </ul>
        </nav>
      </article>
    </section>
)};

export default Contacts;