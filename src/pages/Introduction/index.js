import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useWindowDimensions from '~/hooks/useWindowDimensions';

import First from './Sliders/First';
import Second from './Sliders/Second';
import Third from './Sliders/Third';
import Four from './Sliders/Four';

import logo from '~/assets/img/snowgo_light.svg';
import next from '~/assets/img/slider/next.svg';

import Container from '~/styles/components/Container';

import {
  Wrapper,
  Header,
  Pular,
  Carousel,
  Controls,
  Indicators,
  Next,
} from './styles';

export default function Introduction() {
  const history = useHistory();

  const slides = {
    slide1: <First />,
    slide2: <Second />,
    slide3: <Third />,
    slide4: <Four />,
  };

  const [activeSlide, setActiveSlide] = useState(slides.slide1);
  const [count, setCount] = useState(1);

  const { height } = useWindowDimensions();

  async function handleNextSlide() {
    if (count === 4) {
      history.push('/inicio');
    }

    const sliders = Object.values(slides);

    setCount(count + 1);

    setActiveSlide(sliders[count]);
  }

  return (
    <Wrapper height={height}>
      <Container>
        <Header>
          <img src={logo} alt="SnowGo - Gelo Delivery" />

          <Pular to="/inicio">Pular</Pular>
        </Header>
      </Container>

      <Carousel>
        <Container>{activeSlide}</Container>
      </Carousel>

      <Controls>
        <Indicators>
          <button
            type="button"
            className={count === 1 ? 'active' : null}
            onClick={() => {
              setActiveSlide(slides.slide1);
              setCount(1);
            }}
          >
            1
          </button>
          <button
            type="button"
            className={count === 2 ? 'active' : null}
            onClick={() => {
              setActiveSlide(slides.slide2);
              setCount(2);
            }}
          >
            2
          </button>
          <button
            type="button"
            className={count === 3 ? 'active' : null}
            onClick={() => {
              setActiveSlide(slides.slide3);
              setCount(3);
            }}
          >
            3
          </button>
          <button
            type="button"
            className={count === 4 ? 'active' : null}
            onClick={() => {
              setActiveSlide(slides.slide4);
              setCount(4);
            }}
          >
            4
          </button>
        </Indicators>

        <Next onClick={handleNextSlide} src={next} />
      </Controls>
    </Wrapper>
  );
}
