import React from 'react';
import './css/ThemeToggleButton.css';
import ThemeContext from '../../context/ThemeContext';

const ThemeToggleButton = () => (
  <div className="theme-button">
    <p className="theme-button-text">Light</p>
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <label 
          htmlFor="theme-checkbox"
          className={`theme-label ${theme}`}
        >
          <input 
            type="checkbox"
            className="theme-checkbox"
            id="theme-checkbox"
            onClick={() => toggleTheme()}
          />
          <div className={`theme-ball ${theme}`} />
        </label>
      )}
    </ThemeContext.Consumer>
    <p className="theme-button-text">Dark</p>
  </div>
);

export default ThemeToggleButton;
