import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  border: none;
  padding: 7px 17px;
  border-radius: 3px;
  &:hover {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.textPrimary};
  }
`;
export const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);
