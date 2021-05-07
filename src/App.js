import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import EntryAssignment from './components/EntryAssignment/EntryAssignment';
import Biography from './components/Biography/Biography';
import ApiComponent from './components/ApiComponent/ApiComponent';
import Image from './components/Image/Image';
import { ThemeContext } from './context/ThemeContext';

const App = () => {
  const [state, setState] = useState({});

  useEffect(
    () => {
      const toggleTheme = () => {
        setState(({ theme }) => ({
          theme: theme === 'light' ? 'dark' : 'light',
          toggleTheme
        }));
      };

      setState({
        theme: 'light',
        toggleTheme
      });
    },
    []
  );

  return (
    <ThemeContext.Provider value={state}>
      <div className={`body ${state.theme}`}>
        <Header />
        <div className="workspace">
          <EntryAssignment />
          <Biography />
          <ApiComponent />
          <Image />
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
    
  );
};

export default App;
