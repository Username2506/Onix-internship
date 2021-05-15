import React from 'react';
import './css/LanguageSelector.css';
import LangContext from '../../context/LangContext';

const LanguageSelector = () => (
  <LangContext.Consumer>
    {({ setLangState }) => (
      <select className="languageSelector" onChange={(event) => setLangState(event.target.value)}>
        <option value="en">EN</option>
        <option value="ru">RU</option>
      </select>
    )}
  </LangContext.Consumer>
);

export default LanguageSelector;
