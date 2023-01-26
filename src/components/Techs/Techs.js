import styles from './Techs.module.scss';
import { TECHS } from '../../constant/constant';

function Techs() {
  return(
    <section>
      <article >
        <ul className={styles.technologies}>
          {TECHS.map((tech, index) => 
            <li className={styles.item} key={index}>
              <h4 className={styles.title}>{tech}</h4>
            </li>
          )}
        </ul>
      </article>
    </section>
  )
}

export default Techs;