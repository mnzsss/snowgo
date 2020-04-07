import React from 'react';

import Navigation from '~/components/Navigation';
import Footer from '~/components/Footer';

import { Container } from './styles';

export default function Desktop({ children }) {
  return (
    <Container>
      <Navigation />

      {children}

      <Footer />
    </Container>
  );
}
