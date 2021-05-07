import React from 'react';

/* eslint-disable import/prefer-default-export */

export const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {}
});
