import React from 'react';
import './css/LanguageSelector.css';
import { useTranslation } from 'react-i18next';
import LangContext from '../../context/LangContext';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  return (
    <LangContext.Consumer>
      {({ setLanguage }) => (
        <select className="languageSelect" value={i18n.language} onChange={(event) => setLanguage(event.target.value)}>
          <option value="en">EN</option>
          <option value="ru">RU</option>
        </select>
      )}
    </LangContext.Consumer>
  );
};

export default LanguageSelector;
