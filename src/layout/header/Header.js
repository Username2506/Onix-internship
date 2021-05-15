import React from 'react';
import './css/Header.css';
import ThemeToggleButton from '../../components/ThemeToggleButton/ThemeToggleButton';
import LanguageSelector from '../../components/LanguageSelector/LanguageSelector';
import LangContext from '../../context/LangContext';

const Header = () => (
  <LangContext.Consumer>
    {({ t }) => {
      const navigations = t('navigations', { returnObjects: true });
      return ( 
        <header>
          <h1 className="mainTitle">
            <strong>
              {t('mainTitle')}
            </strong>
          </h1>
          <LanguageSelector />
          <div className="header-functional">
            <nav className="anchors">
              <ul>
                <li>
                  <a href="#theme">
                    {navigations.theme}
                  </a>
                </li>
                <li>
                  <a href="#goal">
                    {navigations.goal}
                  </a>
                </li>
                <li>
                  <a href="#material-to-discuss">
                    {navigations.discuss}
                  </a>
                </li>
                <li>
                  <a href="#task">
                    {navigations.task}
                  </a>
                </li>
              </ul>
            </nav>
            <ThemeToggleButton />
          </div>
        </header>
      );
    }}
  </LangContext.Consumer>
);

export default Header;
