import React from 'react';
import { Container } from 'react-bootstrap';
import useWindowDimensions from '~/hooks/useWindowDimensions';

import Slider from './Slider';
import MCarousel from './Carousel';

import Sections from './Sections';

export default function Home() {
  const { width } = useWindowDimensions();

  return (
    <>
      <Container fluid>{width > 825 ? <MCarousel /> : <Slider />}</Container>

      {width > 825 ? <Sections /> : <></>}
    </>
  );
}
