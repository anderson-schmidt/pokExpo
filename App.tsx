import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';
import { Home } from './src/pages/Home';
//import { Wellcome } from './src/pages/Wellcome';

export default function App() {
  return (
   <ThemeProvider theme=
   {theme}
   >
      {/*<Wellcome />*/}
      <Home />
   </ThemeProvider>
  );
}


