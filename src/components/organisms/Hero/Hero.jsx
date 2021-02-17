import React from "react";
import { Carousel } from "antd";
import styled from "styled-components";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const StyledCarousel = styled(Carousel)`
  height: 100vh;
  overflow: hidden;
  max-width: 100%;
`;
export const Hero = () => {
  function onChange(a, b, c) {
    console.log(a, b, c);
  }
  return (
    <StyledCarousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </StyledCarousel>
  );
};
