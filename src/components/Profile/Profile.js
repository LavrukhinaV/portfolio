import './Profile.css'
import avatar from '../../images/avatar.JPG';


function Profile() {
  return (
    <section className="section section_profile">
      <article className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" alt="avatar" src={avatar}/>
        </div>
        <h1 className="profile__name">HI, I'M VIKTORIIA. BASED IN MOSCOW REGION</h1>
        <h2 className="profile__profession">Front-end developer</h2>
        <a className="profile__connection" href="https://t.me/lavrukhina96" target="blank">
          <p className="profile__question">Got a project?</p>
          <p className="profile__link">Let's talk!</p>
        </a>
      </article>
    </section>
)};

export default Profile;