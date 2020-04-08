import React from 'react';

import Menu from '~/components/Menu';
import Bar from '~/components/Bar';

import { Container } from './styles';

export default function Mobile({ children }) {
  return (
    <Container>
      {children.type.name === 'Home' ||
      children.type.name === 'Introduction' ? null : (
        <Bar />
      )}

      {children}

      {children.type.name === 'Introduction' ? null : <Menu />}
    </Container>
  );
}
