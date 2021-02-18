import React from "react";
import styled from "styled-components";
const StyledImg = styled.img`
  max-width: 100%;
  height: 100%;
`;
export const Img = ({ src }) => <StyledImg src={src} alt="slide img" />;
