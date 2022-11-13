import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';
import { Home } from './src/pages/Home';
import { Routes } from './src/routes';
//import { Wellcome } from './src/pages/Wellcome';

export default function App() {
  
  return (
   <ThemeProvider theme=
   {theme}>
    <Routes />
   </ThemeProvider>
  );
}


