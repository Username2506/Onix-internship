import React from 'react';
import ThemeContext from '../../context/ThemeContext';
import LangContext from '../../context/LangContext';

const EntryAssignment = () => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <LangContext.Consumer>
        {({ t }) => {
          const navigations = t('navigations', { returnObjects: true });
          const entry = t('entryAssignment', { returnObjects: true });
          return (
            <div className={theme}>
              <h2 id="theme">
                {navigations.theme}
              </h2>
              <p>
                {entry.theme}
              </p>
              <h2 id="goal">
                {navigations.goal}
              </h2>
              <p>
                {entry.goal}
              </p>
              <h2 id="material-to-discuss">
                {navigations.discuss}
              </h2>
              <ol>
                <li>
                  {entry.discussLi1}
                </li>
                <li>
                  {entry.discussLi2Text}
                  <ol type="a">
                    <li>
                      {entry.discussLi2A}
                    </li>
                    <li>
                      {entry.discussLi2B}
                    </li>
                  </ol>
                </li>
                <li>
                  {entry.discussLi3}
                </li>
                <li>
                  {entry.discussLi4}
                </li>
                <li>
                  {entry.discussLi5}
                </li>
                <li>
                  {entry.discussLi6}
                </li>
              </ol>
              <h2 id="task">
                {navigations.task}
              </h2>
              <ol>
                <li>
                  {entry.task1Part1} 
                  <a href="https://github.com/" target="_blank" rel="noreferrer"> https://github.com/ </a>
                  {entry.task1Part2} 
                </li>
                <li>
                  {entry.task2} 
                </li>
              </ol>
            </div>
          );
        }}
      </LangContext.Consumer>
    )}
  </ThemeContext.Consumer> 
);

export default EntryAssignment;
