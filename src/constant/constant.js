import moviesProject from "../assets/images/project-movies-explorer.png";
import mestoProject from "../assets/images/project-mesto.png";
import travelProject from "../assets/images/project-about-travel.png";
import howToLearnProject from "../assets/images/project-how-to-learn.png";
import gitHubLogo from "../assets/images/logo-github.png";
import telegramLogo from "../assets/images/logo-telegram.png";
import instagramLogo from "../assets/images/logo-instagram.png";
import emailLogo from "../assets/images/logo-email.png";

export const TECHS = ['JavaScript', 'React.js', 'CSS', 'HTML', 'Express.js', 'MongoDB', 'Git'];

export const PROJECTS = [
  {
    title: {
      en: 'Movies Explorer',
      ru: 'Исследователь фильмов'
    },
    about: {
      en: 'Adaptive website where you can search movies and save them in your personal account.',
      ru: 'Адаптивный сайт, где ты можешь найти фильмы по запросу и сохранить их в личном кабинете.'
    },
    image: moviesProject,
    url: 'https://moviesexplorer.lavrukhina.nomoredomains.sbs',
    github: 'https://github.com/LavrukhinaV/movies-explorer-frontend'
  },
  {
    title: {
      en: 'Mesto',
      ru: 'Место'
    },
    about: {
      en: 'Interactive page where users can add photos, delete and like them.',
      ru: 'Интерактивная страница, где пользователи могут добавлять фотографии, удалять их и ставить лайки.'
    },
    image: mestoProject,
    url: 'http://lavrukhina.nomoredomains.sbs/',
    github: 'https://github.com/LavrukhinaV/react-mesto-api-full'
  },
  {
    title: {
      en: 'Travel project',
      ru: 'Проект о путешествиях'
    },
    about: {
      en: 'Responsive landing page about traveling in Russia.',
      ru: 'Адаптивный лендинг о путешествиях по России.'
    },
    image: travelProject,
    url: 'https://lavrukhinav.github.io/travel-project/index.html',
    github: 'https://github.com/LavrukhinaV/travel-project'
  },
  {
    title: {
      en: 'How to learn',
      ru: 'Научиться учиться'
    },
    about: {
      en: 'Single page website describing effective approaches to learning.',
      ru: 'Одностраничный сайт с описанием эффективных подходов к обучению.'
    },
    image: howToLearnProject,
    url: 'https://lavrukhinav.github.io/how-to-learn',
    github : 'https://github.com/LavrukhinaV/how-to-learn'
  }
];

export const SOCIAL_NETWORKS = [
  {
    name: 'Email',
    link: 'mailto:tomenko_viktoriya@mail.ru',
    image: emailLogo
  },
  {
    name: 'GitHub',
    link: 'https://github.com/LavrukhinaV',
    image: gitHubLogo
  },
  {
    name: 'Telegram',
    link: 'https://t.me/lavrukhina96',
    image: telegramLogo
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com/viikula',
    image: instagramLogo
  },
]