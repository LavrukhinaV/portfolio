import './AboutMe.css'

function AboutMe() {
  return (
    <section className="section section_about-me">
      <article className="about-me">
        <div className="about-me__container">
          <div className="about-me__name">
            <h2 className="about-me__first-name">VIKTORIIA</h2>
            <h2 className="about-me__surname">LAVRUKHINA</h2>
          </div>
          <h3 className="about-me__profession">Junior Front-end developer.</h3>
        </div>
         <p className="about-me__info">I'm a Frontend developer with 1 year of experience. I completed a web-development course at Practicum by Yandex.</p>
         <p className="about-me__paragraph">I am open to suggestions and always happy to hear your opinion about my projects.</p>
         <ul className="table">
          <li className="table__cell">
            <h3 className="table__heading">BORN IN</h3>
            <p className="table__text">Altay</p>
          </li>
          <li className="table__cell">
            <h3 className="table__heading">EXPERIENCE</h3>
            <p className="table__text">1 Year</p>
          </li>
          <li className="table__cell">
            <h3 className="table__heading">DATE OF BIRTH</h3>
            <p className="table__text">19 January 1996</p>
          </li>
         </ul>
      </article>
    </section>
  )
};

export default AboutMe;