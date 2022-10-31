import './Techs.css'

function Techs() {
  return(
    <section className="section section_techs">
      <article className="my-technologies">
        <ul className="technologies">
          <li className="technologies__item">
            <h4 className="technologies__title">JavaScript</h4>
          </li>
          <li className="technologies__item">
            <h4 className="technologies__title">React.js</h4>
          </li>
          <li className="technologies__item">
            <h4 className="technologies__title">CSS</h4>
          </li>
          <li className="technologies__item">
            <h4 className="technologies__title">HTML</h4>
          </li>
          <li className="technologies__item">
            <h4 className="technologies__title">Express.js</h4>
          </li>
          <li className="technologies__item">
            <h4 className="technologies__title">MongoDB</h4>
          </li>
          <li className="technologies__item">
            <h4 className="technologies__title">Git</h4>
          </li>
        </ul>
      </article>
    </section>
  )
}

export default Techs;