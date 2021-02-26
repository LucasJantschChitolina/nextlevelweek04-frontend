import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';

import light from '../styles/Themes/light';
import dark from '../styles/Themes/dark';

import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    
        <ThemeProvider theme={light}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
  )
}

export default MyApp
