import './Portfolio.css';
import moviesProject from "../../images/project-movies-explorer.png";
import mestoProject from "../../images/project-mesto.png";
import travelProject from "../../images/project-about-travel.png";
import howToLearnProject from "../../images/project-how-to-learn.png"
 

function Portfolio() {
  return(
    <section className="section section_portfolio">
      <h2 className="section__title">Portfolio</h2>
      <article className="element">
        <img className="element__image" alt="Project Movies Explorer" src={moviesProject}/>
        <div className="element__descriprion">
          <h3 className="element__title">Movies Explorer</h3>
          <p className="element__info">Adaptive website where you can search movies and save them in your personal account.</p>
          <a className="element__link" href="https://moviesexplorer.lavrukhina.nomoredomains.sbs" target="blank">View more</a>
        </div>
      </article>
      <article className="element">
        <img className="element__image" alt="Project Mesto" src={mestoProject}/>
        <div className="element__descriprion">
          <h3 className="element__title">Mesto</h3>
          <p className="element__info">Interactive page where users can add photos, delete and like them.</p>
          <a className="element__link" href="http://lavrukhina.nomoredomains.sbs/" target="blank">View more</a>
        </div>
      </article>
      <article className="element">
        <img className="element__image" alt="Travel project" src={travelProject}/>
        <div className="element__descriprion">
          <h3 className="element__title">Travel project</h3>
          <p className="element__info">Responsive landing page about traveling in Russia.</p>
          <a className="element__link" href="https://lavrukhinav.github.io/travel-project/index.html" target="blank">View more</a>
        </div>
      </article>
      <article className="element">
        <img className="element__image" alt="Project How to learn" src={howToLearnProject}/>
        <div className="element__descriprion">
          <h3 className="element__title">How to learn</h3>
          <p className="element__info">Single page website describing effective approaches to learning.</p>
          <a className="element__link" href="https://lavrukhinav.github.io/how-to-learn/" target="blank">View more</a>
        </div>
      </article>
  </section>
  )
};

export default Portfolio;