import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';

import light from '../styles/Themes/light';
import dark from '../styles/Themes/dark';

import {ChallengesProvider} from '../contexts/ChallengesContext';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
    <ThemeProvider theme={light}>
    <Component {...pageProps} />
    <GlobalStyle />
    </ThemeProvider>
    </ChallengesProvider>
  )
}

export default MyApp
