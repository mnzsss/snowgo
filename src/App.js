import React from 'react';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';

import Routes from './routes';
import GlobalStyles from './styles/global';

// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin);

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  );
}

export default App;
