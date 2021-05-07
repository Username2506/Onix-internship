import React from 'react';
import './css/Header.css';
import ThemeToggleButton from '../../components/ThemeToggleButton/ThemeToggleButton';

const Header = () => {
  return (
    <header>
      <h1>
        <strong>
          Входное задание в интернатуру
        </strong>
      </h1>
      <div className="header-functional">
        <nav className="anchors">
          <ul>
            <li>
              <a href="#theme">
                Тема
              </a>
            </li>
            <li>
              <a href="#goal">
                Цель
              </a>
            </li>
            <li>
              <a href="#material-to-discuss">
                Обсуждаемый материал
              </a>
            </li>
            <li>
              <a href="#task">
                Задание
              </a>
            </li>
          </ul>
        </nav>
        <ThemeToggleButton />
      </div>
    </header>
  );
};

export default Header;
