import './Portfolio.css';
import moviesProject from "../../images/project-movies-explorer.png";
import mestoProject from "../../images/project-mesto.png";
import travelProject from "../../images/project-about-travel.png";
import howToLearnProject from "../../images/project-how-to-learn.png"

import { useTranslation } from "react-i18next";

function Portfolio() {

  const { t } = useTranslation();

  return(
    <section className="section section_portfolio">
      <div className="portfolio">
        <h2 className="portfolio__title">{t("portfolio.title")}</h2>
        <article className="element">
          <h3 className="element__title">{t("portfolio.portfolio.0.title")}</h3>
          <p className="element__info">{t("portfolio.portfolio.0.info")}</p>
          <a href="https://github.com/LavrukhinaV/movies-explorer-frontend" className="element__project-link" target="blank">
            <img  className="element__image" alt="Project Movies Explorer" src={moviesProject}/>
          </a>
          <a className="element__link" href="https://moviesexplorer.lavrukhina.nomoredomains.sbs" target="blank">{t("portfolio.link")}</a>
        </article>
        <article className="element element_turned">
          <h3 className="element__title">{t("portfolio.portfolio.1.title")}</h3>
          <p className="element__info">{t("portfolio.portfolio.1.info")}</p>
          <a href="https://github.com/LavrukhinaV/react-mesto-api-full" className="element__project-link" target="blank">
            <img className="element__image element__image_turned" alt="Project Mesto" src={mestoProject}/>
          </a>
          <a className="element__link" href="http://lavrukhina.nomoredomains.sbs/" target="blank">{t("portfolio.link")}</a>
        </article>
        <article className="element">
          <h3 className="element__title">{t("portfolio.portfolio.2.title")}</h3>
          <p className="element__info">{t("portfolio.portfolio.2.info")}</p>
          <a href="https://github.com/LavrukhinaV/travel-project" className="element__project-link" target="blank">
            <img className="element__image" alt="Travel project" src={travelProject}/>
          </a>
          <a className="element__link" href="https://lavrukhinav.github.io/travel-project/index.html" target="blank">{t("portfolio.link")}</a>
        </article>
        <article className="element element_turned">
          <h3 className="element__title">{t("portfolio.portfolio.3.title")}</h3>
          <p className="element__info">{t("portfolio.portfolio.3.info")}</p>
          <a href="https://github.com/LavrukhinaV/how-to-learn" className="element__project-link" target="blank">
            <img className="element__image element__image_turned" alt="Project How to learn" src={howToLearnProject}/>
          </a>
          <a className="element__link" href="https://lavrukhinav.github.io/how-to-learn/" target="blank">{t("portfolio.link")}</a>
        </article>
      </div>
    </section>
  )
};

export default Portfolio;