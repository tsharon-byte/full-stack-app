import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  background: transparent;
  outline: 0;
  border-width: 0 0 2px;
  border-color: ${({ theme }) => theme.textPrimary};
  height: 30px;
`;

export const Input = (props) => {
  return <StyledInput {...props} />;
};
Input.Password = (props) => {
  return <StyledInput {...props} type="password" />;
};
