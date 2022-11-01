import './Portfolio.css';
import moviesProject from "../../images/project-movies-explorer.png";
import mestoProject from "../../images/project-mesto.png";
import travelProject from "../../images/project-about-travel.png";
import howToLearnProject from "../../images/project-how-to-learn.png"
 

function Portfolio() {
  return(
    <section className="section section_portfolio">
    {/* <div className="portfolio">
      <h2 className="portfolio__title">Portfolio</h2>
      <article className="element">
        <a href="https://github.com/LavrukhinaV/movies-explorer-frontend" target="blank">
          <img className="element__image" alt="Project Movies Explorer" src={moviesProject}/>
        </a>
        <div className="element__descriprion">
          <h3 className="element__title">Movies Explorer</h3>
          <p className="element__info">Adaptive website where you can search movies and save them in your personal account.</p>
          <a className="element__link" href="https://moviesexplorer.lavrukhina.nomoredomains.sbs" target="blank">View project</a>
        </div>
      </article>
      <article className="element element_flex-direction_column-reverse">
        <div className="element__descriprion">
          <h3 className="element__title">Mesto</h3>
          <p className="element__info">Interactive page where users can add photos, delete and like them.</p>
          <a className="element__link" href="http://lavrukhina.nomoredomains.sbs/" target="blank">View project</a>
        </div>
        <a href="https://github.com/LavrukhinaV/react-mesto-api-full" target="blank">
          <img className="element__image" alt="Project Mesto" src={mestoProject}/>
        </a>
      </article>
      <article className="element">
        <a href="https://github.com/LavrukhinaV/travel-project" target="blank">
          <img className="element__image" alt="Travel project" src={travelProject}/>
        </a>
        <div className="element__descriprion">
          <h3 className="element__title">Travel project</h3>
          <p className="element__info">Responsive landing page about traveling in Russia.</p>
          <a className="element__link" href="https://lavrukhinav.github.io/travel-project/index.html" target="blank">View project</a>
        </div>
      </article>
      <article className="element element_flex-direction_column-reverse">
        <div className="element__descriprion">
          <h3 className="element__title">How to learn</h3>
          <p className="element__info">Single page website describing effective approaches to learning.</p>
          <a className="element__link" href="https://lavrukhinav.github.io/how-to-learn/" target="blank">View project</a>
        </div>
        <a href="https://github.com/LavrukhinaV/how-to-learn" target="blank">
          <img className="element__image" alt="Project How to learn" src={howToLearnProject}/>
        </a>
      </article>
    </div> */}
       <div className="portfolio">
      <h2 className="portfolio__title">Portfolio</h2>
      <article className="element">
        <h3 className="element__title">Movies Explorer</h3>
        <p className="element__info">Adaptive website where you can search movies and save them in your personal account.</p>
        <a href="https://github.com/LavrukhinaV/movies-explorer-frontend" className="element__project-link" target="blank">
          <img  className="element__image" alt="Project Movies Explorer" src={moviesProject}/>
        </a>
        <a className="element__link" href="https://moviesexplorer.lavrukhina.nomoredomains.sbs" target="blank">View project</a>
      </article>
      <article className="element element_turned">
        <h3 className="element__title">Mesto</h3>
        <p className="element__info">Interactive page where users can add photos, delete and like them.</p>
        <a href="https://github.com/LavrukhinaV/react-mesto-api-full" className="element__project-link" target="blank">
          <img className="element__image element__image_turned" alt="Project Mesto" src={mestoProject}/>
        </a>
        <a className="element__link" href="http://lavrukhina.nomoredomains.sbs/" target="blank">View project</a>
      </article>
      <article className="element">
        <h3 className="element__title">Travel project</h3>
        <p className="element__info">Responsive landing page about traveling in Russia.</p>
        <a href="https://github.com/LavrukhinaV/travel-project" className="element__project-link" target="blank">
          <img className="element__image" alt="Travel project" src={travelProject}/>
        </a>
        <a className="element__link" href="https://lavrukhinav.github.io/travel-project/index.html" target="blank">View project</a>
      </article>
      <article className="element element_turned">
        <h3 className="element__title">How to learn</h3>
        <p className="element__info">Single page website describing effective approaches to learning.</p>
        <a href="https://github.com/LavrukhinaV/how-to-learn" className="element__project-link" target="blank">
          <img className="element__image element__image_turned" alt="Project How to learn" src={howToLearnProject}/>
        </a>
        <a className="element__link" href="https://lavrukhinav.github.io/how-to-learn/" target="blank">View project</a>
      </article>
    </div>
  </section>
  )
};

export default Portfolio;