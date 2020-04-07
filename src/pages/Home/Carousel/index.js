import React from 'react';
import { Carousel } from 'react-bootstrap';
import useWindowDimensions from '~/hooks/useWindowDimensions';

import First from './First';
import Second from './Second';
import Third from './Third';

import { CarouselContainer } from '../styles';

export default function MCarousel() {
  const { height, width } = useWindowDimensions();

  return (
    <CarouselContainer
      height={height}
      width={width}
      indicators
      controls={false}
      interval={5000}
    >
      <Carousel.Item>
        <First />
      </Carousel.Item>

      <Carousel.Item>
        <Second />
      </Carousel.Item>

      <Carousel.Item>
        <Third />
      </Carousel.Item>
    </CarouselContainer>
  );
}
