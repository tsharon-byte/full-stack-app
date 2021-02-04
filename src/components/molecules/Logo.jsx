import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  font-size: 30px;
  font-family: "Potta One", cursive;
  text-decoration: none !important;
  color: ${(props) => props.theme.primary};
  font-weight: bolder;
`;

const Logo = () => {
  return <StyledLink to="/">LOGO</StyledLink>;
};
export default Logo;
