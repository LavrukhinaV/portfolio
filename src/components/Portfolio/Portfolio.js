import styles from './Portfolio.module.scss';
import { useTranslation } from "react-i18next";
import { PROJECTS } from '../../constant/constant';

function Portfolio() {

  const { t, i18n } = useTranslation();

  return(
    <section className={styles['section-portfolio']} id='portfolio'>
      <div className={styles.portfolio}>
        <h2 className={styles.title}>{t("portfolio.title")}</h2>
        {PROJECTS.map((project, index) => 
          <article className={styles.element} key={index}>
            <h3 className={styles.projectTitle}>{project.title[i18n.language]}</h3>
            <p className={styles.info}>{project.about[i18n.language]}</p>
            <a href={project.github} className={styles.projectLink} target="blank">
              <img  className={styles.image} alt={project.title} src={project.image}/>
            </a>
            <a className={styles.link} href={project.url} target="blank">{t("portfolio.link")}</a>
          </article>
        )}
      </div>
    </section>
  )
};

export default Portfolio;