/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  align-items:center;
  .slick-prev:before,
  .slick-next:before {visibility:hidden}
  &:hover,
  &:focus {
    .slick-prev:before,
  .slick-next:before  {visibility:visible}
    .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: 0;
    width: 50px;
    height: 180px;
    transform: initial;

    background-color:#000;
    opacity: .5;
    &:before {
        font-size: 30px;
    }
    &:hover,
    &:focus {
        width: 70px;
        opacity: .8;

    }
  }
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 0px;
  }

}

@media (max-width: 800px) {

    .slick-prev,
    .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: 0;
    width: 35px;
    height: 160px;
    transform: initial;
    background-color:#000;

    &:before {
        font-size: 20px;
        visibility:visible;
    }
    &:hover,
    &:focus {
        width: 50px;
    }
  }
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 0px;
  }

}
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 230px;
    object-fit: cover;
  }

`;

const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
      focusOnSelect: true,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;
