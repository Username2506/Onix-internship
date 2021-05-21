import './App.css';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import EntryAssignment from './components/EntryAssignment/EntryAssignment';
import Biography from './components/Biography/Biography';
import ApiComponent from './components/ApiComponent/ApiComponent';
import Image from './components/Image/Image';
import ThemeContext from './context/ThemeContext';
import LangContext from './context/LangContext';
import i18n from './i18n/index';

const App = () => {
  const [themeState, setThemeState] = useState({});
  const [langState, setLangState] = useState();
  const { t } = useTranslation();

  useEffect(
    () => {
      const toggleTheme = () => {
        setThemeState(({ theme }) => {
          const newTheme = theme === 'light' ? 'dark' : 'light';
          localStorage.setItem('theme', newTheme);
          return ({
            theme: newTheme,
            toggleTheme
          });
        });
      };

      const storedTheme = localStorage.getItem('theme');
      setThemeState({
        theme: storedTheme || 'light',
        toggleTheme
      });

      const storedLang = localStorage.getItem('language');
      i18n.changeLanguage(storedLang);
    },
    []
  );

  useEffect(
    () => i18n.changeLanguage(langState),
    [langState]
  );

  const setLanguage = (lang) => {
    localStorage.setItem('language', lang);
    setLangState(lang);
  };

  return (
    <ThemeContext.Provider value={themeState}>
      <LangContext.Provider value={{ t, setLanguage }}>
        <div className={`body ${themeState.theme}`}>
          <Header />
          <div className="workspace">
            <EntryAssignment />
            <Biography />
            <ApiComponent />
            <Image />
          </div>
          <Footer />
        </div>
      </LangContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
