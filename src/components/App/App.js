import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer'
import { useTranslation } from "react-i18next";

function App() {
  const {t, i18n} = useTranslation()

const changeLanguage = (lang) => {
  i18n.changeLanguage(lang)
}

  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
