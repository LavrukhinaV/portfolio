import './Profile.css'
import avatar from '../../images/avatar.JPG';


function Profile() {
  return (
    <section className="profile">
      <h1 className="profile__name">HI, I'M VIKTORIIA. BASED IN MOSCOW REGION</h1>
      <h2 className="profile__profession">Front-end developer</h2>
      <div className="profile__connection">
        <p className="profile__question">Got a project?</p>
        <p className="profile__link">Let's talk!</p>
      </div>
      <div className="profile__avatar-container">
        <img className="profile__avatar" alt="avatar" src={avatar}/>
      </div>
    </section>
)};

export default Profile;