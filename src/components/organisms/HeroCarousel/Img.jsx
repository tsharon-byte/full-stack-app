import React from "react";
import styled from "styled-components";
const StyledImg = styled.img`
  margin: auto;
  min-width: 100%;
`;
export const Img = ({ src }) => <StyledImg src={src} alt="slide img" />;
