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
  const [langState, setLangState] = useState('en');
  const { t } = useTranslation();

  useEffect(
    () => {
      const toggleTheme = () => {
        setThemeState(({ theme }) => ({
          theme: theme === 'light' ? 'dark' : 'light',
          toggleTheme
        }));
      };

      setThemeState({
        theme: 'light',
        toggleTheme
      });
    },
    []
  );

  useEffect(
    () => i18n.changeLanguage(langState),
    [langState]
  );

  return (
    <ThemeContext.Provider value={themeState}>
      <LangContext.Provider value={{ t, setLangState }}>
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
