import React, { useState } from "react";
import styled from "styled-components";
import { Img } from "./Img";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Carousel = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  z-index: 1;
  position: absolute;
`;

const Slide = styled.div`
  position: relative;
  min-width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background-color: black;
  transition: 1s;
`;
const CarouselButton = styled.button`
  padding: 0;
  box-sizing: border-box;
  margin: 0;
  position: absolute;
  min-height: 100%;
  background: none;
  color: white;
  outline: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.365);
    cursor: pointer;
  }
  svg {
    height: 3rem;
    width: 3rem;
  }
`;

const ButtonLeft = styled(CarouselButton)`
  left: 0;
`;

const ButtonRight = styled(CarouselButton)`
  right: 0;
`;

export const HeroCarousel = () => {
  const imgs = [1, 2, 3, 4];
  const [id, setId] = useState(0);
  const clickLeft = () => {
    if (id === 0) {
      setId(imgs.length - 1);
    } else {
      setId(id - 1);
    }
    console.log(id);
  };
  const clickRight = () => {
    if (id === imgs.length - 1) {
      setId(0);
    } else {
      setId(id + 1);
    }
    console.log(id);
  };
  return (
    <Carousel>
      {imgs.map((item) => (
        <Slide key={item} style={{ transform: `translateX(-${id * 100}%)` }}>
          <Img src={`image/${item}.jpg`} />
        </Slide>
      ))}
      <ButtonLeft onClick={clickLeft}>
        <FaAngleLeft />
      </ButtonLeft>
      <ButtonRight onClick={clickRight}>
        <FaAngleRight />
      </ButtonRight>
    </Carousel>
  );
};
